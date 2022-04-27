import { WrapperModal } from "./WrapperModal";
import classnames from "classnames";
import "../styles/cadastroColabModal.scss";
import { InputWithSelector } from "./InputWithSelector";
import React, { useState } from "react";
enum Days {
  dom = "dom",
  seg = "seg",
  ter = "ter",
  qua = "qua",
  qui = "qui",
  sex = "sex",
  sab = "sab",
}
export function CadastroCargoModal() {
  const [days, setDays] = useState({
    dom: false,
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
  });
  function handleChangeDays(value: boolean, day: keyof typeof Days) {
    setDays((preState) => ({ ...preState, [day]: value }));
  }
  return (
    <WrapperModal textButton="Cargo">
      <div id="component-cadastroCargoModal">
        <div>
          <p>
            Nome do cargo
            <input type="text" />
          </p>
          <p>
            Tempo de intervalo (Horas)
            <input type="time" placeholder="" />
          </p>
          <p>
            Setor
            <InputWithSelector />
          </p>
        </div>
        <div className="box-left">
          <p>Escala</p>
          <div className="list-group">
            <span
              className={classnames("list-group-item", {
                ativo: days.dom,
              })}
              onClick={() => handleChangeDays(!days.dom, "dom")}
            >
              <label>D</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.seg,
              })}
              onClick={() => handleChangeDays(!days.seg, "seg")}
            >
              <label>S</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.ter,
              })}
              onClick={() => handleChangeDays(!days.ter, "ter")}
            >
              <label>T</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.qua,
              })}
              onClick={() => handleChangeDays(!days.qua, "qua")}
            >
              <label>Q</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.qui,
              })}
              onClick={() => handleChangeDays(!days.qui, "qui")}
            >
              <label>Q</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.sex,
              })}
              onClick={() => handleChangeDays(!days.sex, "sex")}
            >
              <label>S</label>
            </span>
            <span
              className={classnames("list-group-item", {
                ativo: days.sab,
              })}
              onClick={() => handleChangeDays(!days.sab, "sab")}
            >
              <label>S</label>
            </span>
          </div>
          <div className="hours-worked">
            <input type="time" />
            <p>ás</p>
            <input type="time" />
          </div>
          <button>Salvar</button>
        </div>
      </div>
    </WrapperModal>
  );
}
