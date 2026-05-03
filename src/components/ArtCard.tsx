import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Artwork } from '../types';

interface ArtCardProps {
  artwork: Artwork;
  index: number;
}

export default function ArtCard({ artwork, index }: ArtCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${artwork.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer bg-[#111111] border border-[#222222] hover:border-[#8bc34a] transition-all duration-300 overflow-hidden"
    >
      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white text-sm border border-white px-4 py-2">
            VIEW PROJECT
          </span>
        </div>
      </div>

      {/* TEXT */}
      <div className="p-5">
        <h2 className="text-[#8bc34a] text-lg font-bold uppercase tracking-tight">
          {artwork.title}
        </h2>

        <p className="text-gray-400 text-sm mt-2 line-clamp-3">
          {artwork.description}
        </p>

        <p className="text-gray-500 text-xs italic mt-2">
          {artwork.descriptionJp}
        </p>
      </div>
    </motion.div>
  );
}f