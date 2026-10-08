/**
 * Template: The Warm Connect Email
 * Category: warm_connect | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const warmConnectEmail = {
  id: 'warm_connect:email',
  categoryId: 'warm_connect',
  platformId: 'email',
  title: "The Warm Connect Email",
  hasSubject: true,
  subjectTemplate: "Quick note on your {{topic}} {{contentType}}",
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
  template: `Hi {{recruiterName}},
Your recent {{contentType}} on {{topic}} was one of the clearest takes I've come across.
I know you're busy, so I'll keep this short: I work in {{yourArea}}, and a few of your points matched what I've been seeing in my own work.
Would you be open to connecting on LinkedIn? I'd love to keep following your work.
Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
