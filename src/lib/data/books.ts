export interface Book {
	slug: string;
	audience: string;
	title: string;
	description: string;
	learnings: string[];
}

export const books: Book[] = [
	{
		slug: 'generalised-anxiety',
		audience: 'Self-guided recovery resource',
		title: 'Self-therapy Guidebook: Generalised Anxiety',
		description:
			'A free self-therapy guidebook for people struggling with anxiety and worry, or for anyone wanting to build foundational skills before therapy.',
		learnings: [
			'Develop a clear understanding of anxiety, how it begins, and how it is maintained.',
			'Learn the theoretical models used to understand and treat generalised anxiety.',
			'Practise mindfulness, relaxation, thought diary, and defusion skills.',
			'Identify your values and tackle behavioural patterns that maintain anxiety.',
			'Understand the worry cycle and how to respond to it more effectively.'
		]
	},
	{
		slug: 'complex-ptsd',
		audience: 'Self-guided recovery resource',
		title: 'Self-therapy Guidebook: Complex Post-Traumatic Stress Disorder',
		description:
			'A four-module self-therapy guidebook for people experiencing symptoms of Complex PTSD who want evidence-based strategies they can work through at their own pace.',
		learnings: [
			'Develop a clear understanding of complex trauma, how it begins, and how it differs from PTSD.',
			'Learn about the broad spectrum of symptoms common to C-PTSD.',
			'Understand attachment theory, evolutionary psychology, and the nervous system impacts of trauma.',
			'Explore the four trauma response types and identify which patterns show up for you.',
			'Learn about emotional flashbacks, inner and outer critics, and toxic shame.'
		]
	},
	{
		slug: 'ocd-intrusive-thoughts',
		audience: 'Self-guided recovery resource',
		title: 'Self-therapy Guidebook: Intrusive Thoughts + OCD',
		description:
			'A self-guided eBook for people struggling with OCD, anxiety, and intrusive thoughts who want practical skills when therapy feels out of reach.',
		learnings: [
			'Learn what OCD is, what can cause it, and how it is understood in the DSM-5.',
			'Explore common OCD presentations and the cognitive model of OCD.',
			'Understand ACT and Exposure and Response Prevention as treatment approaches.',
			'Practise defusion, values work, and alternatives to compulsions.',
			'Map compulsions using ranking exercises and the compulsion token strategy.'
		]
	},
	{
		slug: 'slaying-a-giant',
		audience: 'Depth psychology guide',
		title: 'Slaying a Giant',
		description:
			'A comprehensive self-help eBook for subduing the inner critic using insights from Depth Psychology and Schema Therapy.',
		learnings: [
			'Identify and reframe thinking distortions that fuel the inner critic.',
			'Use behavioural exercises to test negative predictions and build resilience.',
			'Explore imagery rescripting and limited reparenting to heal past wounds.',
			'Work through real-life examples, step-by-step instructions, and reflective prompts.',
			'Cultivate a more supportive, compassionate inner voice.'
		]
	}
];
