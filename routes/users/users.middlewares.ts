import { check } from 'express-validator'
import { User } from '../../models'
import { isKeyRegistered, validationResults } from '../../middleware'

const getAll: any[] = [];

const getById: any[] = [
  check('id', 'id is required').not().isEmpty(),
  validationResults
];

const createUser: any[] = [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'email not allowed').isEmail(),
  check('email').custom((email) =>
    isKeyRegistered({
      where: { email },
      model: User
    })
  ),
  validationResults
];

const updateUser: any[] = [
  check('id', 'id is required').not().isEmpty(),
  check('email').custom((email) =>
    isKeyRegistered({
      where: { email },
      model: User
    })
  ),
  validationResults
];

const deleteUser: any[] = [
  check('id', 'id is required').not().isEmpty(),
];

export default {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
};
