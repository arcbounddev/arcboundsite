# Arcbound homepage (static build)

Unbundled from `Arcbound-Homepage-Nov18.html` for GitHub Pages.

- `index.html` – the homepage
- `activate.html` – the "Activate" long page (was a base64 blob opened via `blob:` URL; now a real page the homepage iframes in)
- `assets/img`, `assets/fonts`, `assets/js`, `assets/video` – every embedded file, de-duplicated and named by content hash
- `.nojekyll` – tells GitHub Pages to serve files as-is

Deploy: push this folder's contents to the repo root, then Settings → Pages → Deploy from branch → `main` / root.

Forms: the Apply and Newsletter forms post JSON to whatever is in their `data-endpoint` attribute.
Search index.html for `data-ap-form data-endpoint=` and `data-nl-form="" data-endpoint=` to set them.
