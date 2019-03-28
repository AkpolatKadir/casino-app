import Validator from "validator";
import isEmpty from "./is-empty";

const validateLogin = data => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "username";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateLogin;
