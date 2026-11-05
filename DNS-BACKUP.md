# DNS backup: original Squarespace website records

Saved 6 November 2026, before switching greylightpsychology.com.au from Squarespace to Vercel.
Only the **website** records change in the switch. Email (Google Workspace MX + SPF), Resend
(`send`, `rsend`, `resend._domainkey`) and the Mailchimp/DMARC records are not touched.

## How to revert to the old Squarespace site

**Easiest:** Squarespace → Domains → greylightpsychology.com.au → DNS → **Add Preset → Squarespace Defaults**.
This recreates all five records below in one click. Then delete the two Vercel records (listed further down).

**Manual alternative:** delete the two Vercel records, then add these under Custom records:

| Type  | Name | Data                    | TTL   |
|-------|------|-------------------------|-------|
| A     | @    | 198.185.159.144         | 4 hrs |
| A     | @    | 198.185.159.145         | 4 hrs |
| A     | @    | 198.49.23.144           | 4 hrs |
| A     | @    | 198.49.23.145           | 4 hrs |
| CNAME | www  | ext-sq.squarespace.com  | 4 hrs |

Your Squarespace site itself is unaffected by the switch. It stays in your Squarespace account,
so reverting brings it straight back (as long as the Squarespace website plan is still active).

## Records added for the new site (Vercel)

| Type  | Name | Data                                   |
|-------|------|----------------------------------------|
| A     | @    | 216.198.79.1                           |
| CNAME | www  | 3856be414bdfd9d2.vercel-dns-017.com    |
