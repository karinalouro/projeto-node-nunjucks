const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

//configura arquivos estáticos (CSS,imagens,etc.)
server.use(express.static("public"));

// Configura o Nunjucks
nunjucks.configure("views", {
  express: server,
  autoescape: true,
  noCache: true,
});

server.set("view engine", "njk");

// Rota raiz → cursos
server.get("/", (req, res) => {
  res.render("courses", {
    title: "Cursos",
    cursos: ["HTML", "CSS", "JavaScript"],
  });
});

// Rota /about → sobre
server.get("/about", (req, res) => {
  res.render("about");
});

// Página 404
server.use((req, res) => {
  res.status(404).render("not-found");
});

server.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
