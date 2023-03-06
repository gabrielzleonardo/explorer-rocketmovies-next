import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

export default function Profile() {
  return (
    <div>
      <header className="flex items-center h-36 bg-primary/5">
        <BackButton />
      </header>
      <div className="flex flex-col items-center gap-16">
        <div className="relative">
          <Image
            src="https://github.com/gabrielzleonardo.png"
            width={186}
            height={186}
            className="rounded-full -mt-20"
            alt="foto de Gabriel Leonardo"
          />

          <label
            htmlFor="avatar"
            className="absolute cursor-pointer bottom-0 right-0 w-12 h-12 bg-primary text-xl rounded-full flex items-center justify-center text-[#312E38]"
          >
            <input type="file" id="avatar" className="hidden" />
            <FiCamera />
          </label>
        </div>

        <form className="flex flex-col items-center mt-4 gap-6 w-full max-w-sm">
          <div className="flex flex-col gap-2 w-full">
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiUser className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary bg-transparent pl-4"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiMail className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary  bg-transparent pl-4"
                type="text"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiLock className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary pl-4"
                type="text"
                placeholder="Senha atual"
              />
            </div>
            <div className="inputPrimary flex items-center py-0 pl-4">
              <FiLock className=" text-[#948F99] text-2xl" />

              <input
                className="inputPrimary pl-4"
                type="text"
                placeholder="Nova senha"
              />
            </div>
          </div>
          <button className="primaryButton w-full text-center inline">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
