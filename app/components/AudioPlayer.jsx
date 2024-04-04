"use client"; // Ensure this module is client-side only
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import playBtnSVG from "@/app/svgs/audiobtn.svg";
import pauseBtnSVG from "@/app/svgs/pause.svg";

function AudioPlayer({ src }) {
  // Ref to the audio element
  const audioRef = useRef(null);
  // State for current playback time
  const [currentTime, setCurrentTime] = useState(0);
  // State for audio duration
  const [duration, setDuration] = useState(0);
  // State for playing/pausing audio
  const [isPlaying, setIsPlaying] = useState(false);

  // Effect hook to set up event listeners and clean up
  useEffect(() => {
    const audio = audioRef.current;

    // Update current time while playing
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    // Update duration on metadata load
    const updateDuration = () => {
      setDuration(audio.duration);
    };

    // Add event listeners
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    // Clean up event listeners
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Format time to display in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Seek to a specific time
  const seek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div>
      <div className="flex items-center">
        {/* Play/Pause button */}
        <button onClick={togglePlay} className="px-4 pl-0 py-2">
          {isPlaying ? (
            <Image src={pauseBtnSVG} alt="pause_button" />
          ) : (
            <Image src={playBtnSVG} alt="play_button" />
          )}
        </button>
        {/* Seek bar */}
        <div className="flex-1 mx-4 relative bg-gray-200 h-[5px] w-[150px] rounded text-sm" onClick={seek}>
          {/* Progress bar */}
          <div
            className="absolute top-0 left-0 bg-[#1FA45B] h-full rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        {/* Current time display */}
        <div>{formatTime(currentTime)}</div>
      </div>
      {/* Audio element */}
      <audio ref={audioRef} src={src}></audio>
    </div>
  );
}

export default AudioPlayer;
