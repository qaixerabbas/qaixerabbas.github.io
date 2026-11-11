# Qaiser Abbas portfolio

This is the same portfolio content and visual design reorganized for Jekyll. The page is still static HTML/CSS/JavaScript after Jekyll renders it, but repeated content is no longer duplicated in `index.html`.

## Where to edit content

- `_data/site.yml`: name, affiliation, email, navigation, social links, and About Me paragraphs.
- `_data/research_interests.yml`: one research-interest item per list entry.
- `_data/news.yml`: one news item per list entry. Keep items in newest-first order.
- `_data/publications.yml`: one publication per list entry. Add the title, link, authors, venue, year, and optional code/BibTex links.
- `_data/teaching.yml`: one teaching position per list entry.
- `_data/services.yml`: conference and journal reviewer lists.

## Where to edit structure

- `index.html` contains the page shell and section order.
- `_includes/` contains the reusable renderers for section headings, publications, teaching, and reviewer lists.
- `assets/css/` contains the existing theme styles.
- `assets/js/theme.js` contains the existing theme presets and toggle.
- `assets/js/site.js` contains the existing external-link and mobile-navigation behavior.

## Local preview

Install Jekyll using the method recommended for your operating system, then run:

```bash
jekyll serve
```

Open the local URL shown by Jekyll. Adding an item to a data file is enough to render it; no repeated HTML block is needed.
