// Per-day banner images. Each entry has:
//   - src: a URL to display
//   - gradient: a tailwind gradient fallback if the image fails to load
//   - alt: alt text for accessibility
//
// Swap the URLs to anything you like. Unsplash photo URLs work great:
//   https://unsplash.com/photos/<photo-id> → use the "Download" button URL,
//   or use the source.unsplash.com pattern for keyword-based random matches.

export type DayImage = {
  src: string;
  gradient: string; // Tailwind classes
  alt: string;
};

export const DAY_IMAGES: Record<number, DayImage> = {
  1: {
    src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80",
    gradient: "from-amber-300 via-orange-400 to-pink-500",
    alt: "Kuala Lumpur skyline with Petronas Towers at dusk",
  },
  2: {
    src: "https://images.unsplash.com/photo-1597125253293-add8da59ef3a?w=1200&q=80",
    gradient: "from-red-400 via-rose-500 to-pink-600",
    alt: "KL Chinatown street with lanterns",
  },
  3: {
    src: "https://images.unsplash.com/photo-1573833694797-2b3415671d7e?w=1200&q=80",
    gradient: "from-blue-300 via-indigo-400 to-purple-500",
    alt: "Petronas Twin Towers at sunset",
  },
  4: {
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    gradient: "from-slate-400 via-teal-500 to-emerald-600",
    alt: "Genting Highlands cable car over forest",
  },
  5: {
    src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
    gradient: "from-orange-300 via-pink-400 to-rose-500",
    alt: "Batu Caves rainbow staircase",
  },
  6: {
    src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
    gradient: "from-cyan-300 via-sky-400 to-blue-500",
    alt: "Tropical island boat arrival",
  },
  7: {
    src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&q=80",
    gradient: "from-teal-300 via-cyan-400 to-sky-500",
    alt: "Snorkeling over tropical coral reef",
  },
  8: {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    gradient: "from-sky-300 via-blue-400 to-indigo-500",
    alt: "Tropical beach with turquoise water",
  },
  9: {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
    gradient: "from-amber-200 via-yellow-300 to-orange-400",
    alt: "Hammock on tropical beach at sunset",
  },
  10: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
    alt: "Airplane wing above clouds at sunset",
  },
};
