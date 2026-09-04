# TeamFrame Commercial Site

Separate local launch-site project for TeamFrame.

This project does not contain TeamFrame application source code and does not deploy the product. It uses approved TeamFrame brand assets and current accepted product screenshots copied from the private TeamFrame repository.

## Source of Truth

The canonical repository is `takaven/teamframe-site` on GitHub. Local folders are disposable working checkouts and must not become parallel final copies.

## Launch Configuration

`NEXT_PUBLIC_TEAMFRAME_WALKTHROUGH_URL` is required before deployment.

All "Book a walkthrough" CTAs read from that single environment variable. When it is absent during local development, the CTA remains visible but is non-destructive and disabled.

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
