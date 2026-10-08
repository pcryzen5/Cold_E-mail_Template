/**
 * Template: Networking Email to Recruiter
 * Category: recruiter_networking | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const recruiterNetworkingEmail = {
  id: 'recruiter_networking:email',
  categoryId: 'recruiter_networking',
  platformId: 'email',
  title: "Networking Email to Recruiter",
  hasSubject: true,
  subjectTemplate: "Exploring Opportunities - {{yourIndustryOrTitle}}",
  fields: [
    {
        "key": "recruiterName",
        "label": "Recruiter's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "yourIndustryOrTitle",
        "label": "Your Industry / Job Title",
        "placeholder": "e.g. Python & Flutter Developer",
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
I'm {{yourName}}, a Python and Flutter developer. I've built a student management app (Flutter, MongoDB Atlas) with attendance tracking and assignments, and a chess game in Python with move validation. I'm also pursuing my MCA in AI/ML and hold a Data Analyst certification.
Is {{companyName}} open to junior Python, Flutter or data roles right now? If yes, I'll send over my resume and a few lines on where I'd fit best. Even a one- or two-line reply would completely make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
