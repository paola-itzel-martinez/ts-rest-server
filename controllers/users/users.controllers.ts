import { ExpressController } from "../../types";
import { User } from "../../models";

export const getAll: ExpressController = async(_, response) => {
  try {
    const user = await User.findAll()
    
    response.json(user);
  } catch (error) {
    response.status(500).json(error)
  }
};

export const getById: ExpressController = async(request, response) => {
  const { id } = request.params;

  try {
    const user = await User.findByPk(id)

    if (user) response.json(user);
    
    response.status(404).json({ error: "Not found" });
  } catch (error) {
    response.status(500).json(error)
  }
};

export const createUser: ExpressController = async(request, response) => {
  const { body } = request;

  try {
    const user = User.build(body)
    await user.save()

    response.json(user);
  } catch (error) {
    response.status(500).json(error)
  }
};

export const updateUser: ExpressController = async(request, response) => {
  const { id } = request.params;
  const { name, email } = request.body

  try {
    const user = await User.findByPk(id)

    if(!user) {
      return response.status(400).json({ error: 'Not found' })
    }

    await user?.update({ name, email })

    response.json(user);
  } catch (error) {
    response.status(500).json(error)
  }
};

export const deleteUser: ExpressController = async(request, response) => {
  const { id } = request.params;

  try {
    const user = await User.findByPk(id)

    if(!user) {
      return response.status(400).json({ error: 'Not found' })
    }

    await user?.update({ status: false })

    response.json(user);
  } catch (error) {
    response.status(500).json(error)
  }
};
