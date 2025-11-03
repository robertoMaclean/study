import { ReactNode } from "react";

import styles from "./Button.module.css";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

// type BtnProps = {
//   isLoading?: boolean,
// }

// const Btn = styled.button<BtnProps>`
// background-color: ${(props) => (props.isLoading ?'gray' : 'red')};
// padding: 25px 30px;
// `

// type Props = {
//   children: ReactNode;
//   isLoading?: boolean;
//   onClick: () => void;
// };

// console.log(styles)
// function Button({ children, isLoading, onClick }: Props) {
//   const className = [
//     `btn btn-${isLoading ? "secondary" : "primary"}`,
//     styles.button].join(" ")
//   return (
//     <Btn
//       onClick={onClick}
//       disabled={isLoading}
//       type="button"
//       className={className}
//     >
//       {isLoading ? "Cargando..." : children}
//       <FaRegThumbsUp color="blue" size={40}/>
//   </Btn>
//   );
// }

type Props = {
  sent: boolean;
  onClick: () => void;
  children: ReactNode;
};

function Button({ children, sent, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={[styles.btn, styles.btnPrimary].join(" ")}
    >
      {sent ? "Enviado" : children}
      <span style={{ position: "relative", top: 2 }}>
        {sent ? <FaCheck color="white" /> : <IoIosSend color="white" />}
      </span>
    </button>
  );
}

export default Button;
