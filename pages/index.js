import useSWR from "swr";
import Link from "next/link";
import fetcher from "@/lib/fetcher";
import { useEffect } from "react";

export default function HomePage() {
  const { data: recipes, mutate } = useSWR("/api/recipes", fetcher);

  if (!recipes) return <h2>Is loading...</h2>;

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.length ? (
        <ul>
          {recipes.map(({ _id, name, description, ingredients, instructions }) => (
            <li key={_id}>
              <strong>{name}</strong>
              <p>{description}</p>
              <p>Ingredients:
                <ul>{ingredients.map(ingredient => <li>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>)}</ul></p>
              <p>Instructions: {instructions}</p>
              <Link href={`/recipe/${_id}`}>Read More</Link>
            </li>
          ))}
        </ul>
      ) : (
        "No services yet."
      )}
    </div>
  );
}
