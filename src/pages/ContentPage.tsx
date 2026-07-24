import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { RESEARCH } from '../content/research';
import { PROJECTS } from '../content/projects';
import { ContentEntry } from '../types';

const BASE = import.meta.env.BASE_URL;

interface ContentPageProps {
  section: 'research' | 'projects';
}

const SECTION_LABEL: Record<string, string> = {
  research: 'Research',
  projects: 'Projects',
};

export default function ContentPage({ section }: ContentPageProps) {
  const { id } = useParams<{ id: string }>();
  const list: ContentEntry[] = section === 'research' ? RESEARCH : PROJECTS;
  const entry = list.find((e) => e.id === id);

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400 text-xl">Not found.</p>
        <Link
          to="/opensource/"
          className="text-xs font-bold bg-[#8bc34a] text-black px-4 py-2 hover:bg-white transition-all flex items-center gap-2 tracking-tighter"
        >
          <ArrowLeft size={14} /> RETURN TO GALLERY
        </Link>
      </div>
    );
  }

  const downloadBase = `${BASE}${section}/${entry.id}/`;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24">
      {/* Navigation */}
      <nav className="border-b border-[#222222] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/opensource/" className="flex items-center gap-3 hover:text-[#8bc34a] transition-colors">
            <div className="w-10 h-10 bg-[#8bc34a] flex items-center justify-center font-display font-black text-black">
              OSA
            </div>
            <span className="font-display font-bold tracking-tight text-xl">
              OPEN SOURCE <span className="text-[#8bc34a]">ART</span>
            </span>
          </Link>
          <Link
            to={`/opensource/${section}`}
            className="text-xs font-bold bg-[#8bc34a] text-black px-4 py-2 hover:bg-white transition-all flex items-center gap-2 tracking-tighter"
          >
            <ArrowLeft size={14} /> BACK TO {SECTION_LABEL[section].toUpperCase()}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Open Source {SECTION_LABEL[section]}
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
            {entry.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-2">{entry.description}</p>
          {entry.descriptionJp && (
            <p className="text-gray-500 text-sm italic max-w-2xl leading-relaxed">{entry.descriptionJp}</p>
          )}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
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
        </motion.div>
      </header>

      {/* Cover image */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="w-full max-w-2xl border border-[#222222] overflow-hidden">
          <img src={entry.image} alt={entry.title} className="w-full object-cover" />
        </div>
      </div>

      {/* Enter (liveUrl) */}
      {entry.liveUrl && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <a
            href={entry.liveUrl}
            className="inline-flex items-center gap-3 bg-[#8bc34a] text-black text-base font-bold px-8 py-4 hover:bg-white transition-colors duration-200 uppercase tracking-tighter"
          >
            <ExternalLink size={18} /> Enter {entry.title}
          </a>
        </section>
      )}

      {/* Downloads */}
      {entry.downloads && entry.downloads.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">Available Downloads</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {entry.downloads.map((dl) => (
              <a
                key={dl.pdfFilename}
                href={`${downloadBase}${dl.pdfFilename}`}
                download
                className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] text-[#8bc34a] text-sm font-bold px-6 py-3 hover:bg-[#8bc34a] hover:text-black hover:border-[#8bc34a] transition-colors duration-200"
              >
                <Download size={16} /> {dl.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      {entry.disclaimer && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="border border-[#3a2a2a] bg-[#160f0f] p-6 md:p-8 max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={16} className="text-[#c8a048]" />
              <p className="text-[#c8a048] font-mono text-xs uppercase tracking-widest">Please read</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{entry.disclaimer}</p>
          </div>
        </section>
      )}

      {/* License */}
      {entry.license && (
        <section className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-[#222222] pl-6">
            <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-widest mb-2">License</p>
            <p className="text-gray-400 text-sm leading-relaxed">{entry.license}</p>
          </div>
        </section>
      )}
    </div>
  );
}
