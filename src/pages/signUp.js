import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import BackButton from "../components/BackButton";

export default function signUp() {
  return (
    <div className="flex justify-center items-center  h-full">
      <div className="flex flex-col gap-12 px-36">
        <div>
          <h1 className="font-slab text-primaryont-bold text-5xl">
            RocketMovies
          </h1>
          <p className="font-slab text-[#CAC4CF]   text-sm">
            Aplicação para acompanhar tudo que assistir.
          </p>
        </div>
        <div>
          <h2 className="font-slab text-[#F4EDE8] font-medium text-2xl">
            Crie sua conta
          </h2>
        </div>
        <form className="flex flex-col gap-6 max-w-xs w-full">
          <div className="flex flex-col gap-2">
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiUser className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary pl-4"
                type="text"
                placeholder="Nome"
              />
            </div>
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
          <button className="primaryButton w-full justify-center">
            Cadastrar
          </button>
        </form>
        <BackButton href="logIn" content="Voltar para o login" />
      </div>
      <div className="bg-login flex-1 w-full h-full bg-repeat bg-cover filter brightness-50 bg-[#1C1B1E] opacity-50"></div>
    </div>
  );
}
