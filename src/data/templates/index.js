/**
 * Central Templates Registry
 * Aggregates all individual template files across 16 scenarios and 3 platforms (Email, WhatsApp, LinkedIn).
 * To customize any template, edit the dedicated file in this directory!
 */

import { jobInquiryEmail } from './jobInquiryEmail.js';
import { jobInquiryWhatsapp } from './jobInquiryWhatsapp.js';
import { jobInquiryLinkedin } from './jobInquiryLinkedin.js';
import { recruiterNetworkingEmail } from './recruiterNetworkingEmail.js';
import { recruiterNetworkingWhatsapp } from './recruiterNetworkingWhatsapp.js';
import { recruiterNetworkingLinkedin } from './recruiterNetworkingLinkedin.js';
import { applicationFollowupEmail } from './applicationFollowupEmail.js';
import { applicationFollowupWhatsapp } from './applicationFollowupWhatsapp.js';
import { applicationFollowupLinkedin } from './applicationFollowupLinkedin.js';
import { infoInterviewEmail } from './infoInterviewEmail.js';
import { infoInterviewWhatsapp } from './infoInterviewWhatsapp.js';
import { infoInterviewLinkedin } from './infoInterviewLinkedin.js';
import { interviewThankYouEmail } from './interviewThankYouEmail.js';
import { interviewThankYouWhatsapp } from './interviewThankYouWhatsapp.js';
import { interviewThankYouLinkedin } from './interviewThankYouLinkedin.js';
import { freelanceContractEmail } from './freelanceContractEmail.js';
import { freelanceContractWhatsapp } from './freelanceContractWhatsapp.js';
import { freelanceContractLinkedin } from './freelanceContractLinkedin.js';
import { closedRoleEmail } from './closedRoleEmail.js';
import { closedRoleWhatsapp } from './closedRoleWhatsapp.js';
import { closedRoleLinkedin } from './closedRoleLinkedin.js';
import { postInterviewFollowupEmail } from './postInterviewFollowupEmail.js';
import { postInterviewFollowupWhatsapp } from './postInterviewFollowupWhatsapp.js';
import { postInterviewFollowupLinkedin } from './postInterviewFollowupLinkedin.js';
import { offerAcceptanceEmail } from './offerAcceptanceEmail.js';
import { offerAcceptanceWhatsapp } from './offerAcceptanceWhatsapp.js';
import { offerAcceptanceLinkedin } from './offerAcceptanceLinkedin.js';
import { formalApplicationEmail } from './formalApplicationEmail.js';
import { formalApplicationWhatsapp } from './formalApplicationWhatsapp.js';
import { formalApplicationLinkedin } from './formalApplicationLinkedin.js';
import { fresherApplicationEmail } from './fresherApplicationEmail.js';
import { fresherApplicationWhatsapp } from './fresherApplicationWhatsapp.js';
import { fresherApplicationLinkedin } from './fresherApplicationLinkedin.js';
import { referralMentionEmail } from './referralMentionEmail.js';
import { referralMentionWhatsapp } from './referralMentionWhatsapp.js';
import { referralMentionLinkedin } from './referralMentionLinkedin.js';
import { experiencedApplicationEmail } from './experiencedApplicationEmail.js';
import { experiencedApplicationWhatsapp } from './experiencedApplicationWhatsapp.js';
import { experiencedApplicationLinkedin } from './experiencedApplicationLinkedin.js';
import { careerTransitionEmail } from './careerTransitionEmail.js';
import { careerTransitionWhatsapp } from './careerTransitionWhatsapp.js';
import { careerTransitionLinkedin } from './careerTransitionLinkedin.js';
import { referralAskEmail } from './referralAskEmail.js';
import { referralAskWhatsapp } from './referralAskWhatsapp.js';
import { referralAskLinkedin } from './referralAskLinkedin.js';
import { warmConnectEmail } from './warmConnectEmail.js';
import { warmConnectWhatsapp } from './warmConnectWhatsapp.js';
import { warmConnectLinkedin } from './warmConnectLinkedin.js';

// Dictionary mapped by 'categoryId:platformId'
export const TEMPLATES = {
  [jobInquiryEmail.id]: jobInquiryEmail,
  [jobInquiryWhatsapp.id]: jobInquiryWhatsapp,
  [jobInquiryLinkedin.id]: jobInquiryLinkedin,
  [recruiterNetworkingEmail.id]: recruiterNetworkingEmail,
  [recruiterNetworkingWhatsapp.id]: recruiterNetworkingWhatsapp,
  [recruiterNetworkingLinkedin.id]: recruiterNetworkingLinkedin,
  [applicationFollowupEmail.id]: applicationFollowupEmail,
  [applicationFollowupWhatsapp.id]: applicationFollowupWhatsapp,
  [applicationFollowupLinkedin.id]: applicationFollowupLinkedin,
  [infoInterviewEmail.id]: infoInterviewEmail,
  [infoInterviewWhatsapp.id]: infoInterviewWhatsapp,
  [infoInterviewLinkedin.id]: infoInterviewLinkedin,
  [interviewThankYouEmail.id]: interviewThankYouEmail,
  [interviewThankYouWhatsapp.id]: interviewThankYouWhatsapp,
  [interviewThankYouLinkedin.id]: interviewThankYouLinkedin,
  [freelanceContractEmail.id]: freelanceContractEmail,
  [freelanceContractWhatsapp.id]: freelanceContractWhatsapp,
  [freelanceContractLinkedin.id]: freelanceContractLinkedin,
  [closedRoleEmail.id]: closedRoleEmail,
  [closedRoleWhatsapp.id]: closedRoleWhatsapp,
  [closedRoleLinkedin.id]: closedRoleLinkedin,
  [postInterviewFollowupEmail.id]: postInterviewFollowupEmail,
  [postInterviewFollowupWhatsapp.id]: postInterviewFollowupWhatsapp,
  [postInterviewFollowupLinkedin.id]: postInterviewFollowupLinkedin,
  [offerAcceptanceEmail.id]: offerAcceptanceEmail,
  [offerAcceptanceWhatsapp.id]: offerAcceptanceWhatsapp,
  [offerAcceptanceLinkedin.id]: offerAcceptanceLinkedin,
  [formalApplicationEmail.id]: formalApplicationEmail,
  [formalApplicationWhatsapp.id]: formalApplicationWhatsapp,
  [formalApplicationLinkedin.id]: formalApplicationLinkedin,
  [fresherApplicationEmail.id]: fresherApplicationEmail,
  [fresherApplicationWhatsapp.id]: fresherApplicationWhatsapp,
  [fresherApplicationLinkedin.id]: fresherApplicationLinkedin,
  [referralMentionEmail.id]: referralMentionEmail,
  [referralMentionWhatsapp.id]: referralMentionWhatsapp,
  [referralMentionLinkedin.id]: referralMentionLinkedin,
  [experiencedApplicationEmail.id]: experiencedApplicationEmail,
  [experiencedApplicationWhatsapp.id]: experiencedApplicationWhatsapp,
  [experiencedApplicationLinkedin.id]: experiencedApplicationLinkedin,
  [careerTransitionEmail.id]: careerTransitionEmail,
  [careerTransitionWhatsapp.id]: careerTransitionWhatsapp,
  [careerTransitionLinkedin.id]: careerTransitionLinkedin,
  [referralAskEmail.id]: referralAskEmail,
  [referralAskWhatsapp.id]: referralAskWhatsapp,
  [referralAskLinkedin.id]: referralAskLinkedin,
  [warmConnectEmail.id]: warmConnectEmail,
  [warmConnectWhatsapp.id]: warmConnectWhatsapp,
  [warmConnectLinkedin.id]: warmConnectLinkedin,

  // Backwards compatibility aliases for existing drafts
  ['referral_request:email']: referralAskEmail,
  ['referral_request:whatsapp']: referralAskWhatsapp,
  ['referral_request:linkedin']: referralAskLinkedin,
  ['freelance_pitch:email']: freelanceContractEmail,
  ['freelance_pitch:whatsapp']: freelanceContractWhatsapp,
  ['freelance_pitch:linkedin']: freelanceContractLinkedin,
};

export function getTemplate(categoryId, platformId) {
  const key = `${categoryId}:${platformId}`;
  return TEMPLATES[key] || TEMPLATES[`job_inquiry:${platformId}`] || Object.values(TEMPLATES)[0];
}
