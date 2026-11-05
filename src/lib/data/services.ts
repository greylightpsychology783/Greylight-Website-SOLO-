export type Shape =
	| 'quarter-tl'
	| 'quarter-tr'
	| 'quarter-br'
	| 'quarter-bl'
	| 'circle'
	| 'half-top'
	| 'half-bottom'
	| 'leaf-br'
	| 'leaf-tr';
export type Tone = 'blue' | 'terracotta' | 'ink';

export interface Concern {
	id: string;
	title: string;
	lede: string;
	body: string;
	points: string[];
}

export interface Cluster {
	slug: string;
	/** Short label for navigation */
	label: string;
	title: string;
	group: 'common' | 'life';
	shape: Shape;
	tone: Tone;
	image: string;
	imageAlt: string;
	summary: string;
	intro: string;
	keyPoints: string[];
	concerns: Concern[];
}

export const clusters: Cluster[] = [
	{
		slug: 'anxiety',
		label: 'Anxiety',
		title: 'Anxiety & panic',
		group: 'common',
		shape: 'quarter-tl',
		tone: 'blue',
		image: '/images/services/anxiety-and-panic.avif',
		imageAlt: 'A person sitting quietly with hand resting on their chest',
		summary:
			'When the body keeps bracing for threats that never quite arrive, day-to-day life starts to shrink around the worry.',
		intro:
			"Anxiety is the brain's alarm system misfiring. I work with generalised worry, health anxiety, social anxiety and panic attacks, using practical tools that calm the nervous system and help you reclaim the parts of life avoidance has narrowed.",
		keyPoints: [
			'Evidence-based treatment for worry, panic and avoidance',
			'Nervous-system regulation tools you can use between sessions',
			'A gradual return to the situations anxiety has made smaller'
		],
		concerns: [
			{
				id: 'general-anxiety',
				title: 'General anxiety',
				lede: 'Persistent worry, restlessness or tension that interferes with daily life.',
				body: "When worry runs in the background most of the day, sleep, focus and decision-making all start to wear down. Together we'll understand what the worry is trying to protect, and build ways to step out of the loop without forcing it.",
				points: [
					'Identify the worry patterns keeping the cycle alive',
					'Build practical strategies for sleep, focus and decision-making',
					'Develop a calmer baseline rather than chasing relief in the moment'
				]
			},
			{
				id: 'health-anxiety',
				title: 'Health anxiety',
				lede: 'Persistent fears about serious illness despite reassurance from clinicians.',
				body: 'Health anxiety can quietly take over, with hours lost to symptom-checking, scans and reassurance-seeking. I focus on helping you step out of the certainty trap and rebuild trust in your body, without dismissing how real the fear feels.',
				points: [
					'Reduce reassurance-seeking and symptom-checking cycles',
					'Learn to tolerate uncertainty rather than chase it away',
					'Rebuild a workable relationship with your body'
				]
			},
			{
				id: 'panic-attacks',
				title: 'Panic attacks',
				lede: 'Sudden surges of fear with racing heart, dizziness and breathlessness.',
				body: "Panic attacks are intensely physical and often arrive without warning, and the fear of having another one can quickly become its own problem. We'll work on understanding what your body is doing, reducing the alarm response and rebuilding confidence in the situations panic has started to limit.",
				points: [
					'Demystify what is happening in the body during a panic attack',
					'Reduce avoidance of trains, drives, crowds or being far from home',
					'Lower the background fear of "the next one" over time'
				]
			},
			{
				id: 'social-anxiety',
				title: 'Social anxiety',
				lede: 'Self-consciousness, dread and avoidance in social or performance situations.',
				body: 'Social anxiety often hides behind looking fine on the outside while running constant self-monitoring on the inside. Our work targets the inner critic and the post-event replay, and gently widens the situations you can move through with less rehearsal.',
				points: [
					'Address the self-monitoring loop and post-event rumination',
					'Practical work on speaking up, dating, performance and group settings',
					'Build a more grounded sense of self that holds up under attention'
				]
			}
		]
	},
	{
		slug: 'ocd',
		label: 'OCD',
		title: 'OCD & Pure-O',
		group: 'common',
		shape: 'circle',
		tone: 'terracotta',
		image: '/images/services/ocd.avif',
		imageAlt: 'Hands being washed with soap at a sink',
		summary:
			'OCD can make the mind feel unsafe from the inside. Targeted treatment works on the loop directly, without feeding it through reassurance.',
		intro:
			'OCD causes unwanted thoughts or images that trigger anxiety, leading to repetitive behaviours or mental rituals for relief. In Pure-O, those rituals happen in the mind, through rumination or checking, making the struggle invisible but just as real. I use evidence-based OCD treatment, including ERP and ACT-informed work, that targets the loop directly.',
		keyPoints: [
			'ERP (Exposure and Response Prevention) as the core approach',
			'Specific work for mental rituals, rumination and reassurance-seeking',
			'Pacing that is firm but kind, with measurable progress'
		],
		concerns: [
			{
				id: 'ocd',
				title: 'OCD',
				lede: 'Obsessions and compulsions that feel hard to interrupt.',
				body: 'OCD is a false-alarm loop where obsessions drive compulsions, checking, avoidance or reassurance-seeking. ERP is the gold-standard treatment: it supports you to face intrusive thoughts and fears without doing compulsions, breaking the cycle and retraining the brain over time.',
				points: [
					'ERP (Exposure and Response Prevention) as the core approach',
					'Specific work for compulsions, checking and reassurance-seeking',
					'Pacing that is firm but kind, with measurable progress'
				]
			},
			{
				id: 'pure-o',
				title: 'Pure-O',
				lede: 'Intrusive thoughts and mental rituals that can stay hidden from the outside.',
				body: "Pure-O is OCD where the compulsions mostly happen internally, through rumination, mental checking, neutralising or reassurance loops. I target these hidden rituals with the same evidence-based OCD principles, without treating the thoughts themselves as the problem to solve.",
				points: [
					'Map the mental rituals that keep the loop alive',
					'Reduce rumination, reassurance-seeking and covert checking',
					'Use ERP and ACT-informed work at a workable pace'
				]
			}
		]
	},
	{
		slug: 'trauma',
		label: 'Trauma',
		title: 'Trauma (PTSD & CPTSD)',
		group: 'common',
		shape: 'circle',
		tone: 'ink',
		image: '/images/services/trauma-ptsd-cptsd.avif',
		imageAlt: 'A person walking on a quiet path',
		summary:
			'Trauma teaches the brain to brace for danger long after the threat has passed. Therapy helps that protective wiring ease.',
		intro:
			'Trauma can leave lasting imprints on how we think, feel and connect with others, whether it comes from a single event or long-term emotional wounds. I start with stabilisation and capacity-building, then move toward deeper processing only when it is clinically appropriate and feels workable for you, so healing can unfold at your own pace.',
		keyPoints: [
			'Trauma-informed assessment and stabilisation work',
			'Support for childhood trauma, PTSD and CPTSD',
			'Pacing chosen with you, not pushed onto you'
		],
		concerns: [
			{
				id: 'childhood-trauma',
				title: 'Childhood & attachment trauma',
				lede: 'Healing from adverse or neglectful experiences that shaped early development.',
				body: 'Early experiences leave patterns in how we relate to ourselves and others, often long before we have words for them. I use Schema Therapy to work with how those patterns show up now, in self-worth, relationships and the inner voice, with care for the parts of you that learned to cope.',
				points: [
					'Schema-informed work on the patterns formed in childhood',
					'Address self-worth, the inner critic and emotional regulation',
					'Long-view care for the parts of you that learned to cope'
				]
			},
			{
				id: 'ptsd',
				title: 'PTSD',
				lede: 'Intrusions, hypervigilance and avoidance after a traumatic event.',
				body: 'After a traumatic event, the nervous system can keep reacting as though the danger is still present. We work in stages, starting with stabilisation and capacity-building before any deeper processing, with the focus on safety and pacing.',
				points: [
					'Staged trauma work prioritising stabilisation first',
					'Tools for hypervigilance, intrusions and emotional flooding',
					'A clear say in the pace and depth of the work'
				]
			},
			{
				id: 'cptsd',
				title: 'Complex trauma (CPTSD)',
				lede: 'Trauma responses shaped by prolonged or repeated traumatic experiences.',
				body: 'CPTSD often forms through repeated or sustained trauma, especially where escape or protection was limited. Our work focuses on the nervous system, relationships, self-worth and the parts of you that learned to survive, rebuilding safety, trust and self-compassion.',
				points: [
					'Paced work with trauma patterns formed over time',
					'Support for emotional flooding, shame and relational triggers',
					'Capacity-building before deeper trauma processing'
				]
			}
		]
	},
	{
		slug: 'depression',
		label: 'Depression',
		title: 'Depression',
		group: 'common',
		shape: 'half-bottom',
		tone: 'terracotta',
		image: '/images/services/depression-service.avif',
		imageAlt: 'Soft morning light through a window',
		summary:
			'When motivation, energy and joy have been quietly leaking out, getting through the day starts to take everything you have.',
		intro:
			'Depression goes beyond sadness. It can drain motivation, dull joy and make even simple tasks feel heavy, and it often develops from prolonged stress, loss or self-critical thinking. With the right support, therapy can help you rediscover meaning, energy and hope in daily life.',
		keyPoints: [
			'Understand what keeps your depression in place, not just how it presents',
			'Behavioural activation paired with self-compassion work',
			'A focus on small, sustainable shifts rather than overhauls'
		],
		concerns: [
			{
				id: 'depression',
				title: 'Depression',
				lede: 'Persistent low mood, loss of interest and a heavy kind of exhaustion.',
				body: "Depression arrives in many forms. It can dull the things that used to matter, make ordinary tasks feel disproportionately heavy, or leave you wondering why you can't move forward. My goal is to understand the shape of yours, whether it is tied to trauma, unhelpful thinking styles and behaviours, or something deeper that hasn't had enough room to be understood.",
				points: [
					'Understand what keeps your depression in place, not just how it presents',
					'Work with trauma, thinking patterns, behaviours or deeper emotional roots',
					'Rebuild momentum gently, at a pace that respects how heavy things feel'
				]
			}
		]
	},
	{
		slug: 'relationships',
		label: 'Relationships',
		title: 'Relationships & attachment',
		group: 'life',
		shape: 'leaf-tr',
		tone: 'terracotta',
		image: '/images/services/relationship-issues.avif',
		imageAlt: 'Two people seated together in conversation',
		summary:
			'Relationships are where our oldest patterns come alive. They are also where most of the change is felt.',
		intro:
			'Relationships can be a source of both deep comfort and deep pain. Conflict, communication breakdowns, or patterns that repeat across partners often point to unmet emotional needs. Therapy helps you understand these dynamics, build healthier connections, and create relationships grounded in trust and mutual respect.',
		keyPoints: [
			'Insight into the patterns underneath repeated conflicts',
			'Work on attachment styles and unmet emotional needs',
			'Concrete tools for communication, boundaries and repair'
		],
		concerns: [
			{
				id: 'attachment',
				title: 'Attachment',
				lede: 'Patterns of connection and distance rooted in early caregiver relationships.',
				body: "Early attachment shapes how safe closeness feels and how you respond when it is uncertain. We'll work on the felt patterns, not just the theory, so that change is something you experience rather than only understand.",
				points: [
					'Identify your attachment style as it shows up in real life',
					'Work on the activation that comes with closeness or distance',
					'Build the capacity for steady, mutual connection'
				]
			},
			{
				id: 'relationship-patterns',
				title: 'Relationship patterns',
				lede: 'Conflict, disconnection or recurring patterns with partners and close others.',
				body: 'When the same arguments and disconnections keep happening, the issue is usually less about the topic and more about the underlying pattern. We work on what is being protected, what is being asked for, and how to do that more directly.',
				points: [
					'Understand the pattern under the recurring conflict',
					'Work on communication, boundaries and repair',
					'Address the parts of you that get activated under pressure'
				]
			}
		]
	},
	{
		slug: 'self-direction',
		label: 'Self',
		title: 'Self & direction',
		group: 'life',
		shape: 'quarter-tr',
		tone: 'blue',
		image: '/images/services/mens-issues.avif',
		imageAlt: 'A person looking out a window in soft light',
		summary:
			'When the question is less about a clear problem and more about who you are and where you are going.',
		intro:
			'These concerns sit beneath the surface, in the way you talk to yourself, the choices you keep deferring, the sense of not quite landing in your own life. Therapy here is reflective and practical, with room to think clearly and to make moves.',
		keyPoints: [
			'Reflective space alongside concrete decisions and steps',
			'Work on the inner voice that runs the show',
			'A clearer sense of values, direction and what to prioritise'
		],
		concerns: [
			{
				id: 'self-esteem',
				title: 'Self-esteem',
				lede: 'Harsh self-criticism and a persistent sense of not being enough.',
				body: 'Low self-esteem rarely shifts through positive thinking alone. I work extensively with Schema Therapy to shift entrenched patterns of self-criticism and self-sabotage, looking at where the inner critic came from, the rules it enforces, and the experiences that keep proving it right.',
				points: [
					'Understand where the inner critic came from',
					'Replace performance-based worth with something more stable',
					'Practical work on speaking up, asking for things and being seen'
				]
			},
			{
				id: 'identity',
				title: 'Identity',
				lede: 'Exploring who you are, what you value and where you belong.',
				body: "Identity questions surface at every life stage, and especially after big transitions. Therapy here isn't about handing you an answer, but about clearing space for you to hear your own.",
				points: [
					'Clarify what is genuinely yours versus inherited or performed',
					'Work through identity shifts after big life changes',
					'Hold complexity without forcing premature resolution'
				]
			},
			{
				id: 'life-purpose',
				title: 'Life purpose',
				lede: 'Finding direction, meaning and a sense of why it matters.',
				body: 'A loss of purpose is rarely loud. It tends to show up as drift, low motivation, or a quiet sense that none of this is yours. I use values-based work to reconnect what you do day-to-day with what actually matters to you.',
				points: [
					'Values clarification grounded in real life, not abstractions',
					'Address the gap between your current life and what matters',
					'Concrete, right-sized experiments toward direction'
				]
			},
			{
				id: 'mens-issues',
				title: "Men's issues",
				lede: 'Feeling lost, disconnected, or under pressure to hold everything together.',
				body: "Modern life can leave many men feeling lost, disconnected, or under pressure to hold everything together. Therapy offers a grounded, no-nonsense space to make sense of that weight, and to rebuild direction, emotional strength and clarity of purpose. It's not about fixing what's \"wrong\" with you; it's about helping you reconnect with what makes you feel strong, capable and alive.",
				points: [
					'Direct, respectful conversation without having to have it all sorted',
					'Make sense of stress, relationships, identity and expectations as one picture',
					'Rebuild steadiness and purpose from what already matters to you'
				]
			}
		]
	},
	{
		slug: 'transitions',
		label: 'Transitions',
		title: 'Stress & life transitions',
		group: 'life',
		shape: 'half-top',
		tone: 'ink',
		image: '/images/services/stress-life-transitions-service.avif',
		imageAlt: 'Soft natural light over a quiet interior',
		summary:
			'Major change, even welcome change, can leave you feeling stretched, ungrounded or unsure of what comes next.',
		intro:
			"Major changes, even positive ones, can leave you feeling overwhelmed, stuck or uncertain. Whether it's a career shift, a relationship change or a new life stage, therapy can help you process, adapt and find stability through times of transition.",
		keyPoints: [
			'Support through major work, family and life changes',
			'Tools for stress management and emotional regulation',
			'Clearer planning for what comes next, without forcing it'
		],
		concerns: [
			{
				id: 'stress',
				title: 'Stress',
				lede: 'Feeling overwhelmed by demands that exceed your capacity to cope.',
				body: 'Stress that has gone on too long stops feeling like stress and starts feeling like you. We work on the load itself, on how you are carrying it, and on the early warning signs that often get overridden.',
				points: [
					'Audit the actual load and what can change',
					'Reconnect with the early warning signs you tend to override',
					'Build practical recovery into the week, not just weekends'
				]
			},
			{
				id: 'adjustment',
				title: 'Adjustment',
				lede: 'Adapting to major life changes such as relocation, parenthood, diagnosis or separation.',
				body: 'Adjustment difficulties are a normal response to a not-normal amount of change. Therapy gives you room to process what has shifted and to find your footing in the new shape of your life.',
				points: [
					'Process what has shifted, including the parts you did not choose',
					'Find your footing in the new shape of life',
					'Address the secondary stresses change tends to bring'
				]
			},
			{
				id: 'study-career',
				title: 'Study & career',
				lede: 'Motivation, direction and pressure through study and career transitions.',
				body: "Study and career stress often layers performance pressure on top of identity questions. We'll work on both, so the strategy you build isn't just about productivity but about what you're working toward.",
				points: [
					'Address performance pressure and burnout risk together',
					'Clarify what is actually being chased and why',
					'Build sustainable patterns of work and rest'
				]
			},
			{
				id: 'workplace',
				title: 'Workplace',
				lede: 'Conflict, pressure or dissatisfaction affecting how you show up at work.',
				body: 'Work takes up a large share of life, and difficulties there reach further than the office. We work on the situation itself, on the patterns you bring into it, and on the decisions waiting to be made.',
				points: [
					'Think clearly about conflict, dynamics and decisions',
					'Address the patterns you bring into work situations',
					'Plan changes deliberately rather than reactively'
				]
			}
		]
	}
];

export const clusterGroups = [
	{ id: 'common', label: 'Common challenges' },
	{ id: 'life', label: 'Life, self, and relationships' }
] as const;

export const getCluster = (slug: string) => clusters.find((c) => c.slug === slug);
export const clusterHref = (c: Cluster, concern?: string) =>
	`/how-i-help/${c.slug}${concern ? `#${concern}` : ''}`;
