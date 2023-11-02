const { Router } = require('express');
const {
  getUser,
  updateUser,
  patchUser,
  postUser,
  deleteUser,
} = require('../controllers/user');

const router = Router();

router.get('/', getUser);

router.put('/:id', updateUser);

router.patch('/', patchUser);

router.post('/', postUser);

router.delete('/', deleteUser);

module.exports = router;
