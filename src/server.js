const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/datetime", (req, res) => {
    const now = new Date();

    res.json({
        data: now.toLocaleDateString("pt-BR"),
        hora: now.toLocaleTimeString("pt-BR")
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("API rodando na porta " + PORT);
});