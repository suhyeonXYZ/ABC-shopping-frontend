#!/bin/sh
# set -e

export REACT_APP_API_BASE_URL
ls -l /usr/share/nginx/html

TEMPLATE_FILE=/usr/share/nginx/html/index.html.template
OUTPUT_FILE=/usr/share/nginx/html/index.html

if [ -f "$TEMPLATE_FILE" ]; then
  envsubst '${REACT_APP_API_BASE_URL}' < "$TEMPLATE_FILE" > "$OUTPUT_FILE"
else
  echo "  -> ERROR: Template file '$TEMPLATE_FILE' not found!"
fi

ls -l /usr/share/nginx/html

exec nginx -g 'daemon off;'