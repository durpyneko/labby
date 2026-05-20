```
░██        ▄▄    ████▄  ████▄  ▄   ▄
░██       █  █   ██  █  ██  █   ▄▄▄
░██      ▄█▀▀█▄  ██▀▀█  ██▀▀█   ▄▄▄
░█████  ▄█    █▄ ██▄▄▀  ██▄▄▀    ▄
```

░
█

    Frontend Interview Challenge

# Prerequisites

- Bun Installed -> https://bun.com/

- Clone the repo & cwd

```bash
git clone https://git.durpy.dev/durpyneko/labby && cd labby/
```

- Be in the root of the repo for further instructions

# Set up

## Init dev env (NixOS)

```bash
nix develop
```

This does the prerequisites for you.

## Install deps

```bash
bun install
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

# Api

Api infomation can be accessed via `:3001/openapi` after Elysia is served
