#! /bin/bash

set -e

INPUT_FOLDER=${1:-}

gs -dSAFER -dQUIET -dNOPLATFONTS -dNOPAUSE -dBATCH \
    -sOutputFile="architecture.png" \
    -sDEVICE=pngalpha -r300 -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -dUseTrimBox \
    ./architecture.pdf
