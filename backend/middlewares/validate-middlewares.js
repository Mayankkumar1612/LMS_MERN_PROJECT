const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(422).json({
      status: 422,
      message: "Fill the input properly",
      extraDetails: error.details[0].message, 
    });
  }
  next();
};

module.exports = validate;
