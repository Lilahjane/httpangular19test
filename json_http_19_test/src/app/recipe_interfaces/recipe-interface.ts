import {IngredientInterface} from "./ingredient-interface";

export interface RecipeInterface {
    recipe_name: string;
    recipe_photo: string;
    recipe_url: string;
    Calories: number;
    Carbohydrates: string;
    NetCarbs: string;
    Fat: string;
    Protein: string;
    Sodium: string;
    Prep_Time: string;
    Difficulty_Level: string;
    Spice_Level: string;
    Ingredients:[IngredientInterface]
    class?: string;
    id: number;
}
