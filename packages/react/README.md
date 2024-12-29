# @heisenburg/react

A powerful and seamless React integration for the Heisenburg form validation ecosystem.

---

## 🚀 Installation

Install the package using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm add @heisenburg/react

# Using npm
npm install @heisenburg/react

# Using yarn
yarn add @heisenburg/react
```

---

## 💡 Features

- Declarative form validation with minimal configuration.
- Extensive field validation rules like required fields, regex matching, min/max length, and custom validators.
- Real-time error handling.
- Intuitive API for effortless integration into React components.

---

## 🛠️ Usage

Here's how you can start using `@heisenburg/react` in your project:

```tsx
import { useForm } from "@heisenburg/react";
import type {
  OnSubmitCallbackContext,
  ValidationConfig,
} from "@heisenburg/react";

const validationFunction = (value: string) => value === "abc";

export default function Home() {
  const config: ValidationConfig = {
    fields: {
      email: {
        isRequired: { message: "Email is Required" },
        isEmail: { message: "Please enter a valid Email address" },
      },
      password: {
        isRequired: { message: "Password is Required" },
      },
      maxField: {
        max: { message: "Max size exceeded", length: 5 },
        isRequired: { message: "This field is required" },
      },
      minField: {
        min: { message: "Min size not fulfilled", length: 5 },
      },
      equalField: {
        equals: { message: "Does not match expected value", value: "React" },
      },
      regexField: {
        satisfiesRegex: {
          message: "You can only enter alphabets in this field",
          regex: /^[A-Za-z]+$/,
        },
      },
      validatorField: {
        customValidator: {
          message: "Validation failed by validator function",
          validator: validationFunction,
        },
      },
    },
    onSubmit: (context: OnSubmitCallbackContext) => {
      if (context.isFormValid) {
        console.log("Form is valid and ready to be submitted");
      } else {
        console.log("Form has errors");
      }
    },
    showErrors: "blur",
  };

  const { getFieldProps, getFormProps, errors } = useForm(config);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form
        {...getFormProps()}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Heisenburg Form
        </h1>

        <div className="mb-4">
          <input
            {...getFieldProps("email")}
            type="text"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("password")}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("maxField")}
            type="text"
            placeholder="Max 5 char"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.maxField && (
            <p className="text-red-500 mt-2">{errors.maxField}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("minField")}
            type="text"
            placeholder="Min 5 char"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.minField && (
            <p className="text-red-500 mt-2">{errors.minField}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("equalField")}
            type="text"
            placeholder="Enter React"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.equalField && (
            <p className="text-red-500 mt-2">{errors.equalField}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("regexField")}
            type="text"
            placeholder="Enter only alphabets"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.regexField && (
            <p className="text-red-500 mt-2">{errors.regexField}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...getFieldProps("validatorField")}
            type="text"
            placeholder="Only accepted value: 'abc'"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.validatorField && (
            <p className="text-red-500 mt-2">{errors.validatorField}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
```

---

## 🧩 Contributing

We use **[Changesets](https://github.com/changesets/changesets)** for versioning and managing releases. To contribute:

1. Fork the repository and create a new branch.
2. Make your changes and ensure the code is well-tested.
3. Commit your changes with a descriptive message.
4. Open a pull request.

For development, ensure you have `pnpm` installed:

```bash
pnpm install
```

Run tests with:

```bash
pnpm test
```

---

## 📜 License

MIT © [Heisenburg Contributors](https://github.com/heisenburg/contributors)

---

## 📬 Contact

For support or inquiries, please reach out via [GitHub Issues](https://github.com/heisenburg/react/issues).
