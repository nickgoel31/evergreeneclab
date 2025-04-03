"use client"

import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

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
  className={`absolute bottom-10 bg-white rounded-xl shadow-xl transform transition-all duration-300 ease-in-out mb-4 overflow-hidden ${
    isOpen ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 invisible'
  }`}
  style={{ width: '320px', maxWidth: 'calc(100vw - 48px)' }}
>
        {/* Header */}
        <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <FaWhatsapp className="h-5 w-5" />
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
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 relative"
        aria-label="Open WhatsApp chat"
      >
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">1</span>
        
        <FaWhatsapp className="h-8 w-8" />
      </button>
    </div>
  );
}

export default WhatsAppWidget;