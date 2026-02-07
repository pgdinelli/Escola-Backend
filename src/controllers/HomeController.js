import Aluno from "../models/Aluno";

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Paulo',
            sobrenome: 'Souza',
            email: 'pd@gmail.com',
            idade: 30,
            peso: 60.5,
            altura: 1.75,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();
