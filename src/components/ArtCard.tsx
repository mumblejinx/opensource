import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Artwork } from '../types';

interface ArtCardProps {
  artwork: Artwork;
  index: number;
}

export default function ArtCard({ artwork, index }: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const previews = artwork.files
    .map(f => f.preview)
    .filter(Boolean) as string[];

  const allImages = [artwork.image, ...previews.slice(1)];

  useEffect(() => {
    if (isHovered && allImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setPreviewIndex(prev => (prev + 1) % allImages.length);
      }, 1200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPreviewIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, allImages.length]);

  return (
    <Link to={`/opensource/${artwork.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: (index % 4) * 0.15,
          ease: "easeOut"
        }}
        className="group cursor-pointer relative block bg-[#111111] border border-[#222222] hover:border-[#8bc34a] transition-colors duration-500 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          {allImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={artwork.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              style={{
                opacity: i === previewIndex ? 1 : 0,
                filter: isHovered ? 'none' : 'grayscale(100%)',
              }}
            />
          ))}

          <div className="absolute inset-0 bg-[#8bc34a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <div className="p-3 bg-white text-black rounded-full shadow-lg">
              <ExternalLink size={20} />
            </div>
          </div>

          {/* Image counter dots */}
          {isHovered && allImages.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {allImages.map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: i === previewIndex ? '#8bc34a' : 'rgba(255,255,255,0.4)'
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-[#8bc34a] text-xl font-bold uppercase">
            {artwork.title}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {artwork.description}
          </p>
          <p className="text-gray-500 text-xs italic mt-2">
            {artwork.descriptionJp}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
