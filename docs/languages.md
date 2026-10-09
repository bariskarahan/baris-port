# English and Turkish

English keeps the original URLs. Turkish uses `/tr`, `/tr/thinking`, `/tr/experiments`, `/tr/about`, and the same article slugs under `/tr/thinking/`.

`middleware.ts` rewrites Turkish URLs internally to the shared page implementations and overwrites the request's locale header. Pages and the root layout read that header so content, document language, page titles, descriptions and accessibility labels are translated on the server. Shared assets are excluded from middleware routing.

The header's native language links keep the current page, query string and fragment. They set the `notebook-language` cookie for one year (SameSite=Lax, Secure on HTTPS). Returning to `/` with a Turkish preference redirects to `/tr`. Choosing English updates the preference before requesting the English URL. Language links use a full navigation so the root layout and document language change together; ordinary site links use Next navigation within the selected language.

`lib/i18n.ts` contains interface translations and URL helpers. `lib/content-tr.ts` contains the complete Turkish article and experiment translations. Illustration captions and source annotations live in `lib/visuals.ts`. Topic keys and article/experiment IDs stay unchanged so filters, deep links and section anchors work in either language. Turkish search uses Turkish casing rules.

Flags are local vector icons with native language names, accessible link labels and a visible current-language state. Small screens show EN/TR abbreviations beside the flags.
