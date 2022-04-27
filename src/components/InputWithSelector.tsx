import { InputHTMLAttributes } from "react";

import SearchSvg from "../assets/images/search.svg";
import ArrowRightSvg from "../assets/images/ArrowRight.svg";

import "../styles/InputWithSelector.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputWithSelector({ ...props }: InputProps) {
  return (
    <div id="components-InputWithSelector">
      <div className="inputstyle">
        <input type="text" {...props} />

        <button>
          <img src={SearchSvg} alt="" />
        </button>
        <button>
          <img src={ArrowRightSvg} alt="" />
        </button>
      </div>
    </div>
  );
}
