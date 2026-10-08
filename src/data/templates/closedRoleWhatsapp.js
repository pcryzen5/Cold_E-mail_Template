/**
 * Template: Closed Role / Future Pipeline WhatsApp
 * Category: closed_role_inquiry | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const closedRoleWhatsapp = {
  id: 'closed_role_inquiry:whatsapp',
  categoryId: 'closed_role_inquiry',
  platformId: 'whatsapp',
  title: "Closed Role / Future Pipeline WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recruiter's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "jobTitle",
        "label": "Job Title",
        "placeholder": "e.g. Python/Flutter Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "portfolio",
        "label": "Portfolio Link",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": false,
        "persistent": true
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
    }
],
  template: `Hi {{recruiterName}} 👋 {{yourName}} here, 60 sec, promise.
The {{jobTitle}} role at {{companyName}} caught my eye, but it looks like it's closed now. I'm a Python & Flutter developer and would love to be considered for similar roles (portfolio: {{portfolio}}).
Would you be open to keeping my resume on file? Even a one-line reply would make my day 🙏

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
