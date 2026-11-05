import { error } from '@sveltejs/kit';
import { clusters, getCluster } from '#lib/data/services.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => clusters.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
	const cluster = getCluster(params.slug);
	if (!cluster) error(404, 'Not found');
	return { cluster };
};
