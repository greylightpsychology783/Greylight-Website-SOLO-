<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { books } from '#lib/data/books.ts';
	import { site } from '#lib/data/site.ts';
	import '#lib/styles/books.css';
</script>

<Seo
	title="Books & Guides"
	description="Free self-therapy guidebooks on generalised anxiety, complex PTSD, OCD and intrusive thoughts, and the inner critic, by clinical psychologist Jake Ciminelli."
/>

<div class="pg-books">
	<section class="books-hero">
		<div class="container container-lg">
			<div class="hero-grid">
				<div class="hero-copy flow" style="--flow-space: var(--space-5);">
					<p class="eyebrow">Books &amp; guides</p>
					<h1 class="text-wrap-balance">Learn, heal, grow on your terms.</h1>
					<p class="lede">
						eBooks for people who feel confident applying therapeutic strategies on their own, or who
						want to better understand what's involved in helping themselves or a loved one. Each guide
						is self-paced, accessible, and grounded in evidence-based psychological practice.
					</p>
					<div class="hero-support flow" style="--flow-space: var(--space-3);">
						<p>Seeking one-on-one support?</p>
						<a class="btn primary md" href={site.bookingLink}>Book a free connection call</a>
					</div>
				</div>
				<div class="hero-note flow" style="--flow-space: var(--space-3);">
					<p class="note-label">How to use these resources</p>
					<p>
						These guides aren't a substitute for 1:1 therapy, medical advice, or emergency care, but
						they can be a powerful companion to ongoing professional support.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section books-section">
		<div class="container container-lg">
			<ul class="book-grid flow" style="--flow-space: var(--space-10);" aria-label="Greylight books">
				{#each books as book (book.slug)}
					{@const pdf = `/books/downloads/${book.slug}.pdf`}
					<li class="book-card surface-card">
						<div class="book-layout">
							<a class="book-cover" href={pdf} download aria-label="Download {book.title}">
								<img src="/books/covers/{book.slug}.avif" alt="Cover of {book.title}" loading="lazy" />
							</a>
							<div class="book-content flow" style="--flow-space: var(--space-6);">
								<div class="book-heading flow" style="--flow-space: var(--space-2);">
									<p class="book-audience">{book.audience}</p>
									<h3>{book.title}</h3>
								</div>
								<div class="book-body flow" style="--flow-space: var(--space-4);">
									<p>{book.description}</p>
									<div class="inside flow" style="--flow-space: var(--space-3);">
										<h4 class="book-learnings-title">Inside this guide, you'll learn:</h4>
										<ul class="learning-list flow" style="--flow-space: var(--space-4);">
											{#each book.learnings as item (item)}
												<li><Icon name="check" size={18} /> <span>{item}</span></li>
											{/each}
										</ul>
									</div>
								</div>
								<div class="book-actions">
									<a class="book-download" href={pdf} download>Free download</a>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
