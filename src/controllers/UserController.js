import User from "../models/User";

class UserController {
    // store/create -> cria um novo usuário -> POST
    async store(req, res) {
        try {
            const newUser = await User.create(req.body);
            const {id, nome, email} = newUser;
            return res.json({id, nome, email});

        } catch (e) {
            return res.status(400).json({
                    errors: e.errors.map(err => err.message),
                });
        }
    }

    // index -> lista todos os usuários -> GET
    async index(req, res) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'email']});
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    // show -> mostra um usuário -> GET
    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            const {id, nome, email} = user;
            return res.json({id, nome, email});
        } catch (e) {
            return res.json(null);
        }
    }

    // update -> atualiza um usuário -> PATCH ou PUT
    async update(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if(!user) return res.status(400).json({ errors: ['User not found']});
            const newData = await user.update(req.body);
            const {id, nome, email} = newData;

            return res.json({id, nome, email});
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message),
            });
        }
    }

    // delete -> apaga um usuário -> DELETE
    async delete(req, res) {
        try {
            // const {id} = req.params;
            // const user = await User.findByPk(id);
            const user = await User.findByPk(req.userId);

            if(!user) return res.status(400).json({ errors: ['User not found']});
            await user.destroy(req.body);

            return res.json('User deleted.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message),
            });
        }
    }
}

export default new UserController();
