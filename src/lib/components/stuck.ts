/** Adds `stuck` class to a sticky element once it pins under the site header. */
export function stuck(node: HTMLElement) {
	const update = () => {
		const navHeight = parseFloat(getComputedStyle(node).top) || 0;
		node.classList.toggle('stuck', node.getBoundingClientRect().top <= navHeight + 0.5);
	};
	update();
	window.addEventListener('scroll', update, { passive: true });
	return { destroy: () => window.removeEventListener('scroll', update) };
}
