import styles from './../Login/Login.module.sass'
import Input from '../Input/Index'
import { LOGIN_VALIDATION_SCHEMA } from './../../utils/validate/validationSchemas'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import imgLogo from './../Login/logo.png'

export default function Login () {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  }

  const handleSubmit = (values, { resetForm }) => {
    resetForm(initialValues)
  }

  const classes = {
    error: styles.error,
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
          <a href='/signup'>Sign Up</a>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LOGIN_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <h1>Login to your account</h1>
          <Input
            label='Email:'
            type='email'
            name='email'
            placeholder='your@mail.com'
            classes={classes}
          />
          <Input
            label='Password:'
            type='password'
            name='password'
            placeholder='your password'
            classes={classes}
          />
          <div className={styles.row}>
            <Input
              description='Remember me'
              type='checkbox'
              name='rememberMe'
              placeholder='Remember me'
              classes={classes}
            />
            <a
              className={styles.forgot}
              href='https://www.squadhelp.com/forgot_password.php'
            >
              Forgot password
            </a>
          </div>

          <button type='submit'>Login</button>
          <a
            className={styles.btnGoogle}
            href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto&service=lso&o2v=1&flowName=GeneralOAuthFlow'
          >
            Sign in with Google
          </a>
        </Form>
      </Formik>
    </div>
  )
}
