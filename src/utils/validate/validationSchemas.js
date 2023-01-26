import * as yup from 'yup'

const LOGIN_FORM_REX_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/
}

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email: yup
    .string()
    .trim()
    .matches(LOGIN_FORM_REX_EXP.email, 'Please enter correct email')
    .required(),
  password: yup
    .string()
    .min(8)
    .max(20)
    .matches(/(?=.*[A-Z].*)/, 'Password must contain caps letter')
    .matches(/(?=.*[a-z].*)/, 'Password must contain lower letter')
    .matches(/(?=.*\d.*)/, 'Password must contain digit')
    .matches(/(?=.*[!@#$%^&*.].*)/, 'Password must contain special symbol')
    .matches(LOGIN_FORM_REX_EXP.password, 'Please enter correct password')
    .required()
})

export const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'First name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of first name must be lower letter'
    )
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Last name name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of last name must be lower letter'
    )
    .required(),
  displayName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'First name must starts wich capital letter ')
    .matches(
      /^.[a-z]*$/,
      'Second+ characters of first name must be lower letter'
    )
    .required(),
  email: yup
    .string()
    .trim()
    .matches(LOGIN_FORM_REX_EXP.email, 'Please enter correct email')
    .required(),
  password: yup
    .string()
    .min(8)
    .max(20)
    .matches(/(?=.*[A-Z].*)/, 'Password must contain caps letter')
    .matches(/(?=.*[a-z].*)/, 'Password must contain lower letter')
    .matches(/(?=.*\d.*)/, 'Password must contain digit')
    .matches(/(?=.*[!@#$%^&*.].*)/, 'Password must contain special symbol')
    .matches(LOGIN_FORM_REX_EXP.password, 'Please enter correct password')
    .required()
})
