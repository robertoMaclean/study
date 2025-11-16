import React from "react";

type variant = "primary" | "secondary" | "warning";
type Props = {
  variant?: variant;
  children?: React.ReactNode;
};

function Button({ variant = "primary" }: Props) {
  return <button className={`btn btn-${variant}`}>Enviar</button>;
}

export default Button;
