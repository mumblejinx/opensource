import { Link } from 'react-router-dom';

type Tab = 'art' | 'research' | 'projects';

const TABS: { key: Tab; label: string; to: string }[] = [
  { key: 'art', label: 'Art', to: '/opensource/' },
  { key: 'research', label: 'Research', to: '/opensource/research' },
  { key: 'projects', label: 'Projects', to: '/opensource/projects' },
];

export default function TabBar({ active }: { active: Tab }) {
  return (
    <div className="border-b border-[#222222] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex gap-1 sm:gap-2">
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <Link
              key={tab.key}
              to={tab.to}
              className={
                'px-5 sm:px-8 py-4 text-xs sm:text-sm font-display font-bold uppercase tracking-tighter transition-colors border-b-2 -mb-px ' +
                (isActive
                  ? 'text-[#8bc34a] border-[#8bc34a]'
                  : 'text-gray-500 border-transparent hover:text-white')
              }
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
