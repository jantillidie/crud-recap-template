import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { useRouter } from "next/router";

const RecipePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, mutate } = useSWR(`/api/recipes/${id}`, fetcher);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{description}</p>
      <p>Ingredients:
        <ul>{ingredients.map(ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>)}</ul></p>
      <p>Instructions: {instructions}</p>
    </div>
  );
};

export default RecipePage;
