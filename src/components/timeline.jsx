export default function Timeline() {
  const milestones = [
    { title: "Project Setup", desc: "Currently setting everything up — repositories, environment, structure, figma designs and database designs" },
    { title: "TBD", desc: "TBD" },
    { title: "TBD", desc: "TBD" },
    { title: "TBD", desc: "TBD" },
    { title: "TBD", desc: "TBD" },
    { title: "Final Deployment", desc: "TBD" },
  ];

  return (
    <section id="timeline" className="bg-gray-950 text-gray-100 py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project <span className="text-emerald-400">Timeline</span>
        </h2>

        <div className="relative border-l-2 border-gray-800 pl-8">
          {milestones.map((item, i) => (
            <div key={i} className="mb-12 last:mb-0 relative">
              {/* Dot */}
              <span
                className={`absolute -left-[13px] top-2 w-5 h-5 rounded-full border-2 ${
                  i === 0
                    ? "bg-emerald-500 border-emerald-400 animate-pulse"
                    : "bg-gray-800 border-gray-700"
                }`}
              ></span>

              {/* Text */}
              <div className="ml-2">
                <h3 className="text-lg font-semibold text-white leading-relaxed">
                  {item.title}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    i === 0 ? "text-emerald-300" : "text-gray-500 italic"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
