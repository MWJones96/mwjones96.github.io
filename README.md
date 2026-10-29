# mwjones96.github.io

Source for Matthew Jones's portfolio site, served by GitHub Pages at [mwjones96.github.io](https://mwjones96.github.io).

## Overview

A static site with no build step. GitHub Pages serves the files as they are, so a change takes effect once it is pushed and Pages has redeployed.

## Pages

- **`/`** (`index.html`): homepage with a short introduction, a "View CV" button, cards linking to selected projects on GitHub, and links to GitHub, LinkedIn and email. Styles are inline and follow the visitor's light or dark colour scheme.
- **`/cv/`** (`cv/index.html`): redirects to the right CV for the visitor's location, decided from the browser's time zone:
  - `Europe/London`, `Europe/Belfast`, `Europe/Guernsey`, `Europe/Isle_of_Man` or `Europe/Jersey` go to `/uk/cv.pdf`.
  - Any other time zone, or one that cannot be read, goes to `/us/cv.pdf`.
  - Without JavaScript, the page shows a link to `/us/cv.pdf`.
- **`/us/cv.pdf`** and **`/uk/cv.pdf`**: the US and UK versions of the CV.

## How the CVs are updated

The two PDFs are built in a separate private repository. When the CV sources there change, a GitHub Actions workflow copies the built PDFs to `us/cv.pdf` and `uk/cv.pdf` in this repository and pushes a commit titled "Update CV from <commit>". Don't edit the PDFs here by hand: the next update will overwrite them.

Because the workflow pushes to this repository, pull before committing changes of your own.

## Running locally

Serve the repository root with any static file server so that root-relative links such as `/cv/` resolve, for example:

```sh
python3 -m http.server
```

then visit `http://localhost:8000`.

## Project structure

```
index.html      Homepage
cv/index.html   Time-zone-based redirect to the US or UK CV
us/cv.pdf       US CV (published automatically)
uk/cv.pdf       UK CV (published automatically)
```
