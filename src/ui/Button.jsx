import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-sky-500 font-semibold uppercase tracking-wide text-slate-800 transition-colors duration-300 hover:bg-sky-400 focus:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "text-xs px-4 py-2 md:px-5 md:py-2.5",
    round: base + "text-s px-2.5 py-1 md:py-2 md:px-3.5",
    secondary:
      "text-sm inline-block rounded-full border-2 border-slate-300 font-semibold uppercase tracking-wide text-slate-800 transition-colors duration-300 hover:bg-slate-300 focus:bg-slate-300 hover:text-slate-800 focus:text-slate-800 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
