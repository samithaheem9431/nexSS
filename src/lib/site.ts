export const siteConfig = {
  name: "Nexasoft Studio",
  phone: "+92 300 1234567",
  whatsapp: "923001234567",
  location: "Karachi, Pakistan",
};

export function getWhatsAppUrl(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : `?text=${encodeURIComponent("Hi! I'm interested in your services.")}`;
  return `https://wa.me/${siteConfig.whatsapp}${text}`;
}
