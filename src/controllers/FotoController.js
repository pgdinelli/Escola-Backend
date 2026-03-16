import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('photo');

class FotoController {
    store(req, res) {
        return upload(req, res, async (err) => {
            if (err) return res.status(400).json({
                errors: [err.code],
            });

            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;

            try {
                const photo = await Foto.create({ originalname, filename, aluno_id });
                return res.json(photo);
            } catch (error) {
                return res.status(400).json('Aluno ID does not exist.')
            }


        });
    }
}

export default new FotoController();
