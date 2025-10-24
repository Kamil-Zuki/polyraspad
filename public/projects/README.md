# Project Images

This folder contains images for your portfolio projects.

## Current Projects

Place images with these exact filenames:

1. `voice-ai-platform.jpg` - Voice AI Platform
2. `microservices-platform.jpg` - Enterprise Microservices Platform
3. `partner-account.jpg` - Partner Account System
4. `language-learning.jpg` - Language Learning API
5. `portfolio.jpg` - Portfolio Website

## Image Specifications

**Recommended:**

- **Format:** JPG or WebP
- **Dimensions:** 1200x800px (16:9 aspect ratio)
- **File Size:** < 500KB (optimized for web)
- **Quality:** 80-85% (good balance between quality and size)

## Optimization Tips

### Using ImageMagick (if installed):

```bash
# Resize and optimize
magick input.jpg -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 output.jpg
```

### Using Online Tools:

- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Compress and convert formats
- [CloudConvert](https://cloudconvert.com/) - Format conversion

## Fallback Behavior

If an image fails to load or doesn't exist, the project card will display:

- A gradient background
- The first letter of the project title

This ensures the page always looks good, even without images.

## Adding New Projects

When adding a new project, simply:

1. Add the image to this folder
2. Update the `image` field in `app/(ui)/projects/page.tsx`
