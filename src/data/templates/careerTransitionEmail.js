/**
 * Template: Career Path Informational Chat Email
 * Category: career_transition_interview | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const careerTransitionEmail = {
  id: 'career_transition_interview:email',
  categoryId: 'career_transition_interview',
  platformId: 'email',
  title: "Career Path Informational Chat Email",
  hasSubject: true,
  subjectTemplate: "Your path into {{currentRole}}",
  fields: [
    {
        "key": "recruiterName",
        "label": "Recipient's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "previousRole",
        "label": "Their Previous Role",
        "placeholder": "e.g. Software Engineer",
        "required": true
    },
    {
        "key": "currentRole",
        "label": "Their Current Role",
        "placeholder": "e.g. Staff AI Engineer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
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
        "key": "yourRole",
        "label": "Your Current Role",
        "placeholder": "e.g. Python & Flutter developer",
        "required": true
    },
    {
        "key": "specificProject",
        "label": "Specific Project Built",
        "placeholder": "e.g. an AI-powered student management portal",
        "required": true
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

Your move from {{previousRole}} into {{currentRole}} at {{companyName}} is exactly the path I'm trying to figure out. I'm {{yourName}}, a {{yourRole}} who recently built {{specificProject}}.

Would you be open to a 15-minute chat about how you made the jump? I'd love to hear what you wish you'd known earlier, and I'm happy to work around your schedule.

If a call is too much, even a one- or two-line reply would make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
