/**
 * Template: Freelance & Contract Pitch Email
 * Category: freelance_contract | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const freelanceContractEmail = {
  id: 'freelance_contract:email',
  categoryId: 'freelance_contract',
  platformId: 'email',
  title: "Freelance & Contract Pitch Email",
  hasSubject: true,
  subjectTemplate: "Freelance Support for {{companyName}} - Available to Help!",
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
        "label": "Project + Link",
        "placeholder": "e.g. a student management app (pcryzen5.github.io)",
        "required": true
    },
    {
        "key": "specificAreaOfNeed",
        "label": "Specific Area of Need",
        "placeholder": "e.g. mobile app modernization and API integrations",
        "required": true
    },
    {
        "key": "firstStep",
        "label": "First Step (Week 1)",
        "placeholder": "e.g. audit your current codebase and refactor the slow user flow",
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
  template: `Hi {{clientName}},
60 sec, promise. I'm {{yourName}}, a {{keySkill1}} and {{keySkill2}} developer, and I recently built {{projectAndLink}}.
I'd love to help {{companyName}} with {{specificAreaOfNeed}} on a freelance basis. In week one, I'd {{firstStep}}, and I'm happy to adjust to what you need most.
Is your team open to freelance or contract help right now? Totally fine if not. Even a one or two line reply would completely make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
