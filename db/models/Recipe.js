import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ingredientsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: false
  },
  unit: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  }
});

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: ingredientsSchema,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  hero_image_url: {
    type: String,
    required: false
  },
},
  { timestamps: true }
);

const Recipe = mongoose.models?.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
