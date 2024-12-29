# Contributing to Heisenburg

Thanks for being interested in contributing to Heisenburg! This guide will help you get started.

## 📦 Development Setup

### Prerequisites

- Node.js >= 20.17
- PNPM >= 9.0.0
- Git
- macOS, Windows, or Linux

### Local Development

```bash
# Clone the repo
git clone https://github.com/himanshubhardwaz/heisenburg.git

# Navigate to directory
cd heisenburg

# Install dependencies
pnpm install

# Build packages
pnpm build

# Start development
pnpm dev
```

## Development Workflow

1. Fork the repository
2. Create a feature branch from main
3. Make your changes
4. Add/update tests
5. Run tests and linting
6. Create a changeset
7. Submit PR

### Useful Commands

```sh
# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm type-check

# Create changeset
pnpm changeset
```

## Code Standards

### TypeScript

Use TypeScript for all new code.
