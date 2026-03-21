ASSETS_DIR="/home/rogue/Desktop/solve-ease/shivam/architect/public/assets"

# Loop through folders 1-32
for i in {1..32}; do
  TARGET_DIR="$ASSETS_DIR/$i"
  
  # Check if directory exists
  if [ -d "$TARGET_DIR" ]; then
    echo "Processing images in $TARGET_DIR..."
    
    find "$TARGET_DIR" -type f -name "*.webp" -exec sh -c '
      for img do
        echo "Resizing: $img"
        cwebp "$img" -resize 1200 0 -q 100 -o "$img.tmp" && mv "$img.tmp" "$img"
      done
    ' sh {} +
  fi
done

echo "Image resizing complete!"

