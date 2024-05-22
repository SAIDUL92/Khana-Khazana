import Image from "next/image";
import Link from "next/link";
export default function Card({ recipe }) {
  return (
    <div className="card">
      <Image
        src={recipe.thumbnail}
        className="rounded-md"
        alt="Image"
        width={296}
        height={158}
      />
      <h4 className="my-2">
        <Link href={`/details/${recipe.id}`}>{recipe.name}</Link>
      </h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {recipe.rating}</span>
        <span>By: {recipe.author}</span>
      </div>
    </div>
  );
}
