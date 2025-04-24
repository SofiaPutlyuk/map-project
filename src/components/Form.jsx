import React from 'react'
import { Fragment } from 'react'
import yellowCartoon from '../images/yellow-cartoon.png'
import './form.css'
class Form extends React.Component {
    state = {
        names: JSON.parse(localStorage.getItem("Name")) || [],
        nameValue: "",
        emails:JSON.parse(localStorage.getItem("Email")) || [],
        emailValue:"",
        passwords:JSON.parse(localStorage.getItem("Password")) || [],
        passwordValue:""
    }
    handleName = ({ target: { value } }) => {
        this.setState({
            nameValue: value
        })
    }
    handleEmail = ({target :{value}}) => {
        this.setState({
            emailValue:value
        })
    }
    handlePassword = ({target:{value}}) => {
        this.setState({
            passwordValue:value
        })
    }
    handleAddInfo = () => {
    const {names,nameValue,emails,emailValue,passwords,passwordValue} = this.state
    const updateName = [...names, nameValue]
    const updateEmail = [...emails, emailValue]
    const updatePassword = [...passwords,passwordValue]
    if(!names.includes(nameValue) && !emails.includes(emailValue) && !passwords.includes(passwordValue)){
        this.setState({
            names:updateName,
            emails:updateEmail,
            passwords:updatePassword
        })
        fetch("http://localhost:3000/info", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: nameValue,
                email: emailValue,
                password: passwordValue
              })
        }).then(res => res.json())
        .then(data => console.log(data))
        localStorage.setItem("Name", JSON.stringify(updateName))
        localStorage.setItem("Email", JSON.stringify(updateEmail))
        localStorage.setItem("Password", JSON.stringify(updatePassword))
    }else {
        alert("Ці дані існують")
    }
  
    }
    render() {
        const {nameValue, emailValue,  passwordValue } = this.state
        return (
            <Fragment>
            <form >
            <img src={yellowCartoon} alt='yellow-cartoon' className='yellow-cartoon'/>
            <p className='text-reach'>Reach out to us!</p>
                <input type='text' placeholder='Your name*' onChange={this.handleName} value={nameValue} />
                <input type='email' placeholder='Your e-mail*' onChange={this.handleEmail} value={emailValue}/>
                <input type="password" placeholder='Your password*' onChange={this.handlePassword} value={passwordValue}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.handleAddInfo();
                }} className='button-send'>Send message</button>
            </form>
          
            </Fragment>
        )
    }
}
export default Form;