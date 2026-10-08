/**
 * Template: Fresher / Graduate Application WhatsApp
 * Category: fresher_application | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const fresherApplicationWhatsapp = {
  id: 'fresher_application:whatsapp',
  categoryId: 'fresher_application',
  platformId: 'whatsapp',
  title: "Fresher / Graduate Application WhatsApp",
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
        "placeholder": "e.g. MongoDB",
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
  template: `Hi {{recruiterName}}! 👋 I know you're busy, so I'll keep this quick.
I'm {{yourName}}, a recent {{degreeOrMajor}} grad, and I'm applying for the {{jobTitle}} role at {{companyName}}. I've built {{specificProject}} using {{skill1}}, {{skill2}} and {{skill3}}. Resume attached.
Would you be open to a quick chat about the role? Even a one or two line reply would make my day 🙂
Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
