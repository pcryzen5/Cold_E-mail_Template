/**
 * Template: Freelance & Contract Pitch LinkedIn
 * Category: freelance_contract | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const freelanceContractLinkedin = {
  id: 'freelance_contract:linkedin',
  categoryId: 'freelance_contract',
  platformId: 'linkedin',
  title: "Freelance & Contract Pitch LinkedIn",
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
        "placeholder": "e.g. custom Flutter UI widgets",
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
  template: `Hi {{clientName}}, 60 sec, promise. I'm {{yourName}}, a {{keySkill1}} and {{keySkill2}} developer, and I recently built {{projectAndLink}}. I'd love to help {{companyName}} with {{specificAreaOfNeed}} on a freelance basis.
Is your team open to freelance or contract help right now? Totally fine if not. Even a one or two line reply would make my day.
Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
