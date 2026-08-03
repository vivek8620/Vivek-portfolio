import { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import { certificates } from "./certificatesData";

function CertificatesGrid() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          max-w-4xl
          mx-auto
          lg:gap-8
        "
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id || certificate.title}
            certificate={certificate}
            onView={setSelectedCertificate}
          />
        ))}
      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}

export default CertificatesGrid;