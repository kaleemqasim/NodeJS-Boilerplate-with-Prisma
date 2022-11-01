#!/bin/sh

echo "running prisma migrations..."
cd src
# npx prisma migrate reset --force
npx prisma migrate dev
node app.js