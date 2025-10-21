
import { WHATSAPP_NUMBER } from '../constants';

export const encodeWhatsAppMessage = (message: string): string => {
  return encodeURIComponent(message);
};

export const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeWhatsAppMessage(message)}`;
};
