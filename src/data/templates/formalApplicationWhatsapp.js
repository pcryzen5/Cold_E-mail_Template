/**
 * Template: Formal Job Application WhatsApp
 * Category: formal_application | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const formalApplicationWhatsapp = {
  id: 'formal_application:whatsapp',
  categoryId: 'formal_application',
  platformId: 'whatsapp',
  title: "Formal Job Application WhatsApp",
  hasSubject: false,
  
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
        "key": "portfolio",
        "label": "Portfolio URL",
        "placeholder": "e.g. pcryzen5.github.io",
        "required": false,
        "persistent": true
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
    }
],
  template: `Hi {{recruiterName}} 👋 I know you're busy, so I'll keep this short — I'm applying for the {{jobTitle}} role at {{companyName}}.

I'm a Python and Flutter developer, and I built a Student Management App (Flutter, Dart, MongoDB Atlas) with attendance tracking and assignment management. My resume is attached below 📎 and my portfolio is at {{portfolio}}

Would you be open to a quick chat about the role? Even a one- or two-line reply would completely make my day 🙏

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
