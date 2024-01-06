import './Login.css';


const Login = () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    return (
        <div className='font-roboto flex items-center justify-center pt-32'>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1 className='text-xl font-medium'>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className='bg-pink-600 px-4 py-2 rounded-lg text-white'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1 className='text-xl font-medium'>Sign In</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button className='bg-pink-600 px-4 py-2 rounded-lg text-white'>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="bg-white px-4 py-2 rounded-lg text-pink-600" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <h1 className='text-blue-500'>New In this website?</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="bg-white px-4 py-2 rounded-lg text-pink-600" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

