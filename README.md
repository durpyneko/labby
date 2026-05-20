```
░██        ▄▄    ████▄  ████▄  ▄   ▄
░██       █  █   ██  █  ██  █   ▄▄▄
░██      ▄█▀▀█▄  ██▀▀█  ██▀▀█   ▄▄▄
░█████  ▄█    █▄ ██▄▄▀  ██▄▄▀    ▄
```

░
█

    Frontend Interview Challenge

# Prerequisite steps

1. Clone the repo & cwd

```bash
git clone https://git.durpy.dev/durpyneko/labby && cd labby/
```

2. Bun Installed -> https://bun.com/

3. Be in the root of the repo for further instructions

# Set up

## Init dev env (NixOS)

```bash
nix develop
```

This does the prerequisite deps for you.

## Install deps

```bash
cd labby/ && bun i && cd server/ && bun i && cd ../../
```

## Dev build

```bash
cd labby/ && bun dev
```

This spins up both Nextjs & Elysia in parralel using Bun

## Prod builds

```bash
cd labby/
bun run build
bun run start
```

This builds both Nextjs and Elysia and starts their compiled builds

Note: Press "D" on the webpage to toggle light/dark mode

# Api

Api infomation can be accessed via `:3001/openapi` after Elysia is served

# Tools & Frameworks used:

- [Bun (Package Manager) ↗](https://bun.com/)
- [Nextjs (Frontend) ↗](https://nextjs.org/)
- [Shadcn (UI Lib) ↗](https://ui.shadcn.com/)
- [ElysiaJS (Backend Server) ↗](https://elysiajs.com/)
