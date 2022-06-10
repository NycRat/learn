const apiURL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3230/api";

export default apiURL;
