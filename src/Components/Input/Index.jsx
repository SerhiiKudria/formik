import classNames from 'classnames'
import { Field } from 'formik'
import React from 'react'
import styles from './../Input/Input.module.sass'

function Input (props) {
  const { name, label, classes, description, radioValue, ...restProps } = props
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

        const { type } = restProps

        if (type === 'radio') {
          return (
            <label>
              <input
                className={inputClassNames}
                {...restProps}
                {...field}
                value={radioValue}
                checked={field.value === radioValue}
              />
              <label>{label} </label>
              <label>{description} </label>

              {meta.error && meta.touched && (
                <span className={classes.error}>{meta.error}</span>
              )}
            </label>
          )
        }

        return (
          <label className={styles.labelInput}>
            <input
              className={inputClassNames}
              {...restProps}
              {...field}
              checked={field.value}
            />
            <span className={styles.description} checked={field.value}>
              {description}
            </span>
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
