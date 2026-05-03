export default function Marquee() {
  const items = [
    "Free Art for Everyone",
    "Personal Use",
    "Non-Profit Use",
    "Download and Print",
    "No Commercial Use",
    "Share the Love",
    "Creative Commons",
    "No Resale",
    "Free Art for Everyone",
    "Personal Use",
    "Non-Profit Use",
    "Download and Print",
    "No Commercial Use",
    "Share the Love",
    "Creative Commons",
    "No Resale",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-[#222222] bg-[#0a0a0a] py-3 my-12">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
            {item}
            <span className="text-[#8bc34a]">&#9632;</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
