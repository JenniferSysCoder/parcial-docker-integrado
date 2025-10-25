
import express from "express";
const app = express();


const estudiante = {
  nombre: "Jennifer Tatiana Guerra Figueroa",
  expediente: "25916",
  codigo: "GF22-I04-002"
};


app.get("/", (_req, res) => res.json({
  mensaje: "Parcial Docker Integrado",
  estudiante
}));


app.get("/health", (_req, res) => res.json({ status: "OK" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
