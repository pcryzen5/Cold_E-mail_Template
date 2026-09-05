/**
 * Template: Freelance & Contract Pitch -> WhatsApp
 * You can easily edit the message text or form fields below!
 */
export const freelanceWhatsapp = {
  id: 'freelance_pitch:whatsapp',
  categoryId: 'freelance_pitch',
  platformId: 'whatsapp',
  title: 'Founder / Client WhatsApp Pitch',
  fields: [
    { key: 'clientName', label: "Client / Founder's Name", placeholder: 'e.g. Dave', required: true },
    { key: 'companyOrProduct', label: 'Company / Product Name', placeholder: 'e.g. SwiftApp', required: true },
    { key: 'offering', label: 'What you can build/improve', placeholder: 'e.g. mobile app MVP or automated ML pipeline', required: true },
    { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shubham', required: true, persistent: true }
  ],
  template: `Hey {{clientName}}! Loved seeing what you’re building with {{companyOrProduct}} 🚀

Quick question: are you currently looking for hands-on dev support to ship your {{offering}}?

I build high-performance mobile & web solutions using Python, Flutter, and intelligent ML workflows. If you need someone who can jump in and deliver fast without hand-holding, I’d love to help.

Happy to share a quick 2-minute loom or demo of past projects. Free for a 10-min intro this week?

Best,
{{yourName}}`
};
