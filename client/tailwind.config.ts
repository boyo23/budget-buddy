// Import the withMT function from @material-tailwind/react/utils
const withMT = require('@material-tailwind/react/utils/withMT')

// Import the Config type from 'tailwindcss'
import type { Config } from 'tailwindcss'

// Create your Tailwind CSS configuration
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#262C50',
        contrast: '#F33579',
        darkPrimary: '#0E132A',
        darkText: '#656ea6',
        darkWhite: '#F0F0F0',
        darkCard: '#171a2e'
      },
    },
    fontFamily: {
      sans: ['"Jost"', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export const theme = {
  menu: {
    styles: {
      base: {
        menu: {
          bg: "bg-black"
        }
      }
    }
  }
}

// Wrap your configuration using withMT
module.exports = withMT(config)


