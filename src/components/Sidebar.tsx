import "../styles/sidebar.scss";
import { CadastroColabModal } from "./CadastroColabModal";
import { CadastroCargoModal } from "./CadastroCargoModal";
import { CadastroSetorModal } from "./CadastroSetorModal";

export function Sidebar() {
  return (
    <div id="component-sidebar">
      <CadastroColabModal />
      <CadastroCargoModal />
      <CadastroSetorModal />
      <button>Plantão</button>
      <button>Feriados</button>
      <button>Ocorrencias</button>
    </div>
  );
}
/**
 * <button href="/">Colaborador</button>
      <button href="/">Cargo</button>
      <button href="/">Setor</button>
      <button href="/">Plantão</button>
      <button href="/">Feriados</button>
      <button href="/">Ocorrencias</button>
 */
