/**
 * Template: Informational Interview Request WhatsApp
 * Category: informational_interview | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const infoInterviewWhatsapp = {
  id: 'informational_interview:whatsapp',
  categoryId: 'informational_interview',
  platformId: 'whatsapp',
  title: "Informational Interview Request WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recipient's Name",
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
        "key": "specificTopicOrTeam",
        "label": "Specific Project / Post / Team",
        "placeholder": "e.g. Flutter open-source packages",
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
  template: `Hi {{recruiterName}}! 👋 {{yourName}} here, a Python and Flutter developer moving into data science and ML.
I've been following {{companyName}}'s work on {{specificTopicOrTeam}} and would love 15 minutes to hear how you got started and any advice you'd share. Open to a quick chat, or a few questions over text if that's easier? 🙏
Even a one- or two-line reply would make my day. 

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
