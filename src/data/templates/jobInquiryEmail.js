/**
 * Template: Job Inquiry Email (No Role Listed)
 * Category: job_inquiry | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const jobInquiryEmail = {
  id: 'job_inquiry:email',
  categoryId: 'job_inquiry',
  platformId: 'email',
  title: "Job Inquiry Email (No Role Listed)",
  hasSubject: true,
  subjectTemplate: "Python/Flutter dev — question about openings at {{companyName}}",
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

Hope you're doing well — know you're probably slammed, so I'll keep this short.

I came across your profile while looking into roles at {{companyName}}. I'm a Python/Flutter developer working across web and mobile, currently building out my data science/ML skills (MCA in AI/ML + a Data Science & Deep Learning program).

Would love to know what your team's hiring for right now, even if it's not an exact fit today. Please do keep my profile in mind if it fits any role you're hiring for.

Open to a quick call sometime next week? Resume attached, and happy to share more if useful.

Even a one or two line reply would completely make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
