import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputWithSelector } from "./InputWithSelector";
import { WrapperModal } from "./WrapperModal";

import "../styles/cadastroColabModal.scss";
import { getDatabase, push, ref } from "firebase/database";

type collaboradorProps = {
  name: string;
  admissionDate: string;
  office: string;
  workSchedule: string;
  workingColab: true;
};
const schema = yup.object({
  name: yup.string().required("Informe o nome do colaborador completo"),
  admissionDate: yup.string().required("Campo obrigatório"),
});

export function CadastroColabModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<collaboradorProps>({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState<collaboradorProps>();

  function writeColabData() {
    const db = getDatabase();
    push(ref(db, "collaborator/"), { data });
  }
  console.log(data);
  async function onSubmitColab(data: collaboradorProps) {
    setData(data);
    writeColabData();
  }

  return (
    <WrapperModal textButton="Colaborador">
      <div id="component-cadastroModal">
        <form onSubmit={handleSubmit((data) => onSubmitColab(data))}>
          <div>
            <p>Nome do colaborador</p>
            <input
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
            <p className="error">{errors.name?.message}</p>

            <p>Data de admissão</p>
            <input type="date" placeholder="" {...register("admissionDate")} />
            <p className="error">{errors.admissionDate?.message}</p>

            <p>Cargo</p>
            <Controller
              name="office"
              control={control}
              render={({ field }) => (
                <InputWithSelector {...field} type="text" placeholder="Cargo" />
              )}
            />

            <p>Setor</p>
            <Controller
              name="workSchedule"
              control={control}
              render={({ field }) => (
                <InputWithSelector {...field} type="text" placeholder="Setor" />
              )}
            />
          </div>
          <div>
            <p>Tempo de intervalo: 00min</p>
            <div className="escalastyle">
              <p>Escala</p> <span>6/1</span> <span>00:00</span>
              <p>ás</p>
              <span>00:00</span>
            </div>
            <div className="escalastyle">
              <p>Ativo</p>
              <input
                type="checkbox"
                id="checkWorking"
                {...register("workingColab")}
              />
            </div>

            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </WrapperModal>
  );
}
