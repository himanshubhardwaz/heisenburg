# Heisenburg

[![CI](https://github.com/himanshubhardwaz/heisenburg/actions/workflows/ci.yml/badge.svg)](https://github.com/himanshubhardwaz/heisenburg/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)

A modern form validation ecosystem built with TypeScript.

## Features

- 🔒 Type-safe validation
- 🎯 Framework agnostic core
- ⚡️ High performance
- 📦 Modular architecture

## Project Structure

```sh
.
├── apps
│ ├── docs # Documentation site
│ └── react-playground # Development playground
└── packages
├── core # Core validation logic
├── react # React integration
├── eslint-config # Shared ESLint config
└── typescript-config # Shared TS config # Clone repository
```

```sh
# Clone repository
git clone https://github.com/himanshubhardwaz/heisenburg.git

# Install dependencies
pnpm install

# Build packages
pnpm build

# Start development
pnpm dev
```

### Available Commands

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Start development server |
| `pnpm build`     | Build all packages       |
| `pnpm test`      | Run test suite           |
| `pnpm lint`      | Lint codebase            |
| `pnpm changeset` | Create changeset         |

## Documentation

Visit our [documentation site](https://heisenburg.dev) to learn more about:

- Getting started
- Core concepts
- API reference
- Examples

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Flow

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Create changeset
6. Submit PR

## License

MIT © Heisenburg Contributors
