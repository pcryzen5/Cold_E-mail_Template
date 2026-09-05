/**
 * Central Templates Registry
 * Aggregates all individual template files.
 * To add or edit a template, edit the individual file in this directory!
 */

import { jobInquiryWhatsapp } from './jobInquiryWhatsapp.js';
import { jobInquiryLinkedin } from './jobInquiryLinkedin.js';
import { jobInquiryEmail } from './jobInquiryEmail.js';

import { referralWhatsapp } from './referralWhatsapp.js';
import { referralLinkedin } from './referralLinkedin.js';
import { referralEmail } from './referralEmail.js';

import { followupWhatsapp } from './followupWhatsapp.js';
import { followupLinkedin } from './followupLinkedin.js';
import { followupEmail } from './followupEmail.js';

import { freelanceWhatsapp } from './freelanceWhatsapp.js';
import { freelanceLinkedin } from './freelanceLinkedin.js';
import { freelanceEmail } from './freelanceEmail.js';

// Dictionary mapped by 'categoryId:platformId'
export const TEMPLATES = {
  [jobInquiryWhatsapp.id]: jobInquiryWhatsapp,
  [jobInquiryLinkedin.id]: jobInquiryLinkedin,
  [jobInquiryEmail.id]: jobInquiryEmail,

  [referralWhatsapp.id]: referralWhatsapp,
  [referralLinkedin.id]: referralLinkedin,
  [referralEmail.id]: referralEmail,

  [followupWhatsapp.id]: followupWhatsapp,
  [followupLinkedin.id]: followupLinkedin,
  [followupEmail.id]: followupEmail,

  [freelanceWhatsapp.id]: freelanceWhatsapp,
  [freelanceLinkedin.id]: freelanceLinkedin,
  [freelanceEmail.id]: freelanceEmail,
};

export function getTemplate(categoryId, platformId) {
  const key = `${categoryId}:${platformId}`;
  return TEMPLATES[key] || TEMPLATES[`job_inquiry:${platformId}`];
}
