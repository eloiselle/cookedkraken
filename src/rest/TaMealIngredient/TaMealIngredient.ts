export default class TaMealIngredient {

  // Properties
  id_meal: number | undefined = undefined
  id_ingredient: number | undefined = undefined
  quantity: number = 0

  // Getters
  public get getIdMeal(): number | undefined { return this.id_meal; }
  public get getIdIngredient(): number | undefined { return this.id_ingredient; }
  public get getQuantity(): number { return this.quantity; }

  // Setters
  public set setIdMeal(id_meal: number | undefined) { this.id_meal = id_meal; }
  public set setIdIngredient(id_ingredient: number | undefined) { this.id_ingredient = id_ingredient; }
  public set setQuantity(quantity: number) { this.quantity = quantity; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_meal = undefined,
      id_ingredient = "",
      quantity
    } = params

    this.id_meal = id_meal
    this.id_ingredient = id_ingredient,
      this.quantity = quantity
  }
}
