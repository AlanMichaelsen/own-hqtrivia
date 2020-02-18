const { validationResult } = require('express-validator')

module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    return res.status(422).json({
      error: errors.array().map(r => r.msg).join(', '),
      errorCode: 422
    })
  }
}
