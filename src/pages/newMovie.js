import Main from "@/components/layouts/Main";
import Tag from "@/components/Tag";

import { useState } from "react";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NewMovie() {
  const [inputValue, setInputValue] = useState([]);

  const handleInputValue = (value) => {
    setInputValue([...inputValue, value]);
    console.log(inputValue);
  };

  return (
    <Main>
      <div className="container flex flex-col gap-6">
        <button>
          <Link
            className="flex items-center gap-2 secondaryTextButton text-base font-slab"
            href="/"
          >
            <FiArrowLeft clas />
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
        </div>
        <div className="flex flex-col gap-4 ">
          <p>Marcadores</p>
          <div className="flex justify-start gap-6 p-4 bg-[#0D0C0F] rounded-lg">
            <Tag value="cleverson" wasCreated />
            <Tag onClick={(value) => handleInputValue(value)} />
          </div>
        </div>
      </div>
    </Main>
  );
}
