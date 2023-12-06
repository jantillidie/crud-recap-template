import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";

const RecipePage = () => {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, mutate } = useSWR(`/api/recipes/${id}`, fetcher);

  if (!recipe || !isReady) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Ingredients:
        <ul>{recipe.ingredients.map(ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>)}</ul></p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
