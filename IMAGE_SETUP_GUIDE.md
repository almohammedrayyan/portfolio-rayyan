# Image Setup Guide for Portfolio

## Folder Structure

Your portfolio needs the following images in these exact locations:

```
public/
├── profile.jpg                          (Your professional photo)
├── background.jpg                       (Motivational background image)
└── certificates/
    ├── ai-training.jpg                  (Besant Technologies AI Training)
    ├── ai-internship.jpg                (Barola Technologies AI Internship)
    ├── web-development.jpg              (Web Development Workshop)
    └── ibm-spss.jpg                     (IBM SPSS Modeler)
```

## How to Add Images

### Option 1: Manual Upload (Recommended)
1. Create the `public` folder in your project root (if it doesn't exist)
2. Create a `certificates` subfolder inside `public`
3. Save/copy your images to these locations with the exact names shown above

### Option 2: Using File Explorer
1. Navigate to your project folder
2. Open the `public` folder
3. Drag and drop your images:
   - Your profile photo → rename to `profile.jpg`
   - Background image → rename to `background.jpg`
4. Create `certificates` folder and add certificate images

### Option 3: Using VS Code
1. Right-click on `public` folder in VS Code
2. Select "Reveal in File Explorer" (Windows) or "Reveal in Finder" (Mac)
3. Add your images to the folders

## Image Requirements

### Profile Photo (`profile.jpg`)
- Recommended size: 800x800px or larger
- Format: JPG or PNG
- Square aspect ratio works best
- Professional headshot or portrait

### Background Image (`background.jpg`)
- Recommended size: 1920x1080px or larger
- Format: JPG
- The motivational image with "Don't kill the dream - execute it"

### Certificate Images
- Format: JPG or PNG
- Recommended width: 800-1200px
- Clear and readable text
- Good lighting and contrast

## After Adding Images

1. Make sure all filenames match exactly (case-sensitive)
2. Restart your development server: `npm run dev`
3. Refresh your browser
4. Images should now appear in your portfolio

## Troubleshooting

If images don't show:
- Check file names match exactly (including .jpg extension)
- Verify images are in the correct folders
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Restart development server

## Current Image Paths in Code

- Profile: `/profile.jpg`
- Background: `/background.jpg`
- AI Training: `/certificates/ai-training.jpg`
- AI Internship: `/certificates/ai-internship.jpg`
- Web Development: `/certificates/web-development.jpg`
- IBM SPSS: `/certificates/ibm-spss.jpg`
