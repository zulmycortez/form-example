import React, { useState } from 'react'
import ArrowIcon from './assets/ArrowIcon'
import FormStyle from './FormStyle'

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  address2: '',
}

const Form = () => {
  const [values, setValues] = useState(initialValues)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)

  const onChange = e => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (values.firstName.length < 1) setFirstNameError(true)
    if (values.lastName.length < 1) setLastNameError(true)
    if (values.address.length < 1) setAddressError(true)
    window.alert(JSON.stringify(values))
  }

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <div className="__item">
          <label>FIRST NAME {firstNameError ? <span className="__error">REQUIRED</span> : ''}</label>
          <input
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            tabIndex={0}
          />
        </div>
        <div className="__item">
          <label>LAST NAME {lastNameError ? <span className="__error">REQUIRED</span> : ''}</label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={onChange}
          />
        </div>
        <div className="__item">
          <label>ADDRESS {addressError ? <span className="__error">REQUIRED</span> : ''}</label>
          <input
            name="address"
            value={values.address}
            onChange={onChange}
          />
        </div>
        <div className="__item">
          <label>ADDRESS 2</label>
          <input
            name="address2"
            values={values.address2}
            onChange={onChange}
          />
        </div>
        <button type="submit">
          Next <ArrowIcon />
        </button>
      </form>
    </FormStyle>
  )
}

export default Form

