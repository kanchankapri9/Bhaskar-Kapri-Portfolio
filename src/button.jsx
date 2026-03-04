import "./button.css";

function Button({ name, classN = "", type = "button" }) {
  return (
    <button type={type} className={`app-button ${classN}`.trim()}>
      {name}
    </button>
  );
}

export default Button;
