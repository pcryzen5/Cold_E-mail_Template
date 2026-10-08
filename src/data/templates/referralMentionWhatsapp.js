/**
 * Template: Application with Referral Mention WhatsApp
 * Category: referral_mention | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const referralMentionWhatsapp = {
  id: 'referral_mention:whatsapp',
  categoryId: 'referral_mention',
  platformId: 'whatsapp',
  title: "Application with Referral Mention WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "hiringManagerName",
        "label": "Hiring Manager's Name",
        "placeholder": "e.g. David",
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
        "key": "referralName",
        "label": "Referral's Name",
        "placeholder": "e.g. Alex Rivera",
        "required": true
    },
    {
        "key": "jobTitle",
        "label": "Job Title",
        "placeholder": "e.g. Python & Flutter Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "specificProject",
        "label": "Specific Project / Result",
        "placeholder": "e.g. a Flutter + MongoDB student management app",
        "required": true
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
  template: `Hi {{hiringManagerName}}, this is {{yourName}} 👋

{{referralName}} from your team suggested I apply for the {{jobTitle}} role at {{companyName}}. I recently built {{specificProject}}, and I'd love to bring that hands-on approach to your team. Resume attached below 👇

Does it look like a fit for the next step? Even a one-line reply would mean a lot 🙏

Thanks,
{{linkedIn}} | {{portfolio}}`
};
