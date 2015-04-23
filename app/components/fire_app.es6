class FireApp extends React.Component {
  constructor(props) {
    super(props);

    this.store = new FireStore();
    this.state = this.dataFromStore();

    Fire.subscribe("appStateChanged", this);
  }

  dataFromStore() {
    return {
      loginMode: this.store.loginMode
    };
  }

  onAppStateChanged() {
    this.setState(this.dataFromStore());
  }

  render() {
    return (
      <div className='fire-app row'>
        <MainContainer className='col s12 m12 l12' 
          loginMode={this.state.loginMode}>
        </MainContainer>
      </div>
    )
  }
}
