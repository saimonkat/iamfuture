import { formattedTWLavlues } from "./formattedTailwind/formattedValues";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      /* INFO: Shadcn-ui */
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Values Need to be formatted (Start)
      maxWidth: formattedTWLavlues.maxWidth,
      fontSize: formattedTWLavlues.fontSize,
      lineHeight: formattedTWLavlues.lineHeight,
      spacing: formattedTWLavlues.spacing,
      width: formattedTWLavlues.width,
      minWidth: formattedTWLavlues.minWidth,
      minHeight: formattedTWLavlues.minHeight,
      // Values Need to be formatted (END)

      backgroundImage: {
        "brand-gradient": "var(--brand-gradient)",
        "secondary-gradient": "var(--secondary-gradient)",
      },
      letterSpacing: {
        tighter: "0.03125em", // 0.5 px
      },
      fontFamily: {
        dancing_script: "var(--dancing-script)",
        archivo: "var(--archivo)",
      },
      colors: {
        blue: {
          primary: {
            900: "hsl(var(--primary-900))", // 235°, 68%, 7%     dark: 0°, 0%, 6%
            800: "hsl(var(--primary-800))", // 231°, 37%, 15%    dark: 225°, 5%, 17%
            600: "hsl(var(--primary-600))", // 231°, 27%, 25%    dark: 220°, 4%, 29%
            300: "hsl(var(--primary-300))", // 235°, 25%, 73%    dark: 220°, 4%, 57%
          },
          // INFO: for text
          faint: "hsl(var(--primary-faint))",
        },
        classic: {
          900: "#101010",
          800: "#292a2d",
          600: "#484a4e",
          300: "#8c8f95",
        },
        semiTransparentWhite: "#FFFFFF80",

        /* INFO: Shadcn-ui */
        lg: "var(--radius)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xxxl: "var(--radius-pill)",
        2.5: "0.625rem", // 10px
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
