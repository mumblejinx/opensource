import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentEntry } from '../types';

interface ContentCardProps {
  entry: ContentEntry;
  /** URL section segment: 'research' | 'projects' */
  section: string;
  index: number;
}

export default function ContentCard({ entry, section, index }: ContentCardProps) {
  return (
    <Link to={`/opensource/${section}/${entry.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: (index % 4) * 0.15, ease: 'easeOut' }}
        className="group cursor-pointer relative block bg-[#111111] border border-[#222222] hover:border-[#8bc34a] transition-colors duration-500 overflow-hidden"
      >
        <div className="aspect-[4/3] overflow-hidden relative bg-[#0a0a0a]">
          <img
            src={entry.image}
            alt={entry.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[#8bc34a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <div className="p-3 bg-white text-black rounded-full shadow-lg">
              <ExternalLink size={20} />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-[#8bc34a] text-xl font-bold uppercase">{entry.title}</h2>
          <p className="text-gray-400 text-sm mt-2 line-clamp-3">{entry.description}</p>
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-500 border border-[#222222] px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
