import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const phoneNumber = "+919625219769";
  const whatsappNumber = "919625219769";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        aria-label="Contact via WhatsApp"
        className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 bg-white text-[#25D366] shadow-[0_24px_60px_-28px_rgba(37,211,102,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-[0_28px_70px_-26px_rgba(37,211,102,0.8)]"
        href={`https://wa.me/${whatsappNumber}`}
        rel="noopener noreferrer"
        target="_blank"
        title="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        aria-label="Call us"
        className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 bg-white text-[color:var(--brand-deep)] shadow-[0_24px_60px_-28px_rgba(178,98,67,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-50 hover:shadow-[0_28px_70px_-26px_rgba(178,98,67,0.8)]"
        href={`tel:${phoneNumber}`}
        title="Call Sales"
      >
        <Phone className="h-7 w-7" />
        <span className="sr-only">Call Sales</span>
      </a>
    </div>
  );
}
