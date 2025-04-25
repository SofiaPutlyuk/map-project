import { Component } from "react";
import "./toggle.css";
import toggleSun from '../images/sun.png';
import toggleMoon from '../images/moon.png';

class Toggle extends Component {
state = {
      isDarkMode: false,
    };
  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
    document.querySelector('.container').classList.toggle("dark-mode", !this.state.isDarkMode);
  };

  render() {
    return (
      <div className="container-toggle">
        <div className="hanging">
          <div className="string"></div>
          <img
            src={toggleSun}
            className={`toggle-sun ${this.state.isDarkMode ? 'hidden' : ''}`}
            onClick={this.toggleTheme}
            alt="Sun"
          />
        </div>
        <div className="hanging">
          <div className="string"></div>
          <img
            src={toggleMoon}
            className={`toggle-moon ${!this.state.isDarkMode ? 'hidden' : ''}`}
            onClick={this.toggleTheme}
            alt="Moon"
          />
        </div>
      </div>
    );
  }
}

export default Toggle;
