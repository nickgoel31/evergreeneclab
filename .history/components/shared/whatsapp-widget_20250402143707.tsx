"use client"

import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  welcomeMessage?: string;
  companyName?: string;
  position?: 'right' | 'left';
  autoOpen?: boolean;
  autoOpenTimeout?: number;
}

const WhatsAppWidget = ({
  phoneNumber,
  welcomeMessage = "Hello! How can we help you?",
  companyName = "Evergreen Enviro",
  position = "right",
  autoOpen = false,
  autoOpenTimeout = 5000
}: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Auto open the widget after specified timeout, but only if it hasn't been manually closed
    if (autoOpen && !hasBeenClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, autoOpenTimeout);
      
      return () => clearTimeout(timer);
    }
  }, [autoOpen, autoOpenTimeout, hasBeenClosed]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const closeWidget = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setHasBeenClosed(true);
  };

  const handleWhatsAppRedirect = () => {
    // Format message for WhatsApp link
    const encodedMessage = encodeURIComponent(welcomeMessage);
    // Format phone number (remove any non-numeric characters)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 ${position === 'right' ? 'right-6' : 'left-6'} z-40`}
    >
      {/* WhatsApp Chat Popup */}
      <div 
        className={`bg-white rounded-xl shadow-xl transform transition-all duration-300 ease-in-out mb-4 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ width: '0px', maxWidth: 'calc(100vw - 48px)' }}
      >
        {/* Header */}
        <div className="bg-[#25D366] p-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{companyName}</h3>
              <p className="text-xs opacity-90">Online | Replies instantly</p>
            </div>
          </div>
          <button 
            onClick={closeWidget}
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Chat Content */}
        <div className="p-4 bg-[#E5DDD5] bg-opacity-30 h-[200px] flex flex-col">
          {/* Message Bubble */}
          <div className="bg-[#DCF8C6] self-start rounded-lg px-3 py-2 max-w-[85%] shadow-sm">
            <p className="text-gray-700 text-sm">{welcomeMessage}</p>
            <p className="text-gray-500 text-[10px] text-right mt-1">10:20 AM</p>
          </div>
          
          <div className="mt-auto">
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full py-3 bg-[#25D366] hover:bg-[#1FAE54] text-white rounded-lg transition-colors font-medium shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Start Chat
            </button>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <button
        onClick={toggleWidget}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 relative"
        aria-label="Open WhatsApp chat"
      >
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">1</span>
        
        <svg 
          viewBox="0 0 32 32" 
          className="h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.916-.832-1.148-.143-.23-.182-.328-.346-.554-.165-.226-.346-.345-.59-.345-.09 0-.17.002-.246.005-.7.158-.91.744-1.043 1.043-.133.298-.255.64-.28 1.054-.02.504.287 1.026.412 1.23.13.207.505.83 1.016 1.503.688.902 1.704 1.98 2.276 2.32.212.134.48.246.668.246.16 0 .293-.04.38-.075.134-.05.218-.204.274-.314l.26-.565c.099-.21.207-.435.207-.66 0-.227-.2-.323-.206-.333-.03-.01-.046-.03-.065-.055-.032-.04-.066-.083-.12-.08h-.23c-.132 0-.177-.03-.345-.21-.034-.037-.19-.245-.54-.727l-.03-.41c-.15-.062-.277-.142-.277-.23 0-.05.012-.1.047-.15.2-.266.398-.533.63-.808.115-.135.22-.273.306-.402.06-.104.153-.26.157-.33l.044-.336c.015-.105.032-.225.033-.332.003-.137-.012-.177-.054-.37l-.064.024" 
          />
          <path 
            d="M16.012 1c-8.284 0-15 6.717-15 15 0 8.285 6.716 15 15 15 8.283 0 15-6.715 15-15 0-8.282-6.717-15-15-15zm0 27.827c-7.075 0-12.827-5.752-12.827-12.827 0-7.075 5.752-12.827 12.827-12.827 7.073 0 12.827 5.752 12.827 12.827 0 7.075-5.754 12.827-12.827 12.827z" 
          />
        </svg>
      </button>
    </div>
  );
}

export default WhatsAppWidget;