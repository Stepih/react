import React, { useState } from 'react'
import Form from './Form'
import s from './Login.module.scss'



function styleTitle (id, idPrev) {
    document.getElementById(id).style.cssText = "font-size: 28px; color: white"
    document.getElementById(idPrev).style.cssText = "font-size: 20px; color: grey"
}



const Login = () => {

    const [dataForm, setDataForn] = useState({username: '', userpassword: ''})
    const [typeForm, setTypeForm] = useState("Log in")

    function handleFormSubmitLogin (e) {
        e.preventDefault()
        console.log("Log In " + JSON.stringify(dataForm))
    }
    
    function handleFormSubmitSignup (e) {
        e.preventDefault()
        console.log("Sign Up " + JSON.stringify(dataForm))
    }

    function handleChangeInput(e, nameInput) {
        setDataForn({...dataForm, [nameInput]: e.target.value})
    }

    return (
        <>
            <div className={s.formTitle}>
                <h1 style={{fontSize: "28px"}} id="Log" onClick={()=>{setTypeForm("Log in"); styleTitle("Log", "Sign")}}>Log in</h1>
                <h1 style={{fontSize: "20px", color: "grey"}} id="Sign" onClick={()=>{setTypeForm("Sign Up"); styleTitle("Sign", "Log") }}>Sign Up</h1>
            </div>
            {typeForm === "Log in" && (
                <Form dataForm={dataForm} handleFormSubmit={handleFormSubmitLogin} handleChangeInput={handleChangeInput} typeForm={typeForm}/>
            )}
            {typeForm === "Sign Up" && (
                <Form dataForm={dataForm} handleFormSubmit={handleFormSubmitSignup} handleChangeInput={handleChangeInput} typeForm={typeForm}/>
            )}
            
        </>
    )
}

export default Login