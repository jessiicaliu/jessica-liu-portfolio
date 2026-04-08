import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

// Shader outputs only within a warm blush → soft pink → rose palette.
const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;
varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;

  // Two independent 0-1 pattern values
  float t1 = cos(a + d) * 0.5 + 0.5;
  float t2 = sin(d * 0.7 + a * 0.3) * 0.5 + 0.5;

  // Warm palette — visible blush/pink tones that still let content breathe
  vec3 base     = vec3(0.99, 0.96, 0.97);
  vec3 blush    = vec3(0.96, 0.86, 0.90);
  vec3 softPink = vec3(0.90, 0.72, 0.80);

  vec3 col = mix(base, blush, t1);
  col = mix(col, softPink, t2 * 0.65);

  gl_FragColor = vec4(col, 1.0);
}
`;

interface NovatrixProps extends HTMLAttributes<HTMLDivElement> {
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

export function Novatrix({
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = false,
  ...rest
}: NovatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program: Program;

    const updateMouseUniforms = () => {
      if (program) {
        program.uniforms.uMouse.value[0] = mousePositionRef.current.x;
        program.uniforms.uMouse.value[1] = mousePositionRef.current.y;
      }
    };

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height,
        );
      }
    }

    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height),
        },
        uMouse: {
          value: new Float32Array([mousePositionRef.current.x, mousePositionRef.current.y]),
        },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animationFrameId: number;

    function update(t: number) {
      animationFrameId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      updateMouseUniforms();
      renderer.render({ scene: mesh });
    }

    animationFrameId = requestAnimationFrame(update);
    container.appendChild(gl.canvas);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mousePositionRef.current.x = (e.clientX - rect.left) / rect.width;
      mousePositionRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
      updateMouseUniforms();
    }

    if (mouseReact) container.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (mouseReact) container.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [speed, amplitude, mouseReact]);

  return <div ref={containerRef} className="h-full w-full" {...rest} />;
}
