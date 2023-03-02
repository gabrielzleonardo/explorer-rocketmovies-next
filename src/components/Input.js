export default function Input({ placeholder, type }) {
  return (
    <div className="w-full flex items-center bg-[#262529] text-[#c1bbc7] rounded-xl">
      <input
        className=" w-full h-14  py-4 pl-6 bg-transparent border-0  focus:outline-none placeholder:text-[#948F99]"
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
}
