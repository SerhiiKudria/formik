import styles from './SignUp.module.sass'
import Input from '../Input/Index'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_UP_VALIDATION_SCHEMA } from './../../utils/validate/validationSchemas'

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
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
  }

  return (
    <div>
      <div>
        <div className='signup_header'>
          <div className='logo'>
            <a href='/'>
              <img src='/img/logo.png' />
            </a>
          </div>
          <div className='loginButton'>
            <a href='/login'>Login</a>
          </div>
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
          <div id='my-radio-group'></div>
          <div role='group' aria-labelledby='my-radio-group'>
            <Input
              label='Join As a Buyer:'
              type='radio'
              name='contractType'
              value='1'
              description='I am looking for a Name, Logo or Tagline for my business, brand or product.'
              classes={classes}
            />
            <Input
              label='Join As a Creative or Marketplace Seller'
              type='radio'
              name='contractType'
              value='2'
              description='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
              classes={classes}
            />
          </div>
          <Input
            label='Allow Squadhelp to send marketing/promotional offers from time to time'
            type='checkbox'
            name='allow'
            classes={classes}
          />
          <button type='submit'>Create account</button>
          <label>By clicking this button, you agree to our </label>
          <a href='https://www.squadhelp.com/Terms&Conditions'>
            Terms of Service
          </a>
          <a href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto&service=lso&o2v=1&flowName=GeneralOAuthFlow'>
            Sign Up with Google
          </a>
        </Form>
      </Formik>
    </div>
  )
}
