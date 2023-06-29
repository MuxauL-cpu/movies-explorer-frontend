const nameRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function nameValidation(name) {
  if (!name !== undefined) {
    if (name.length === 0) {
      return { invalid: true, message: 'Заполните это поле.'};
    } else if (!nameRegex.test(name.toLowerCase())) {
      return { invalid: true, message: 'Введены некорректные данные.'}
    } else if (nameRegex.test(name.toLowerCase())) {
      return { invalid: false, message: null }
    } else return { invalid: false, message: null }
  }
}

function emailValidation(email) {
  if (!email !== undefined) {
    if (email.length === 0) {
      return { invalid: true, message: 'Введите свою почту.'};
    } else if (!emailRegex.test(email.toLowerCase())) {
      return { invalid: true, message: 'Неправильный формат почты.'}
    } else if (emailRegex.test(email.toLowerCase())) {
      return { invalid: false, message: null }
    } else return { invalid: false, message: null }
  }
}

export {
  nameValidation,
  emailValidation,
}