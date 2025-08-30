#!/usr/bin/env bash

#sudo apt install -y imagemagick

curl -L -o logo.png https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png
convert logo.png -resize 16x16   images/icon16.png
convert logo.png -resize 48x48   images/icon48.png
convert logo.png -resize 128x128 images/icon128.png
