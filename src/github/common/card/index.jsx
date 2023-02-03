import "./index.styles.jsx";
import { useState } from "react";
import { Container } from "./index.styles.jsx";

export const Card = ({ gradientColor = "red", children = null }) => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  function handleOnMouseMove(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setX(`${x}px`);
    setY(`${y}px`);
  }

  return (
    <div className="overflow-hidden rounded-[8px] z-10 p-6">
      <Container
        className="bg-[#161b22] rounded-[8px] border border-[#454c6d] p-6 relative overflow-hidden"
        onMouseMove={handleOnMouseMove}
        style={{
          "--x": x,
          "--y": y,
        }}
        background={gradientColor}
      >
        <div className="relative">{children}</div>
      </Container>
    </div>
  );
};
