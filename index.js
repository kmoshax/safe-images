const { default: axios } = require("axios");
const FormData = require("form-data");

const DEFAULT_API_KEY = "c98dc592f9msh2004666c82a805dp1266d4jsn8ce72d731ad1"; // For Everyone :)

class safeImages {
  constructor(apiKey) {
    this.apiKey = apiKey || DEFAULT_API_KEY;
  }

  setApiKey(apiKey) {
    this.apiKey = apiKey || DEFAULT_API_KEY;
  }

  async detectFromURL(imageURL) {
    try {
      const response = await this.makeRequest({
        method: "POST",
        url: "https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content",
        data: {
          url: imageURL,
        },
      });
      const objects = response.data.objects || [];
      return objects.length >= 1;
    } catch (error) {
      console.error(error);
      throw new Error("Error while detecting NSFW content.");
    }
  }

  async detectFromFile(imageBuffer) {
    try {
      const response = await this.makeRequest({
        method: "POST",
        url: "https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content-file",
        data: this.createFormData(imageBuffer),
      });
      const objects = response.data.objects || [];
      return objects.length >= 1;
    } catch (error) {
      console.error(error);
      throw new Error("Error while detecting NSFW content.");
    }
  }

  async makeRequest(options) {
    try {
      const response = await axios.request({
        ...options,
        headers: {
          ...options.headers,
          "X-RapidAPI-Key": this.apiKey,
          "X-RapidAPI-Host":
            "nsfw-images-detection-and-classification.p.rapidapi.com",
        },
      });
      return response;
    } catch (error) {
      throw new Error("Error while making the API request.");
    }
  }

  createFormData(imageBuffer) {
    const data = new FormData();
    data.append("image", imageBuffer);
    return data;
  }
}

module.exports = safeImages;
