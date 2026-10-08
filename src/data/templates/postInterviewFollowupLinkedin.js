/**
 * Template: Interview Follow-Up (Timeline Check) LinkedIn
 * Category: post_interview_followup | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const postInterviewFollowupLinkedin = {
  id: 'post_interview_followup:linkedin',
  categoryId: 'post_interview_followup',
  platformId: 'linkedin',
  title: "Interview Follow-Up (Timeline Check) LinkedIn",
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
        "placeholder": "e.g. the app redesign",
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
  template: `Hi {{recruiterName}}, quick follow-up, since I know you're busy.
I interviewed for the {{jobTitle}} role at {{companyName}} on {{interviewDate}} and really enjoyed our conversation about {{specificTopic}}. I'm still very excited about the opportunity.
Is there any update on the hiring timeline? Happy to share anything else you need.
Even a one or two line reply would make my day. 

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
