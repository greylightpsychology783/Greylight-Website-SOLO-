# Greylight Psychology website

SvelteKit 3 site for Jake Ciminelli's solo practice, styled with the Greylight design system.

## Develop

```bash
npm install
npm run dev
```

## Editing content

| What | Where |
| --- | --- |
| Fees, rebate, email, locations, links | `src/lib/data/site.ts` |
| How I help areas and concerns | `src/lib/data/services.ts` |
| Books | `src/lib/data/books.ts` (covers/PDFs in `static/books/`) |
| Page copy | `src/routes/**/+page.svelte` |

Styles: design tokens and shared components live in `src/app.css`; each page has a scoped stylesheet in `src/lib/styles/`.

## Privacy policy PDF

The "View PDF" button on `/privacy` opens `static/docs/greylight-privacy-policy.pdf`, which is generated from the page itself. After editing the policy, run the site (`npm run dev`) and regenerate it:

```bash
npm run pdf:privacy
```

## Contact form

The contact form and the health professional referral form (`/health-professional-referral`, with PDF/Word uploads up to 4 MB total) both email the practice inbox through [Resend](https://resend.com). Set these environment variables (locally in `.env`, and in Vercel → Project → Settings → Environment Variables):

- `RESEND_API_KEY`: your Resend API key
- `CONTACT_FROM`: a sender on a domain verified in Resend, e.g. `Greylight Website <website@greylightpsychology.com.au>`
- `CONTACT_TO` (optional): defaults to `enquiries@greylightpsychology.com.au`

Without these, the form shows a "couldn't be sent" message that points people to the email address.

## Deploy

Push to a Git repo and import it in Vercel; the Vercel adapter is already configured. Running `npm run build` locally on Windows fails at the final Vercel packaging step unless Windows Developer Mode is on (it needs symlinks). The site itself builds fine, and Vercel's own builds aren't affected.
