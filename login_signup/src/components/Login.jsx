import React from "react";
import "./login.css";

function Login(){

return(

<>
<div class="wrapper">
        <form>

            <h1>Log in </h1>
            <div className="input-box">

                <input type="text" placeholder="username" required />

                <i className='bx bxs-user'></i>

            </div>
            <div className="input-box">

                <input type="password" placeholder="password" required />

                <i className='bx bxs-lock-alt'></i>

            </div>
            <div className="input-box">

                <input type="email" placeholder="email" required />

                <i className='bx bx-envelope'></i>

            </div>

            <div className="Remember-forgot">

                <label><input type="checkbox" />Remember me</label>

            </div>

            <button type="submit" class="btn"> LET ME IN !</button>

        </form>
    </div>
</>

);

}

export default Login;