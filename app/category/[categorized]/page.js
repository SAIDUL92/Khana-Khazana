import Card from "@/components/Card";
import { getRecipestByCategory } from "@/queries";

export default async function CategorizedPage({ params: { categorized } }) {
  const decodedCategoryName = decodeURIComponent(categorized);
  const categorizedRecipes = await getRecipestByCategory(decodedCategoryName);
  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl">{decodedCategoryName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {categorizedRecipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
