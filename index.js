const fs = require("fs");
const { resolve } = require("path");
const date = new Date();
const hours = date.getHours();
const currentTime = (timeParam) => {
  let time = "";

  const morning = hours >= 5 && hours <= 11;
  const daytime = hours >= 11 && hours <= 17;
  const nigth = hours >= 17 && hours <= 23;
  const dawn = hours >= 0 && hours < 4;

  if (morning) time = "morning";
  if (daytime) time = "daytime";
  if (nigth || dawn) time = "nigth";

  return {
    current: time === timeParam ? true : false,
    path: time,
  };
};
const generateImage = (path) => {
  const message = `<div style="display: block;width:600px;margin: 0 auto" >${path}
    ####*Leve em consideração a imagem, isso e apenas para complimenta-lo pela visita ao meu perfil é propagar um cadinho de humor.
    </div>`;

  return fs.writeFile("README.md", message, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const generateRandomNumber = (max, min) => Math.random() * (max - min) + min;

const generateRandomImage = () => {
  const value = generateRandomNumber(10, 1);
  const pathDir = currentTime().path;
  const current = (time) => currentTime(time).current;
  const path = `<img src="./uploads/${pathDir}/${value.toFixed()}.jpg" width="600" height="300">`;

  if (current("morning")) return generateImage(path);
  if (current("daytime")) return generateImage(path);
  if (current("nigth")) return generateImage(path);
};

generateRandomImage();
