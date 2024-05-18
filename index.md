---
title: tldr pages
titleTemplate: 
---

# tldr pages {#title}

<small>Simplified and community-driven man pages</small> {.center}

<section id="badges">

[![GitHub stars](https://img.shields.io/github/stars/tldr-pages/tldr.svg?logo=github#no-border#static)](https://github.com/tldr-pages/tldr)

[![Twitter](https://img.shields.io/badge/twitter-tldr__pages-%231DA1F2.svg#no-border#static)](https://twitter.com/tldr_pages)

[![Fosstodon](https://img.shields.io/badge/fosstodon-tldr__pages-blue#no-border#static)](https://fosstodon.org/@tldr_pages)

[![Matrix](https://img.shields.io/matrix/tldr-pages:matrix.org?label=chat+on+Matrix#no-border#static)](https://matrix.to/#/#tldr-pages:matrix.org)

[![License](https://img.shields.io/npm/l/tldr#no-border#static)](https://github.com/tldr-pages/tldr/blob/main/LICENSE.md)

</section>

The tldr pages are a community effort to simplify the beloved [man pages](https://en.wikipedia.org/wiki/Man_page) with practical examples.

![tldr screenshot](assets/img/screenshot.png#static)
<figcaption>Example of a tldr page for the <code>tar</code> command</figcaption>

Try the [live demo](https://tldr.inbrowser.app) below, have a look at the [PDF version](/assets/tldr-book.pdf), or follow the [installation instructions](#installation).

<noscript>
The live demo requires JavaScript to function. To access the content, please enable JavaScript in your browser settings.
</noscript>

<iframe id="iframe" src="https://tldr.inbrowser.app/pages/common/tar" width="100%" height="500px"></iframe>

## Installation

As of now, our most mature client is the Node.js one, which you can easily install from npm:

```sh
npm install -g tldr
```

There are many more clients that have sprouted from the community, including:

- command-line clients
- GUI clients for desktop and mobile
- web-based clients
- clients which integrate with other applications

They can be found [in the wiki](https://github.com/tldr-pages/tldr/wiki/tldr-pages-clients).

## Contributing

This repository is an ever-growing collection of examples for the most common UNIX, Linux, macOS, SunOS, Android and Windows commands.

You're encouraged to create or edit pages in the `pages/` folder at the [project's repository](https://github.com/tldr-pages/tldr) and submit a pull request.

Just keep in mind the [Contributing guidelines](https://github.com/tldr-pages/tldr/blob/main/CONTRIBUTING.md).
