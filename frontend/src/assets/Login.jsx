import React from 'react';

const Login = () => {
    const [isRegistered, setIsRegistered] = React.useState(true);
    const [showPass, setShowPass] = React.useState(false);
    const [rFormData, setRFormData] = React.useState({
        fullName: "",
        password: "",
        email: "",
    });
    const [lFormData, setLFormData] = React.useState({
        password: "",
        email: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    function toggle() {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src="logo_1.png" alt="logo" className="logo" />
            </div>
            
            <div className="form-container">
                <div className="form-header">
                    <h2>{isRegistered ? "Welcome Back!" : "Create Account"}</h2>
                    <p>{isRegistered ? "Login to continue" : "Get started with us"}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isRegistered && (
                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={rFormData.fullName}
                                onChange={(e) => setRFormData({ ...rFormData, fullName: e.target.value })}
                                placeholder="Enter your name"
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={isRegistered ? lFormData.email : rFormData.email}
                            onChange={isRegistered ? 
                                (e) => setLFormData({ ...lFormData, email: e.target.value }) : 
                                (e) => setRFormData({ ...rFormData, email: e.target.value })}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-input">
                            <input
                                type={showPass ? "text" : "password"}
                                value={isRegistered ? lFormData.password : rFormData.password}
                                onChange={isRegistered ? 
                                    (e) => setLFormData({ ...lFormData, password: e.target.value }) : 
                                    (e) => setRFormData({ ...rFormData, password: e.target.value })}
                                placeholder="Enter your password"
                            />
                            <button 
                                type="button" 
                                className="toggle-password"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? (
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path fill="#008080" d="M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0 9.821 9.821 0 0 0-17.64 0z"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path fill="#008080" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        {isRegistered ? "Sign In" : "Create Account"}
                    </button>

                    <p className="toggle-text">
                        {isRegistered ? "Don't have an account?" : "Already have an account?"}
                        <button type="button" onClick={toggle} className="toggle-link">
                            {isRegistered ? " Register" : " Login"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;