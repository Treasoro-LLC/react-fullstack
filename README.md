# Full-Stack Template

This repo is the standard full-stack template for developing React/NodeJS full-stack applications

- [PNPM Workspaces](https://pnpm.io/workspaces) - Used to manage the monorepo

## Frontend

- [Vite](https://vite.dev/) - Frontend build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [DaisyUI](https://daisyui.com/) - UI Tailwind [Components](https://daisyui.com/components/)
- [Jest](https://jestjs.io/) - Javascript Testing Framework

## API

- [ExpressJS](https://expressjs.com/) - Web Framework for NodeJS

## Notes

There are two different workspaces:
- frontend
- api

### Install Packages in different workspaces

_Note_: Run from the top level directory of this repo

```bash
pnpm install tailwindcss@latest @tailwindcss/vite@latest --filter frontend
```

or

```bash
pnpm install -D typescript --filter api
```