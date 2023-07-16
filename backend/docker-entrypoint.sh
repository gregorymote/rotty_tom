#!/bin/bash
echo "migrating db"
npx sequelize-cli db:migrate
echo "seeding db"
npx sequelize-cli db:seed:all
echo "starting server"
npm run dev