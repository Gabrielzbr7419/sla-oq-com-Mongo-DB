const express = require("express");
const app = express();
app.use(express.json());
app.listen(7410, () => console.log("Servidor rodando na porta 7410"));
app.get("/divide", (req, res) => {
    try {
        const numerador = 1000;
        const denominator = 15;
        if (denominator=== 0) {
            throw new Error("Não é possivel dividir por 0.");
            return;
        }


        const resultado = numerador / denominator;
        res.json({ resultado })

    } catch  (err) {
        res.status(500).json(err.message);
    }
})