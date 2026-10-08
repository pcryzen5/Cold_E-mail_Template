/**
 * Template: Fresher / Graduate Application Email
 * Category: fresher_application | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const fresherApplicationEmail = {
  id: 'fresher_application:email',
  categoryId: 'fresher_application',
  platformId: 'email',
  title: "Fresher / Graduate Application Email",
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
        "key": "degreeOrMajor",
        "label": "Degree / Major",
        "placeholder": "e.g. MCA in AI/ML",
        "required": true
    },
    {
        "key": "jobTitle",
        "label": "Job Title",
        "placeholder": "e.g. Junior Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "skill1",
        "label": "Skill 1",
        "placeholder": "e.g. Python",
        "required": true
    },
    {
        "key": "skill2",
        "label": "Skill 2",
        "placeholder": "e.g. Flutter",
        "required": true
    },
    {
        "key": "skill3",
        "label": "Skill 3",
        "placeholder": "e.g. MongoDB Atlas",
        "required": true
    },
    {
        "key": "specificProject",
        "label": "Specific Project & What It Does",
        "placeholder": "e.g. a Student Management App with live attendance tracking",
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
I know you're busy, so I'll keep this short. I'm {{yourName}}, a recent {{degreeOrMajor}} graduate, and I'm applying for the {{jobTitle}} role at {{companyName}}.
I've worked hands-on with {{skill1}}, {{skill2}} and {{skill3}}, most recently on {{specificProject}}. I'm keen to learn fast and start contributing from week one.
Would you be open to a quick chat about the role? My resume is attached, and even a one or two line reply would make my day.
Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
