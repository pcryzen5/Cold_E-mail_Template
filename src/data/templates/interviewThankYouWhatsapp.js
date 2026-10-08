/**
 * Template: Post-Interview Thank-You WhatsApp
 * Category: interview_thank_you | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const interviewThankYouWhatsapp = {
  id: 'interview_thank_you:whatsapp',
  categoryId: 'interview_thank_you',
  platformId: 'whatsapp',
  title: "Post-Interview Thank-You WhatsApp",
  hasSubject: false,
  
  fields: [
    {
        "key": "recruiterName",
        "label": "Interviewer's Name",
        "placeholder": "e.g. Sarah",
        "required": true
    },
    {
        "key": "jobTitle",
        "label": "Job Title",
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
        "key": "specificDetail",
        "label": "Specific Detail from Interview",
        "placeholder": "e.g. how the team plans to scale mobile clients",
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
  template: `Hi {{recruiterName}}, {{yourName}} here 😊 Quick thank-you for taking the time to talk with me about the {{jobTitle}} role at {{companyName}}.

Really enjoyed hearing about the team's work, and I'm especially excited about {{specificDetail}}!

Happy to send anything else that would help. Looking forward to next steps 🙌

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
