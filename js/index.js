const fetch = require("node-fetch");

const app = "I don't do much.";

const token = "f8cf5c90a92ecb57e9b754cb30e14b86c5d66189";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
  .then(json => console.log(json));
