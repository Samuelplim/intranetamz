import React, { useState } from "react";
import { WrapperModal } from "./WrapperModal";

import "../styles/cadastroColabModal.scss";

export function CadastroSetorModal() {
  return (
    <WrapperModal textButton="Setor">
      <div id="component-cadastroSetorModal">
        <div>
          <p>
            Nome do setor
            <input type="text" />
          </p>

          <p>Rodizios</p>
          <p>
            domingo:
            <input type="checkbox" />
          </p>
          <p>
            feriados:
            <input type="checkbox" />
          </p>
          <p>
            Quantos plantonistas?
            <input />
          </p>
        </div>
        <div>
          <p>
            Horario especial no plantão?
            <input type="checkbox" />
          </p>
          <div className="hours-worked">
            <input type="time" />
            <p>ás</p>
            <input type="time" />
          </div>
          <div className="hours-worked">
            <input type="time" />
            <p>ás</p>
            <input type="time" />
          </div>
        </div>
      </div>
    </WrapperModal>
  );
}
