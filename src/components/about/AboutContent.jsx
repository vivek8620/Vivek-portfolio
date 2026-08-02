import {
  FaAward,
  FaGraduationCap,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

function AboutContent() {
  const features = [
    {
      icon: FaAward,
      text: "1+ Years of Professional Experience in Web Development",
      iconColor: "text-cyan-400",
    },
    {
      icon: FaGraduationCap,
      text: "I Learnt MERN Full Stack Web Development from Ducat IT Training School (India's first Skill building School)",
      iconColor: "text-purple-400",
    },
    {
      icon: FaLayerGroup,
      text: "Hands-on Experience with Frontend Development, REST APIs, Database Integration, and React Development",
      iconColor: "text-sky-400",
    },
    {
      icon: FaRocket,
      text: "Quick Learner · Creative Problem Solver · Team Player",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <div>
      {/* Small Heading */}
      <p
        className="
          uppercase
          tracking-[4px]
          md:tracking-[6px]
          text-cyan-400
          text-sm
          font-semibold
        "
      >
        ABOUT ME
      </p>

      {/* Main Heading */}
      <h2
        className="
          mt-5
          text-3xl
          md:text-4xl
          font-bold
          leading-tight
        "
      >
        Crafting Digital
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experiences
        </span>{" "}
        That Matter
      </h2>

      {/* Paragraph */}
      <p
        className="
          mt-4
          text-base
          leading-8
          md:leading-10
          text-slate-300
        "
      >
        I'm Vivek Tiwari — a passionate IT Trainer and Full Stack Web Developer
        dedicated to building beautiful, functional web experiences. With 1+
        years of hands-on experience, I specialize in React.js, PHP, Tailwind
        CSS, and .NET Development.
      </p>

      {/* Bullet Points with Small Icons */}
      <div className="mt-7 space-y-5">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <Icon
                className={`
                  mt-1
                  shrink-0
                  ${feature.iconColor}
                  text-lg
                  md:text-xl
                `}
              />

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutContent;
