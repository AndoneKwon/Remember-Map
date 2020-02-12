import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleLogin = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post("/auth/login", data)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      this.props.changeLoginState(true);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id="login" className={this.props.activeItem == "login-on" ? "out" : ""}>
        <article className="custom-article">
          <div className="mainarticle">
            <img src="brand.png" width="150" />
            <form method="POST">
              <input type="text" className="form-control custom-form" name="email" id="email" placeholder="이메일" onChange={ this.handleChange } />
              <input type="password" className="form-control custom-form mg-top-10" name="password" id="password" placeholder="비밀번호" onChange={ this.handleChange } />
              <button type="button" className="btn btn-success btn-block custom-login-btn" onClick={ this.handleLogin }>로그인</button>
            </form>
            <hr className="login-hr" />
            <a href="#" className="btn btn-danger btn-block oauth-login-btn">
              <i className="fab fa-google mg-right-10"></i>구글 로그인
            </a>
            <a href="#" className="btn btn-primary btn-block oauth-login-btn">
              <i className="fab fa-facebook-f mg-right-10"></i>페이스북 로그인
            </a>
            <a href="#" className="btn btn-warning btn-block oauth-login-btn">
              <i className="fab fa-kickstarter-k mg-right-10"></i>카카오 로그인
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Login;