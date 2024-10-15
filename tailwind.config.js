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
        sans: ["var(--font-mplusrounded1c)"],
      },
      colors: {
        sunset: {
          100: "#BABCD9", // Light lavender for subtle highlights
          200: "#516DA6", // Medium blue for secondary elements
          300: "#2D3C59", // Dark blue for primary background
          400: "#F2916D", // Warm orange for accents
          500: "#D9756C", // Muted red for additional accents
        },
        peach: {
          100: "#FFF0EB",
          200: "#FFD3C2",
          300: "#FFB69E",
          400: "#FF967A",
          500: "#F2916D",
          600: "#D9756C",
        },
        navy: {
          100: "#E6E9F0",
          200: "#B3BCCC",
          300: "#8190A9",
          400: "#516DA6",
          500: "#2D3C59",
          600: "#1C2A3A",
          700: "#0D1721",
        },
        lavender: {
          100: "#F0F1F9",
          200: "#DADDF0",
          300: "#BABCD9",
          400: "#9A9CC2",
          500: "#7A7DAC",
          600: "#5A5E95",
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

// /* Color Theme Swatches in RGBA */
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-1-rgba { color: rgba(47, 97, 140, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-2-rgba { color: rgba(88, 167, 216, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-3-rgba { color: rgba(91, 181, 216, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-4-rgba { color: rgba(242, 177, 121, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-5-rgba { color: rgba(242, 142, 106, 1); }

// /* Color Theme Swatches in HSLA */
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-1-hsla { color: hsla(208, 49, 36, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-2-hsla { color: hsla(202, 62, 59, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-3-hsla { color: hsla(196, 62, 60, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-4-hsla { color: hsla(28, 82, 71, 1); }
// .Beautiful-spring-border,-blooming-rose-bush-on-a-blue-background.-Flowering-rose-hips-against-the-blue-sky.-Soft-selective-focus-5-hsla { color: hsla(16, 84, 68, 1); }

// Japan
/* Color Theme Swatches in Hex */
// .JAPAN-BY-CAR-Continued-2-1-hex { color: #F2DD72; }
// .JAPAN-BY-CAR-Continued-2-2-hex { color: #F2C879; }
// .JAPAN-BY-CAR-Continued-2-3-hex { color: #F2B279; }
// .JAPAN-BY-CAR-Continued-2-4-hex { color: #8C4830; }
// .JAPAN-BY-CAR-Continued-2-5-hex { color: #F29B88; }

// /* Color Theme Swatches in RGBA */
// .JAPAN-BY-CAR-Continued-2-1-rgba { color: rgba(242, 220, 113, 1); }
// .JAPAN-BY-CAR-Continued-2-2-rgba { color: rgba(242, 199, 121, 1); }
// .JAPAN-BY-CAR-Continued-2-3-rgba { color: rgba(242, 177, 121, 1); }
// .JAPAN-BY-CAR-Continued-2-4-rgba { color: rgba(140, 72, 47, 1); }
// .JAPAN-BY-CAR-Continued-2-5-rgba { color: rgba(242, 155, 135, 1); }

// /* Color Theme Swatches in HSLA */
// .JAPAN-BY-CAR-Continued-2-1-hsla { color: hsla(50, 83, 69, 1); }
// .JAPAN-BY-CAR-Continued-2-2-hsla { color: hsla(39, 82, 71, 1); }
// .JAPAN-BY-CAR-Continued-2-3-hsla { color: hsla(28, 82, 71, 1); }
// .JAPAN-BY-CAR-Continued-2-4-hsla { color: hsla(16, 49, 36, 1); }
// .JAPAN-BY-CAR-Continued-2-5-hsla { color: hsla(11, 80, 74, 1); }

// Pool
/* Color Theme Swatches in Hex */
// .Sea-View-Pool-1-hex { color: #3F9BA6; }
// .Sea-View-Pool-2-hex { color: #425920; }
// .Sea-View-Pool-3-hex { color: #F2E2C4; }
// .Sea-View-Pool-4-hex { color: #8C7A64; }
// .Sea-View-Pool-5-hex { color: #593A28; }

// /* Color Theme Swatches in RGBA */
// .Sea-View-Pool-1-rgba { color: rgba(62, 155, 165, 1); }
// .Sea-View-Pool-2-rgba { color: rgba(66, 89, 32, 1); }
// .Sea-View-Pool-3-rgba { color: rgba(242, 226, 196, 1); }
// .Sea-View-Pool-4-rgba { color: rgba(140, 121, 99, 1); }
// .Sea-View-Pool-5-rgba { color: rgba(89, 58, 40, 1); }

// /* Color Theme Swatches in HSLA */
// .Sea-View-Pool-1-hsla { color: hsla(185, 44, 44, 1); }
// .Sea-View-Pool-2-hsla { color: hsla(84, 47, 23, 1); }
// .Sea-View-Pool-3-hsla { color: hsla(39, 64, 85, 1); }
// .Sea-View-Pool-4-hsla { color: hsla(33, 16, 47, 1); }
// .Sea-View-Pool-5-hsla { color: hsla(22, 37, 25, 1); }

// Sunset
/* Color Theme Swatches in Hex */
// .Beautiful-pastel-cloudy-sunset-1-hex { color: #BABCD9; }
// .Beautiful-pastel-cloudy-sunset-2-hex { color: #516DA6; }
// .Beautiful-pastel-cloudy-sunset-3-hex { color: #2D3C59; }
// .Beautiful-pastel-cloudy-sunset-4-hex { color: #F2916D; }
// .Beautiful-pastel-cloudy-sunset-5-hex { color: #D9756C; }

// /* Color Theme Swatches in RGBA */
// .Beautiful-pastel-cloudy-sunset-1-rgba { color: rgba(186, 187, 216, 1); }
// .Beautiful-pastel-cloudy-sunset-2-rgba { color: rgba(81, 109, 165, 1); }
// .Beautiful-pastel-cloudy-sunset-3-rgba { color: rgba(44, 59, 89, 1); }
// .Beautiful-pastel-cloudy-sunset-4-rgba { color: rgba(242, 144, 109, 1); }
// .Beautiful-pastel-cloudy-sunset-5-rgba { color: rgba(216, 117, 108, 1); }

// /* Color Theme Swatches in HSLA */
// .Beautiful-pastel-cloudy-sunset-1-hsla { color: hsla(236, 28, 79, 1); }
// .Beautiful-pastel-cloudy-sunset-2-hsla { color: hsla(219, 34, 48, 1); }
// .Beautiful-pastel-cloudy-sunset-3-hsla { color: hsla(219, 33, 26, 1); }
// .Beautiful-pastel-cloudy-sunset-4-hsla { color: hsla(16, 83, 68, 1); }
// .Beautiful-pastel-cloudy-sunset-5-hsla { color: hsla(5, 58, 63, 1); }

// Dusk
/* Color Theme Swatches in Hex */
// .Dusk-1-hex { color: #010626; }
// .Dusk-2-hex { color: #022873; }
// .Dusk-3-hex { color: #021F59; }
// .Dusk-4-hex { color: #4B7DBF; }
// .Dusk-5-hex { color: #F29057; }

// /* Color Theme Swatches in RGBA */
// .Dusk-1-rgba { color: rgba(0, 6, 38, 1); }
// .Dusk-2-rgba { color: rgba(2, 39, 114, 1); }
// .Dusk-3-rgba { color: rgba(1, 30, 89, 1); }
// .Dusk-4-rgba { color: rgba(74, 125, 191, 1); }
// .Dusk-5-rgba { color: rgba(242, 144, 87, 1); }

// /* Color Theme Swatches in HSLA */
// .Dusk-1-hsla { color: hsla(230, 96, 7, 1); }
// .Dusk-2-hsla { color: hsla(219, 96, 22, 1); }
// .Dusk-3-hsla { color: hsla(219, 96, 17, 1); }
// .Dusk-4-hsla { color: hsla(213, 47, 52, 1); }
// .Dusk-5-hsla { color: hsla(22, 85, 64, 1); }

// Matcha
/* Color Theme Swatches in Hex */
// .Bridges-1-hex { color: #D98F95; }
// .Bridges-2-hex { color: #618C64; }
// .Bridges-3-hex { color: #748C70; }
// .Bridges-4-hex { color: #C4D9BF; }
// .Bridges-5-hex { color: #A66F6A; }

// /* Color Theme Swatches in RGBA */
// .Bridges-1-rgba { color: rgba(216, 143, 149, 1); }
// .Bridges-2-rgba { color: rgba(96, 140, 99, 1); }
// .Bridges-3-rgba { color: rgba(115, 140, 112, 1); }
// .Bridges-4-rgba { color: rgba(196, 216, 190, 1); }
// .Bridges-5-rgba { color: rgba(165, 111, 106, 1); }

// /* Color Theme Swatches in HSLA */
// .Bridges-1-hsla { color: hsla(354, 49, 70, 1); }
// .Bridges-2-hsla { color: hsla(123, 18, 46, 1); }
// .Bridges-3-hsla { color: hsla(112, 11, 49, 1); }
// .Bridges-4-hsla { color: hsla(106, 25, 79, 1); }
// .Bridges-5-hsla { color: hsla(5, 25, 53, 1); }

// Night
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-1-hex { color: #0455BF; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-2-hex { color: #023373; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-3-hex { color: #022340; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-4-hex { color: #F29727; }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-5-hex { color: #F26716; }

// /* Color Theme Swatches in RGBA */
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-1-rgba { color: rgba(3, 85, 191, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-2-rgba { color: rgba(2, 51, 114, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-3-rgba { color: rgba(1, 34, 63, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-4-rgba { color: rgba(242, 150, 38, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-5-rgba { color: rgba(242, 102, 21, 1); }

// /* Color Theme Swatches in HSLA */
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-1-hsla { color: hsla(213, 96, 38, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-2-hsla { color: hsla(213, 96, 22, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-3-hsla { color: hsla(208, 94, 12, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-4-hsla { color: hsla(33, 88, 55, 1); }
// .Aerial-view-of-the-Osaka-Bay-harbor-area-at-night-5-hsla { color: hsla(22, 89, 51, 1); }

// Cherry blossom at night:
/* Color Theme Swatches in Hex */
// .Cherry-Blossom-in-the-Night-City-1-hex { color: #F20519; }
// .Cherry-Blossom-in-the-Night-City-2-hex { color: #D996A2; }
// .Cherry-Blossom-in-the-Night-City-3-hex { color: #03588C; }
// .Cherry-Blossom-in-the-Night-City-4-hex { color: #012840; }
// .Cherry-Blossom-in-the-Night-City-5-hex { color: #048ABF; }

// /* Color Theme Swatches in RGBA */
// .Cherry-Blossom-in-the-Night-City-1-rgba { color: rgba(242, 4, 24, 1); }
// .Cherry-Blossom-in-the-Night-City-2-rgba { color: rgba(216, 149, 161, 1); }
// .Cherry-Blossom-in-the-Night-City-3-rgba { color: rgba(2, 87, 140, 1); }
// .Cherry-Blossom-in-the-Night-City-4-rgba { color: rgba(1, 39, 63, 1); }
// .Cherry-Blossom-in-the-Night-City-5-rgba { color: rgba(3, 138, 191, 1); }

// /* Color Theme Swatches in HSLA */
// .Cherry-Blossom-in-the-Night-City-1-hsla { color: hsla(354, 96, 48, 1); }
// .Cherry-Blossom-in-the-Night-City-2-hsla { color: hsla(348, 46, 71, 1); }
// .Cherry-Blossom-in-the-Night-City-3-hsla { color: hsla(202, 96, 28, 1); }
// .Cherry-Blossom-in-the-Night-City-4-hsla { color: hsla(202, 96, 12, 1); }
// .Cherry-Blossom-in-the-Night-City-5-hsla { color: hsla(196, 96, 38, 1); }

// Arctic
/* Color Theme Swatches in Hex */
// .Arctic-1-hex { color: #8F613B; }
// .Arctic-2-hex { color: #344B4F; }
// .Arctic-3-hex { color: #3B838F; }
// .Arctic-4-hex { color: #3A322B; }
// .Arctic-5-hex { color: #E3FBFF; }

// /* Color Theme Swatches in RGBA */
// .Arctic-1-rgba { color: rgba(143, 97, 59, 1); }
// .Arctic-2-rgba { color: rgba(52, 75, 79, 1); }
// .Arctic-3-rgba { color: rgba(59, 131, 143, 1); }
// .Arctic-4-rgba { color: rgba(58, 50, 43, 1); }
// .Arctic-5-rgba { color: rgba(227, 251, 255, 1); }

// /* Color Theme Swatches in HSLA */
// .Arctic-1-hsla { color: hsla(27, 41, 39, 1); }
// .Arctic-2-hsla { color: hsla(188, 20, 25, 1); }
// .Arctic-3-hsla { color: hsla(188, 41, 39, 1); }
// .Arctic-4-hsla { color: hsla(27, 14, 19, 1); }
// .Arctic-5-hsla { color: hsla(188, 100, 94, 1); }

// Other sunset
/* Color Theme Swatches in Hex */
// .color-theme_sunset-1-hex { color: #6E6873; }
// .color-theme_sunset-2-hex { color: #686D8C; }
// .color-theme_sunset-3-hex { color: #F29863; }
// .color-theme_sunset-4-hex { color: #A64B29; }
// .color-theme_sunset-5-hex { color: #0D0000; }

// /* Color Theme Swatches in RGBA */
// .color-theme_sunset-1-rgba { color: rgba(110, 104, 115, 1); }
// .color-theme_sunset-2-rgba { color: rgba(104, 109, 140, 1); }
// .color-theme_sunset-3-rgba { color: rgba(242, 152, 99, 1); }
// .color-theme_sunset-4-rgba { color: rgba(166, 75, 41, 1); }
// .color-theme_sunset-5-rgba { color: rgba(13, 0, 0, 1); }

// /* Color Theme Swatches in HSLA */
// .color-theme_sunset-1-hsla { color: hsla(272, 5, 42, 1); }
// .color-theme_sunset-2-hsla { color: hsla(231, 14, 47, 1); }
// .color-theme_sunset-3-hsla { color: hsla(22, 84, 66, 1); }
// .color-theme_sunset-4-hsla { color: hsla(16, 60, 40, 1); }
// .color-theme_sunset-5-hsla { color: hsla(0, 100, 2, 1); }
