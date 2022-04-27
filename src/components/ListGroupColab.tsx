import { useColab } from "../hooks/useColab";

import "../styles/listGroupColab.scss";
import { LineColab } from "./LineColab";

export function ListGroupColab() {
  const { colabs } = useColab();
  console.log(colabs);
  return (
    <div>
      {colabs.length > 0 ? (
        colabs.map((colabs) => {
          return (
            <LineColab
              key={colabs.id}
              name={colabs.name}
              admissionDate={colabs.admissionDate}
            />
          );
        })
      ) : (
        <p>Sem funcionarios cadastrados</p>
      )}
      <div className="divider" />
    </div>
  );
}
