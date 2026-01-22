TARGET_DIR="/home/rogue/Desktop/solve-ease/shivam/architect/src/assets/architect_images_webp_reduced"

find "$TARGET_DIR" -type f -name "*.webp" -exec sh -c '
  for img do
    cwebp "$img" -resize 800 0 -q 80 -o "$img.tmp" && mv "$img.tmp" "$img"
  done
' sh {} +

