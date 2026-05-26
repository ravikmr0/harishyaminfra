import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const phoneNumber = "+919540074200";
  const whatsappNumber = "919540074200";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        aria-label="Contact via WhatsApp"
        className="group inline-flex items-center gap-3 rounded-full border border-white/60 bg-[rgba(255,253,248,0.92)] px-4 py-3 text-[color:var(--brand-ink)] shadow-[0_24px_60px_-35px_rgba(31,44,43,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
        href={`https://wa.me/${whatsappNumber}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-20px_rgba(37,211,102,0.9)]">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>

      <a
        aria-label="Call us"
        className="group inline-flex items-center gap-3 rounded-full border border-white/60 bg-[rgba(255,253,248,0.92)] px-4 py-3 text-[color:var(--brand-ink)] shadow-[0_24px_60px_-35px_rgba(31,44,43,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
        href={`tel:${phoneNumber}`}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white shadow-[0_14px_30px_-20px_rgba(178,98,67,0.9)]">
          <Phone className="h-5 w-5" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">Call Sales</span>
      </a>
    </div>
  );
}
