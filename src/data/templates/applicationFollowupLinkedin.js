/**
 * Template: Application Follow-Up LinkedIn
 * Category: application_followup | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const applicationFollowupLinkedin = {
  id: 'application_followup:linkedin',
  categoryId: 'application_followup',
  platformId: 'linkedin',
  title: "Application Follow-Up LinkedIn",
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
        "placeholder": "e.g. a Flutter + MongoDB Atlas student management app",
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
  template: `Hi {{recruiterName}}, I'll keep this short: I applied for the {{jobTitle}} role at {{companyName}} on {{applicationDate}} and wanted to follow up. I'm still very excited about it.
I'm a {{developerType}} developer, and I've built {{oneLineProof}}. Has your team started reviewing applications yet?
Even a one- or two-line reply would completely make my day. 

Thanks,
{{yourName}}
{{phone}} | {{portfolio}}`
};
