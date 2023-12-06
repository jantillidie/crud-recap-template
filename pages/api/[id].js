import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();
  if (request.method === "GET") {
    const recipes = await Recipe.findById(request.query.id);
    if (!recipes) {
      response.status(404).json({ message: "Recipe not found" });
      return;
    }
    response.status(200).json(recipes);
    return;
  }
}
