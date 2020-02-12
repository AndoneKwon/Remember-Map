import React, { Component } from 'react';
import axios from 'axios';

class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      passwordCheck: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleJoin = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post("/auth/join", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id="signup" className={this.props.activeItem == "signup-on" ? "out" : ""}>
        <div className="head custom-head">회원가입</div>
        <article className="custom-article">
          <div className="mainarticle">
          <img src="brand.png" width="150" />
            <form method="POST">
              <input type="text" className="form-control custom-form" name="email" id="email" placeholder="이메일" onChange={ this.handleChange } />
              <input type="password" className="form-control custom-form mg-top-10" name="password" id="password" placeholder="비밀번호" onChange={ this.handleChange } />
              <input type="password" className="form-control custom-form mg-top-10" name="passwordCheck" id="passwordCheck" placeholder="비밀번호 확인" onChange={ this.handleChange } />
              <button type="button" className="btn btn-success btn-block custom-login-btn" onClick={ this.handleJoin }>회원가입</button>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

export default Join;