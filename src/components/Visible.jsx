import { useState } from "react";

export const EstaVisible = () => {
  const [visible, setVisible] = useState(true);

  const togglehidden = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={togglehidden}>{visible ? "ocultar mensaje" : "mostrar mensaje"}</button>
      {visible && (
        <div>
          <h2>Sorpresa he vuelto</h2>
        </div>
      )}
    </div>
  );
};
