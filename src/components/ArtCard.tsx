import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Artwork } from '../types';

interface ArtCardProps {
  artwork: Artwork;
  index: number;
}

export default function ArtCard({ artwork, index }: ArtCardProps) {
  return (
    <motion.a
      href={artwork.downloadLink} // 👉 goes to your project page
      target="_blank"
      rel="noopener noreferrer"

      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}

      className="group cursor-pointer relative block bg-[#111111] border border-[#222222] hover:border-[#8bc34a] transition-colors duration-500 overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-[#8bc34a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="p-3 bg-white text-black rounded-full shadow-lg">
            <ExternalLink size={20} />
          </div>
        </div>
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
    </motion.a>
  );
}
