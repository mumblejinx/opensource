import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';
import { Artwork } from '../types';

interface ArtCardProps {
  artwork: Artwork;
  index: number;
  key?: string;
}

export default function ArtCard({ artwork, index }: ArtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#111111] border border-[#222222] hover:border-[#8bc34a] transition-colors duration-500 overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-[#8bc34a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={artwork.downloadLink}
            className="p-3 bg-[#8bc34a] text-black rounded-full hover:scale-110 transition-transform shadow-lg"
            title="Download PDF"
          >
            <Download size={20} strokeWidth={2.5} />
          </a>
          <button
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg"
            title="View Details"
          >
            <ExternalLink size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-[#8bc34a] text-xl font-bold uppercase tracking-tight font-display">
            {artwork.title}
          </h2>
          <span className="text-[#333333] font-mono text-[10px] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#222222]">
            {artwork.id.toUpperCase()}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#8bc34a]/30 pl-4">
            {artwork.description}
          </p>
          <p className="text-gray-500 text-xs leading-relaxed italic">
            {artwork.descriptionJp}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[#222222]">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8bc34a]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8bc34a]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8bc34a]/20" />
          </div>
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            Non-Commercial Use Only
          </span>
        </div>
      </div>
    </motion.div>
  );
}
