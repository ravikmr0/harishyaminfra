import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContactButtons() {
  const phoneNumber = "+919540074200";
  const whatsappNumber = "919540074200";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#d4af37] hover:bg-[#c4a137] text-[#1a2332] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}