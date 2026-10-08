/**
 * Template: The Referral Ask Email
 * Category: referral_ask | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const referralAskEmail = {
  id: 'referral_ask:email',
  categoryId: 'referral_ask',
  platformId: 'email',
  title: "The Referral Ask Email",
  hasSubject: true,
  subjectTemplate: "{{keySkill}} dev — question about {{jobRole}} opening",
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
        "placeholder": "e.g. a Flutter student management app with MongoDB Atlas",
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
I noticed {{companyName}} is hiring for {{jobRole}}, and my background in {{keySkill}} lines up closely with the job description. For example, I built {{projectResult}}.
If my profile fits the role, would you be open to passing my resume along, or making a quick intro to the hiring manager? My resume is attached for easy forwarding.
Totally understand if it's not the right fit. Either way, I appreciate you considering it.
Best,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
