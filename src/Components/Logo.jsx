export default function Logo({ children }) {
  return (
    <img
      className={`w-7 h-7 sm:w-[3rem] sm:h-[3rem] md:w-[3.5rem] md:h-[3.5rem] xl:mr-3 ${children} `}
      src="Logo.png"
      alt="Logo"
    />
  );
}
