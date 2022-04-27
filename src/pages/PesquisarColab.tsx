import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ListGroupColab } from "../components/ListGroupColab";
import { Sidebar } from "../components/Sidebar";

import "../styles/pesquisarColab.scss";

export function PesquisarColab() {
  const [email, setEmail] = useState("" as any);
  const history = useHistory();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email);
    } else {
      history.push("/");
    }
  });

  return (
    <div id="page-pesquisarColab">
      <Sidebar />
      <div>
        <p>{email}</p>
        <input className="inputSearch" type="text" placeholder="Pesquisar" />
        <ListGroupColab />
      </div>
    </div>
  );
}
