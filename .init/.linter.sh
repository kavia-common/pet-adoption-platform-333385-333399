#!/bin/bash
cd /home/kavia/workspace/code-generation/pet-adoption-platform-333385-333399/pet_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

