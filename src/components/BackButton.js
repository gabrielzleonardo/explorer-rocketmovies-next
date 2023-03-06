import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BackButton({ content = "Voltar", href }) {
  const router = useRouter();

  return (
    <button
      href={href}
      type="button"
      className="secondaryTextButton text-center text-base flex "
      onClick={() => (href ? router.push(href) : router.back(href))}
    >
      <FiArrowLeft className="text-2xl" />
      <span className="ml-2">{content}</span>
    </button>
  );
}
