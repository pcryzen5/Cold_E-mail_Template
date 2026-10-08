/**
 * Template: The Referral Ask WhatsApp
 * Category: referral_ask | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const referralAskWhatsapp = {
  id: 'referral_ask:whatsapp',
  categoryId: 'referral_ask',
  platformId: 'whatsapp',
  title: "The Referral Ask WhatsApp",
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
        "key": "jobRole",
        "label": "Role Title",
        "placeholder": "e.g. Python/Flutter Developer",
        "required": true
    },
    {
        "key": "keySkill",
        "label": "Key Skill",
        "placeholder": "e.g. Flutter",
        "required": true
    },
    {
        "key": "projectResult",
        "label": "Project / Result Proof",
        "placeholder": "e.g. a student management app with MongoDB Atlas",
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
I noticed {{companyName}} is hiring for {{jobRole}}, and my background in {{keySkill}} lines up closely with the job description. For example, I built {{projectResult}}.
If my profile fits the role, would you be open to passing my resume along, or making a quick intro to the hiring manager?
Totally understand if it's not the right fit. Either way, I appreciate you considering it!
Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
