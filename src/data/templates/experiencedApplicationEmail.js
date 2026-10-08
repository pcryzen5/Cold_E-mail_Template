/**
 * Template: Experienced Candidate Application Email
 * Category: experienced_application | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const experiencedApplicationEmail = {
  id: 'experienced_application:email',
  categoryId: 'experienced_application',
  platformId: 'email',
  title: "Experienced Candidate Application Email",
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
        "placeholder": "e.g. Senior Mobile / Backend Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "yearsExperience",
        "label": "Years of Experience",
        "placeholder": "e.g. 4+ years",
        "required": true
    },
    {
        "key": "yourDomain",
        "label": "Your Domain",
        "placeholder": "e.g. Mobile and Cloud Systems",
        "required": true
    },
    {
        "key": "keyAchievement",
        "label": "Key Achievement",
        "placeholder": "e.g. leading production deployments with 99.9% uptime",
        "required": true
    },
    {
        "key": "keySkills",
        "label": "Key Skills",
        "placeholder": "e.g. Python, Flutter, FastAPI, and MongoDB",
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
I know you're probably slammed, so I'll keep this short. I'm applying for the {{jobTitle}} role at {{companyName}}.
I bring {{yearsExperience}} of experience in {{yourDomain}}, including {{keyAchievement}}, and my skills in {{keySkills}} line up closely with what you're looking for. I've attached my resume and would love to chat about how I can contribute to your team from day one.
Even a one- or two-line reply would completely make my day.
Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
