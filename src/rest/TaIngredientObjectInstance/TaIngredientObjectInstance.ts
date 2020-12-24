export default class TaIngredientObjectInstance {

  // Properties
  id_object_instance: number | undefined = undefined
  id_ingredient: number | undefined = undefined
  drop_chance: number = 0

  // Getters
  public get getIdObjectInstance(): number | undefined { return this.id_object_instance; }
  public get getIdIngredient(): number | undefined { return this.id_ingredient; }
  public get getPercentChance(): number { return this.drop_chance; }

  // Setters
  public set setIdIngredient(id_ingredient: number | undefined) { this.id_ingredient = id_ingredient; }
  public set setIdObjectInstance(id_object_instance: number | undefined) { this.id_object_instance = id_object_instance; }
  public set setPercentChance(drop_chance: number) { this.drop_chance = drop_chance; }


  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_object_instance = undefined,
      id_ingredient = "",
      drop_chance
    } = params

    this.id_object_instance = id_object_instance
    this.id_ingredient = id_ingredient
    this.drop_chance = drop_chance
  }
}
