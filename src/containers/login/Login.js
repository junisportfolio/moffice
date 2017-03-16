import React from 'react';

const Login = () => {
	return (
		<div className="wrapper login-page">
			<div className="login-box">
				<div className="login-logo">
					<a href="#"><b>M</b>office</a>
				</div>
				<div className="login-box-body">
					<form action="../../index2.html" method="post">
						<div className="form-group has-feedback">
							<input type="email" className="form-control" placeholder="Email"/>
							<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
						</div>
						<div className="form-group has-feedback">
							<input type="password" className="form-control" placeholder="Password"/>
							<span className="glyphicon glyphicon-lock form-control-feedback"></span>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block btn-flat">Login</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	);
};

export default Login;