/**
 * Template: Networking LinkedIn to Recruiter
 * Category: recruiter_networking | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const recruiterNetworkingLinkedin = {
  id: 'recruiter_networking:linkedin',
  categoryId: 'recruiter_networking',
  platformId: 'linkedin',
  title: "Networking LinkedIn to Recruiter",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recruiter's Name",
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
  template: `Hi {{recruiterName}}, 60 sec, promise.
I'm {{yourName}}, a Python and Flutter developer. I built a student management app (Flutter, MongoDB Atlas) and I'm pursuing my MCA in AI/ML.
Is {{companyName}} open to junior Python, Flutter or data roles right now? Even a one- or two-line reply would completely make my day. Thanks!
{{yourName}}
{{phone}} | {{portfolio}}`
};
