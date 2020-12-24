export default class Favorite {

  // Properties
  id_user: number | undefined = undefined
  id_meal: number | undefined = undefined

  // Getters
  public get getIdUser(): number | undefined { return this.id_user; }
  public get getIdMeal(): number | undefined { return this.id_meal; }


  // Setters
  public set setIdUser(id_user: number | undefined) { this.id_user = id_user; }
  public set setIdMeal(id_meal: number | undefined) { this.id_meal = id_meal; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_user = undefined,
      id_meal = undefined
    } = params

    this.id_user = id_user
    this.id_meal = id_meal
  }
}