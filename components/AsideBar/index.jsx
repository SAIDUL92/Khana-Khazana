import { getAllRecipes } from "@/queries";
import { removeDuplicatesByProperty } from "@/utils";
import Link from "next/link";

export default async function SideBar() {
  const allRecipes = await getAllRecipes();
  const uniqueCategories = removeDuplicatesByProperty(allRecipes, "category");

  return (
    <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
      {uniqueCategories.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`category/${encodeURIComponent(recipe.category)}`}>
            {recipe.category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
