/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        error: "var(--color-error)",

        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-dim": "var(--color-surface-dim)",
        "surface-bright": "var(--color-surface-bright)",

        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest":
          "var(--color-surface-container-highest)",

        "on-primary": "var(--color-on-primary)",
        "on-secondary": "var(--color-on-secondary)",
        "on-tertiary": "var(--color-on-tertiary)",
        "on-error": "var(--color-on-error)",
        "on-background": "var(--color-on-background)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",

        "primary-container": "var(--color-primary-container)",
        "secondary-container": "var(--color-secondary-container)",
        "tertiary-container": "var(--color-tertiary-container)",
        "error-container": "var(--color-error-container)",

        "on-primary-container": "var(--color-on-primary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "on-error-container": "var(--color-on-error-container)",

        "primary-fixed": "var(--color-primary-fixed)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",

        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-secondary-fixed-variant":
          "var(--color-on-secondary-fixed-variant)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "on-tertiary-fixed-variant":
          "var(--color-on-tertiary-fixed-variant)",

        "surface-tint": "var(--color-surface-tint)",
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "inverse-primary": "var(--color-inverse-primary)",

        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
      },

      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        gutter: "var(--spacing-gutter)",
        "container-max": "var(--max-width-container)",
      },

      borderRadius: {
        DEFAULT: "var(--radius-default)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      maxWidth: {
        "container-max": "var(--max-width-container)",
      },
    },
  },
};