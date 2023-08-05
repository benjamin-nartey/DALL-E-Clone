const config = {
  development: {
    backendPostUrl: "http://localhost:8080/api/v1/post",
    backendDALLEUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendPostUrl: "https://dall-e-clone-2tom.onrender.com/api/v1/post",
    backendDALLEUrl: "https://dall-e-clone-2tom.onrender.com/api/v1/dalle",
  },
};

export default config;
