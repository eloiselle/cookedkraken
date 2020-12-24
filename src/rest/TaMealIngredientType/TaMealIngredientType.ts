export default class TaMealIngredientType {

  // Properties
  id_ingredient_type: number | undefined = undefined
  id_meal: number | undefined = undefined
  type_value: number = 0

  // Getters
  public get getIdIngredientType(): number | undefined { return this.id_ingredient_type; }
  public get getIdMeal(): number | undefined { return this.id_meal; }
  public get getTypeValue(): number { return this.type_value; }


  // Setters
  public set setIdIngredientType(id_ingredient_type: number | undefined) { this.id_ingredient_type = id_ingredient_type; }
  public set setIdMeal(id_meal: number | undefined) { this.id_meal = id_meal; }
  public set setTypeValue(type_value: number) { this.type_value = type_value; }


  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_ingredient_type = undefined,
      id_meal = "",
      type_value = ""
    } = params

    this.id_ingredient_type = id_ingredient_type
    this.id_meal = id_meal
    this.type_value = type_value
  }
}