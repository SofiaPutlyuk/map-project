import './App.css';
import React from 'react';
import Map from './components/Map';
import Form from './components/Form';
import Footer from './components/Footer';
import { Fragment } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("Currentuser")) || "",
    showModal: false,
    
  };

  handleLoginSuccess = () => {
    const currentUser = JSON.parse(localStorage.getItem("Currentuser"));
    this.setState({ currentUser });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleNameInput = (name) => {
    this.setState({ currentUser: name });
    localStorage.setItem("Currentuser", JSON.stringify(name));
  };
  handleLogout = () => {
    this.setState({ currentUser: "" });
    localStorage.removeItem("Currentuser");
    localStorage.removeItem("Name");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
  };

  render() {
    const {currentUser} = this.state
    return (
      <Fragment>
           {currentUser && (
          <Header
            nameAccount={currentUser}
            cabinet={this.handleLogout}
          />
        )}
        {this.state.showModal && (
          <Modal
            show={this.state.showModal}
            onClose={this.handleCloseModal}
            onLoginSuccess={this.handleLoginSuccess}
          />
        )}
        <div className='container'>
          <Form
            onShowModal={this.handleShowModal}
            onLoginSuccess={this.handleLoginSuccess}
            currentUser={this.state.currentUser}
            onNameInput={this.handleNameInput}
          />
          <Map />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

