import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CallbackForm from './forms/CallbackForm';

export default function StickyInquiryBar() {
  const [showCallback, setShowCallback] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a2332] text-white shadow-2xl z-40 hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-300">Need assistance? Get in touch with us</p>
            <p className="font-semibold text-lg">+91 98765 43210</p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold"
              onClick={() => setShowCallback(true)}
            >
              Request Callback
            </Button>
          </div>
        </div>
      </div>

      {/* Callback Modal */}
      <Dialog open={showCallback} onOpenChange={setShowCallback}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair">Request a Callback</DialogTitle>
          </DialogHeader>
          <CallbackForm onClose={() => setShowCallback(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}