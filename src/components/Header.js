import Input from "./Input";

export default function Header() {
  return (
    <header className="flex">
      <h2 className="font-slab text-2xl font-bold text-[#FF859B]">
        RocketMovies
      </h2>
      <Input />
      <div>
        <div>
          <strong>Gabriel Leonardo</strong>
          <button className="textButton">sair</button>
        </div>
      </div>
    </header>
  );
}
