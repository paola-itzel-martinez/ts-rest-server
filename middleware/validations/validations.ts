import { validationResult } from 'express-validator'
import { IsKeyRegistered, ValidationResults } from './validations.types'

export const isKeyRegistered: IsKeyRegistered = async({
  where,
  model: Model
}) => {
  const existValue = await Model.findOne({ where })

  if (existValue) throw new Error(`Values already registered`)
}

export const validationResults: ValidationResults  = (
  request,
  response,
  next
) => {
  const errors = validationResult(request)

  console.log(errors)

  if (!errors.isEmpty()) {
    return response.status(400).json(errors)
  }

  next()
}
