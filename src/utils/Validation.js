import { EMAIL_REGEX } from "./constants";

function emailValidation(email) {
  if (!email !== undefined) {
    if (email.length === 0) {
      return { invalid: true, message: 'Введите свою почту.'};
    } else if (!EMAIL_REGEX.test(email.toLowerCase())) {
      return { invalid: true, message: 'Неправильный формат почты.'}
    } else if (EMAIL_REGEX.test(email.toLowerCase())) {
      return { invalid: false, message: null }
    } else return { invalid: false, message: null }
  }
}

export {
  emailValidation,
}