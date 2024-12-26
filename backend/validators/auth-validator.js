const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
  userType: z
    .string({ required_error: "usertype is required" })
    .trim(),
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must be atleast of 3 chars." })
    .max(255, { message: "username must not be more than 255 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "email must be atleast of 3 chars." })
    .max(255, { message: "email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(3, { message: "password must be atleast of 3 chars." })
    .max(255, { message: "password must not be more than 255 characters" }),
});

module.exports = signupSchema;
