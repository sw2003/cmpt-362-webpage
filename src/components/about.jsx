export default function AboutUs() {
  const members = [
    { name: "Sam", role: "Full Stack Developer", img: "/sam.webp" },
    { name: "Roy", role: "Full Stack Developer", img: "/roy.webp" },
    { name: "Tai", role: "Full Stack Developer", img: "/tai.webp" },
    { name: "Jordan", role: "Full Stack Developer", img: "/jordan.webp" },
    { name: "Jeff", role: "Product Manager", img: "/jeff.webp" },
  ];

  return (
    <section id="about" className="bg-gray-950 text-gray-100 py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Meet the <span className="text-emerald-400">Team</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          We’re a group of SFU students developing a peer-to-peer errands app for campus communities.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-emerald-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
