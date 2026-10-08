/**
 * Template: Application Follow-Up Email
 * Category: application_followup | Platform: email
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const applicationFollowupEmail = {
  id: 'application_followup:email',
  categoryId: 'application_followup',
  platformId: 'email',
  title: "Application Follow-Up Email",
  hasSubject: true,
  subjectTemplate: "{{jobTitle}} application: quick follow-up",
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
        "placeholder": "e.g. Junior Flutter Developer",
        "required": true
    },
    {
        "key": "companyName",
        "label": "Company Name",
        "placeholder": "e.g. Acme Tech",
        "required": true
    },
    {
        "key": "applicationDate",
        "label": "Submission Date",
        "placeholder": "e.g. October 2nd",
        "required": true
    },
    {
        "key": "developerType",
        "label": "Developer Stack",
        "placeholder": "e.g. Flutter/Python",
        "required": true
    },
    {
        "key": "oneLineProof",
        "label": "One-line Proof of Work",
        "placeholder": "e.g. a Flutter + MongoDB Atlas app that tracks student attendance and assignments",
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
I know you're swamped, so I'll keep this short. I'm following up on my application for the {{jobTitle}} role at {{companyName}} (submitted on {{applicationDate}}), and I'm still very excited about it.
I'm a {{developerType}} developer, and I've built {{oneLineProof}}. Has your team started reviewing applications yet?
Even a one- or two-line reply would completely make my day. Happy to send anything else you need!
Thanks,
{{yourName}}
{{phone}} | {{linkedIn}} | {{portfolio}}`
};
