import app from "./app";

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Servidor Iniciado en http://localhost:${port}`);
});