/**
 * Template: Formal Job Application Email
 * Category: formal_application | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const formalApplicationEmail = {
  id: 'formal_application:email',
  categoryId: 'formal_application',
  platformId: 'email',
  title: "Formal Job Application Email",
  hasSubject: true,
  subjectTemplate: "Application for {{jobTitle}} - {{yourName}}",
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
        "placeholder": "e.g. Junior Python/Flutter Developer",
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

I know you're busy, so I'll keep this short: I'm applying for the {{jobTitle}} position at {{companyName}}.

I'm a Python and Flutter developer, and I built a Student Management App (Flutter, Dart, MongoDB Atlas) with attendance tracking and assignment management. I'd love to bring that same hands-on approach to your team. My resume is attached for your review.

Would you be open to a short chat about the role? Even a one- or two-line reply would completely make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
