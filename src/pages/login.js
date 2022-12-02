import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import {MainTable} from "./tables/mainTable";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{ username: "Jayson", password: "1" }];
    const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/tables");
      }
    };
    return (
        <div>
          <p>Welcome Back</p>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            />
            <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
};


