# Full-Stack Template

This repo is the standard full-stack template for developing React/NodeJS full-stack applications

- [PNPM Workspaces](https://pnpm.io/workspaces) - Used to manage the monorepo

## Frontend

- [Vite](https://vite.dev/) - Frontend build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [DaisyUI](https://daisyui.com/) - UI Tailwind [Components](https://daisyui.com/components/)
- [Jest](https://jestjs.io/) - Javascript Testing Framework
- [React Router](https://reactrouter.com/home) - Routing

## API

- [ExpressJS](https://expressjs.com/) - Web Framework for NodeJS
- [dotenv](https://www.npmjs.com/package/dotenv) - Use environment variables
- [env-var](https://www.npmjs.com/package/env-var) - validate and sanitize your environmental variables

## Testing in dev

First start the postgres db container:

```bash
pnpm run docker:env
```

Then start the development frontend and api servers:

```bash
pnpm dev
```

## Notes

There are 3 different workspaces:
- frontend
- api
- packages/utils

### Install Packages in different workspaces

_Note_: Run from the top level directory of this repo

```bash
pnpm install tailwindcss@latest @tailwindcss/vite@latest --filter frontend
```

or

```bash
pnpm install -D typescript --filter api
```