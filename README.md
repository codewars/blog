# The Codewars Blog

Blog for Codewars with [Zola](https://www.getzola.org/) + [TailwindCSS](https://tailwindcss.com/).

## Contributing Content

Contributions are welcomed!

To fix any issues you found, simply edit the Markdown files under `content/` and open pull requests.

If you'd like to write about Codewars and publish here, please open an issue about it first.

## Developing

### Installing Dependencies

You'll need `zola` and `node` installed:

- `zola` executable (a single binary, see [how to install it](https://www.getzola.org/documentation/getting-started/installation/))
- `node` v12+ (see [how to install it](https://nodejs.org/en/download))

Then run `npm install`.

### Commands

- `npm run dev` to start a local server that reloads automatically on file change. Works by running `zola serve` and `postcss --watch` concurrently. CSS changes rarely thanks to Tailwind and Zola is extremely fast, so each build finishes in milliseconds!
- `npm run build` to build the site.

### Directory Structure

```text
├── content/           <- Markdown files
├── public/            <- generated site
├── static/            <- static assets to be copied to `public/`
├── templates/         <- Tera templates
├── config.toml        <- Zora config
├── package.json
├── postcss.config.js
├── styles.css         <- source of `static/styles.css` (processed by PostCSS)
└── tailwind.config.js
```

## Shortcodes

Zola's [shortcodes] allow easily inject HTML in Markdown and reduce repetition. We curently have the following custom shortcodes defined:

- `airtable(id: string, color?: string = "gray")` [embeds Airtable base][airtable-embed] with `id` with optional `color` for `backgroundColor`.
- `container(type: note|tip|info|warning|danger, title?: string)` wraps `body` in a styled container `<div>` with icon, similar to [gridsome-remark-container]. `title` defaults to `type`.
- `details(summary: string)` wraps `body` in `<details>` with `<summary>`.
- `figure(src: string, alt?: string, themed?: bool = false)` produces centered responsive image inside `<figure>` with `alt` in `<figcaption>` if provided. `src` is a co-located asset and relative to the page or section. If `themed` is true, `light`/`dark` image variants are used. `src` is a file name without `-light`/`-dark` suffix. For example, `figure(src='foo.png', themed=true)` requires `foo-light.png` and `foo-dark.png`.

## TODO

- [ ] Use feeds to show recent articles on the Codewars dashboard
- [ ] Show short summary in listing
- [ ] Featured articles
- [ ] Categorize and provide navigation
- [ ] Authors
- [ ] Improve tagging
- [ ] Archiving old articles
- [ ] Add "Edit on GitHub" link

[shortcodes]: https://www.getzola.org/documentation/content/shortcodes/
[gridsome-remark-container]: https://gridsome.org/plugins/gridsome-plugin-remark-container
[airtable-embed]: https://support.airtable.com/hc/en-us/articles/217846478-Embedding-a-view-or-base
