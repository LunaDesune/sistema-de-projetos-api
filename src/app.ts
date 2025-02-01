import express, {Request, Response} from "express";
import dotenv from "dotenv";
import projectRoutes from "./routes/ProjectRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", projectRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send("Sistema de Projetos");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})