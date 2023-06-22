# Nombre de tu proyecto

Descripción breve del proyecto.

## Dependencias

- **@types/express**: ^4.17.17
- **@types/jest**: ^29.5.2
- **@types/node**: ^20.3.1
- **@typescript-eslint/eslint-plugin**: ^5.60.0
- **concurrently**: ^8.2.0
- **eslint**: ^8.43.0
- **eslint-config-standard-with-typescript**: ^35.0.0
- **eslint-plugin-import**: ^2.27.5
- **eslint-plugin-n**: ^15.7.0
- **eslint-plugin-promise**: ^6.1.1
- **eslint-plugin-react**: ^7.32.2
- **jest**: ^29.5.0
- **serve**: ^14.2.0
- **supertest**: ^6.3.3
- **ts-jest**: ^29.1.0
- **ts-node**: ^10.9.1
- **typescript**: ^5.1.3
- **webpack**: ^5.87.0
- **webpack-cli**: ^5.1.4
- **webpack-node-externals**: ^3.0.0
- **webpack-shell-plugin**: ^0.5.0

## Scripts npm

```json
"scripts": {
  "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
  "build": "npx tsc",
  "start": "node dist/index.js",
  "test": "jest",
  "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
}

Variables de entorno

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

PORT=3030