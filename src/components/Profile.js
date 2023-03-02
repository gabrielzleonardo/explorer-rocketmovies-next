import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-end justify-center">
        <strong className="whitespace-nowrap text-white text-sm font-bold">
          Gabriel Leonardo
        </strong>
        <button className="primaryTextButton">sair</button>
      </div>
      <div className="w-[64px] h-[64px]">
        <Image
          className="rounded-full border-2 border-[#3E3B47]"
          src="https://github.com/gabrielzleonardo.png"
          alt="Foto de perfil do usuário"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
