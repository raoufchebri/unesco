export default function Container({ children }) {
  return (
    <section
      className={`flex flex-col justify-between mx-auto px-10 py-4 sm:py-16`}
    >
      {children}
    </section>
  );
}
