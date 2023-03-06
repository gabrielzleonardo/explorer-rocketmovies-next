import Main from "@/components/layouts/Main";
import Link from "next/link";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import Image from "next/image";

export default function MovieDetails({ data }) {
  data = {
    title: "Interestellar",
    description:
      "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.",
    tags: [
      { id: "1", name: "Ação" },
      { id: "2", name: "Aventura" },
      { id: "3", name: "Ficção científica" },
    ],
  };

  return (
    <Main>
      <div className="container flex flex-col gap-10 overflow-y-auto">
        <div className="flex flex-col gap-6">
          <button>
            <Link
              className="flex items-center gap-2 secondaryTextButton text-base font-slab"
              href="/"
            >
              <FiArrowLeft />
              Voltar
            </Link>
          </button>
          <div className="flex gap-5">
            <h1 className="font-medium text-3xl font-slab text-[#F4EDE8]">
              {data.title}
            </h1>
            <Image src="stars.svg" width={140} height={20} alt="rating" />
          </div>
          <div className="flex gap-2 items-center text-bubblegum">
            <Image
              className="rounded-full border-2 border-[#3E3B47] object-cover h-4"
              src="https://github.com/gabrielzleonardo.png"
              alt="Foto de perfil do usuário"
              width={16}
              height={16}
            />
            <p>Por Gabriel Leonardo</p>
            <FiClock />
            <p>23/05/22 às 08:00</p>
          </div>
        </div>
        {data.tags.length > 0 && (
          <div className="flex gap-2">
            {data.tags.map((tag) => (
              <div
                className="font-slab text-xs text-[#E5E5E5] bg-[#282124] rounded-lg px-4 py-1"
                key={tag.id}
              >
                {tag.name}
              </div>
            ))}
          </div>
        )}

        <p className="text-justify">{data.description}</p>
      </div>
    </Main>
  );
}
