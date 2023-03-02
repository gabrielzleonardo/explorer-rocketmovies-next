import Input from "./Input";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="border-b border-[#3E3B47] flex justify-between items-center  py-6 gap-16 container">
      <h2 className="text-[#FF859B]">RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" />
      <Profile />
    </header>
  );
}
