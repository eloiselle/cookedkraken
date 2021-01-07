import { DbEnv } from "../databaseProperties.js";

import Favorite from "../rest/Favorite/Favorite.js"
import Ingredient from "../rest/Ingredient/Ingredient.js"
import IngredientType from "../rest/IngredientType/IngredientType.js"
import Inventory from "../rest/Inventory/Inventory.js"
import Meal from "../rest/Meal/Meal.js"
import ObjectInstance from "../rest/ObjectInstance/ObjectInstance.js"
import ObjectType from "../rest/ObjectType/ObjectType.js"
import Permission from "../rest/Permission/Permission.js"
import Session from "../rest/Session/Session.js"
import TaIngredientIngredientType from "../rest/TaIngredientIngredientType/TaIngredientIngredientType.js"
import TaIngredientObjectInstance from "../rest/TaIngredientObjectInstance/TaIngredientObjectInstance.js"
import TaMealIngredient from "../rest/TaMealIngredient/TaMealIngredient.js"
import TaMealIngredientType from "../rest/TaMealIngredientType/TaMealIngredientType.js"
import User from "../rest/User/User.js"
import Version from "../rest/Version/Version.js"


export module insertData {

  /*
  ########    ###    ##     ##  #######  ########  #### ######## ######## 
  ##         ## ##   ##     ## ##     ## ##     ##  ##     ##    ##       
  ##        ##   ##  ##     ## ##     ## ##     ##  ##     ##    ##       
  ######   ##     ## ##     ## ##     ## ########   ##     ##    ######   
  ##       #########  ##   ##  ##     ## ##   ##    ##     ##    ##       
  ##       ##     ##   ## ##   ##     ## ##    ##   ##     ##    ##       
  ##       ##     ##    ###     #######  ##     ## ####    ##    ######## 
  */

  export function favorite() {

    const data: Favorite[] = [
      new Favorite({ id_user: 1, id_meal: 1 }),
      new Favorite({ id_user: 1, id_meal: 4 }),
      new Favorite({ id_user: 2, id_meal: 2 }),
      new Favorite({ id_user: 2, id_meal: 20 }),
      new Favorite({ id_user: 2, id_meal: 1 }),
    ]

    return DbEnv('favorite').insert(data)
  }

  /* 
  #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ######## 
   ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##    
   ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##    
   ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##    
   ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##    
   ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##    
  #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    
  */

  export function ingredient() {

    const data: Ingredient[] = [
      // Vegetables
      new Ingredient({ image_url: "/vegetables/Carrot.png", name: "Carrot", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Carrot.png", name: "Roasted Carrot", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Corn.png", name: "Corn", hp_value: 3, hunger_value: 25, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Popcorn.png", name: "Popcorn", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 15, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Eggplant.png", name: "Eggplant", hp_value: 8, hunger_value: 25, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Braised_Eggplant.png", name: "Braised Eggplant", hp_value: 20, hunger_value: 25, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Pumpkin.png", name: "Pumpkin", hp_value: 3, hunger_value: 37.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Hot_Pumpkin.png", name: "Hot Pumpkin", hp_value: 8, hunger_value: 37.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Blue_Cap.png", name: "Blue Cap", hp_value: 20, hunger_value: 12.5, sanity_value: -15, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Blue_Cap.png", name: "Cooked Blue Cap", hp_value: -3, hunger_value: 0, sanity_value: 10, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Green_Cap.png", name: "Green Cap", hp_value: 0, hunger_value: 12.5, sanity_value: -50, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Green_Cap.png", name: "Cooked Green Cap", hp_value: -1, hunger_value: 0, sanity_value: 15, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Red_Cap.png", name: "Red Cap", hp_value: -20, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Red_Cap.png", name: "Cooked Red Cap", hp_value: 1, hunger_value: 0, sanity_value: -10, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Mandrake.png", name: "Mandrake", hp_value: 20, hunger_value: 0, sanity_value: 0, spoil_time: 0, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Petals.png", name: "Petals", hp_value: 1, hunger_value: 0, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Dark_Petals.png", name: "Dark Petals", hp_value: 0, hunger_value: 0, sanity_value: -5, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Foliage.png", name: "Foliage", hp_value: 1, hunger_value: 0, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Succulent.png", name: "Succulent", hp_value: 1, hunger_value: 0, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Glow_Berry.png", name: "Glow Berry", hp_value: 11, hunger_value: 25, sanity_value: -10, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Lichen.png", name: "Lichen", hp_value: 3, hunger_value: 12.5, sanity_value: -5, spoil_time: 2, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/vegetables/Cactus_Flesh.png", name: "Cactus Flesh", hp_value: -3, hunger_value: 12.5, sanity_value: -5, spoil_time: 10, can_cook: true, id_version_specific: 5 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Cactus_Flesh.png", name: "Cooked Cactus Flesh", hp_value: 1, hunger_value: 12.5, sanity_value: 15, spoil_time: 10, can_cook: false, id_version_specific: 5 }),
      new Ingredient({ image_url: "/vegetables/Cactus_Flower.png", name: "Cactus Flower", hp_value: 8, hunger_value: 12.5, sanity_value: 5, spoil_time: 3, can_cook: false, id_version_specific: 5 }),
      new Ingredient({ image_url: "/vegetables/Seaweed.png", name: "Seaweed", hp_value: 1, hunger_value: 9.375, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Seaweed.png", name: "Roasted Seaweed", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/vegetables/Dried_Seaweed.png", name: "Dried Seaweed", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 20, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/vegetables/Sweet_Potato.png", name: "Sweet Potato", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Sweet_Potato.png", name: "Cooked Sweet Potato", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/vegetables/Aloe.png", name: "Aloe", hp_value: 8, hunger_value: 9.375, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Aloe.png", name: "Cooked Aloe", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 15, can_cook: false, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Asparagus.png", name: "Asparagus", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Asparagus.png", name: "Cooked Asparagus", hp_value: 3, hunger_value: 25, sanity_value: 0, spoil_time: 3, can_cook: false, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Radish.png", name: "Radish", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Radish.png", name: "Cooked Radish", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 15, can_cook: false, id_version_specific: 3 }),
      new Ingredient({ image_url: "/vegetables/Kelp_Fronds.png", name: "Kelp Fronds", hp_value: -1, hunger_value: 9.375, sanity_value: -10, spoil_time: 10, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Kelp_Fronds.png", name: "Cooked Kelp Fronds", hp_value: 0, hunger_value: 9.375, sanity_value: -5, spoil_time: 10, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Dried_Kelp_Fronds.png", name: "Dried Kelp Fronds", hp_value: 1, hunger_value: 9.375, sanity_value: 10, spoil_time: 20, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Riped_Stone_Fruit.png", name: "Riped Stone Fruit", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Stone_Fruit.png", name: "Cooked Stone Fruit", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 2, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Garlic.png", name: "Garlic", hp_value: 0, hunger_value: 9.375, sanity_value: -10, spoil_time: 15, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Garlic.png", name: "Roasted Garlic", hp_value: 1, hunger_value: 9.375, sanity_value: -5, spoil_time: 10, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Onion.png", name: "Onion", hp_value: 0, hunger_value: 9.375, sanity_value: -10, spoil_time: 15, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Onion.png", name: "Roasted Onion", hp_value: 1, hunger_value: 9.375, sanity_value: -5, spoil_time: 10, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Pepper.png", name: "Pepper", hp_value: -20, hunger_value: 9.375, sanity_value: -15, spoil_time: 15, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Pepper.png", name: "Roasted Pepper", hp_value: -3, hunger_value: 9.375, sanity_value: -10, spoil_time: 15, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Potato.png", name: "Potato", hp_value: -3, hunger_value: 9.375, sanity_value: -5, spoil_time: 10, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Potato.png", name: "Roasted Potato", hp_value: 20, hunger_value: 25, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Toma_Root.png", name: "Toma Root", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Roasted_Toma_Root.png", name: "Roasted Toma Root", hp_value: 20, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Moon_Shroom.png", name: "Moon Shroom", hp_value: 0, hunger_value: 12.5, sanity_value: 10, spoil_time: 10, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/vegetables/Cooked_Moon_Shroom.png", name: "Cooked Moon Shroom", hp_value: 0, hunger_value: -12.5, sanity_value: -10, spoil_time: 10, can_cook: false, id_version_specific: 2 }),

      //Fruits
      new Ingredient({ image_url: "/fruits/Berries.png", name: "Berries", hp_value: 0, hunger_value: 9.375, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Roasted_Berries.png", name: "Roasted Berries", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Cave_Banana.png", name: "Bananas", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Cooked_Cave_Banana.png", name: "Cooked Bananas", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Dragon_Fruit.png", name: "Dragon Fruit", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Prepared_Dragon_Fruit.png", name: "Prepared Dragon Fruit", hp_value: 20, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Durian.png", name: "Durian", hp_value: -3, hunger_value: 25, sanity_value: -5, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Extra_Smelly_Durian.png", name: "Extra Smelly Durian", hp_value: 0, hunger_value: 25, sanity_value: -5, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Pomegranate.png", name: "Pomegranate", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Sliced_Pomegranate.png", name: "Sliced Pomegranate", hp_value: 20, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fruits/Watermelon.png", name: "Watermelon", hp_value: 3, hunger_value: 12.5, sanity_value: 5, spoil_time: 8, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Grilled_Watermelon.png", name: "Grilled Watermelon", hp_value: 1, hunger_value: 12.5, sanity_value: 7.5, spoil_time: 5, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Coffee_Beans.png", name: "Coffee Beans", hp_value: 0, hunger_value: 9.375, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Cooked_Coffee_Beans.png", name: "Roasted Coffee Beans", hp_value: 0, hunger_value: 9.375, sanity_value: -5, spoil_time: 15, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Halved_Coconut.png", name: "Halved Coconut", hp_value: 1, hunger_value: 4.6875, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Roasted_Coconut.png", name: "Roasted Coconut", hp_value: 1, hunger_value: 9.375, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fruits/Juicy_Berries.png", name: "Juicy Berries", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 2, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/fruits/Roasted_Juicy_Berries.png", name: "Roasted Juicy Berries", hp_value: 3, hunger_value: 18.75, sanity_value: 0, spoil_time: 1, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/fruits/Lesser_Glow_Berries.png", name: "Lesser Glow Berries", hp_value: 3, hunger_value: 12.5, sanity_value: -10, spoil_time: 10, can_cook: false, id_version_specific: 2 }),

      // Sweeteners
      new Ingredient({ image_url: "/sweeteners/Honey.png", name: "Honey", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 40, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/sweeteners/Honeycomb.png", name: "Honeycomb", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 0, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/sweeteners/Royal_Jelly.png", name: "Royal Jelly", hp_value: 40, hunger_value: 12.5, sanity_value: 15, spoil_time: 10, can_cook: false, id_version_specific: 2 }),

      // Eggs
      new Ingredient({ image_url: "/eggs/Egg.png", name: "Egg", hp_value: 0, hunger_value: 9.375, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/eggs/Cooked_Egg.png", name: "Cooked Egg", hp_value: 0, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/eggs/Tallbird_Egg.png", name: "Tallbird Egg", hp_value: 3, hunger_value: 25, sanity_value: 0, spoil_time: 0, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/eggs/Fried_Tallbird_Egg.png", name: "Fried Tallbird Egg", hp_value: 0, hunger_value: 37.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/eggs/Doydoy_Egg.png", name: "Doydoy Egg", hp_value: 3, hunger_value: 25, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/eggs/Fried_Doydoy_Egg.png", name: "Fried Doydoy Egg", hp_value: 0, hunger_value: 37.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),

      // Monsters Food
      new Ingredient({ image_url: "/monster/Monster_Meat.png", name: "Monster Meat", hp_value: -20, hunger_value: 18.75, sanity_value: -15, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/monster/Cooked_Monster_Meat.png", name: "Cooked Monster Meat", hp_value: -3, hunger_value: 18.75, sanity_value: -10, spoil_time: 15, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/monster/Monster_Jerky.png", name: "Monster Jerky", hp_value: -3, hunger_value: 18.75, sanity_value: -5, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/monster/Durian.png", name: "Durian", hp_value: -3, hunger_value: 25, sanity_value: -5, spoil_time: 10, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/monster/Extra_Smelly_Durian.png", name: "Extra Smelly Durian", hp_value: 0, hunger_value: 25, sanity_value: -5, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/monster/Jellyfish.png", name: "Jellyfish", hp_value: 10, hunger_value: 10, sanity_value: 0, spoil_time: 0, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/monster/Dead_Jellyfish.png", name: "Dead Jellyfish", hp_value: 10, hunger_value: 10, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/monster/Cooked_Jellyfish.png", name: "Cooked Jellyfish", hp_value: 10, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/monster/Dried_Jellyfish.png", name: "Dried Jellyfish", hp_value: 10, hunger_value: 18.75, sanity_value: 0, spoil_time: 20, can_cook: false, id_version_specific: 4 }),

      // Dairy
      new Ingredient({ image_url: "/dairy/Butter.png", name: "Butter", hp_value: 40, hunger_value: 25, sanity_value: 0, spoil_time: 40, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/dairy/Electric_Milk.png", name: "Electric Milk", hp_value: 3, hunger_value: 12.5, sanity_value: 10, spoil_time: 6, can_cook: false, id_version_specific: 5 }),

      //Bugs
      new Ingredient({ image_url: "/bugs/Bean_Bugs.png", name: "Bean Bugs", hp_value: 0, hunger_value: 9.375, sanity_value: -10, spoil_time: 40, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/bugs/Cooked_Bean_Bugs.png", name: "Cooked Bean Bugs", hp_value: 1, hunger_value: 12.5, sanity_value: -5, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/bugs/Gummy_Slug.png", name: "Gummy Slug", hp_value: 0, hunger_value: 9.375, sanity_value: -10, spoil_time: 40, can_cook: true, id_version_specific: 3 }),
      new Ingredient({ image_url: "/bugs/Cooked_Gummy_Slug.png", name: "Cooked Gummy Slug", hp_value: 1, hunger_value: 12.5, sanity_value: -5, spoil_time: 10, can_cook: false, id_version_specific: 3 }),

      //Meats
      new Ingredient({ image_url: "/meats/Small_Jerky.png", name: "Small Jerky", hp_value: 8, hunger_value: 12.5, sanity_value: 10, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Jerky.png", name: "Jerky", hp_value: 20, hunger_value: 25, sanity_value: 15, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Batilisk_Wing.png", name: "Batilisk Wing", hp_value: 3, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Batilisk_Wing.png", name: "Cooked Batilisk Wing", hp_value: 8, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Drumstick.png", name: "Drumstick", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Fried_Drumstick.png", name: "Fried Drumstick", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Frog_Legs.png", name: "Frog Legs", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Frog_Legs.png", name: "Cooked Frog Legs", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Koalefant_Trunk.png", name: "Koalefant Trunk", hp_value: 30, hunger_value: 37.5, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Koalefant_Trunk_Steak.png", name: "Koalefant Trunk Steak", hp_value: 30, hunger_value: 75, sanity_value: 0, spoil_time: 15, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Winter_Koalefant_Trunk.png", name: "Winter Koalefant Trunk", hp_value: 30, hunger_value: 37.5, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Leafy_Meat.png", name: "Leafy Meat", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Leafy_Meat.png", name: "Cooked Leafy Meat", hp_value: 1, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Meat.png", name: "Meat", hp_value: 1, hunger_value: 25, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Meat.png", name: "Cooked Meat", hp_value: 3, hunger_value: 25, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Monster_Meat.png", name: "Monster Meat", hp_value: -20, hunger_value: 18.75, sanity_value: -15, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Monster_Meat.png", name: "Cooked Monster Meat", hp_value: -3, hunger_value: 18.75, sanity_value: -10, spoil_time: 15, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Morsel.png", name: "Morsel", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Cooked_Morsel.png", name: "Cooked Morsel", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Guardians_Horn.png", name: "Guardian's Horn", hp_value: 60, hunger_value: 75, sanity_value: -15, spoil_time: 0, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Deerclops_Eyeball.png", name: "Deerclops Eyeball", hp_value: 60, hunger_value: 75, sanity_value: -15, spoil_time: 0, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Dragoon_Heart.png", name: "Dragoon Heart", hp_value: 11, hunger_value: 25, sanity_value: -15, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/meats/Eye_of_the_Tiger_Shark.png", name: "Eye of the Tiger Shark", hp_value: 60, hunger_value: 75, sanity_value: -15, spoil_time: 0, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/meats/Flytrap_Stalk.png", name: "Flytrap Stalk", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: false, id_version_specific: 3 }),
      new Ingredient({ image_url: "/meats/Monster_Jerky.png", name: "Monster Jerky", hp_value: -3, hunger_value: 18.75, sanity_value: -5, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/meats/Poison_Dartfrog_Legs.png", name: "Poison Dartfrog Legs", hp_value: -3, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 3 }),
      new Ingredient({ image_url: "/meats/Cooked_Dartfrog_Legs.png", name: "Cooked Poison Dartfrog Legs", hp_value: -1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 3 }),
      new Ingredient({ image_url: "/meats/Naked_Nostrils.png", name: "Naked Nostrils", hp_value: 3, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 5 }),
      new Ingredient({ image_url: "/meats/Charred_Nostrils.png", name: "Charred Nostrils", hp_value: 8, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 5 }),

      //Fish
      new Ingredient({ image_url: "/fish/Fish.png", name: "Fish", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Cooked_Fish.png", name: "Cooked Fish", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Fish_Morsel.png", name: "Fish Morsel", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 5 }),
      new Ingredient({ image_url: "/fish/Cooked_Fish_Morsel.png", name: "Cooked Fish Morsel", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 5 }),
      new Ingredient({ image_url: "/fish/Eel.png", name: "Eel", hp_value: 3, hunger_value: 9.375, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Cooked_Eel.png", name: "Cooked Eel", hp_value: 8, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Small_Jerky.png", name: "Small Jerky", hp_value: 8, hunger_value: 12.5, sanity_value: 10, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Jerky.png", name: "Jerky", hp_value: 20, hunger_value: 25, sanity_value: 15, spoil_time: 20, can_cook: false, id_version_specific: 1 }),
      new Ingredient({ image_url: "/fish/Dead_Dogfish.png", name: "Dead Dogfish", hp_value: 1, hunger_value: 25, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Raw_Fish.png", name: "Raw Fish", hp_value: 1, hunger_value: 25, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Fish_Steak.png", name: "Fish Steak", hp_value: 20, hunger_value: 25, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dead_Swordfish.png", name: "Dead Swordfish", hp_value: 1, hunger_value: 25, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dead_Jellyfish.png", name: "Dead Jellyfish", hp_value: 10, hunger_value: 10, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Jellyfish.png", name: "Cooked Jellyfish", hp_value: 10, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dried_Jellyfish.png", name: "Dried Jellyfish", hp_value: 10, hunger_value: 18.75, sanity_value: 0, spoil_time: 20, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Limpets.png", name: "Limpets", hp_value: 0, hunger_value: 12.5, sanity_value: -10, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Limpets.png", name: "Cooked Limpets", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Mussel.png", name: "Mussel", hp_value: 0, hunger_value: 12.5, sanity_value: -15, spoil_time: 3, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Mussel.png", name: "Cooked Mussel", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Neon_Quattro.png", name: "Neon Quattro", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Neon_Quattro.png", name: "Cooked Neon Quattro", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Pierrot_Fish.png", name: "Pierrot Fish", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Pierrot_Fish.png", name: "Cooked Pierrot Fish", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Purple_Grouper.png", name: "Purple Grouper", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 10, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Purple_Grouper.png", name: "Cooked Purple Grouper", hp_value: 3, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dead_Rainbow_Jellyfish.png", name: "Dead Rainbow Jellyfish", hp_value: 10, hunger_value: 10, sanity_value: 0, spoil_time: 6, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Rainbow_Jellyfish.png", name: "Cooked Rainbow Jellyfish", hp_value: 10, hunger_value: 18.75, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Roe.png", name: "Roe", hp_value: 1, hunger_value: 4.6875, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Roe.png", name: "Cooked Roe", hp_value: 0, hunger_value: 4.6875, sanity_value: 0, spoil_time: 10, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Shark_Fin.png", name: "Shark Fin", hp_value: 20, hunger_value: 25, sanity_value: -15, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Tropical_Fish.png", name: "Tropical Fish", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dead_Wobster.png", name: "Dead Wobster", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Cooked_Wobster.png", name: "Cooked Wobster", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 4 }),
      new Ingredient({ image_url: "/fish/Dead_Wobster_DST.png", name: "Dead Wobster", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/fish/Cooked_Wobster.png", name: "Cooked Wobster", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 6, can_cook: false, id_version_specific: 2 }),
      new Ingredient({ image_url: "/fish/Barnacles.png", name: "Barnacles", hp_value: 0, hunger_value: 12.5, sanity_value: -5, spoil_time: 6, can_cook: true, id_version_specific: 2 }),
      new Ingredient({ image_url: "/fish/Cooked_Barnacles.png", name: "Cooked Barnacles", hp_value: 1, hunger_value: 12.5, sanity_value: 0, spoil_time: 15, can_cook: false, id_version_specific: 2 }),
    ]

    return DbEnv('ingredient').insert(data)
  }

  /* 
  #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ########         ######## ##    ## ########  ######## 
   ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##               ##     ##  ##  ##     ## ##       
   ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##               ##      ####   ##     ## ##       
   ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##               ##       ##    ########  ######   
   ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##               ##       ##    ##        ##       
   ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##               ##       ##    ##        ##       
  #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    #######    ##       ##    ##        ######## 
  */

  export function ingredientType() {

    const data: IngredientType[] = [
      new IngredientType({ name: "Vegetable", description: "Mother nature created this for us, now eat it and shut it" }),
      new IngredientType({ name: "Fruit", description: "Are tomatoes really fruits ?" }),
      new IngredientType({ name: "Meats", description: "More protein, more it's good right ?" }),
      new IngredientType({ name: "Fishes", description: "Fresh out of the sea" }),
      new IngredientType({ name: "Sweeteners", description: "Sweet tooth anyone ?" }),
      new IngredientType({ name: "Dairy", description: "Don't be lactose intolerant please ?" }),
      new IngredientType({ name: "Bugs", description: "More crunchy in your mouth ?" }),
      new IngredientType({ name: "Eggs", description: "You need that much of protein" }),
      new IngredientType({ name: "Monster food", description: "Please, do not eat that !" }),
    ]

    return DbEnv('ingredient_type').insert(data)
  }

  /*
  #### ##    ## ##     ## ######## ##    ## ########  #######  ########  ##    ## 
   ##  ###   ## ##     ## ##       ###   ##    ##    ##     ## ##     ##  ##  ##  
   ##  ####  ## ##     ## ##       ####  ##    ##    ##     ## ##     ##   ####   
   ##  ## ## ## ##     ## ######   ## ## ##    ##    ##     ## ########     ##    
   ##  ##  ####  ##   ##  ##       ##  ####    ##    ##     ## ##   ##      ##    
   ##  ##   ###   ## ##   ##       ##   ###    ##    ##     ## ##    ##     ##    
  #### ##    ##    ###    ######## ##    ##    ##     #######  ##     ##    ##    
  */

  export function inventory() {

    const data: Inventory[] = [
      new Inventory({ id_user: 1, id_ingredient: 2, quantity: 1 }),
      new Inventory({ id_user: 1, id_ingredient: 1, quantity: 7 }),
      new Inventory({ id_user: 2, id_ingredient: 3, quantity: 2 }),
      new Inventory({ id_user: 2, id_ingredient: 1, quantity: 5 }),
      new Inventory({ id_user: 2, id_ingredient: 2, quantity: 5 }),
      new Inventory({ id_user: 3, id_ingredient: 3, quantity: 3 }),
    ]

    return DbEnv('inventory').insert(data)
  }

  /* 
  ##     ## ########    ###    ##       
  ###   ### ##         ## ##   ##       
  #### #### ##        ##   ##  ##       
  ## ### ## ######   ##     ## ##       
  ##     ## ##       ######### ##       
  ##     ## ##       ##     ## ##       
  ##     ## ######## ##     ## ######## 
  */

  export function meal() {

    const data: Meal[] = [
      new Meal({ image_url: "/Amberosia.png", name: "Amberosia", cook_time: 40, hp_value: 0, hunger_value: 0, sanity_value: 0, spoil_time: 0, priority: 100, id_version_specific: 2 }),
      new Meal({ image_url: "/Asparagus_Soup.png", name: "Asparagus Soup", cook_time: 10, hp_value: 20, hunger_value: 18.75, sanity_value: 5, spoil_time: 15, priority: 10, id_version_specific: 3 }),
      new Meal({ image_url: "/Asparagus_Soup.png", name: "Asparagus Soup", cook_time: 10, hp_value: 20, hunger_value: 18.75, sanity_value: 5, spoil_time: 15, priority: 10, id_version_specific: 2 }),
      new Meal({ image_url: "/Bacon_and_Eggs.png", name: "Bacon and eggs", description: "Ah yes, good old classic", cook_time: 40, hp_value: 20, hunger_value: 75, sanity_value: 5, spoil_time: 20, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Banana_Pop.png", name: "Banana Pop", cook_time: 10, hp_value: 20, hunger_value: 12.5, sanity_value: 33, spoil_time: 3, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/Banana_Pop.png", name: "Banana Pop", cook_time: 10, hp_value: 20, hunger_value: 12.5, sanity_value: 33, spoil_time: 3, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Barnacle_Nigiri.png", name: "Barnacle Nigiri", cook_time: 10, hp_value: 40, hunger_value: 37.5, sanity_value: 5, spoil_time: 10, priority: 30, id_version_specific: 2 }),
      new Meal({ image_url: "/Barnacle_Linguine.png", name: "Barnacle Linguine", cook_time: 40, hp_value: 10, hunger_value: 75, sanity_value: 20, spoil_time: 6, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Barnacle_Pita.png", name: "Barnacle Pita", cook_time: 40, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Beefy_Greens.png", name: "Beefy Greens", cook_time: 40, hp_value: 40, hunger_value: 75, sanity_value: 5, spoil_time: 6, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Bisque.png", name: "Bisque", cook_time: 20, hp_value: 60, hunger_value: 18.75, sanity_value: 5, spoil_time: 10, priority: 30, id_version_specific: 4 }),
      new Meal({ image_url: "/Butter_Muffin.png", name: "Butter Muffin", cook_time: 40, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 1, id_version_specific: 1 }),
      new Meal({ image_url: "/California_Roll.png", name: "California Roll", cook_time: 10, hp_value: 20, hunger_value: 37.5, sanity_value: 10, spoil_time: 10, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/California_Roll.png", name: "California Roll", cook_time: 10, hp_value: 20, hunger_value: 37.5, sanity_value: 10, spoil_time: 10, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Caviar.png", name: "Caviar", cook_time: 40, hp_value: 3, hunger_value: 12.5, sanity_value: 33, spoil_time: 10, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/Ceviche.png", name: "Ceviche", cook_time: 10, hp_value: 20, hunger_value: 25, sanity_value: 5, spoil_time: 10, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/Ceviche.png", name: "Ceviche", cook_time: 10, hp_value: 20, hunger_value: 25, sanity_value: 5, spoil_time: 10, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Coffee.png", name: "Coffee", cook_time: 10, hp_value: 3, hunger_value: 9.375, sanity_value: -5, spoil_time: 10, priority: 30, id_version_specific: 4 }),
      new Meal({ image_url: "/Creamy_Potato_Puree.png", name: "Creamy Potata Purée", cook_time: 20, hp_value: 20, hunger_value: 37.5, sanity_value: 33, spoil_time: 15, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Dragonpie.png", name: "Dragonpie", cook_time: 40, hp_value: 40, hunger_value: 75, sanity_value: 5, spoil_time: 15, priority: 1, id_version_specific: 1 }),
      new Meal({ image_url: "/Fancy_Spiralled_Tubers.png", name: "Fancy Spiralled Tubers", cook_time: 15, hp_value: 3, hunger_value: 37.5, sanity_value: 15, spoil_time: 10, priority: 10, id_version_specific: 2 }),
      new Meal({ image_url: "/Feijoada.png", name: "Feijoada", cook_time: 70, hp_value: 20, hunger_value: 75, sanity_value: 15, spoil_time: 8, priority: 30, id_version_specific: 3 }),
      new Meal({ image_url: "/Fish_Tacos.png", name: "Fish Tacos", cook_time: 10, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 6, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Fishsticks.png", name: "Fishsticks", cook_time: 40, hp_value: 40, hunger_value: 37.5, sanity_value: 5, spoil_time: 10, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Fist_Full_of_Jam.png", name: "Fist Full of Jam", cook_time: 10, hp_value: 3, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 0, id_version_specific: 1 }),
      new Meal({ image_url: "/Flower_Salad.png", name: "Flower Salad", cook_time: 10, hp_value: 40, hunger_value: 12.5, sanity_value: 5, spoil_time: 6, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Froggle_Bunwich.png", name: "Froggle Bunwich", cook_time: 40, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 1, id_version_specific: 1 }),
      new Meal({ image_url: "/Fruit_Medley.png", name: "Fruit Medley", cook_time: 10, hp_value: 20, hunger_value: 25, sanity_value: 5, spoil_time: 6, priority: 0, id_version_specific: 1 }),
      new Meal({ image_url: "/Guacamole.png", name: "Guacamole", cook_time: 10, hp_value: 20, hunger_value: 37.5, sanity_value: 0, spoil_time: 10, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Gummy_Cake.png", name: "Gummy Cake", cook_time: 40, hp_value: -3, hunger_value: 150, sanity_value: -5, spoil_time: 20, priority: 1, id_version_specific: 3 }),
      new Meal({ image_url: "/Hard_Shell_Tacos.png", name: "Hard Shell Tacos", cook_time: 20, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 1, id_version_specific: 3 }),
      new Meal({ image_url: "/Honey_Ham.png", name: "Honey Ham", cook_time: 40, hp_value: 30, hunger_value: 75, sanity_value: 5, spoil_time: 15, priority: 2, id_version_specific: 1 }),
      new Meal({ image_url: "/Honey_Nuggets.png", name: "Honey Nuggets", cook_time: 40, hp_value: 20, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 2, id_version_specific: 1 }),
      new Meal({ image_url: "/Ice_Cream.png", name: "Ice Cream", cook_time: 10, hp_value: 0, hunger_value: 25, sanity_value: 50, spoil_time: 3, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Iced_Tea.png", name: "Iced Tea", cook_time: 10, hp_value: 3, hunger_value: 12.5, sanity_value: 33, spoil_time: 6, priority: 30, id_version_specific: 3 }),
      new Meal({ image_url: "/Jellybeans.png", name: "Jellybeans", cook_time: 50, hp_value: 122, hunger_value: 0, sanity_value: 5, spoil_time: 0, priority: 12, id_version_specific: 2 }),
      new Meal({ image_url: "/Jelly-O_Pop.png", name: "Jelly-O Pop", cook_time: 10, hp_value: 20, hunger_value: 12.5, sanity_value: 0, spoil_time: 3, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/Jelly_Salad.png", name: "Jelly Salad", cook_time: 40, hp_value: 0, hunger_value: 37.5, sanity_value: 50, spoil_time: 6, priority: 50, id_version_specific: 2 }),
      new Meal({ image_url: "/Kabobs.png", name: "Kabobs", cook_time: 40, hp_value: 3, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 5, id_version_specific: 1 }),
      new Meal({ image_url: "/Mandrake_Soup.png", name: "Mandrake Soup", cook_time: 60, hp_value: 100, hunger_value: 150, sanity_value: 5, spoil_time: 6, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Meatballs.png", name: "Meatballs", cook_time: 15, hp_value: 3, hunger_value: 62.5, sanity_value: 5, spoil_time: 10, priority: -1, id_version_specific: 1 }),
      new Meal({ image_url: "/Meaty_Stew.png", name: "Meaty Stew", cook_time: 15, hp_value: 12, hunger_value: 150, sanity_value: 5, spoil_time: 10, priority: 0, id_version_specific: 1 }),
      new Meal({ image_url: "/Melonsicle.png", name: "Melonsicle", cook_time: 10, hp_value: 3, hunger_value: 12.5, sanity_value: 20, spoil_time: 3, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Milkmade_Hat.png", name: "Milkmade Hat", cook_time: 10, hp_value: 0, hunger_value: 187.5, sanity_value: -5.3, spoil_time: 0, priority: 10, id_version_specific: 2 }),
      new Meal({ image_url: "/Monster_Lasagna.png", name: "Monster Lasagna", cook_time: 10, hp_value: -20, hunger_value: 37.5, sanity_value: -20, spoil_time: 6, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Mushy_Cake.png", name: "Mushy Cake", cook_time: 20, hp_value: 0, hunger_value: 25, sanity_value: 10, spoil_time: 15, priority: 55, id_version_specific: 2 }),
      new Meal({ image_url: "/Leafy_Meatloaf.png", name: "Leafy Meatloaf", cook_time: 40, hp_value: 8, hunger_value: 37.5, sanity_value: 5, spoil_time: 20, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Nettle_Rolls.png", name: "Nettle Rolls", cook_time: 10, hp_value: 20, hunger_value: 25, sanity_value: 5, spoil_time: 6, priority: 0, id_version_specific: 3 }),
      new Meal({ image_url: "/Pierogi.png", name: "Pierogi", cook_time: 20, hp_value: 40, hunger_value: 37.5, sanity_value: 5, spoil_time: 20, priority: 5, id_version_specific: 1 }),
      new Meal({ image_url: "/Powdercake.png", name: "Powdercake", cook_time: 10, hp_value: -3, hunger_value: 0, sanity_value: 0, spoil_time: 18750, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Pumpkin_Cookies.png", name: "Pumpkin Cookie", cook_time: 40, hp_value: 0, hunger_value: 37.5, sanity_value: 15, spoil_time: 10, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Ratatouille.png", name: "Ratatouille", cook_time: 20, hp_value: 3, hunger_value: 25, sanity_value: 5, spoil_time: 15, priority: 0, id_version_specific: 1 }),
      new Meal({ image_url: "/Salsa_Fresca.png", name: "Salsa Fresca", cook_time: 10, hp_value: 3, hunger_value: 25, sanity_value: 33, spoil_time: 15, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Seafood_Gumbo.png", name: "Seafood Gumbo", cook_time: 20, hp_value: 40, hunger_value: 37.5, sanity_value: 20, spoil_time: 10, priority: 10, id_version_specific: 2 }),
      new Meal({ image_url: "/Seafood_Gumbo.png", name: "Seafood Gumbo", cook_time: 20, hp_value: 40, hunger_value: 37.5, sanity_value: 20, spoil_time: 10, priority: 10, id_version_specific: 4 }),
      new Meal({ image_url: "/Shark_Fin_Soup.png", name: "Shark Fin Soup", cook_time: 10, hp_value: 40, hunger_value: 12.5, sanity_value: -10, spoil_time: 10, priority: 20, id_version_specific: 4 }),
      new Meal({ image_url: "/Snake_Bone_Soup.png", name: "Snake Bone Soup", cook_time: 20, hp_value: 40, hunger_value: 25, sanity_value: 10, spoil_time: 10, priority: 20, id_version_specific: 3 }),
      new Meal({ image_url: "/Soothing_Tea.png", name: "Soothing Tea", cook_time: 20, hp_value: 3, hunger_value: 0, sanity_value: 45, spoil_time: 3, priority: 1, id_version_specific: 2 }),
      new Meal({ image_url: "/Spicy_Chili.png", name: "Spicy Chili", cook_time: 10, hp_value: 20, hunger_value: 37.5, sanity_value: 0, spoil_time: 10, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Spicy_Vegetable_Stinger.png", name: "Spicy Vegetable Stinger", cook_time: 10, hp_value: 3, hunger_value: 25, sanity_value: 33, spoil_time: 15, priority: 15, id_version_specific: 3 }),
      new Meal({ image_url: "/Steamed_Ham_Sandwich.png", name: "Steamed Ham Sandwich", cook_time: 40, hp_value: 40, hunger_value: 37.5, sanity_value: 15, spoil_time: 6, priority: 5, id_version_specific: 3 }),
      new Meal({ image_url: "/Stuffed_Eggplant.png", name: "Stuffed Eggplant", cook_time: 40, hp_value: 3, hunger_value: 37.5, sanity_value: 5, spoil_time: 15, priority: 1, id_version_specific: 1 }),
      new Meal({ image_url: "/Stuffed_Fish_Heads.png", name: "Stuffed Fish Heads", cook_time: 40, hp_value: 20, hunger_value: 75, sanity_value: 0, spoil_time: 3, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Stuffed_Pepper_Poppers.png", name: "Stuffed Pepper Poppers", cook_time: 40, hp_value: 30, hunger_value: 25, sanity_value: -5, spoil_time: 15, priority: 20, id_version_specific: 2 }),
      new Meal({ image_url: "/Surf_n_Turf.png", name: "Surf 'n' Turf", cook_time: 10, hp_value: 60, hunger_value: 37.5, sanity_value: 33, spoil_time: 10, priority: 30, id_version_specific: 2 }),
      new Meal({ image_url: "/Surf_n_Turf.png", name: "Surf 'n' Turf", cook_time: 10, hp_value: 60, hunger_value: 37.5, sanity_value: 33, spoil_time: 10, priority: 30, id_version_specific: 4 }),
      new Meal({ image_url: "/Taffy.png", name: "Taffy", cook_time: 40, hp_value: -3, hunger_value: 25, sanity_value: 15, spoil_time: 15, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Tea.png", name: "Tea", cook_time: 10, hp_value: 3, hunger_value: 12.5, sanity_value: 33, spoil_time: 1, priority: 25, id_version_specific: 3 }),
      new Meal({ image_url: "/Trail_Mix.png", name: "Trail Mix", cook_time: 10, hp_value: 30, hunger_value: 12.5, sanity_value: 5, spoil_time: 15, priority: 10, id_version_specific: 2 }),
      new Meal({ image_url: "/Trail_Mix.png", name: "Trail Mix", cook_time: 10, hp_value: 30, hunger_value: 12.5, sanity_value: 5, spoil_time: 15, priority: 10, id_version_specific: 5 }),
      new Meal({ image_url: "/Tropical_Bouillabaisse.png", name: "Tropical Bouillabaisse", cook_time: 40, hp_value: 20, hunger_value: 37.5, sanity_value: 15, spoil_time: 10, priority: 35, id_version_specific: 4 }),
      new Meal({ image_url: "/Turkey_Dinner.png", name: "Turkey Dinner", cook_time: 60, hp_value: 20, hunger_value: 75, sanity_value: 5, spoil_time: 6, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Unagi.png", name: "Unagi", cook_time: 10, hp_value: 20, hunger_value: 18.75, sanity_value: 5, spoil_time: 10, priority: 20, id_version_specific: 1 }),
      new Meal({ image_url: "/Veggie_Burger.png", name: "Veggie Burger", cook_time: 40, hp_value: 30, hunger_value: 37.5, sanity_value: 33, spoil_time: 6, priority: 25, id_version_specific: 2 }),
      new Meal({ image_url: "/Spicy_Vegetable_Stinger.png", name: "Vegetable Stinger", cook_time: 10, hp_value: 3, hunger_value: 25, sanity_value: 33, spoil_time: 15, priority: 15, id_version_specific: 2 }),
      new Meal({ image_url: "/Waffles.png", name: "Waffles", cook_time: 10, hp_value: 60, hunger_value: 37.5, sanity_value: 5, spoil_time: 6, priority: 10, id_version_specific: 1 }),
      new Meal({ image_url: "/Wet_Goop.png", name: "Wet Goop", cook_time: 5, hp_value: 0, hunger_value: 0, sanity_value: 0, spoil_time: 6, priority: -2, id_version_specific: 1 }),
      new Meal({ image_url: "/Lobster_Bisque.png", name: "Wobster Bisque", cook_time: 10, hp_value: 60, hunger_value: 25, sanity_value: 10, spoil_time: 10, priority: 30, id_version_specific: 2 }),
      new Meal({ image_url: "/Lobster_Bisque.png", name: "Wobster Bisque", cook_time: 10, hp_value: 60, hunger_value: 25, sanity_value: 10, spoil_time: 10, priority: 30, id_version_specific: 4 }),
      new Meal({ image_url: "/Lobster_Dinner.png", name: "Wobster Dinner", cook_time: 20, hp_value: 60, hunger_value: 37.5, sanity_value: 50, spoil_time: 15, priority: 25, id_version_specific: 4 }),
      new Meal({ image_url: "/Lobster_Dinner.png", name: "Wobster Dinner", cook_time: 20, hp_value: 60, hunger_value: 37.5, sanity_value: 50, spoil_time: 15, priority: 25, id_version_specific: 2 })
    ]

    return DbEnv('meal').insert(data)
  }

  /*
   #######  ########        ## ########  ######  ########         #### ##    ##  ######  ########    ###    ##    ##  ######  ######## 
  ##     ## ##     ##       ## ##       ##    ##    ##             ##  ###   ## ##    ##    ##      ## ##   ###   ## ##    ## ##       
  ##     ## ##     ##       ## ##       ##          ##             ##  ####  ## ##          ##     ##   ##  ####  ## ##       ##       
  ##     ## ########        ## ######   ##          ##             ##  ## ## ##  ######     ##    ##     ## ## ## ## ##       ######   
  ##     ## ##     ## ##    ## ##       ##          ##             ##  ##  ####       ##    ##    ######### ##  #### ##       ##       
  ##     ## ##     ## ##    ## ##       ##    ##    ##             ##  ##   ### ##    ##    ##    ##     ## ##   ### ##    ## ##       
   #######  ########   ######  ########  ######     ##    ####### #### ##    ##  ######     ##    ##     ## ##    ##  ######  ######## 
  */

  export function objectInstance() {

    const data: ObjectInstance[] = [
      new ObjectInstance({ name: "Gold nugget", image_url: null, description: "OHH SHINY!", id_object_type: 2, id_version_specific: 1 }),
      new ObjectInstance({ name: "Rose", image_url: null, description: "Now would that not be romantic if it was in another game?", id_object_type: 1, id_version_specific: 1 }),
      new ObjectInstance({ name: "Monster Leg", image_url: null, description: "You just decapitaed a living being, you should feel bad about yourself.", id_object_type: 4, id_version_specific: 1 }),
      new ObjectInstance({ name: "Butterfly wings", image_url: null, description: "WHAT!? Really!?", id_object_type: 3, id_version_specific: 2 }),
    ]

    return DbEnv('object_instance').insert(data)
  }

  /*
   #######  ########        ## ########  ######  ########         ######## ##    ## ########  ######## 
  ##     ## ##     ##       ## ##       ##    ##    ##               ##     ##  ##  ##     ## ##       
  ##     ## ##     ##       ## ##       ##          ##               ##      ####   ##     ## ##       
  ##     ## ########        ## ######   ##          ##               ##       ##    ########  ######   
  ##     ## ##     ## ##    ## ##       ##          ##               ##       ##    ##        ##       
  ##     ## ##     ## ##    ## ##       ##    ##    ##               ##       ##    ##        ##       
   #######  ########   ######  ########  ######     ##    #######    ##       ##    ##        ########   
  */

  export function objectType() {

    const data: ObjectType[] = [
      new ObjectType({ name: "Plant", description: "Most of them are venomus. Pick your poison." }),
      new ObjectType({ name: "Rock", description: "One step away from being Heavy Metal" }),
      new ObjectType({ name: "Animal", description: "Just like you" }),
      new ObjectType({ name: "Monster", description: "You cannot see most of them... for now." }),
    ]

    return DbEnv('object_type').insert(data)
  }

  /*
  ########  ######## ########  ##     ## ####  ######   ######  ####  #######  ##    ## 
  ##     ## ##       ##     ## ###   ###  ##  ##    ## ##    ##  ##  ##     ## ###   ## 
  ##     ## ##       ##     ## #### ####  ##  ##       ##        ##  ##     ## ####  ## 
  ########  ######   ########  ## ### ##  ##   ######   ######   ##  ##     ## ## ## ## 
  ##        ##       ##   ##   ##     ##  ##        ##       ##  ##  ##     ## ##  #### 
  ##        ##       ##    ##  ##     ##  ##  ##    ## ##    ##  ##  ##     ## ##   ### 
  ##        ######## ##     ## ##     ## ####  ######   ######  ####  #######  ##    ##   
  */

  export function permission() {

    const data: Permission[] = [
      new Permission({ name: "admin", description: "Do as you wish chief" }),
      new Permission({ name: "user", description: "Regular user of this wonderful website" }),
    ]

    return DbEnv('permission').insert(data)
  }

  /*
   ######  ########  ######   ######  ####  #######  ##    ## 
  ##    ## ##       ##    ## ##    ##  ##  ##     ## ###   ## 
  ##       ##       ##       ##        ##  ##     ## ####  ## 
   ######  ######    ######   ######   ##  ##     ## ## ## ## 
        ## ##             ##       ##  ##  ##     ## ##  #### 
  ##    ## ##       ##    ## ##    ##  ##  ##     ## ##   ### 
   ######  ########  ######   ######  ####  #######  ##    ## 
  */

  export function session() {

  }

  /*
  ########    ###            #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ########         #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ########         ######## ##    ## ########  ######## 
     ##      ## ##            ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##             ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##               ##     ##  ##  ##     ## ##       
     ##     ##   ##           ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##             ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##               ##      ####   ##     ## ##       
     ##    ##     ##          ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##             ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##               ##       ##    ########  ######   
     ##    #########          ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##             ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##               ##       ##    ##        ##       
     ##    ##     ##          ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##             ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##               ##       ##    ##        ##       
     ##    ##     ## ####### #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    ####### #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    #######    ##       ##    ##        ######## 
  */

  export function taIngredientIngredientType() {

    const data: TaIngredientIngredientType[] = [

      //Veggies
      new TaIngredientIngredientType({ id_ingredient: 1, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 2, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 3, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 4, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 5, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 6, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 7, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 8, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 9, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 10, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 11, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 12, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 13, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 14, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 15, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 16, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 17, id_ingredient_type: 1, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 18, id_ingredient_type: 1, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 19, id_ingredient_type: 1, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 20, id_ingredient_type: 1, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 21, id_ingredient_type: 1, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 22, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 23, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 24, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 25, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 26, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 27, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 28, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 29, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 30, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 31, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 32, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 33, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 34, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 35, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 36, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 37, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 38, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 39, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 40, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 41, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 42, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 43, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 44, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 45, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 46, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 47, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 48, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 49, id_ingredient_type: 1, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 50, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 51, id_ingredient_type: 1, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 52, id_ingredient_type: 1, type_value: 0.5 }),

      //Fruits
      new TaIngredientIngredientType({ id_ingredient: 20, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 53, id_ingredient_type: 2, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 54, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 55, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 56, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 57, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 58, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 59, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 60, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 61, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 62, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 63, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 64, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 65, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 66, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 67, id_ingredient_type: 2, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 68, id_ingredient_type: 2, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 69, id_ingredient_type: 2, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 70, id_ingredient_type: 2, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 71, id_ingredient_type: 2, type_value: 0.5 }),

      //Sweeteners
      new TaIngredientIngredientType({ id_ingredient: 72, id_ingredient_type: 5, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 73, id_ingredient_type: 5, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 74, id_ingredient_type: 5, type_value: 3 }),

      //Eggs
      new TaIngredientIngredientType({ id_ingredient: 75, id_ingredient_type: 8, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 76, id_ingredient_type: 8, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 77, id_ingredient_type: 8, type_value: 4 }),
      new TaIngredientIngredientType({ id_ingredient: 78, id_ingredient_type: 8, type_value: 4 }),
      new TaIngredientIngredientType({ id_ingredient: 79, id_ingredient_type: 8, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 80, id_ingredient_type: 8, type_value: 1 }),

      //Monster
      new TaIngredientIngredientType({ id_ingredient: 81, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 82, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 83, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 84, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 85, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 86, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 87, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 88, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 89, id_ingredient_type: 9, type_value: 1 }),

      //Dairy
      new TaIngredientIngredientType({ id_ingredient: 90, id_ingredient_type: 6, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 91, id_ingredient_type: 6, type_value: 0 }),

      //Bugs
      new TaIngredientIngredientType({ id_ingredient: 92, id_ingredient_type: 7, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 93, id_ingredient_type: 7, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 94, id_ingredient_type: 7, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 95, id_ingredient_type: 7, type_value: 1 }),

      //Meats
      new TaIngredientIngredientType({ id_ingredient: 96, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 97, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 98, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 99, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 100, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 101, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 102, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 103, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 104, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 105, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 106, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 107, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 108, id_ingredient_type: 3, type_value: 0 }),
      new TaIngredientIngredientType({ id_ingredient: 109, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 110, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 111, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 112, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 113, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 114, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 115, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 116, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 117, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 118, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 119, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 120, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 121, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 122, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 123, id_ingredient_type: 3, type_value: 0.5 }),
      new TaIngredientIngredientType({ id_ingredient: 124, id_ingredient_type: 3, type_value: 0.5 }),

      //Fishes
      new TaIngredientIngredientType({ id_ingredient: 124, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 125, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 126, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 127, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 128, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 129, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 130, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 131, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 132, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 133, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 134, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 135, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 136, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 137, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 138, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 139, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 140, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 141, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 142, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 143, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 144, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 145, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 146, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 147, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 148, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 149, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 150, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 151, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 152, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 153, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 154, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 155, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 156, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 157, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 158, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 159, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 160, id_ingredient_type: 4, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 161, id_ingredient_type: 4, type_value: 1 }),

      //Melange des 2
      new TaIngredientIngredientType({ id_ingredient: 127, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 128, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 129, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 130, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 131, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 132, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 133, id_ingredient_type: 3, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 134, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 135, id_ingredient_type: 9, type_value: 1 }),
      new TaIngredientIngredientType({ id_ingredient: 136, id_ingredient_type: 9, type_value: 1 }),
    ]

    return DbEnv('ta_ingredient_ingredient_type').insert(data)
  }

  /*
  ########    ###            #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ########          #######  ########        ## ########  ######  ########         #### ##    ##  ######  ########    ###    ##    ##  ######  ######## 
     ##      ## ##            ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##            ##     ## ##     ##       ## ##       ##    ##    ##             ##  ###   ## ##    ##    ##      ## ##   ###   ## ##    ## ##       
     ##     ##   ##           ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##            ##     ## ##     ##       ## ##       ##          ##             ##  ####  ## ##          ##     ##   ##  ####  ## ##       ##       
     ##    ##     ##          ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##            ##     ## ########        ## ######   ##          ##             ##  ## ## ##  ######     ##    ##     ## ## ## ## ##       ######   
     ##    #########          ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##            ##     ## ##     ## ##    ## ##       ##          ##             ##  ##  ####       ##    ##    ######### ##  #### ##       ##       
     ##    ##     ##          ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##            ##     ## ##     ## ##    ## ##       ##    ##    ##             ##  ##   ### ##    ##    ##    ##     ## ##   ### ##    ## ##       
     ##    ##     ## ####### #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    #######  #######  ########   ######  ########  ######     ##    ####### #### ##    ##  ######     ##    ##     ## ##    ##  ######  ######## 
  */

  export function taIngredientObjectInstance() {

    const data: TaIngredientObjectInstance[] = [
      new TaIngredientObjectInstance({ id_object_instance: 1, id_ingredient: 1, drop_chance: 60 }),
      new TaIngredientObjectInstance({ id_object_instance: 2, id_ingredient: 3, drop_chance: 10 }),
      new TaIngredientObjectInstance({ id_object_instance: 1, id_ingredient: 2, drop_chance: 100 }),
    ]

    return DbEnv('ta_ingredient_object_instance').insert(data)
  }

  /*
  ########    ###            ##     ## ########    ###    ##               #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ######## 
     ##      ## ##           ###   ### ##         ## ##   ##                ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##    
     ##     ##   ##          #### #### ##        ##   ##  ##                ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##    
     ##    ##     ##         ## ### ## ######   ##     ## ##                ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##    
     ##    #########         ##     ## ##       ######### ##                ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##    
     ##    ##     ##         ##     ## ##       ##     ## ##                ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##    
     ##    ##     ## ####### ##     ## ######## ##     ## ######## ####### #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    
  */

  export function taMealIngredient() {

    const data: TaMealIngredient[] = [
      new TaMealIngredient({ id_meal: 2, id_ingredient: 32, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 2, id_ingredient: 33, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 3, id_ingredient: 32, quantity: 1.5 }),
      new TaMealIngredient({ id_meal: 3, id_ingredient: 33, quantity: 1.5 }),
      new TaMealIngredient({ id_meal: 5, id_ingredient: 55, quantity: 1 }),
      new TaMealIngredient({ id_meal: 6, id_ingredient: 56, quantity: 1 }),
      new TaMealIngredient({ id_meal: 7, id_ingredient: 160, quantity: 1 }),
      new TaMealIngredient({ id_meal: 7, id_ingredient: 36, quantity: 1 }),
      new TaMealIngredient({ id_meal: 8, id_ingredient: 160, quantity: 2 }),
      new TaMealIngredient({ id_meal: 9, id_ingredient: 160, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 10, id_ingredient: 107, quantity: 3 }),
      new TaMealIngredient({ id_meal: 11, id_ingredient: 140, quantity: 3 }),
      new TaMealIngredient({ id_meal: 12, id_ingredient: 140, quantity: 3 }),
      new TaMealIngredient({ id_meal: 13, id_ingredient: 25, quantity: 2 }),
      new TaMealIngredient({ id_meal: 14, id_ingredient: 36, quantity: 2 }),
      new TaMealIngredient({ id_meal: 15, id_ingredient: 152, quantity: 1 }),
      new TaMealIngredient({ id_meal: 18, id_ingredient: 66, quantity: 3 }),
      new TaMealIngredient({ id_meal: 19, id_ingredient: 47, quantity: 2 }),
      new TaMealIngredient({ id_meal: 19, id_ingredient: 41, quantity: 1 }),
      new TaMealIngredient({ id_meal: 20, id_ingredient: 57, quantity: 1 }),
      new TaMealIngredient({ id_meal: 21, id_ingredient: 47, quantity: 1 }),
      new TaMealIngredient({ id_meal: 22, id_ingredient: 92, quantity: 3 }),
      new TaMealIngredient({ id_meal: 23, id_ingredient: 3, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 26, id_ingredient: 24, quantity: 2 }),
      new TaMealIngredient({ id_meal: 27, id_ingredient: 102, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 29, id_ingredient: 22, quantity: 1 }),
      new TaMealIngredient({ id_meal: 30, id_ingredient: 94, quantity: 1 }),
      new TaMealIngredient({ id_meal: 32, id_ingredient: 72, quantity: 1.5 }),
      new TaMealIngredient({ id_meal: 33, id_ingredient: 72, quantity: 1 }),
      new TaMealIngredient({ id_meal: 36, id_ingredient: 74, quantity: 1 }),
      new TaMealIngredient({ id_meal: 37, id_ingredient: 86, quantity: 1 }),
      new TaMealIngredient({ id_meal: 38, id_ingredient: 107, quantity: 2 }),
      new TaMealIngredient({ id_meal: 40, id_ingredient: 15, quantity: 1 }),
      new TaMealIngredient({ id_meal: 43, id_ingredient: 63, quantity: 1 }),
      new TaMealIngredient({ id_meal: 44, id_ingredient: 123, quantity: 1 }),
      new TaMealIngredient({ id_meal: 44, id_ingredient: 36, quantity: 1 }),
      new TaMealIngredient({ id_meal: 46, id_ingredient: 9, quantity: 1 }),
      new TaMealIngredient({ id_meal: 46, id_ingredient: 11, quantity: 1 }),
      new TaMealIngredient({ id_meal: 46, id_ingredient: 13, quantity: 1 }),
      new TaMealIngredient({ id_meal: 46, id_ingredient: 51, quantity: 1 }),
      new TaMealIngredient({ id_meal: 47, id_ingredient: 107, quantity: 2 }),
      new TaMealIngredient({ id_meal: 50, id_ingredient: 3, quantity: 1 }),
      new TaMealIngredient({ id_meal: 50, id_ingredient: 72, quantity: 1 }),
      new TaMealIngredient({ id_meal: 51, id_ingredient: 7, quantity: 2 }),
      new TaMealIngredient({ id_meal: 53, id_ingredient: 49, quantity: 1 }),
      new TaMealIngredient({ id_meal: 53, id_ingredient: 43, quantity: 1 }),
      new TaMealIngredient({ id_meal: 56, id_ingredient: 154, quantity: 1 }),
      new TaMealIngredient({ id_meal: 60, id_ingredient: 32, quantity: 1 }),
      new TaMealIngredient({ id_meal: 60, id_ingredient: 34, quantity: 1 }),
      new TaMealIngredient({ id_meal: 61, id_ingredient: 18, quantity: 1 }),
      new TaMealIngredient({ id_meal: 61, id_ingredient: 109, quantity: 1 }),
      new TaMealIngredient({ id_meal: 62, id_ingredient: 5, quantity: 0.5 }),
      new TaMealIngredient({ id_meal: 63, id_ingredient: 160, quantity: 1 }),
      new TaMealIngredient({ id_meal: 64, id_ingredient: 45, quantity: 1 }),
      new TaMealIngredient({ id_meal: 69, id_ingredient: 53, quantity: 1 }),
      new TaMealIngredient({ id_meal: 69, id_ingredient: 69, quantity: 1 }),
      new TaMealIngredient({ id_meal: 70, id_ingredient: 53, quantity: 1 }),
      new TaMealIngredient({ id_meal: 70, id_ingredient: 69, quantity: 1 }),
      new TaMealIngredient({ id_meal: 71, id_ingredient: 144, quantity: 1 }),
      new TaMealIngredient({ id_meal: 71, id_ingredient: 146, quantity: 1 }),
      new TaMealIngredient({ id_meal: 71, id_ingredient: 148, quantity: 1 }),
      new TaMealIngredient({ id_meal: 72, id_ingredient: 100, quantity: 2 }),
      new TaMealIngredient({ id_meal: 73, id_ingredient: 129, quantity: 1 }),
      new TaMealIngredient({ id_meal: 73, id_ingredient: 21, quantity: 1 }),
      new TaMealIngredient({ id_meal: 74, id_ingredient: 107, quantity: 1 }),
      new TaMealIngredient({ id_meal: 74, id_ingredient: 43, quantity: 1 }),
      new TaMealIngredient({ id_meal: 75, id_ingredient: 32, quantity: 1.5 }),
      new TaMealIngredient({ id_meal: 75, id_ingredient: 49, quantity: 1.5 }),
      new TaMealIngredient({ id_meal: 76, id_ingredient: 90, quantity: 1 }),
      new TaMealIngredient({ id_meal: 76, id_ingredient: 53, quantity: 1 }),
      new TaMealIngredient({ id_meal: 78, id_ingredient: 156, quantity: 1 }),
      new TaMealIngredient({ id_meal: 79, id_ingredient: 156, quantity: 1 }),
      new TaMealIngredient({ id_meal: 80, id_ingredient: 156, quantity: 1 }),
      new TaMealIngredient({ id_meal: 80, id_ingredient: 90, quantity: 1 }),
      new TaMealIngredient({ id_meal: 81, id_ingredient: 156, quantity: 1 }),
      new TaMealIngredient({ id_meal: 81, id_ingredient: 90, quantity: 1 }),
    ]

    return DbEnv('ta_meal_ingredient').insert(data)
  }

  /*
########    ###            ##     ## ########    ###    ##               #### ##    ##  ######   ########  ######## ########  #### ######## ##    ## ########         ######## ##    ## ########  ######## 
   ##      ## ##           ###   ### ##         ## ##   ##                ##  ###   ## ##    ##  ##     ## ##       ##     ##  ##  ##       ###   ##    ##               ##     ##  ##  ##     ## ##       
   ##     ##   ##          #### #### ##        ##   ##  ##                ##  ####  ## ##        ##     ## ##       ##     ##  ##  ##       ####  ##    ##               ##      ####   ##     ## ##       
   ##    ##     ##         ## ### ## ######   ##     ## ##                ##  ## ## ## ##   #### ########  ######   ##     ##  ##  ######   ## ## ##    ##               ##       ##    ########  ######   
   ##    #########         ##     ## ##       ######### ##                ##  ##  #### ##    ##  ##   ##   ##       ##     ##  ##  ##       ##  ####    ##               ##       ##    ##        ##       
   ##    ##     ##         ##     ## ##       ##     ## ##                ##  ##   ### ##    ##  ##    ##  ##       ##     ##  ##  ##       ##   ###    ##               ##       ##    ##        ##       
   ##    ##     ## ####### ##     ## ######## ##     ## ######## ####### #### ##    ##  ######   ##     ## ######## ########  #### ######## ##    ##    ##    #######    ##       ##    ##        ######## 
  */
  
  export function taMealIngredientType() {
    const data: TaMealIngredientType[] = [
      new TaMealIngredientType({ id_meal: 2, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 3, id_ingredient_type: 1, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 4, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 4, id_ingredient_type: 8, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 7, id_ingredient_type: 1, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 8, id_ingredient_type: 1, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 8, id_ingredient_type: 8, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 9, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 10, id_ingredient_type: 1, type_value: 3 }),
      new TaMealIngredientType({ id_meal: 12, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 13, id_ingredient_type: 4, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 14, id_ingredient_type: 4, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 15, id_ingredient_type: 1, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 16, id_ingredient_type: 4, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 17, id_ingredient_type: 4, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 22, id_ingredient_type: 3, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 23, id_ingredient_type: 4, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 24, id_ingredient_type: 4, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 25, id_ingredient_type: 2, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 26, id_ingredient_type: 1, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 27, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 28, id_ingredient_type: 2, type_value: 3 }),
      new TaMealIngredientType({ id_meal: 30, id_ingredient_type: 5, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 31, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 32, id_ingredient_type: 3, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 33, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 34, id_ingredient_type: 5, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 34, id_ingredient_type: 6, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 35, id_ingredient_type: 5, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 38, id_ingredient_type: 5, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 39, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 41, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 42, id_ingredient_type: 3, type_value: 3 }),
      new TaMealIngredientType({ id_meal: 44, id_ingredient_type: 6, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 45, id_ingredient_type: 9, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 49, id_ingredient_type: 1, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 49, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 49, id_ingredient_type: 8, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 51, id_ingredient_type: 5, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 52, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 54, id_ingredient_type: 4, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 55, id_ingredient_type: 4, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 57, id_ingredient_type: 3, type_value: 2 }),
      new TaMealIngredientType({ id_meal: 58, id_ingredient_type: 5, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 59, id_ingredient_type: 1, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 59, id_ingredient_type: 3, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 60, id_ingredient_type: 1, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 61, id_ingredient_type: 1, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 62, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 63, id_ingredient_type: 4, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 64, id_ingredient_type: 3, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 65, id_ingredient_type: 3, type_value: 2.5 }),
      new TaMealIngredientType({ id_meal: 65, id_ingredient_type: 4, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 66, id_ingredient_type: 3, type_value: 2.5 }),
      new TaMealIngredientType({ id_meal: 66, id_ingredient_type: 4, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 67, id_ingredient_type: 5, type_value: 3 }),
      new TaMealIngredientType({ id_meal: 68, id_ingredient_type: 5, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 69, id_ingredient_type: 2, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 70, id_ingredient_type: 2, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 71, id_ingredient_type: 1, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 72, id_ingredient_type: 3, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 72, id_ingredient_type: 2, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 72, id_ingredient_type: 1, type_value: 0.5 }),
      new TaMealIngredientType({ id_meal: 74, id_ingredient_type: 1, type_value: 1 }),
      new TaMealIngredientType({ id_meal: 75, id_ingredient_type: 1, type_value: 1.5 }),
      new TaMealIngredientType({ id_meal: 76, id_ingredient_type: 8, type_value: 1 }),
    ]

    return DbEnv('ta_meal_ingredient_type').insert(data)
  }

/*
##     ##  ######  ######## ########  
##     ## ##    ## ##       ##     ## 
##     ## ##       ##       ##     ## 
##     ##  ######  ######   ########  
##     ##       ## ##       ##   ##   
##     ## ##    ## ##       ##    ##  
 #######   ######  ######## ##     ## 
*/

  export function user() {

    const data: User[] = [
      new User({ username: "Admin", password: "$2b$10$NhTkMn/kUh/Awx4LgjL2aehftNrFP0JLnXW8hSalavDlkdRGXGnNm", id_permission: 1 }),
      new User({ username: "User", password: "$2b$10$kx/gsXzp9ounNjfDNMeO6etqJQ/PvVK3q3aQqWC7NLYLjzrjdH6H2", id_permission: 2 }),
    ]

    return DbEnv('user').insert(data)
  }

  /*
  ##     ## ######## ########   ######  ####  #######  ##    ## 
  ##     ## ##       ##     ## ##    ##  ##  ##     ## ###   ## 
  ##     ## ##       ##     ## ##        ##  ##     ## ####  ## 
  ##     ## ######   ########   ######   ##  ##     ## ## ## ## 
   ##   ##  ##       ##   ##         ##  ##  ##     ## ##  #### 
    ## ##   ##       ##    ##  ##    ##  ##  ##     ## ##   ### 
     ###    ######## ##     ##  ######  ####  #######  ##    ## 
  */

  export function version() {

    const data: Version[] = [
      new Version({ name: "Dont Starve", description: "Pro tip: Read the game title" }),
      new Version({ name: "Dont Starve Together", description: "Everyone knows you just can't survive on your own" }),
      new Version({ name: "Hamlet", description: "Like the piece" }),
      new Version({ name: "Shipwrecked", description: "Feeling alone ?" }),
      new Version({ name: "Reign of giants", description: "The giants are there" }),
    ]

    return DbEnv('version').insert(data)
  }
}
