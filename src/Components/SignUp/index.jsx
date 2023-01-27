import styles from './SignUp.module.sass'
import Input from '../Input/Index'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_UP_VALIDATION_SCHEMA } from './../../utils/validate/validationSchemas'
import imgLogo from './../Login/logo.png'

export default function SignUp () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    contractType: '',
    allow: false
  }

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values)
    formikBag.resetForm()
  }

  const classes = {
    error: styles.error,
    radioError: styles.radioError,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
  }

  return (
    <div className={styles.page}>
      <div className={styles.login_header}>
        <div className={styles.logo}>
          <a href='/'>
            <img src={imgLogo} />
          </a>
        </div>
        <div className={styles.loginButton}>
          <a href='/login'>Login</a>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <h1>CREATE AN ACCOUNT</h1>
          <h2>We always keep your name and email address private.</h2>
          <div className={styles.row}>
            <Input
              label='FirstName:'
              type='text'
              name='firstName'
              placeholder='First Name'
              classes={classes}
            />
            <Input
              label='LastName:'
              type='text'
              name='lastName'
              placeholder='Last Name'
              classes={classes}
            />
          </div>
          <div className={styles.row}>
            <Input
              label='DisplayName:'
              type='text'
              name='displayName'
              placeholder='Display Name'
              classes={classes}
            />
            <Input
              label='Email:'
              type='email'
              name='email'
              placeholder='Email Adress'
              classes={classes}
            />
          </div>
          <div className={styles.row}>
            <Input
              label='Password:'
              type='password'
              name='password'
              placeholder='Password'
              classes={classes}
            />
            <Input
              label='Password Confirmation:'
              type='password'
              name='passwordConfirmation'
              placeholder='Password Confirmation'
              classes={classes}
            />
          </div>
          <div id='my-radio-group'></div>
          <div role='group' aria-labelledby='my-radio-group'>
            <div className={styles.radio}>
              <Input
                label='Join As a Buyer:'
                type='radio'
                name='contractType'
                radioValue='1'
                description='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                classes={classes}
              />
            </div>
            <div className={styles.radio}>
              <Input
                label='Join As a Creative or Marketplace Seller'
                type='radio'
                name='contractType'
                radioValue='2'
                description='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                classes={classes}
              />
            </div>
          </div>
          <Input
            description='Allow Squadhelp to send marketing/promotional offers from time to time'
            type='checkbox'
            name='allow'
            classes={classes}
          />
          <button type='submit'>Create account</button>
          <div>
            <p>
              By clicking this button, you agree to our
              <span> </span>
              <a href='https://www.squadhelp.com/Terms&Conditions'>
                Terms of Service
              </a>
            </p>
          </div>
          <a
            className={styles.btnGoogle}
            href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto&service=lso&o2v=1&flowName=GeneralOAuthFlow'
          >
            Sign Up with Google
          </a>
        </Form>
      </Formik>
    </div>
  )
}
