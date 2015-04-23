class FireStore {
  constructor() {
    this.loginMode = "normal";

    Fire.subscribe("loginRequested", this);
    Fire.subscribe("loginCancelled", this);
    Fire.subscribe("loginAttempted", this);
  }

  onLoginAttempted() {
    this.loginMode = "normal";
    Fire.broadcast("appStateChanged");
  }

  onLoginCancelled() {
    this.loginMode = "normal";
    Fire.broadcast("appStateChanged");
  }

  onLoginRequested() {
    this.loginMode = "form";
    Fire.broadcast("appStateChanged");
  }
}
