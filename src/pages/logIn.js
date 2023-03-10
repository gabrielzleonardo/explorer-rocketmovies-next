import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center  h-full">
      <div className="flex flex-col gap-12 items-center w-2/5">
        <div className="pl-4">
          <h1 className="font-slab text-primary font-bold text-5xl">
            RocketMovies
          </h1>
          <p className="font-slab text-[#CAC4CF]   text-sm">
            Aplicação para acompanhar tudo que assistir.
          </p>

          <h2 className="font-slab text-[#F4EDE8] font-medium text-2xl mt-12">
            Faça seu login
          </h2>
        </div>
        <form className="flex flex-col gap-6 max-w-xs w-full">
          <div className="flex flex-col gap-2">
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiMail className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary pl-4"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiLock className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary pl-4"
                type="password"
                placeholder="Senha"
              />
            </div>
          </div>
          <Link href="/">
            <button className="primaryButton w-full justify-center">
              Entrar
            </button>
          </Link>
        </form>
        <Link
          className="secondaryTextButton text-center text-base "
          href="./signUp"
        >
          Criar conta
        </Link>
      </div>
      <div className="bg-login flex-1 w-full h-full bg-repeat bg-cover filter brightness-50 bg-[#1C1B1E] opacity-50"></div>
    </div>
  );
}
