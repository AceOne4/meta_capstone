function Button({ children, clickHanler }) {
  return <button onClick={clickHanler}>{children}</button>;
}

export default Button;
