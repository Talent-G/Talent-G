import "./styles.css";

export default function Button({ children, type = null, callback }) {
  let className = "button";
  if (type) {
    className = `${className} ${type}`;
  }

  return (
    <div>
      <button className={className} onClick={callback}>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  callback: () => {
    console.log("Hiciste click en el botón sin definir un callback!");
  },
};
