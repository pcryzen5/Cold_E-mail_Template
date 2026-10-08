/**
 * Template: Closed Role / Future Pipeline Email
 * Category: closed_role_inquiry | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const closedRoleEmail = {
  id: 'closed_role_inquiry:email',
  categoryId: 'closed_role_inquiry',
  platformId: 'email',
  title: "Closed Role / Future Pipeline Email",
  hasSubject: true,
  subjectTemplate: "Interest in Future {{jobTitle}} Opportunities at {{companyName}}",
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
I know you're probably slammed, so I'll keep this short.
The {{jobTitle}} role at {{companyName}} caught my eye, but I see it's closed now. I'm a Python and Flutter developer who built a student management app with Flutter, Dart, and MongoDB Atlas, and I'd love to be considered for similar roles on your team.
Would you be open to keeping my resume on file for upcoming openings? It's attached, and even a one- or two-line reply would make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
