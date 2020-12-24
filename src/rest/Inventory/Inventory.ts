export default class Inventory {

  // Properties
  id_user: number | undefined = undefined
  id_ingredient: number | undefined = undefined
  quantity: number = 0

  // Getters
  public get getIdUser(): number | undefined { return this.id_user; }
  public get getIdIngredient(): number | undefined { return this.id_ingredient; }
  public get getQuantity(): number { return this.quantity; }


  // Setters
  public set setIdUser(id_user: number | undefined) { this.id_user = id_user; }
  public set setIdIngredient(id_ingredient: number | undefined) { this.id_ingredient = id_ingredient; }
  public set setQuantity(quantity: number) { this.quantity = quantity; }


  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_user = undefined,
      id_ingredient = "",
      quantity
    } = params

    this.id_user = id_user
    this.id_ingredient = id_ingredient,
      this.quantity = quantity
  }
}
