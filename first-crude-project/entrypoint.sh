#!/bin/sh

set -e

npm install
echo "Running TypeORM migrations..."
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts


echo "Starting NestJS app..."
npm run start