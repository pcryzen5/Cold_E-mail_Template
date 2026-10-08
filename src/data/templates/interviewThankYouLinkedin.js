/**
 * Template: Post-Interview Thank-You LinkedIn
 * Category: interview_thank_you | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const interviewThankYouLinkedin = {
  id: 'interview_thank_you:linkedin',
  categoryId: 'interview_thank_you',
  platformId: 'linkedin',
  title: "Post-Interview Thank-You LinkedIn",
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
        "placeholder": "e.g. your vision for the app redesign",
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
  template: `Hi {{recruiterName}}, thank you for taking the time to talk with me about the {{jobTitle}} role at {{companyName}}. I really enjoyed learning about the team's work.

Our conversation made me even more excited about the role, especially {{specificDetail}}.

Happy to share anything else that would help. Looking forward to next steps!

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
