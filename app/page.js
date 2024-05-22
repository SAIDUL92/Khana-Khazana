import { getAllRecipes } from "@/queries";
import SideBar from "@/components/AsideBar";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const allRecipes = await getAllRecipes();
  return (
    <main>
      <section className="container">
        <Banner />
      </section>

      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <Suspense key={"khana"} fallback={<Loading />}>
            <div className="col-span-12 md:col-span-3">
              <h3 className="font-bold text-xl">Recipes</h3>
              <SideBar />
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                {allRecipes.map((recipe) => (
                  <Card key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          </Suspense>
        </div>
      </section>
    </main>
  );
}
