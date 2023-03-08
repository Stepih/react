import React from 'react'
import s from './Form.module.scss'
const Form = ({dataForm, handleFormSubmit, handleChangeInput, typeForm}) => {
  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input value={dataForm.username} onChange={(e)=> handleChangeInput(e, 'username')} type="text"  id="username" />
        <label htmlFor="userpassword">Password:</label>
        <input value={dataForm.userpassword} onChange={(e)=> handleChangeInput(e, 'userpassword')} type="password" id="userpassword" />
        <button type="submit">{typeForm}</button>
    </form>
  )
}

export default Form