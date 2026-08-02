import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <div className="mt-4 min-h-[36px]">
      <TypeAnimation
        sequence={[
          "I'm a Full Stack Web  Developer ",
          2000,
          "I'm a Backend Developer",
          2000,
          "React Developer",
          2000,

        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="
          block
          text-2xl
          font-semibold
          text-cyan-400
        "
      />
    </div>
  );
}

export default TypingText;