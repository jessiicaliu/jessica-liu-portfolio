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
        className="relative w-[min(80vw,360px)] rounded-3xl border border-[#f1d6e3] bg-[linear-gradient(165deg,rgba(255,248,252,0.98)_0%,rgba(254,240,247,0.96)_100%)] px-4 pb-4 pt-3 shadow-[0_18px_42px_-22px_rgba(181,72,122,0.58)] backdrop-blur-md"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Hide music player"
          className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#efcddd] bg-[#fff6fb] text-[#b65d89] opacity-55 transition-all duration-200 hover:scale-[1.06] hover:opacity-90"
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
              className="h-14 w-14 rounded-xl border border-[#f0cfdd] object-cover shadow-[0_10px_20px_-14px_rgba(120,53,87,0.75)]"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-start justify-between gap-2 pr-8">
              <div className="min-w-0 pr-1">
                <p className="truncate font-sans text-sm font-semibold tracking-[0.01em] text-[#b5487a]">{TRACK_TITLE}</p>
                <p className="truncate font-sans text-xs text-[#b87397]">{TRACK_ARTIST}</p>
              </div>
              <p className="shrink-0 rounded-full bg-[#fff5fa] px-2 py-0.5 font-mono text-[10px] text-[#b87397]">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <motion.button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#efcddd] bg-[#fbe9f1] text-[#b5487a] transition-transform duration-200 hover:scale-[1.05]"
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
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#f0d6e3] accent-[#c15a8a]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Hide music player" : "Show music player"}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#efcddd] bg-[#fff7fb]/95 text-[#b5487a] shadow-[0_12px_28px_-14px_rgba(181,72,122,0.75)] backdrop-blur-sm transition-all duration-200 hover:scale-[1.05]"
        whileHover={{ y: -2 }}
      >
        <div
          className={`relative h-11 w-11 rounded-full border border-[#eec2d7] bg-[conic-gradient(from_20deg,#f8d8e9_0deg,#f3bfd7_70deg,#fff4f9_160deg,#efb5d0_260deg,#f8d8e9_360deg)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] ${
            isPlaying ? "animate-spin [animation-duration:3.8s]" : ""
          }`}
        >
          <span className="pointer-events-none absolute inset-[5px] rounded-full border border-white/55" />
          <span className="pointer-events-none absolute inset-[10px] rounded-full border border-[#e3a9c6]/80" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d39ab9] bg-[#fff8fc]" />
          {/* X icon in the center of the button */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <X className="h-5 w-5 text-[#b5487a] opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
          </span>
        </div>

        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 -left-2 text-[15px] text-[#f08fb9] [text-shadow:0_0_10px_rgba(240,143,185,0.45)]"
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], y: [-2, -14, -26], x: [0, -6, -12], scale: [0.85, 1.08, 1.12] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              >
                ♪
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 right-1 text-[14px] text-[#ee89b5] [text-shadow:0_0_9px_rgba(238,137,181,0.45)]"
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.8 }}
                animate={{ opacity: [0, 0.95, 0], y: [-1, -12, -24], x: [0, 4, 10], scale: [0.8, 1.02, 1.06] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
              >
                ♫
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -top-5 left-3 text-[13px] text-[#f39ec3] [text-shadow:0_0_8px_rgba(243,158,195,0.4)]"
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.75 }}
                animate={{ opacity: [0, 0.9, 0], y: [-2, -13, -22], x: [0, 1, 4], scale: [0.78, 1, 1.06] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut", delay: 0.55 }}
              >
                ♫
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 top-1 text-[12px] text-[#ef95bc] [text-shadow:0_0_8px_rgba(239,149,188,0.35)]"
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.85, 0], y: [0, -10, -20], x: [0, 5, 9], scale: [0.75, 0.96, 1.02] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.75, repeat: Infinity, ease: "easeOut", delay: 0.35 }}
              >
                ♪
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 -bottom-1 text-[11px] text-[#f2a4c8] [text-shadow:0_0_7px_rgba(242,164,200,0.35)]"
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.7 }}
                animate={{ opacity: [0, 0.8, 0], y: [0, -8, -16], x: [0, -3, -6], scale: [0.72, 0.92, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
              >
                ♬
              </motion.span>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 top-3 text-[10px] text-[#f5aecd]"
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
