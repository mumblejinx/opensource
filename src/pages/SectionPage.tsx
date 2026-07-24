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
    about: [
      'Research is where the ideas behind the art get worked out in the open. These are investigations, not products — some are ongoing, some are settled, all are offered for anyone to read, cite, or build on.',
      'Read each one live in the browser, or download the paper for offline reading. Corrections and disagreement are welcome.',
    ],
  },
  projects: {
    label: 'Projects',
    heading: 'PROJECTS',
    blurb:
      'Conceptual art projects presented as complete plans and documentation. Enter a project to explore it.',
    about: [
      'Projects are conceptual work presented as complete documentation — plans, drawings, and reasoning for things that may never be physically built. The documentation is the artwork.',
      'Enter a project to read it in full. Treat the engineering and process claims as an artist’s honest reasoning, not verified fact.',
    ],
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
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#gallery" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">GALLERY</a>
            <a href="#about" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">ABOUT</a>
            <a href="#license" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">LICENSE</a>
            <a
              href="https://jakegalm.com"
              className="text-xs font-bold bg-[#8bc34a] text-black px-4 py-2 hover:bg-white transition-all flex items-center gap-2 tracking-tighter"
            >
              JakeGalm.com <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <TabBar active={section} />

      {/* Header */}
      <header id="gallery" className="max-w-7xl mx-auto px-6 pt-16 pb-12 scroll-mt-20">
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

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 mt-32 scroll-mt-20">
        <div className="border border-[#222222] p-8 md:p-16 bg-[#0a0a0a]">
          <h2 className="text-4xl font-display font-bold text-[#8bc34a] mb-8 uppercase tracking-tighter">About {copy.label}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{copy.about[0]}</p>
            </div>
            <div className="space-y-4 text-gray-500 text-sm italic border-l border-[#222222] pl-8">
              <p>{copy.about[1]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section id="license" className="max-w-7xl mx-auto px-6 mt-16 mb-16 scroll-mt-20">
        <div className="border-l-4 border-[#222222] pl-6">
          <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-widest mb-2">License</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            License is determined per project — terms vary from fully open to non-commercial only.
            Check each entry's page for its exact license before reusing anything.
          </p>
        </div>
      </section>
    </div>
  );
}
