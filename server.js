const ngrok = require("ngrok");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.all("/*", function (req, res) {
  console.log("-------------- New Request --------------");
  console.log("Headers:" + JSON.stringify(req.headers, null, 3));
  console.log("Body:" + JSON.stringify(req.body, null, 3));
});

app.listen(port, () => {
  //   const url = await ngrok.connect({
  //     proto: "http",
  //     addr: 8080,
  //     authtoken: "1giEhSLKTsGwkc2yQXC2hJ0idZR_5MEjgi1rgoXaogwvJaVco",
  //   });

  //   (async function () {
  //     const result = await ngrok.connect({
  //       proto: "http", // http|tcp|tls, defaults to http
  //       addr: 8080, // port or network address, defaults to 80
  //       auth: "luuphuc6297@gmail.com:MaiMai!1Tinhyeu", // http basic authentication for tunnel
  //       subdomain: "canlab", // reserved tunnel name https://alex.ngrok.io
  //       authtoken: "1giEhSLKTsGwkc2yQXC2hJ0idZR_5MEjgi1rgoXaogwvJaVco", // your authtoken from ngrok.com
  //     });
  //     console.log("result", result);
  //   })();
  //   console.log("url", url);
  console.log(`Example app listening at ${port}`);
});
