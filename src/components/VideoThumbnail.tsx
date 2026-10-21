"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoThumbnail() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative max-w-4xl mx-auto mb-8 aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/6xeW8So7ya8?autoplay=1"
          title="Kahlert Café Ribbon Cutting Celebration"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="relative max-w-4xl mx-auto mb-8 aspect-video block w-full group focus:outline-none"
      aria-label="Play ribbon cutting video"
    >
      <Image
        src="/tkc-home-video-thumb.jpeg"
        alt="Kahlert Café ribbon cutting celebration"
        fill
        className="object-cover"
        priority
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#0F6397] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
