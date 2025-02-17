function Button({ children }) {
  return (
    <button className="hanken bg-main uppercase p-4 mx-auto px-8 text-2xl transition-all duration-100 hover:shadow-2xl hover:drop-shadow-xl cursor-pointer">
      {children}
    </button>
  );
}

export default Button;
