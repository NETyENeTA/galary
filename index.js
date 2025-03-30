import {fs} from 'fs';

const template = document.getElementById("template");

fs.readdirSync("assets/images/test/").forEach((file) => {
  console.log(file);
});
