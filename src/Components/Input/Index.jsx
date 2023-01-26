import classNames from 'classnames'
import { Field } from 'formik'
import React from 'react'

function Input (props) {
  const { name, label, classes, value, description, ...restProps } = props
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { errors, touched },
        meta
      }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched
        })

        return (
          <label>
            <input
              className={inputClassNames}
              {...restProps}
              {...field}
              value={value}
            />
            <label>{label} </label>
            <label>{description} </label>
            {meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        )
      }}
    </Field>
  )
}

export default Input
