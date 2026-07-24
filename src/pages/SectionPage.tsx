import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentCard from '../components/ContentCard';
import TabBar from '../components/TabBar';
import { RESEARCH } from '../content/research';
import { PROJECTS } from '../content/projects';
import { ContentEntry } from '../types';

interface SectionPageProps {
  section: 'research' | 'projects';
}

const COPY = {
  research: {
    label: 'Research',
    heading: 'RESEARCH',
    blurb:
      'Investigations and field notes — art-adjacent research offered openly. Read them live or download the papers.',
  },
  projects: {
    label: 'Projects',
    heading: 'PROJECTS',
    blurb:
      'Conceptual art projects presented as complete plans and documentation. Enter a project to explore it.',
  },
};

export default function SectionPage({ section }: SectionPageProps) {
  const entries: ContentEntry[] = section === 'research' ? RESEARCH : PROJECTS;
  const copy = COPY[section];

  return (
    <div className="min-h-screen text-white selection:bg-[#8bc34a] selection:text-black font-sans pb-24">
      {/* Navigation */}
      <nav className="border-b border-[#222222] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/opensource/" className="flex items-center gap-3 hover:text-[#8bc34a] transition-colors">
            <div className="w-10 h-10 bg-[#8bc34a] flex items-center justify-center font-display font-black text-black">
              OSA
            </div>
            <span className="font-display font-bold tracking-tight text-sm sm:text-xl inline">
              OPEN SOURCE <span className="text-[#8bc34a]">ART</span>
            </span>
          </Link>
          <a
            href="https://jakegalm.com"
            className="text-xs font-bold bg-[#8bc34a] text-black px-4 py-2 hover:bg-white transition-all flex items-center gap-2 tracking-tighter"
          >
            MAIN SITE <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      <TabBar active={section} />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6"
        >
          {copy.heading}
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{copy.blurb}</p>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6">
        {entries.length === 0 ? (
          <p className="text-gray-500 italic">Nothing here yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {entries.map((entry, index) => (
              <ContentCard key={entry.id} entry={entry} section={section} index={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
