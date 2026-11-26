<!--
	Microsoft Clarity (session replays and heatmaps), on the ad landing page (/start) and /thank-you ONLY.
	Requested by Jake on 2026-11-26. The enquiry form is masked (data-clarity-mask on EnquiryForm), and links from
	these pages to the main site use a full page load so Clarity doesn't keep recording on other pages.
	The project ID is public (it's in every page that loads the tag), so it isn't a secret.
-->
<script lang="ts">
	import { dev } from '$app/environment';
	const CLARITY_ID = 'zjfxs41het';
	const tag = `<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_ID}");</` + `script>`;
</script>

<!-- Only on the built site, so local development and testing don't create sessions in Clarity. -->
<svelte:head>
	{#if !dev}{@html tag}{/if}
</svelte:head>
