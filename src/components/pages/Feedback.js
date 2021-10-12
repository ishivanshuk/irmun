import React from 'react';
import ReactDOM from 'react-dom';

class SignupForm extends React.Component {
    state = {
      isPasswordVisible: false,
      email: "",
      password: "",
      passwordRepeat: "",
      isMailTouched: false,
      isPasswordTouched: false,
      isPasswordRepeatTouched: false
    };
  
    toggleVisibility() {
      this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
    }
  
    isEmailValid() {
      const mail = this.state.email;
      var mailValidation = /.@./;
      return mailValidation.test(mail);
    }
  
    isPasswordValid() {
      return this.state.password.length >= 4;
    }
  
    isPasswordValidRepeat() {
      const { password, passwordRepeat } = this.state;
      return password === passwordRepeat;
    }
  
    validationClass(touched, valid) {
      let className = "form-control";
      if (touched && valid) {
        className += " valid";
      }
      if (touched && !valid) {
        className += " error";
      }
      return className;
    }
  
    inputLabelClass(label) {
      const className = label.length ? "input-label filled" : "input-label";
      return className;
    }
  
    render() {
      const {
        email,
        password,
        passwordRepeat,
        isMailTouched,
        isPasswordTouched,
        isPasswordRepeatTouched,
        isPasswordVisible
      } = this.state;
      const disabled =
        !this.isEmailValid() ||
        !this.isPasswordValid() ||
        !this.isPasswordValidRepeat();
      return (
        <div>
          <div className="col-sm-6 col-sm-offset-3">
            <div className="form">
              <div className="form-group">
                <label>
                  <input
                    id="email"
                    className={this.validationClass(
                      isMailTouched,
                      this.isEmailValid()
                    )}
                    type="text"
                    onChange={e => this.setState({ email: e.target.value })}
                    onBlur={() => this.setState({ isMailTouched: true })}
                    value={email}
                  />
                  <div className={this.inputLabelClass(email)}>E-Mail</div>
                </label>
              </div>
  
              <div className="form-group has-feedback">
                <label>
                  <input
                    id="password"
                    className={this.validationClass(
                      isPasswordTouched,
                      this.isPasswordValid()
                    )}
                    type={isPasswordVisible ? "text" : "password"}
                    onBlur={() => this.setState({ isPasswordTouched: true })}
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                  />
                  <div className={this.inputLabelClass(password)}>Password</div>
                  <span
                    className={
                      isPasswordVisible
                        ? "glyphicon glyphicon-eye-open clickable"
                        : "glyphicon glyphicon-eye-close clickable"
                    }
                    onClick={() => this.toggleVisibility()}
                  />
                </label>
              </div>
  
              <div className="form-group">
                <label>
                  <input
                    id="passReapeat"
                    className={this.validationClass(
                      isPasswordRepeatTouched,
                      this.isPasswordValidRepeat() && this.isPasswordValid()
                    )}
                    type={isPasswordVisible ? "text" : "password"}
                    onBlur={() =>
                      this.setState({ isPasswordRepeatTouched: true })
                    }
                    onChange={e =>
                      this.setState({ passwordRepeat: e.target.value })
                    }
                    value={passwordRepeat}
                  />
                  <div className={this.inputLabelClass(passwordRepeat)}>
                    Repeat Password
                  </div>
                </label>
              </div>
  
              <button
                style={{ marginTop: "50px" }}
                className="btn btn-success pull-right"
                disabled={disabled}
              >
                Submit
              </button>
  
              <div className="clearfix" />
            </div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<SignupForm />, document.getElementById("main"));
  