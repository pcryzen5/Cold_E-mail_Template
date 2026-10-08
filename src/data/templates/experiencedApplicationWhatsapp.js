/**
 * Template: Experienced Candidate Application WhatsApp
 * Category: experienced_application | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const experiencedApplicationWhatsapp = {
  id: 'experienced_application:whatsapp',
  categoryId: 'experienced_application',
  platformId: 'whatsapp',
  title: "Experienced Candidate Application WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Recruiter's Name",
        "placeholder": "e.g. Sarah",
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
        "placeholder": "e.g. delivering production apps for 50k+ users",
        "required": true
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
  template: `Hi {{recruiterName}} 👋
I know you're probably slammed, so I'll keep this quick. I'm {{yourName}}, applying for the {{jobTitle}} role at {{companyName}}.
I have {{yearsExperience}} of experience in {{yourDomain}}, including {{keyAchievement}}. I've attached my resume here 📎 and would love to chat about how I can contribute from day one.
Even a one- or two-line reply would completely make my day 🙏 Thanks!
Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
