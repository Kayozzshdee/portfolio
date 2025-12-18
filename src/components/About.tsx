const skills = [
  { name: "React", img: "react-logo.png" },
  { name: "Next.js", img: "Next.js" },
  { name: "Python", img: "Python-logo.png" },
  { name: "Tailwind", img: "tailwindcss.webp" },
  { name: "JS", img: "js-logo.jpg" },
  { name: "HTML", img: "html.png" },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#0b111a]"  id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-[#161f2c] p-8 rounded-2xl border border-white/5">
          <img src="MK.png" className="rounded-xl w-full h-48 object-cover transition-all" alt="School" />
          <div className="text-gray-300">
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <p className="font-medium text-blue-400">Mongol Koosen Technology College</p>
            <p className="text-sm mt-2 leading-relaxed">
              4th-year student focusing on modern web standards and engineering principles. 
              Currently exploring the depths of React and TypeScript.
            </p>
          </div>
        </div>

        <h3 className="text-center text-white font-bold mb-8">Programming Languages I use</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-[#0e141e] border border-white/5 rounded-xl hover:border-blue-500/50 transition-colors group">
              <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain mb-2 group-hover:scale-110" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}