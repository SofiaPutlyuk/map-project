import React, { Fragment } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import './modal.css'
class Modal extends React.Component {
state = {
    usernames: JSON.parse(localStorage.getItem("Username")) || [],
    logins:JSON.parse(localStorage.getItem("Logins")) || [],
    usernameValue:"",
    loginValue:"",
    currentUser:JSON.parse(localStorage.getItem("Currentuser")) || ""

}
handleUsername = ({target : {value}}) => {
    this.setState({
        usernameValue:value
    })
}
handleLogin = ({target : {value}}) => {
    this.setState({
        loginValue:value
    })
}

handleLoginInfo = () => {
const {usernames,usernameValue,logins,loginValue} = this.state
const updateUserInfo = [...usernames,usernameValue]
const updateLoginInfo = [...logins,loginValue]
if(!usernameValue || !loginValue){
    alert("Заповніть поля")
    return;
}
fetch("http://localhost:3000/info",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}).then(res => res.json())
.then(data => {
    const user = data.find(
        item => item.name === usernameValue && item.password === loginValue
    );
   if(user){
    this.setState({
        usernames:updateUserInfo,
        login:updateLoginInfo,
        currentUser:usernameValue
    })
    localStorage.setItem("Username",JSON.stringify(updateUserInfo))
    localStorage.setItem("Logins",JSON.stringify(updateLoginInfo))
    localStorage.setItem("Currentuser",JSON.stringify(usernameValue))
    alert("Успішно")
    this.props.onClose()
   }else {
    alert("Заєструйтеся")
   }
})

}
render(){
    return(
        <Fragment>
        <div className={`modal ${this.props.show ? 'show' : ''}`}>
            <div className="modal-content">
            <button className="close" onClick={(e) => {e.preventDefault(); this.props.onClose()}}>
            <IoMdCloseCircleOutline  />
            </button>
            <p className="text-login">Логін</p>
            <input type="text" placeholder="username" className="input-modal" onChange={this.handleUsername} value={this.state.usernameValue}/>
            <input type="e-mail" placeholder="login" className="input-modal" onChange={this.handleLogin} value={this.state.loginValue}/>
            <button className="button-login" onClick={(e) => {
                e.preventDefault();
                this.handleLoginInfo();
                }}>Логін</button>
            </div>
        </div>
        </Fragment>
    )
}
}
export default Modal;