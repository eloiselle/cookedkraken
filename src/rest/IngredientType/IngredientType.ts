export default class IngredientType {

  // Properties
  id_ingredient_type: number | undefined = undefined;
  name: string = "";
  description: string = "";

  // Getters
  public get getIdIngredientType(): number | undefined { return this.id_ingredient_type; }
  public get getName(): string { return this.name; }
  public get getDescription(): string { return this.description; }

  // Setters
  public set setIdIngredientType(id_ingredient_type: number | undefined) { this.id_ingredient_type = id_ingredient_type; }
  public set setName(name: string) { this.name = name; }
  public set setDescription(description: string) { this.description = description; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_ingredient_type = undefined,
      name = "",
      description = ""
    } = params

    this.id_ingredient_type = id_ingredient_type;
    this.name = name;
    this.description = description;
  }


}
