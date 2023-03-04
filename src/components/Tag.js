import { FiX, FiPlus } from "react-icons/fi";

export default function Tag({ value, onClick, wasCreated }) {
  return (
    <div
      wasCreated={wasCreated}
      className={`flex ${
        wasCreated
          ? `bg-[#262529] text-white  font-slab`
          : `bg-transparent border-2 border-dashed text-[#948F99] border-[#948F99]`
      } rounded-lg pr-4`}
    >
      <input
        type="text"
        value={value}
        readOnly={wasCreated}
        className="bg-transparent text-[#c1bbc7] rounded-xl py-4 pl-6  border-0  focus:outline-none placeholder:text-[#948F99]"
        placeholder="Novo marcador"
      />


      <button type="button" onClick={onClick} className="text-bubblegum">
        {wasCreated ? <FiX /> : <FiPlus />}
      </button>
    </div>
  );
}
