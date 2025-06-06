/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
        },
        background: {
          100: "var(--color-background-100)",
          200: "var(--color-background-200)",
          300: "var(--color-background-300)",
          400: "var(--color-background-400)",
          500: "var(--color-background-500)",
          600: "var(--color-background-600)",
          700: "var(--color-background-700)",
        },
        accent: {
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
        },
        // sakura: {
        //   100: "#fdf7f8",
        //   200: "#f9d5db",
        //   300: "#f4b8c2",
        //   400: "#ef9aa9",
        //   500: "#ea7d90",
        //   600: "#e55f77",
        // },
        // matcha: {
        //   100: "#f7f9f4",
        //   200: "#dde5c7",
        //   300: "#c7d4a5",
        //   400: "#b2c483",
        //   500: "#9cb361",
        //   600: "#86a33f",
        // },
        // indigo: {
        //   100: "#f0f1f9",
        //   200: "#c5cae9",
        //   300: "#9fa8da",
        //   400: "#7986cb",
        //   500: "#3f51b5",
        //   600: "#303f9f",
        // },
      },
    },
  },
  plugins: [],
};
// Spring
// /* Color Theme Swatches in Hex */
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-1-hex { color: #30618C; }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-2-hex { color: #59A8D9; }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-3-hex { color: #5BB5D9; }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-4-hex { color: #F2B279; }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-5-hex { color: #F28F6B; }

// Pool
/* Color Theme Swatches in Hex */
// .Sea-View-Pool-1-hex { color: #3F9BA6; }
// .Sea-View-Pool-2-hex { color: #425920; }
// .Sea-View-Pool-3-hex { color: #F2E2C4; }
// .Sea-View-Pool-4-hex { color: #8C7A64; }
// .Sea-View-Pool-5-hex { color: #593A28; }

// Sunset
/* Color Theme Swatches in Hex */
// .Beautiful-pastel-cloudy-sunset-1-hex { color: #BABCD9; }
// .Beautiful-pastel-cloudy-sunset-2-hex { color: #516DA6; }
// .Beautiful-pastel-cloudy-sunset-3-hex { color: #2D3C59; }
// .Beautiful-pastel-cloudy-sunset-4-hex { color: #F2916D; }
// .Beautiful-pastel-cloudy-sunset-5-hex { color: #D9756C; }

// Dusk
/* Color Theme Swatches in Hex */
// .Dusk-1-hex { color: #010626; }
// .Dusk-2-hex { color: #022873; }
// .Dusk-3-hex { color: #021F59; }
// .Dusk-4-hex { color: #4B7DBF; }
// .Dusk-5-hex { color: #F29057; }

// Matcha
/* Color Theme Swatches in Hex */
// .Bridges-1-hex { color: #D98F95; }
// .Bridges-2-hex { color: #618C64; }
// .Bridges-3-hex { color: #748C70; }
// .Bridges-4-hex { color: #C4D9BF; }
// .Bridges-5-hex { color: #A66F6A; }

// Night
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-1-hex { color: #0455BF; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-2-hex { color: #023373; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-3-hex { color: #022340; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-4-hex { color: #F29727; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-5-hex { color: #F26716; }

// Cherry blossom at night:
/* Color Theme Swatches in Hex */
// .Cherry-Blossom-in-the-Night-City-1-hex { color: #F20519; }
// .Cherry-Blossom-in-the-Night-City-2-hex { color: #D996A2; }
// .Cherry-Blossom-in-the-Night-City-3-hex { color: #03588C; }
// .Cherry-Blossom-in-the-Night-City-4-hex { color: #012840; }
// .Cherry-Blossom-in-the-Night-City-5-hex { color: #048ABF; }

// Arctic
/* Color Theme Swatches in Hex */
// .Arctic-1-hex { color: #8F613B; }
// .Arctic-2-hex { color: #344B4F; }
// .Arctic-3-hex { color: #3B838F; }
// .Arctic-4-hex { color: #3A322B; }
// .Arctic-5-hex { color: #E3FBFF; }

// Other sunset
/* Color Theme Swatches in Hex */
// .color-theme_sunset-1-hex { color: #6E6873; }
// .color-theme_sunset-2-hex { color: #686D8C; }
// .color-theme_sunset-3-hex { color: #F29863; }
// .color-theme_sunset-4-hex { color: #A64B29; }
// .color-theme_sunset-5-hex { color: #0D0000; }
