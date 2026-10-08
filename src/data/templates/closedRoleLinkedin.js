/**
 * Template: Closed Role / Future Pipeline LinkedIn
 * Category: closed_role_inquiry | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const closedRoleLinkedin = {
  id: 'closed_role_inquiry:linkedin',
  categoryId: 'closed_role_inquiry',
  platformId: 'linkedin',
  title: "Closed Role / Future Pipeline LinkedIn",
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
        "placeholder": "e.g. Python/Flutter Developer",
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
  template: `Hi {{recruiterName}}, {{yourName}} here. I'll keep this short.
The {{jobTitle}} role at {{companyName}} caught my eye, but I see it's closed now. I'm a Python and Flutter developer who built a student management app with Flutter, Dart, and MongoDB Atlas, and I'd love to be considered for similar roles.
Would you be open to keeping my resume on file? Happy to send it over, and even a one-line reply would make my day.

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
