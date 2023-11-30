# Setting up `budget-buddy/client`

## Installation

1. Vite + React + Typescript

   Create `client`

   ```bash
   npm create vite@latest client -- --template react-ts

   cd client
   npm install
   npm run dev
   ```

1. Tailwind CSS

   Install Tailwind CSS

   ```bash
   npm install --save-dev tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

1. Dependencies

   Install dependencies

   ```bash
   npm install react-icons react-router-dom
   ```

   Install devDependencies

   ```bash
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier prettier-plugin-tailwindcss
   ```

## Configuration

1. Vite

   Remove boilerplate

   ```bash
   rm src/App.tsx src/App.css
   rm -r public/vite.svg src/assets
   ```

1. Tailwind CSS

   Configure template paths in `tailwind.config.js`

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Add the Tailwind directives in `./src/index.css`

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

1. Prettier

   Create `.prettierrc` with the following content

   ```json
   {
     "plugins": ["prettier-plugin-tailwindcss"],
     "printWidth": 120,
     "tabWidth": 2,
     "singleQuote": true,
     "semi": false
   }
   ```

   Configure `extends, plugins, and rules` in `.eslintrc.cjs`

   ```javascript
   module.exports = {
     extends: ['...', 'plugin:prettier/recommended'],
     plugins: ['...', 'prettier'],
     rules: {
      '...',
      'prettier/prettier': ['error']
     }
   }
   ```
