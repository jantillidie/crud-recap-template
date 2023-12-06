import connect from "@/db/connect.js";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const recipes = await Recipe.find()
      .sort({ createdAt: -1 })
      .limit(request.query.limit);
    response.status(200).json(recipes);
    return;
  }
}
