/**
 * Template: The Warm Connect WhatsApp
 * Category: warm_connect | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const warmConnectWhatsapp = {
  id: 'warm_connect:whatsapp',
  categoryId: 'warm_connect',
  platformId: 'whatsapp',
  title: "The Warm Connect WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recipient's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "contentType",
        "label": "Content Type",
        "placeholder": "e.g. post, talk, or project",
        "required": true
    },
    {
        "key": "topic",
        "label": "Topic Discussed",
        "placeholder": "e.g. state management in Flutter",
        "required": true
    },
    {
        "key": "yourArea",
        "label": "Your Area of Work",
        "placeholder": "e.g. mobile engineering",
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
  template: `Hey {{recruiterName}}! I know you're busy, so I'll keep this quick 🙂
Your recent {{contentType}} on {{topic}} was one of the clearest takes I've come across.
I work in {{yourArea}}, and a few of your points matched what I've been seeing in my own work.
Would love to connect and keep following your work.
Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
