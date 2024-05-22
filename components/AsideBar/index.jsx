import { getAllRecipes } from "@/queries";
import { removeDuplicatesByProperty } from "@/utils";
import Link from "next/link";
const allRecipes = await getAllRecipes();

export default function SideBar() {
  const uniqueCategories = removeDuplicatesByProperty(allRecipes, "category");

  return (
    <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
      {uniqueCategories.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/${encodeURIComponent(recipe.category)}`}>
            {recipe.category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
