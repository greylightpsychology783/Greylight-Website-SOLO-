export const site = {
	name: 'Greylight Psychology',
	url: 'https://www.greylightpsychology.com.au',
	email: 'enquiries@greylightpsychology.com.au',
	instagram: 'https://www.instagram.com/greylight_psychology/',
	instagramHandle: '@Greylight_Psychology',
	referralForm: '/health-professional-referral',
	/** Halaxy online booking for the free 15-minute connection call (Tue–Fri 9–10am slots). */
	bookingLink:
		'https://www.halaxy.com/book/psychologist/mr-jake-ciminelli/1723677/1321489?appointmentTypeId=613831',
	locations: ['Camberwell', 'Richmond', 'Malvern']
} as const;

/** Upload limits for the health professional referral form (Vercel caps request bodies at ~4.5 MB). */
export const referralLimits = {
	maxFiles: 5,
	maxTotalBytes: 4 * 1024 * 1024,
	maxTotalLabel: '4 MB'
} as const;

/** Fees, per the Fees & Availability page (Medicare rebate as of July 2026). */
export const fees = {
	sessionFee: '$270',
	apsRate: '$330',
	rebate: '$149.05',
	outOfPocket: '$120.95',
	sessionLength: '50 min',
	rebateFrom: 'July 2026',
	workcover: '$208.70',
	tac: '$250'
} as const;
