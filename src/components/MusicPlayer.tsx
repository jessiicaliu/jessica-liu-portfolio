import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X } from "lucide-react";

const AUDIO_SRC = "/audio/strawberry-swing.mp3";
const ALBUM_COVER_SRC = "/images/album-cover.svg";
const TRACK_TITLE = "Strawberry Swing";
const TRACK_ARTIST = "Frank Ocean";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

// Primary pink: hsl(340, 72%, 62%) = #e45887
// Darker for text: hsl(340, 72%, 46%)
// Light bg: hsl(340, 72%, 95%)
// Border: hsl(340, 65%, 86%)

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const onSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const sliderMax = useMemo(() => (duration > 0 ? duration : 1), [duration]);
  const panelAnimation = isOpen
    ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" as const }
    : { opacity: 0, y: 14, scale: 0.98, pointerEvents: "none" as const };

  return (
    <div className="fixed z-50 flex items-end gap-2 right-4 bottom-auto top-4 md:top-auto md:bottom-6">
      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

      <motion.div
        animate={panelAnimation}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[min(80vw,360px)] rounded-3xl border border-[hsl(340,65%,86%)] bg-[linear-gradient(165deg,rgba(255,248,252,0.98)_0%,rgba(255,236,246,0.96)_100%)] px-4 pb-4 pt-3 backdrop-blur-md"
        style={{ boxShadow: "0 18px 42px -22px rgba(228,88,135,0.45)" }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Hide music player"
          className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[hsl(340,65%,86%)] bg-[hsl(340,72%,97%)] opacity-55 transition-all duration-200 hover:scale-[1.06] hover:opacity-90"
          style={{ color: "hsl(340,72%,62%)" }}
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <motion.div
          className="flex items-center gap-3.5"
          animate={isPlaying ? { y: [0, -1.5, 0] } : { y: 0 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative h-14 w-14 shrink-0">
            <img
              src={ALBUM_COVER_SRC}
              alt={`${TRACK_TITLE} album cover`}
              className="h-14 w-14 rounded-xl object-cover border border-[hsl(340,65%,86%)]"
              style={{ boxShadow: "0 10px 20px -14px rgba(228,88,135,0.65)" }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-start justify-between gap-2 pr-8">
              <div className="min-w-0 pr-1">
                <p className="truncate font-sans text-sm font-semibold tracking-[0.01em]" style={{ color: "hsl(340,72%,46%)" }}>{TRACK_TITLE}</p>
                <p className="truncate font-sans text-xs" style={{ color: "hsl(340,55%,62%)" }}>{TRACK_ARTIST}</p>
              </div>
              <p className="shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px]" style={{ background: "hsl(340,72%,95%)", color: "hsl(340,55%,62%)" }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <motion.button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 hover:scale-[1.05]"
                style={{
                  borderColor: "hsl(340,65%,86%)",
                  background: "hsl(340,72%,93%)",
                  color: "hsl(340,72%,62%)",
                }}
                animate={isPlaying ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-[1px] h-4 w-4" />}
              </motion.button>

              <input
                type="range"
                min={0}
                max={sliderMax}
                value={currentTime}
                step={0.1}
                onChange={onSeek}
                aria-label="Seek track"
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full"
                style={{ background: "hsl(340,60%,88%)", accentColor: "hsl(340,72%,62%)" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Hide music player" : "Show music player"}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-[1.05]"
        style={{
          borderColor: "hsl(340,65%,86%)",
          background: "rgba(255,247,251,0.95)",
          color: "hsl(340,72%,62%)",
          boxShadow: "0 12px 28px -14px rgba(228,88,135,0.7)",
        }}
        whileHover={{ y: -2 }}
      >
        <div
          className={`relative h-11 w-11 rounded-full border border-[hsl(340,65%,84%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] ${
            isPlaying ? "animate-spin [animation-duration:3.8s]" : ""
          }`}
          style={{
            background: "conic-gradient(from 20deg, hsl(340,72%,88%) 0deg, hsl(340,72%,78%) 70deg, hsl(340,30%,96%) 160deg, hsl(340,72%,74%) 260deg, hsl(340,72%,88%) 360deg)",
          }}
        >
          <span className="pointer-events-none absolute inset-[5px] rounded-full border border-white/55" />
          <span className="pointer-events-none absolute inset-[10px] rounded-full" style={{ borderWidth: 1, borderColor: "hsl(340,65%,80%)", borderStyle: "solid" }} />
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: "1px solid hsl(340,65%,78%)", background: "hsl(340,30%,98%)" }} />
        </div>

        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 -left-2 text-[15px] [text-shadow:0_0_10px_rgba(228,88,135,0.45)]"
                style={{ color: "hsl(340,72%,70%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], y: [-2, -14, -26], x: [0, -6, -12], scale: [0.85, 1.08, 1.12] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              >
                ♪
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 right-1 text-[14px] [text-shadow:0_0_9px_rgba(228,88,135,0.4)]"
                style={{ color: "hsl(340,72%,68%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
                animate={{ opacity: [0, 0.95, 0], y: [-1, -12, -24], x: [0, 4, 10], scale: [0.8, 1.02, 1.06] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
              >
                ♫
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-5 left-3 text-[13px] [text-shadow:0_0_8px_rgba(228,88,135,0.35)]"
                style={{ color: "hsl(340,72%,72%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.75 }}
                animate={{ opacity: [0, 0.9, 0], y: [-2, -13, -22], x: [0, 1, 4], scale: [0.78, 1, 1.06] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
              >
                ♫
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 top-1 text-[12px] [text-shadow:0_0_8px_rgba(228,88,135,0.3)]"
                style={{ color: "hsl(340,72%,70%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.85, 0], y: [0, -10, -20], x: [0, 5, 9], scale: [0.75, 0.96, 1.02] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.75, repeat: Infinity, ease: "easeOut", delay: 0.35 }}
              >
                ♪
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 -bottom-1 text-[11px] [text-shadow:0_0_7px_rgba(228,88,135,0.3)]"
                style={{ color: "hsl(340,72%,74%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.8, 0], y: [0, -8, -16], x: [0, -3, -6], scale: [0.72, 0.92, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
              >
                ♬
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 top-3 text-[10px]"
                style={{ color: "hsl(340,72%,76%)" }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.75, 0], y: [0, -7, -14], x: [0, -4, -7], scale: [0.7, 0.9, 0.96] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.95 }}
              >
                ♪
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
