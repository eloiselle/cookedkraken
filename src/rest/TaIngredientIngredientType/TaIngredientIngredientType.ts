export default class TaIngredientIngredientType {

  // Properties
  id_ingredient_type: number | undefined = undefined
  id_ingredient: number | undefined = undefined
  type_value: number = 0

  // Getters
  public get getIdIngredientType(): number | undefined { return this.id_ingredient_type; }
  public get getIdIngredient(): number | undefined { return this.id_ingredient; }
  public get getTypeValue(): number { return this.type_value; }


  // Setters
  public set setIdIngredientType(id_ingredient_type: number | undefined) { this.id_ingredient_type = id_ingredient_type; }
  public set setIdIngredient(id_ingredient: number | undefined) { this.id_ingredient = id_ingredient; }
  public set setTypeValue(type_value: number) { this.type_value = type_value; }


  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_ingredient_type = undefined,
      id_ingredient = "",
      type_value = ""
    } = params

    this.id_ingredient_type = id_ingredient_type
    this.id_ingredient = id_ingredient
    this.type_value = type_value
  }
}
