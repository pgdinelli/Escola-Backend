import User from "../models/User";

class UserController {
    // store/create -> cria um novo usuário -> POST
    async store(req, res) {
        try {
            const newUser = await User.create(req.body);
            return res.json(newUser);

        } catch (e) {
            return res.status(400).json({
                    errors: e.errors.map(err => err.message),
                });
        }
    }

    // index -> lista todos os usuários -> GET
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    // show -> mostra um usuário -> GET
    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (e) {
            return res.json(null);
        }
    }

    // update -> atualiza um usuário -> PATCH ou PUT
    async update(req, res) {
        try {
            if(!req.params.id) return res.status(400).json({errors: ['ID not found.']});
            const user = await User.findByPk(req.params.id);

            if(!user) return res.status(400).json({ errors: ['User not found']});
            const newData = await user.update(req.body);

            return res.json(newData);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message),
            });
        }
    }

    // delete -> apaga um usuário -> DELETE
    async delete(req, res) {
        try {
            if(!req.params.id) return res.status(400).json({errors: ['ID not found.']});
            const user = await User.findByPk(req.params.id);

            if(!user) return res.status(400).json({ errors: ['User not found']});
            await user.destroy(req.body);

            return res.json(user);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message),
            });
        }
    }
}

export default new UserController();
