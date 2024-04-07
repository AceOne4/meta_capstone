function Button({ children, clickHanler }) {
  return (
    <button aria-label="On Click" onClick={clickHanler}>
      {children}
    </button>
  );
}

export default Button;
