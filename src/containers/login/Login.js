import React, { Component } from 'react';
import jasync from '../../jasync';

class Login extends Component {
  login() {
    let formData = {};
    document.getElementById("login-form").querySelectorAll("input").forEach(input => formData[input.name] = input.value);

    jasync.post({
      url: "/private/v1/auth/login",
      data: formData,
      success: data => {
        window.location.reload();
      },
      error: err => {
        alert("로그인 중 문제가 발생했습니다.");
        console.log(err);
      }
    });
  }

  render() {
    return (
			<div className="wrapper login-page">
				<div className="login-box">
					<div className="login-logo">
						<a href="#"><b>M</b>office</a>
					</div>
					<div className="login-box-body">
						<form id="login-form" method="post">
							<div className="form-group has-feedback">
								<input type="email" name="user_email" className="form-control" placeholder="Email"/>
								<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
							</div>
							<div className="form-group has-feedback">
								<input type="password" name="user_password" className="form-control" placeholder="Password"/>
								<span className="glyphicon glyphicon-lock form-control-feedback"></span>
							</div>
							<div className="form-group">
								<button type="button" onClick={this.login} className="btn btn-primary btn-block btn-flat">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
    );
  }
}

export default Login;