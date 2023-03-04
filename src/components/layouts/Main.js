import Header from "../Header";

export default function Main({ children }) {
  return (
    <div className="max-h-full flex flex-col">
      <Header />
      {children}
    </div>
  );
}
