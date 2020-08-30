const params = process.argv;
const request = require("request");

const search = params[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${search}`,
  (error, response, body) => {
    if (error) {
      console.log("error:", error);
    }
    const data = JSON.parse(body);
    console.log(data);
  }
);
