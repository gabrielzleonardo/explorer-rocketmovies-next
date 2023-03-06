import Image from "next/image";
import Link from "next/link";

export default function NotePreview({ data }) {
  return (
    <Link
      href={data.href}
      className=" bg-primary/5 rounded-xl flex gap-4 flex-col w-full p-8 hover:brightness-125 ease-in duration-200"
    >
      <div>
        <h2 className="text-white">{data.title}</h2>
        <Image src="/stars.svg" width={84} height={16} alt="rating" />
      </div>

      <p className="line-clamp-2 text-[#999591] text-base font-slab">
        {data.description}
      </p>
      {data.tags.length > 0 && (
        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <div
              className="font-slab text-xs text-[#E5E5E5] bg-[#312E38] rounded-lg px-4 py-1"
              key={tag.id}
            >
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}
