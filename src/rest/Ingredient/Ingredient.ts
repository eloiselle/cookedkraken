export default class Ingredient {

  // Properties
  id_ingredient: number | undefined = undefined
  name: string = ""
  image_url: string = ""
  description: string = ""
  hp_value: number = 0
  hunger_value: number = 0
  sanity_value: number = 0
  spoil_time: number = 0
  can_cook: boolean = false
  id_version_specific: number = 0

  // Getters
  public get getIdIngredient(): number | undefined { return this.id_ingredient; }
  public get getName(): string { return this.name; }
  public get getImage(): string { return this.image_url; }
  public get getDescription(): string { return this.description; }
  public get getHpValue(): number { return this.hp_value; }
  public get getHungerValue(): number { return this.hunger_value; }
  public get getSanityValue(): number { return this.sanity_value; }
  public get getSpoilTime(): number { return this.spoil_time; }
  public get getCanCook(): boolean { return this.can_cook; }
  public get getIdVersion(): number { return this.spoil_time; }

  // Setters
  public set setIdIngredient(id_ingredient: number | undefined) { this.id_ingredient = id_ingredient; }
  public set setName(name: string) { this.name = name; }
  public set setImage(image: string) { this.image_url = image; }
  public set setDescription(description: string) { this.description = description; }
  public set setHpValue(hp_value: number) { this.hp_value = hp_value; }
  public set setHungerValue(hunger_value: number) { this.hunger_value = hunger_value; }
  public set setSanityValue(sanity_value: number) { this.sanity_value = sanity_value; }
  public set setSpoilTime(spoil_time: number) { this.spoil_time = spoil_time; }
  public set setCanCook(can_cook: boolean) { this.can_cook = can_cook; }
  public set setIdVersion(id_version_specific: number) { this.id_version_specific = id_version_specific; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_ingredient = undefined,
      name = "",
      image_url = "",
      description = "",
      hp_value = 0,
      hunger_value = 0,
      sanity_value = 0,
      spoil_time = 0,
      can_cook = false,
      id_version_specific = 0
    } = params

    this.id_ingredient = id_ingredient
    this.name = name
    this.image_url = image_url
    this.description = description
    this.hp_value = hp_value
    this.hunger_value = hunger_value
    this.sanity_value = sanity_value
    this.spoil_time = spoil_time
    this.can_cook = can_cook
    this.id_version_specific = id_version_specific
  }
}
