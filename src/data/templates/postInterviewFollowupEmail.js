/**
 * Template: Interview Follow-Up (Timeline Check) Email
 * Category: post_interview_followup | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const postInterviewFollowupEmail = {
  id: 'post_interview_followup:email',
  categoryId: 'post_interview_followup',
  platformId: 'email',
  title: "Interview Follow-Up (Timeline Check) Email",
  hasSubject: true,
  subjectTemplate: "Following up on Interview for {{jobTitle}}",
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
        "key": "jobReferenceNumber",
        "label": "Job Reference ID",
        "placeholder": "e.g. REQ-4081",
        "required": false
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
        "placeholder": "e.g. backend data pipelines and mobile offline sync",
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

Quick follow-up, since I know you're busy. I interviewed for the {{jobTitle}} role{{#if jobReferenceNumber}} (Ref: {{jobReferenceNumber}}){{/if}} at {{companyName}} on {{interviewDate}}, and I really enjoyed our conversation about {{specificTopic}}. I'm still very excited about the opportunity.
Is there any update on the hiring timeline? And if you need anything else from me, I'm happy to send it over.
Even a one or two line reply would make my day.

Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
