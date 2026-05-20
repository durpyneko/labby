```
░██        ▄▄    ████▄  ████▄  ▄   ▄
░██       █  █   ██  █  ██  █   ▄▄▄
░██      ▄█▀▀█▄  ██▀▀█  ██▀▀█   ▄▄▄
░█████  ▄█    █▄ ██▄▄▀  ██▄▄▀    ▄
```

░
█

    Frontend Interview Challenge

# Prerequisits

Bun Installed -> https://bun.com/

Be in the root of the repo for further instructions

# Set up

## Init dev env (NixOS)

```bash
nix develop
```

This does the prerequisits for you.

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
