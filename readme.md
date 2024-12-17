# Syncify ~ Dawn

Basic level [Syncify](https://github.com/panoply/syncify) strap building the Shopify [Dawn](https://github.com/Shopify/dawn) theme. This example is the most low level (elementary) configurations for building themes leveraging Syncify.

### Showcasing

This strap demonstrates how Syncify can be used as a replacement for the Shopify CLI. Consult the [syncify.config.js](/syncify.config.js) file overview of the logic.

- Uses `syncify.config.js` file for configuration
- Optionally Bundles JavaScript files
- Optionally Bundles CSS files
- Optionally Process CSS with PostCSS, Autoprefixer and CleanCSS.
- Leverages sub-directories and renames
- Using project-level `.env` file for shop credentials

# Instructions

You can start hacking on this project by either forking and installing depedendencies or using the `sy create` command prompt. It is assumed that you have installed [@syncify/cli](https://github.com/panoply/syncify) as a global depencency on your computer and have access to store credentials.

- [Installation](https://syncify.sh/setup/installation/)
- [Authentication](https://syncify.sh/setup/authentication/)

## sy create

Open up your terminal and run the following command:

```bash
sy create dawn
```

## Commands

Couple of basic commands to use during development:

```bash
$ sy -w              # Runs Syncify in development watch mode
$ sy -w --hot        # Runs Syncify in development watch mode with hot reloads
$ sy -b              # Runs Syncify in build mode
$ sy -b --prod       # Runs Syncify in build mode with production output
```

# License

MIT
