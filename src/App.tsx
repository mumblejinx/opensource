/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ARTWORKS } from './constants';
import ArtCard from './components/ArtCard';
import { Palette, Github, Mail, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[#8bc34a] selection:text-black font-sans pb-24">
      {/* Navigation */}
      <nav className="border-b border-[#222222] bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8bc34a] flex items-center justify-center font-display font-black text-black">
              OSA
            </div>
            <span className="font-display font-bold tracking-tight text-xl hidden sm:inline">
              OPEN SOURCE <span className="text-[#8bc34a]">ART</span>
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#gallery" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">GALLERY</a>
            <a href="#about" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">ABOUT</a>
            <a href="#license" className="hidden md:inline text-sm font-medium hover:text-[#8bc34a] transition-colors">LICENSE</a>
            <a 
              href="https://mumblejinx.github.io" 
              className="text-xs font-bold bg-[#8bc34a] text-black px-4 py-2 hover:bg-white transition-all flex items-center gap-2 tracking-tighter"
            >
              MAIN SITE <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / Description */}
      <header id="gallery" className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.a
              href="http://creativecommons.org"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#222222] text-[#8bc34a] text-[10px] font-mono uppercase tracking-[0.2em] mb-6 hover:bg-[#8bc34a] hover:text-black transition-colors duration-300"
            >
              <Palette size={14} /> Creative Commons
            </motion.a>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-8 uppercase"
            >
              FREE ART <br /> FOR <span className="text-[#8bc34a]">EVERYONE</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:pb-4"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
              Artwork you can freely use in your own creative projects. Download high-resolution files 
              for bookmarks, postcards, stickers, or personal prints.
            </p>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed italic border-l-4 border-[#222222] pl-6">
              ここでは、あなたの創作活動に自由に使えるアート作品を公開しています。
              ブックマーク、ポストカード、ステッカー、個人用プリントなどに使えるPDFをダウンロードできます。
              これらの作品は個人利用・非営利目的のみで使用可能であり、商品販売や広告には使用できません。
            </p>
          </motion.div>
        </div>
      </header>

      {/* Grid Container */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ARTWORKS.map((artwork, index) => (
            <ArtCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="border border-[#222222] p-8 md:p-16 bg-[#0a0a0a]">
          <h2 className="text-4xl font-display font-bold text-[#8bc34a] mb-8 uppercase tracking-tighter">About the Project</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Open Source Art was founded on the belief that high-quality visual assets should be accessible to creators 
                of all backgrounds. Whether you're working on a personal zine, decorating your living space, or building 
                a non-profit community project, these works are here to support your vision.
              </p>
              <p>
                Every piece in this collection is curated to ensure high print quality and artistic integrity. 
                We believe in the power of shared creativity and the "gift economy" of the art world.
              </p>
            </div>
            <div className="space-y-4 text-gray-500 text-sm italic border-l border-[#222222] pl-8">
              <p>
                「オープンソース・アート」は、質の高い視覚的資産が、あらゆる背景を持つクリエイターにとってアクセシブルであるべきだという信念に基づいています。
                個人の小冊子、部屋の装飾、あるいは非営利のコミュニティプロジェクトなど、これらの作品はあなたのビジョンをサポートするためにここにあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section id="license" className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border border-[#222222] p-8 md:p-16">
          <h2 className="text-4xl font-display font-bold text-white mb-8 uppercase tracking-tighter">Usage & License</h2>
          <div className="bg-[#111] p-6 border-l-4 border-[#8bc34a] mb-8">
            <p className="text-[#8bc34a] font-mono text-xs uppercase tracking-widest mb-2">Primary Rule</p>
            <p className="text-xl font-bold">Personal and Non-Profit Use Only.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div className="space-y-2">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Permitted</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Personal prints & posters</li>
                <li>Gifts for friends</li>
                <li>Educational materials</li>
                <li>Non-commercial web design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Prohibited</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Reselling the digital files</li>
                <li>Selling physical prints</li>
                <li>Commercial advertising</li>
                <li>NFT creation or distribution</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs">Attribution</h3>
              <p>
                Credit is not strictly required but always appreciated. If you share your work online, 
                tag us or link back to this site to help others find these resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 mt-32 pt-16 pb-12 border-t border-[#222222]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-white tracking-widest text-xs uppercase">Open Source Art 프로젝트</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-[#8bc34a]" />
              <div className="w-1.5 h-1.5 bg-[#8bc34a]/60" />
              <div className="w-1.5 h-1.5 bg-[#8bc34a]/20" />
            </div>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600">
            © 2026 Built for the Creative Community.
          </div>
        </div>
      </footer>
    </div>
  );
}