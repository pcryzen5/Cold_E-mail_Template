/**
 * Template: Job Offer Acceptance LinkedIn
 * Category: offer_acceptance | Platform: linkedin
 * Edit this file anytime to customize the copy, subject line, or dynamic fields.
 */
export const offerAcceptanceLinkedin = {
  id: 'offer_acceptance:linkedin',
  categoryId: 'offer_acceptance',
  platformId: 'linkedin',
  title: "Job Offer Acceptance LinkedIn",
  hasSubject: false,
  
  fields: [
    {
        "key": "hiringManagerName",
        "label": "Hiring Manager's Name",
        "placeholder": "e.g. David",
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
        "key": "specificTeamOrProject",
        "label": "Specific Team / Project",
        "placeholder": "e.g. the mobile platform engineering team",
        "required": true
    }
],
  template: `Hi {{hiringManagerName}}, I'm thrilled to accept the {{jobTitle}} offer at {{companyName}}. Thank you for the opportunity! I'm especially excited to contribute to {{specificTeamOrProject}}.

Please let me know if there's any paperwork or next steps I should complete before my start date. A quick reply to confirm you've seen this would make my day. Can't wait to get started!`
};
