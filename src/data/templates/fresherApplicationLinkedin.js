/**
 * Template: Fresher / Graduate Application LinkedIn
 * Category: fresher_application | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const fresherApplicationLinkedin = {
  id: 'fresher_application:linkedin',
  categoryId: 'fresher_application',
  platformId: 'linkedin',
  title: "Fresher / Graduate Application LinkedIn",
  hasSubject: false,
  
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
        "label": "Specific Project",
        "placeholder": "e.g. a Student Management App",
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
  template: `Hi {{recruiterName}}, I know you're busy, so I'll keep this short.
I'm {{yourName}}, a recent {{degreeOrMajor}} graduate, and I'm applying for the {{jobTitle}} role at {{companyName}}. I've built {{specificProject}} using {{skill1}}, {{skill2}} and {{skill3}}. My resume is attached.
Would you be open to a quick chat about the role? Even a one or two line reply would make my day.

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
