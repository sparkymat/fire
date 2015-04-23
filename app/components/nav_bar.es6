class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginAttempted() {
    Fire.broadcast("loginAttempted");
  }
  
  loginClicked() {
    Fire.broadcast("loginRequested");
  }

  loginCancelClicked() {
    Fire.broadcast("loginCancelled");
  }

  render() {
    if(this.props.loginMode == "form") {
      return (
        <nav>
          <div className='nav-wrapper indigo white-text'>
            <a href='#' className='brand-logo'>Fire</a>
            <ul id='main-menu' className='right hide-on-med-and-down'>
              <li><input type="email" placeholder="E-mail" /></li>
              <li><input type="password" placeholder="Password" /></li>
              <li><a href='#!' onClick={this.loginAttempted.bind(this)}>Login</a></li>
              <li><a href='#!' onClick={this.loginCancelClicked.bind(this)}>Nevermind</a></li>
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <nav>
          <div className='nav-wrapper indigo white-text'>
            <a href='#' className='brand-logo'>Fire</a>
            <ul id='main-menu' className='right hide-on-med-and-down'>
              <li><a href='#!' onClick={this.loginClicked.bind(this)}>Login</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}
