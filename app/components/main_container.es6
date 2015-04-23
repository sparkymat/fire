class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-container'>
        <NavBar loginMode={this.props.loginMode}></NavBar>
      </div>
    )
  }
}
