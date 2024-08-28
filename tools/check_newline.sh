#!/bin/bash

for file in js-src/*.js js-src/**/*.js; do
    # Check if the last character is not a newline
    if [ "$(tail -c 1 "$file")" != "" ]; then
        echo >> "$file"
    fi
done
