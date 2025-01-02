---
title: Heisenburg
---

# Heisenburg

A modern, type-safe form validation ecosystem that prioritizes developer experience.

## Overview

Heisenburg is a framework-agnostic form validation library designed with TypeScript, offering:

- 🔒 **Type Safety**: Built from the ground up with TypeScript
- 🎯 **Framework Agnostic**: Core validation logic works with any UI framework
- ⚡️ **High Performance**: Optimized validation with minimal overhead
- 📦 **Modular Design**: Use only what you need
- 🛠️ **Extensible**: Easy to add custom validation rules

## Core Features

### Built-in Validators

- `isRequired` - Ensure field has a value
- `isEmail` - Validate email format
- `min/max` - Check length constraints
- `equals` - Match exact values
- `satisfiesRegex` - Test against custom patterns
- `customValidator` - Create your own validation rules

### Validation Controls

```typescript
// Example of core validation configuration
const config = {
  fields: {
    username: {
      isRequired: { message: "Username is required" },
      min: { length: 3, message: "Must be at least 3 characters" },
    },
  },
};
```

## Framework Support

- React (via @heisenburg/react)
- More frameworks coming soon!

## Getting Started

Choose your preferred framework integration:

- React Documentation (Coming Soon)
- Vue (Coming Soon)
- Svelte (Coming Soon)
- Vanilla JS (Coming Soon)

## Core Concepts

Validators: Building blocks for field validation
Configuration: Declarative validation setup
Messages: Customizable error messaging
Framework Bindings: UI framework integrations

## Why Heisenburg?

1. Type Safety First: Catch validation errors at compile time
2. Framework Agnostic Core: Switch UI frameworks without changing validation logic
3. Developer Experience: Intuitive API with excellent TypeScript support
4. Extensible: Easy to add custom validation rules
5. Modern: Built for modern JavaScript/TypeScript applications

## Contributing

We welcome contributions! Check our Contributing Guide for details.

## Community

GitHub Discussions
License
MIT © Heisenburg Contributors
