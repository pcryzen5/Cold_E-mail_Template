/**
 * Template: Freelance & Contract Pitch WhatsApp
 * Category: freelance_contract | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const freelanceContractWhatsapp = {
  id: 'freelance_contract:whatsapp',
  categoryId: 'freelance_contract',
  platformId: 'whatsapp',
  title: "Freelance & Contract Pitch WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "clientName",
        "label": "Client's Name",
        "placeholder": "e.g. David",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "keySkill1",
        "label": "Key Skill 1",
        "placeholder": "e.g. Flutter",
        "required": true
    },
    {
        "key": "keySkill2",
        "label": "Key Skill 2",
        "placeholder": "e.g. Python",
        "required": true
    },
    {
        "key": "projectAndLink",
        "label": "Project Link",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": true
    },
    {
        "key": "specificAreaOfNeed",
        "label": "Specific Area of Need",
        "placeholder": "e.g. mobile app modernization",
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
  template: `Hi {{clientName}} 👋 {{yourName}} here, 60 sec, promise.
I'm a {{keySkill1}} + {{keySkill2}} developer, and I recently built {{projectAndLink}}. I'd love to help {{companyName}} with {{specificAreaOfNeed}} as a freelancer.
Is your team open to freelance or contract help right now? Totally fine if not. Even a one or two line reply would make my day 🙌

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
