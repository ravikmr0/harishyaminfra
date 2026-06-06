import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const phoneNumber = "+919625219769";
  const whatsappNumber = "919625219769";

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      <a
        aria-label="Contact via WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[#25D366] shadow-[0_18px_42px_-24px_rgba(37,211,102,0.65)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-[0_24px_54px_-28px_rgba(37,211,102,0.8)] sm:h-14 sm:w-14 sm:border-2 lg:h-16 lg:w-16"
        href={`https://wa.me/${whatsappNumber}`}
        rel="noopener noreferrer"
        target="_blank"
        title="WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        aria-label="Call us"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[color:var(--brand-deep)] shadow-[0_18px_42px_-24px_rgba(178,98,67,0.65)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-50 hover:shadow-[0_24px_54px_-28px_rgba(178,98,67,0.8)] sm:h-14 sm:w-14 sm:border-2 lg:h-16 lg:w-16"
        href={`tel:${phoneNumber}`}
        title="Call Sales"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
        <span className="sr-only">Call Sales</span>
      </a>
    </div>
  );
}
