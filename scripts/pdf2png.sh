#! /bin/bash

set -e

INPUT_FOLDER=${1:-}

if [[ -z "$INPUT_FOLDER" ]]; then
  echo "Usage: $0 <input_folder>"
  exit 1
fi

for pdf_file in "$INPUT_FOLDER"/*.pdf; do
  if [[ -f "$pdf_file" ]]; then
    base_name="$(basename "$pdf_file" .pdf)"
    output_file="$INPUT_FOLDER/${base_name}.png"
    gs -dSAFER -dQUIET -dNOPLATFONTS -dNOPAUSE -dBATCH \
      -sOutputFile="$output_file" \
      -sDEVICE=pngalpha -r300 -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -dUseTrimBox \
      "$pdf_file"
    echo "Converted $pdf_file to $output_file"
  fi
done
