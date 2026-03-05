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

    async store(req, res) {
        try {
            const aluno = await Aluno.create(req.body);
            return res.json(aluno);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message)
            });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            if(!id) return res.status(400).json({
                errors: ['Missing ID'],
            });

            const aluno = await Aluno.findByPk(id);
            if(!aluno) return res.status(400).json({
                errors: ['Student does not exist'],
            });

            return res.json(aluno);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message),
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if(!id) return res.status(400).json({
                errors: ['Missing ID'],
            });

            const aluno = await Aluno.findByPk(id);
            if(!aluno) return res.status(400).json({
                errors: ['Student does not exist'],
            });

            const alunoAtualizado = await aluno.update(req.body);

            return res.json(alunoAtualizado);
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if(!id) return res.status(400).json({
                errors: ['Missing ID'],
            });

            const aluno = await Aluno.findByPk(id);
            if(!aluno) return res.status(400).json({
                errors: ['Student does not exist'],
            });

            await aluno.destroy();

            return res.json('Student deleted');
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message),
            });
        }
    }
}

export default new AlunoController();
