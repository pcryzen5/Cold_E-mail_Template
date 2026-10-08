/**
 * Template: Interview Follow-Up (Timeline Check) WhatsApp
 * Category: post_interview_followup | Platform: whatsapp
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const postInterviewFollowupWhatsapp = {
  id: 'post_interview_followup:whatsapp',
  categoryId: 'post_interview_followup',
  platformId: 'whatsapp',
  title: "Interview Follow-Up (Timeline Check) WhatsApp",
  hasSubject: false,
  
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
        "key": "interviewDate",
        "label": "Interview Date",
        "placeholder": "e.g. October 4th",
        "required": true
    },
    {
        "key": "specificTopic",
        "label": "Specific Discussion Topic",
        "placeholder": "e.g. app performance optimization",
        "required": true
    },
    {
        "key": "yourName",
        "label": "Your Name",
        "placeholder": "e.g. Shubham Purkait",
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
  template: `Hi {{recruiterName}} 👋 {{yourName}} here. Quick follow-up, since I know you're busy!
I interviewed for the {{jobTitle}} role at {{companyName}} on {{interviewDate}} and really enjoyed our chat about {{specificTopic}}. Still very excited about it.
Any update on the hiring timeline? Happy to send anything else you need.
Even a one or two line reply would make my day 🙏

Thanks,
{{yourName}}
{{linkedIn}} | {{portfolio}}`
};
