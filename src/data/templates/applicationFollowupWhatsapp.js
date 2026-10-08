/**
 * Template: Application Follow-Up WhatsApp
 * Category: application_followup | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const applicationFollowupWhatsapp = {
  id: 'application_followup:whatsapp',
  categoryId: 'application_followup',
  platformId: 'whatsapp',
  title: "Application Follow-Up WhatsApp",
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
        "placeholder": "e.g. Junior Flutter Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "applicationDate",
        "label": "Submission Date",
        "placeholder": "e.g. October 2nd",
        "required": true
    },
    {
        "key": "developerType",
        "label": "Developer Stack",
        "placeholder": "e.g. Flutter/Python",
        "required": true
    },
    {
        "key": "oneLineProof",
        "label": "One-line Proof of Work",
        "placeholder": "e.g. a Flutter + MongoDB Atlas student management app",
        "required": true
    },
    {
        "key": "yourName",
        "label": "Your Name",
        "placeholder": "e.g. Shubham Purkait",
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
  template: `Hi {{recruiterName}} 👋 This is {{yourName}}. I applied for the {{jobTitle}} role at {{companyName}} on {{applicationDate}} and wanted to follow up (keeping it short, promise!).
I'm a {{developerType}} developer, and I've built {{oneLineProof}}. Has your team started reviewing applications yet?
Even a one-line reply would completely make my day 🙏 Thanks!
Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
