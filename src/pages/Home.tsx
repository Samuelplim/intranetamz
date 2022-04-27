import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      history.push("/colaborador");
    } else {
    }
  });
  function handlecolabGo() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.push("/colaborador");
        console.log("Auth var" + auth.name);
        console.log("User var" + user.email);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMenssage = error.message;
        setError(errorMenssage);
      });
    console.log("Auth var" + auth.name);
  }
  return (
    <div id="page-auth">
      <p>
        Login
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
        />
      </p>

      <p>
        Senha
        <input
          type="password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
        />
      </p>
      <h5>{error}</h5>

      <Button type="submit" onClick={handlecolabGo}>
        ENTRAR
      </Button>
    </div>
  );
}
