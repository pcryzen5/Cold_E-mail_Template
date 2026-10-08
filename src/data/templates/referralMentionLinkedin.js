/**
 * Template: Application with Referral Mention LinkedIn
 * Category: referral_mention | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const referralMentionLinkedin = {
  id: 'referral_mention:linkedin',
  categoryId: 'referral_mention',
  platformId: 'linkedin',
  title: "Application with Referral Mention LinkedIn",
  hasSubject: false,
  
  fields: [
    {
        "key": "hiringManagerName",
        "label": "Hiring Manager's Name",
        "placeholder": "e.g. David",
        "required": true
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
        "placeholder": "e.g. a Flutter student management app and an AI chess engine",
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
  template: `Hi {{hiringManagerName}}, {{referralName}} from your team suggested I apply for the {{jobTitle}} role at {{companyName}}. I recently built {{specificProject}} and would love to bring that to your team. My resume is attached.

Does it look like a fit for the next step? Even a one-line reply would mean a lot.

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
