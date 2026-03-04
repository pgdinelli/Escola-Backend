import Aluno from "../models/Aluno";

class AlunoController {
    async index(req, res) {
        try {
            const alunos = await Aluno.findAll();
            res.json(alunos);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async store(req, res) {}
    async show(req, res) {}
    async update(req, res) {}
    async delete(req, res) {}
}

export default new AlunoController();
