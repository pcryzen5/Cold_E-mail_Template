/**
 * Template: The Warm Connect LinkedIn
 * Category: warm_connect | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const warmConnectLinkedin = {
  id: 'warm_connect:linkedin',
  categoryId: 'warm_connect',
  platformId: 'linkedin',
  title: "The Warm Connect LinkedIn",
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
        "key": "phone",
        "label": "Phone Number",
        "placeholder": "e.g. +91 98765 43210",
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
  template: `Hi {{recruiterName}},
I know you're busy, so I'll keep this quick. Your recent {{contentType}} on {{topic}} was one of the clearest takes I've come across.
I work in {{yourArea}}, and a few of your points matched what I've been seeing in my own work.
Glad to be connected, and I'd love to keep following your work.
Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
