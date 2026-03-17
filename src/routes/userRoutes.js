import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas de listar todos os usuários ou um usuário só não devem existir na aplicação final

// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
Métodos dos controllers:

index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
