import Image from "next/image";
import { useEffect, useState } from "react";
import Circle from "../../public/images/circle.svg";

const CustomCursor = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <Image
        src={Circle}
        alt={"Circle"}
        style={{
          position: "fixed",
          top: position.y-7,
          left: position.x-10,
          width: "24px",
          height: "24px",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;
