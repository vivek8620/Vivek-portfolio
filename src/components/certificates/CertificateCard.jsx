import { FaEye, FaAward } from "react-icons/fa";

function CertificateCard({ certificate, onView }) {
  const { title, color, issuer, icon: IconComponent } = certificate;
  const Icon = IconComponent || FaAward;

  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        justify-between
        h-[240px]
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#0B1120]
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/50
        hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          pointer-events-none
        "
        style={{
          background: `radial-gradient(circle at top left, ${color}25, transparent 70%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Certificate Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            text-2xl
            transition-all
            duration-500
            group-hover:scale-110
          "
          style={{
            background: `${color}18`,
            border: `1px solid ${color}55`,
            color: color,
            boxShadow: `0 0 20px ${color}35`,
          }}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-white line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Issuer */}
        {issuer && (
          <p className="mt-1 text-xs text-slate-400 font-medium">
            {issuer}
          </p>
        )}
      </div>

      {/* View Certificate Button */}
      <div className="relative z-10 mt-4 pt-2">
        <button
          onClick={() => onView(certificate)}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            py-2.5
            px-4
            rounded-xl
            bg-slate-900/80
            border
            border-cyan-500/30
            text-cyan-400
            text-xs
            sm:text-sm
            font-semibold
            tracking-wide
            hover:bg-gradient-to-r
            hover:from-cyan-500
            hover:to-purple-600
            hover:text-white
            hover:border-transparent
            transition-all
            duration-300
            shadow-sm
            group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]
          "
        >
          <FaEye className="text-sm" />
          View Certificate
        </button>
      </div>
    </div>
  );
}

export default CertificateCard;