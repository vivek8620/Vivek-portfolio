import { FaTimes, FaCheckCircle, FaAward, FaBuilding, FaCalendarAlt } from "react-icons/fa";

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const Icon = certificate.icon || FaAward;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-3xl border border-cyan-500/30 bg-[#0B1120] p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-400 hover:border-cyan-400 hover:text-white transition-all duration-200"
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg"
            style={{
              background: `${certificate.color}20`,
              border: `1px solid ${certificate.color}60`,
              color: certificate.color,
            }}
          >
            <Icon />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <FaCheckCircle className="text-cyan-400" /> Verified Certificate
            </div>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl leading-snug">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Modal Body / Preview */}
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="flex items-center gap-2 text-slate-400">
                <FaBuilding className="text-cyan-400" /> Issued By:
              </span>
              <span className="font-semibold text-white">{certificate.issuer}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="flex items-center gap-2 text-slate-400">
                <FaCalendarAlt className="text-purple-400" /> Year of Completion:
              </span>
              <span className="font-semibold text-white">{certificate.date}</span>
            </div>
          </div>

          {/* Certificate Image or Certificate Verification Card */}
          {certificate.image ? (
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full object-contain max-h-[350px]"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-500/30 bg-cyan-950/20 p-8 text-center">
              <FaAward className="text-5xl text-cyan-400 mb-3 animate-bounce" />
              <h4 className="text-lg font-bold text-white">Official Completion Credential</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md">
                This certifies that Vivek Tiwari has successfully completed the program in{" "}
                <span className="text-cyan-300 font-semibold">{certificate.title}</span> from{" "}
                <span className="text-purple-300 font-semibold">{certificate.issuer}</span>.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all duration-200 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
