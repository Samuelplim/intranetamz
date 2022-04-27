import "../styles/wrappermodal.scss";
import { useState } from "react";
type Props = {
  children: React.ReactNode;
  textButton: string;
};
export function WrapperModal({ children, textButton }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <div id="component-wrappermodal">
      <button onClick={() => setIsModalVisible(false)}>{textButton}</button>
      {isModalVisible ? (
        isModalVisible
      ) : (
        <div className="container">
          <div>
            <button onClick={() => setIsModalVisible(true)}>close</button>
            <div className="content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
