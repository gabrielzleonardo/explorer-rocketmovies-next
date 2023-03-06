import Profile from "./Profile";

export default function Header() {
  return (
    <header className="border-b border-[#3E3B47]   mb-10  py-6  ">
      <div className=" container flex justify-between  items-center gap-16">
        <h2 className="text-primary">RocketMovies</h2>
        <input
          type="text"
          placeholder="Procure pelo título"
          className="inputPrimary"
        />
        <Profile />
      </div>
    </header>
  );
}
