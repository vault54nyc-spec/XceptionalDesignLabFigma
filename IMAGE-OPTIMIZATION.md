# Image Optimization Guide

This guide helps you optimize images for the Xceptional Design Lab website to improve loading performance and user experience.

## Why Optimize Images?

- **Faster Loading**: Smaller file sizes = faster page loads
- **Better SEO**: Google rewards fast-loading sites
- **Reduced Bandwidth**: Lower hosting costs and data usage
- **Improved UX**: Better experience on slow connections

## Current Images to Optimize

The following images in the `client/public` directory may benefit from optimization:

### High Priority
- `xceptional-logo-hero.png` - Main logo
- `torn-paper-bg.png` - Background texture

### Check These Directories
- `client/public/images/` - Check all images in this directory
- `client/public/assets/` - Review assets for large files

## Target File Sizes

Aim for these maximum file sizes:

- **Hero images**: 200-300 KB
- **Logo**: 50-100 KB
- **Background textures**: 100-200 KB
- **Icon images**: 10-20 KB
- **Thumbnails**: 50-100 KB

## Recommended Tools

### Online Tools (Free)
1. **TinyPNG** (https://tinypng.com/)
   - Best for PNG images
   - Lossy compression with minimal quality loss
   - Supports batch processing
   - Free for up to 20 images at a time

2. **Squoosh** (https://squoosh.app/)
   - Web-based image optimizer
   - Shows before/after comparison
   - Multiple format options (WebP, AVIF, etc.)
   - Granular control over compression settings

3. **ImageOptim** (https://imageoptim.com/)
   - Mac only
   - Drag and drop interface
   - Lossless and lossy options

### Command Line Tools
1. **ImageMagick**
   ```bash
   # Install (Mac)
   brew install imagemagick
   
   # Optimize PNG
   convert input.png -strip -quality 85 output.png
   
   # Resize image
   convert input.png -resize 1920x1080 output.png
   ```

2. **pngquant**
   ```bash
   # Install (Mac)
   brew install pngquant
   
   # Optimize PNG
   pngquant --quality=65-80 input.png
   ```

## Step-by-Step Compression Guide

### Using TinyPNG (Easiest)

1. **Visit TinyPNG**
   - Go to https://tinypng.com/

2. **Upload Images**
   - Drag and drop up to 20 PNG/JPG files
   - Or click to browse and select files

3. **Download Optimized Images**
   - Wait for compression to complete
   - Click "Download All" or download individually
   - Replace original files in `client/public`

### Using Squoosh (Best Quality Control)

1. **Visit Squoosh**
   - Go to https://squoosh.app/

2. **Upload Image**
   - Drag and drop or select image

3. **Choose Settings**
   - Select compression format:
     - **WebP**: Best compression, modern browsers
     - **AVIF**: Better than WebP, newer format
     - **MozJPEG**: Optimized JPG
     - **OxiPNG**: Optimized PNG
   
4. **Adjust Quality**
   - Use the slider to find the sweet spot
   - Watch the file size indicator
   - Compare before/after visually

5. **Download**
   - Click download icon
   - Replace original file

### Converting to Modern Formats

Consider converting images to WebP for better compression:

```bash
# Using imagemagick
convert input.png -quality 85 output.webp

# Using cwebp (Google's WebP encoder)
cwebp -q 80 input.png -o output.webp
```

**Note**: Ensure fallback images for older browsers if using WebP.

## Image Format Guidelines

Choose the right format for each use case:

- **PNG**: Logos, icons, images with transparency
- **JPG**: Photos, complex images without transparency
- **WebP**: Modern browsers, best compression (with fallback)
- **SVG**: Simple graphics, icons (scalable, smallest size)

## Optimization Workflow

1. **Identify Large Images**
   ```bash
   # Find images over 200KB
   find client/public -type f \( -name "*.png" -o -name "*.jpg" \) -size +200k -exec ls -lh {} \;
   ```

2. **Backup Originals**
   ```bash
   # Create backup directory
   mkdir -p /tmp/image-backups
   cp client/public/images/*.{png,jpg} /tmp/image-backups/
   ```

3. **Optimize Images**
   - Use TinyPNG or Squoosh
   - Download optimized versions

4. **Replace Files**
   - Replace original files in `client/public`
   - Keep the same filenames

5. **Test**
   ```bash
   pnpm dev
   ```
   - Verify images load correctly
   - Check visual quality

6. **Commit Changes**
   ```bash
   git add client/public
   git commit -m "Optimize images for performance"
   ```

## Responsive Images

For better performance, consider serving different image sizes for different devices:

```html
<!-- Example: Responsive image -->
<img 
  src="/images/hero-800.jpg"
  srcset="
    /images/hero-400.jpg 400w,
    /images/hero-800.jpg 800w,
    /images/hero-1200.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="Hero image"
/>
```

## Lazy Loading

Images below the fold should be lazy-loaded:

```tsx
<img src="/image.jpg" loading="lazy" alt="Description" />
```

This is already implemented in modern browsers and React.

## Monitoring Performance

After optimization, check improvements:

1. **Lighthouse Audit**
   - Open DevTools in Chrome
   - Go to Lighthouse tab
   - Run performance audit
   - Check "Properly size images" and "Next-gen formats"

2. **Network Tab**
   - Open DevTools → Network
   - Filter by "Img"
   - Check transfer sizes

## Automation

For future images, consider automated optimization:

### 1. Add Image Optimization to Build

Install sharp for image optimization:

```bash
pnpm add -D vite-plugin-image-optimizer
```

Update `vite.config.ts`:

```ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
};
```

### 2. Pre-commit Hook

Add image optimization to git pre-commit hook for automatic optimization.

## Checklist

Before considering optimization complete:

- [ ] Identified all images over 200KB
- [ ] Created backups of original images
- [ ] Optimized all images using TinyPNG or Squoosh
- [ ] Replaced original files with optimized versions
- [ ] Tested all pages to verify images load correctly
- [ ] Checked image quality is acceptable
- [ ] Ran Lighthouse audit
- [ ] Committed optimized images

## Resources

- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- WebP Converter: https://developers.google.com/speed/webp
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- Image Optimization Guide: https://web.dev/fast/#optimize-your-images

## Support

For questions about image optimization:
- Create an issue in the repository
- Contact: hello@xceptionaldesignlab.com
