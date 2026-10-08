/**
 * Template: Networking WhatsApp to Recruiter
 * Category: recruiter_networking | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const recruiterNetworkingWhatsapp = {
  id: 'recruiter_networking:whatsapp',
  categoryId: 'recruiter_networking',
  platformId: 'whatsapp',
  title: "Networking WhatsApp to Recruiter",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recruiter's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "yourName",
        "label": "Your Name",
        "placeholder": "e.g. Shubham",
        "required": true,
        "persistent": true
    },
    {
        "key": "linkedIn",
        "label": "LinkedIn Profile",
        "placeholder": "e.g. linkedin.com/in/shubham",
        "required": false,
        "persistent": true
    },
    {
        "key": "portfolio",
        "label": "Portfolio / GitHub",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": false,
        "persistent": true
    }
],
  template: `Hi {{recruiterName}} 👋 60 sec, promise.
I'm {{yourName}}, a Python & Flutter developer. I built a student management app (Flutter + MongoDB Atlas) and I'm doing my MCA in AI/ML.
Is {{companyName}} open to junior Python, Flutter or data roles right now?
Even a one- or two-line reply would completely make my day 🙏
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
