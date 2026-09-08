# TeamFrame Commercial Site

Separate GitHub-backed commercial-site project for TeamFrame.

This project does not contain TeamFrame application source code and does not deploy the product. It uses approved TeamFrame brand assets and current accepted product screenshots copied from the private TeamFrame repository.

## Source of Truth

The canonical repository is `takaven/teamframe-site` on GitHub. Local folders are disposable working checkouts and must not become parallel final copies.

## Launch Configuration

`NEXT_PUBLIC_TEAMFRAME_WALKTHROUGH_URL` may be set before deployment when a dedicated walkthrough destination is available.

All "Book a walkthrough" CTAs read from that single environment variable when it is present. When it is absent, the CTA uses the approved contact fallback: `mailto:admin@takaven.com?subject=TeamFrame%20walkthrough%20request`.

## Local Use

```bash
npm run build
npm run dev
```

## Build

```bash
npm run build
```

The build writes `dist/config.js` from `NEXT_PUBLIC_TEAMFRAME_WALKTHROUGH_URL`.
