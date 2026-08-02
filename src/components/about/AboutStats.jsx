function AboutStats() {
  const stats = [
    { number: "20+", label: "PROJECTS" },
    { number: "1+", label: "YRS EXP." },
    { number: "14+", label: "TECH STACK" },
    { number: "6+", label: "LIVE WEBSITES" },
  ];

  return (
    <div
      className="
        mt-12
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-4
        lg:gap-5
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            w-full
            h-[95px]
            rounded-2xl
            border
            border-cyan-500/20
            bg-[#0B1120]
            flex
            flex-col
            justify-center
            items-center
            p-3
            hover:border-cyan-500/40
            transition-colors
            duration-300
          "
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
            {item.number}
          </h3>

          <p className="mt-1.5 text-[10px] sm:text-xs tracking-[1.5px] sm:tracking-[2px] text-slate-400 text-center font-medium">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;