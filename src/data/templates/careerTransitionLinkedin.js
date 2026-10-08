/**
 * Template: Career Path Informational Chat LinkedIn
 * Category: career_transition_interview | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const careerTransitionLinkedin = {
  id: 'career_transition_interview:linkedin',
  categoryId: 'career_transition_interview',
  platformId: 'linkedin',
  title: "Career Path Informational Chat LinkedIn",
  hasSubject: false,
  
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
  template: `Hi {{recruiterName}},

I know you're busy, so I'll keep this short. Your move from {{previousRole}} into {{currentRole}} at {{companyName}} is exactly the path I'm trying to figure out.

Would you be open to a 15-minute chat about how you made the jump? I'd love to hear what you wish you'd known earlier.

Even a one- or two-line reply would make my day, and I'm happy to work around your calendar.

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
