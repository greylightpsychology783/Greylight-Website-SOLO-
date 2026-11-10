import { escapeHtml } from './email.ts';

const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

export interface CampaignInfo {
	source: string;
	medium: string;
	campaign: string;
	ad: string;
	page: string;
}

/** Reads the hidden UTM fields from a submitted form. Missing values default to "direct". */
export function readCampaign(data: FormData, page: string): CampaignInfo {
	const get = (k: (typeof KEYS)[number]) =>
		String(data.get(k) ?? '')
			.replace(/[\r\n\t]+/g, ' ')
			.trim()
			.slice(0, 200);
	return {
		source: get('utm_source') || 'direct',
		medium: get('utm_medium'),
		campaign: get('utm_campaign'),
		ad: get('utm_content'),
		page
	};
}

/** One line for the notification email, e.g. "Source: meta / Medium: paid_social / Campaign: nov / Ad: video-a · Page: /start". */
export function campaignLine(c: CampaignInfo): string {
	const parts = [`Source: ${c.source}`];
	if (c.medium) parts.push(`Medium: ${c.medium}`);
	if (c.campaign) parts.push(`Campaign: ${c.campaign}`);
	if (c.ad) parts.push(`Ad: ${c.ad}`);
	return `${parts.join(' / ')} · Page: ${c.page}`;
}

export const campaignHtml = (c: CampaignInfo) =>
	`<p style="color:#5b6670;font-size:13px;border-top:1px solid #ddd;padding-top:8px;margin-top:16px">${escapeHtml(campaignLine(c))}</p>`;
