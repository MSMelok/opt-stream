// A helper function to get image paths, whether they're remote URLs or local images

// Function to determine if a string is a URL
export function isUrl(path: string): boolean {
  return path.startsWith('http://') || path.startsWith('https://');
}

// Function to get an image - this will handle both remote images and local imports
export function getImagePath(imagePath: string): string {
  // If it's a URL, return it directly
  if (isUrl(imagePath)) {
    return imagePath;
  }
  
  // For local images that are imported directly
  try {
    // Try to dynamically import the image from assets
    const imageModule = `/src/assets/images/${imagePath}`;
    return imageModule;
  } catch (error) {
    console.error(`Failed to load image: ${imagePath}`, error);
    // Return a placeholder if image fails to load
    return 'https://via.placeholder.com/300';
  }
}