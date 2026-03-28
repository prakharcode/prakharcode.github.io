# prakharcode.github.io

Terminal-themed portfolio. A macOS-style window centered on a dark background, navigated with vim keybindings. No build step, no framework — just two files.

## Structure

```
index.html   — template, layout, styles, keybindings (don't edit for content)
config.js    — all personal data (the only file you need to edit)
```

## Updating content

Everything lives in `config.js`. Open it and edit the relevant section.

### Identity & bio

```js
handle  : 'prakharcode',
name    : { first: 'Prakhar', last: 'Srivastava' },
tagline : 'Senior Data Engineer · Amsterdam, NL',
bio     : `...`,
```

The `bio` field supports inline colour highlights with `[text](color)` syntax:

```js
bio: `Building [data infrastructure](green) with [Spark](cyan) and [AI agents](amber).`
// colors: green | cyan | amber
```

### Links (home page buttons)

```js
links: [
  { label: 'GitHub', icon: '◈', url: 'https://github.com/yourhandle' },
  // add or remove entries freely
],
```

### Stats strip

```js
stats: [
  { val: '5+', label: 'yrs. data eng.' },
],
```

### About — bio, stack, experience

```js
about: {
  bio: `Plain text bio shown on the about page.`,

  stack: ['Apache Spark', 'dbt', ...],   // add/remove tools

  experience: [
    {
      date    : 'Jun 2023 – Present',
      role    : 'Senior Data Engineer',
      company : 'Tiqets · Amsterdam',
      desc    : 'One or two lines.',
    },
  ],
},
```

## Keybindings

| Key | Action |
|-----|--------|
| `j` / `k` | Scroll line down / up |
| `D` / `U` | Scroll half-page down / up |
| `G` | Scroll to bottom |
| `g g` | Scroll to top |
| `H` / `L` | Previous / next tab |
| `g t` / `g T` | Previous / next tab |
| `1` / `2` | Jump to tab by number |
| `:` | Open command line (`:home`, `:about`, `:q!`) |
| `?` | Toggle keybinding help |
| `Esc` | Close overlay |

## Running locally

No build step needed. Just open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server
# then open http://localhost:8000
```

## Profile image

Pulled automatically from GitHub at `https://avatars.githubusercontent.com/{handle}`. Update your GitHub profile picture and it reflects here instantly.

## Deploying

Hosted on GitHub Pages from the `master` branch. Push to `master` and it's live.
