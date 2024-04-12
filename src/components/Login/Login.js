
//  Create a LoginForm component that contains the following:
//   1. Username and password input fields,
//   2. an h3 that says Log In, with a border. 
//   3. Style the component using the default generated CSS file.


function LoginForm () {
    return (
        <form className="loginForm">
            <h3>Hay there! Please Log In!</h3>
            <br></br>
            <i>Username</i>
            <input placeholder="Moosername"></input>
            <i>Password</i>
            <input type="password" placeholder="Grassword"></input>
            <button>Log In</button>
        </form>
    )
}
export default LoginForm;