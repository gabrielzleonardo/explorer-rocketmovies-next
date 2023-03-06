import Main from "@/components/layouts/Main";
import TagCreation from "@/components/TagCreation";

import { useState } from "react";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NewMovie() {
  const [inputValue, setInputValue] = useState();

  const handleInputValue = (value) => {
    setInputValue(value);
    console.log(value);
  };

  return (
    <Main>
      <div className="container flex flex-col gap-6 overflow-y-auto">
        <button>
          <Link
            className="flex items-center gap-2 secondaryTextButton text-base font-slab"
            href="/"
          >
            <FiArrowLeft />
            Voltar
          </Link>
        </button>
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-slab text-3xl">Novo filme</h1>
          <div className="flex gap-10">
            <input type="text" placeholder="Título" className="inputPrimary" />
            <input
              type="text"
              placeholder="Sua nota (de 0 a 5)"
              className="inputPrimary"
            />
          </div>
          <textarea placeholder="Observações"></textarea>
          <div className="flex flex-col gap-4 ">
            <p className="text-[#999591] font-slab text-xl">Marcadores</p>
            <div className="flex justify-start gap-6 p-4 bg-[#0D0C0F] rounded-lg">
              <TagCreation value="cleverson" wasCreated />
              <TagCreation inputValue={(value) => handleInputValue(value)} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 pb-7">
            <button className="bg-[#0D0C0F] text-bubblegum rounded-md py-3 px-8 w-full">
              Excluir filme
            </button>
            <button className="primaryButton w-full text-center inline ">
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}
