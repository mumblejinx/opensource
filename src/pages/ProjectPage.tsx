import { useParams, Link } from 'react-router-dom';
import { ARTWORKS } from '../constants';
import { Download, ArrowLeft, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

function FileCard({ label, filename, type, preview, projectId }: {
  label: string;
  filename: string;
  type: string;
  preview?: string;
  projectId: string;
}) {
  const downloadUrl = `${BASE}${projectId}/${filename}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-[#222222] bg-[#111111] overflow-hidden group hover:border-[#8bc34a] transition-colors duration-300"
    >
      {preview && (
        <div className="aspect-[4/3] overflow-hidden relative bg-[#0a0a0a]">
          <img
            src={preview}
            alt={label}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      <div className="p-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-sm uppercase tracking-wider">{label}</p>
          <p className="text-gray-500 text-xs font-mono mt-1">{filename}</p>
        </div>
        <a
          href={downloadUrl}
          download
          className="flex items-center gap-2 bg-[#8bc34a] text-black text-xs font-bold px-4 py-2 hover:bg-white transition-colors duration-200 shrink-0"
        >
          <Download size={14} />
          DOWNLOAD
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const artwork = ARTWORKS.find(a => a.id === projectId);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6">
        <p className="text-gray-400 text-xl">Project not found.</p>
        <Link
          to="/opensource/"
          className="flex items-center gap-2 text-[#8bc34a] hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Back to Gallery
        </Link>
      </div>
    );
  }

  const zipFile = artwork.files.find(f => f.type === 'zip');
  const otherFiles = artwork.files.filter(f => f.type !== 'zip');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24">
      {/* Navigation */}
      <nav className="border-b border-[#222222] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/opensource/"
            className="flex items-center gap-3 hover:text-[#8bc34a] transition-colors"
          >
            <div className="w-10 h-10 bg-[#8bc34a] flex items-center justify-center font-display font-black text-black">
              OSA
            </div>
            <span className="font-display font-bold tracking-tight text-xl hidden sm:inline">
              OPEN SOURCE <span className="text-[#8bc34a]">ART</span>
            </span>
          </Link>
          <Link
            to="/opensource/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#8bc34a] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Open Source Art
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
            {artwork.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-2">
            {artwork.description}
          </p>
          <p className="text-gray-500 text-sm italic max-w-2xl leading-relaxed">
            {artwork.descriptionJp}
          </p>
        </motion.div>
      </header>

      {/* Main image */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="w-full max-w-2xl border border-[#222222] overflow-hidden">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Download files */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
          Available Downloads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {otherFiles.map((file) => (
            <FileCard
              key={file.filename}
              {...file}
              projectId={artwork.id}
            />
          ))}
        </div>

        {/* ZIP download */}
        {zipFile && (
          <div className="border border-[#222222] bg-[#0a0a0a] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Package size={24} className="text-[#8bc34a]" />
              <div>
                <p className="text-white font-bold uppercase tracking-wider">Download Everything</p>
                <p className="text-gray-500 text-xs font-mono mt-1">{zipFile.filename}</p>
              </div>
            </div>
            <a
              href={`${BASE}${artwork.id}/${zipFile.filename}`}
              download
              className="flex items-center gap-2 bg-[#8bc34a] text-black text-sm font-bold px-6 py-3 hover:bg-white transition-colors duration-200"
            >
              <Download size={16} />
              DOWNLOAD ALL FILES
            </a>
          </div>
        )}
      </section>

      {/* License reminder */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-l-4 border-[#222222] pl-6">
          <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-widest mb-2">License</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Personal and non-profit use only. You may not resell these files or sell physical prints.
            Attribution is appreciated but not required.
          </p>
        </div>
      </section>
    </div>
  );
}
