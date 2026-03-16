TARGET_DIR="/home/rogue/Desktop/solve-ease/shivam/architect/public/assets/architect_images_webp_reduced_mobile"

find "$TARGET_DIR" -type f -name "*.webp" -exec sh -c '
  for img do
    cwebp "$img" -resize 300 0 -q 80 -o "$img.tmp" && mv "$img.tmp" "$img"
  done
' sh {} +

