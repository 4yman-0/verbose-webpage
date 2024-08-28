#!/bin/bash

# Add note to main.js
printf "// This file is generated AUTOMATICALLY\n\n" > js-min/main.js

for file in js-src/*; do
    cat $file >> js-min/main.js
done
