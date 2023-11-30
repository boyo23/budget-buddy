# Setting up `budget-buddy/server`

## Installation

1. Node

   Initialize node project

   ```bash
   npm init --yes
   ```

1. Prettier

   Install prettier

   ```bash
   npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
   ```

1. Dependencies

   Install dependencies

   ```bash
   npm install cors express express-validator jsonwebtoken
   ```

   Install devDependencies

   ```bash
   npm install --save-dev @types/cors @types/express @types/jsonwebtoken @types/node dotenv eslint prisma ts-node typescript
   ```

## Configuration

1. Node

   Configure `package.json`

   ```json
   {
     "scripts": {
       "start": "ts-node src/index.ts"
     }
   }
   ```

1. ESLint

   Initialize eslint

   ```bash
   npm init @eslint/config
   ```

1. Prettier

   Create `.prettierrc` with the following content

   ```json
   {
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

1. Prisma

   Initialize prisma

   ```bash
   npx prisma init --datasource-provider sqlite
   ```

   Edit `scheme.prisma`: Refer to `prisma/schema.prisma` for an example

   Migrate development environment

   ```bash
   npx prisma migrate dev --name init
   ```

1. TypeScript

   Initialize typescript

   ```bash
   npx tsc --init
   ```

   Configure `tsconfig.json`

   ```json
   {
     "compilerOptions": {
       "target": "es2017",
       "module": "CommonJS",
       "outDir": "./dist",
       "strict": true,
       "esModuleInterop": true,
       "lib": ["esnext", "esnext.asynciterable"],
       "typeRoots": ["./node_modules/@types"],
       "allowSyntheticDefaultImports": true,
       "experimentalDecorators": true,
       "emitDecoratorMetadata": true
     },
     "include": ["src/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```
