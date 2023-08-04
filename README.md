
# Safe-Image - NSFW Detection Package
  <p>
 <a href="https://github.com/arosteam"><img src="https://img.shields.io/static/v1?label=powered%20by&message=KmoSha&color=000000&style=for-the-badge&logo=accenture&logoColor=fff"/></a>
 <a href="https://www.npmjs.com/package/editor-canvas"><img src="https://img.shields.io/npm/v/safe-image.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/editor-canvas"><img src="https://img.shields.io/npm/dt/editor-canvassafe-image.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>

  </p>



A Node.js package for detecting NSFW (Not Safe For Work) content in images using the SmartClick AI NSFW Detection API.

## Installation

Install the package using npm:

```bash
npm install safe-image
```

## Usage
Import Package:
```js
const SafeImage = require('safe-image');
const safeImage = new SafeImage();
```
Usage with URL:
```js
const imageURL = 'https://example.com/path/to/image.jpg';

safeImage.detectFromURL(imageURL)
  .then((isSafe) => {
    console.log('Is Safe:', isSafe);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```
Usage with image file (Buffer):
```js
const fs = require('fs');
const imageFilePath = 'path/to/your/image.jpg';
const imageBuffer = fs.readFileSync(imageFilePath);

safeImage.detectFromFile(imageBuffer)
  .then((isSafe) => {
    console.log('Is Safe:', isSafe);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```
### Use custom API key:
```js
const safeImage = new SafeImage("YOUR_CUSTOM_API_KEY");
```
- You can get API key from [Here](https://smartclick.ai/api/nsfw-detection/)
- If you don't provide a custom API key, the package will use the default API key provided by SmartClick AI.
## API Key

To use the NSFW detection service, you need to obtain an API key from [SmartClick AI](https://smartclick.ai/api/nsfw-detection/) . You can either pass your custom API key when creating an instance of the `SafeImage` class or leave it empty to use the default API key.
## License

This package is open-source and available under the [LICENSE](https://github.com/kmoshax/safe-image/blob/main/LICENSE) .
## Note

This package relies on an external NSFW detection service provided by SmartClick AI. Make sure you comply with their terms of service and usage policy.
## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/kmoshax/safe-image/issues)  on GitHub.
