export default class Meal {

  // Properties
  id_meal: number | undefined = undefined
  name: string = ""
  description: string = ""
  image_url: string = ""
  cook_time: number = 0
  hp_value: number = 0
  hunger_value: number = 0
  sanity_value: number = 0
  spoil_time: number = 0
  priority: number = 0
  id_version_specific: number = 0

  // Getters
  public get getIdMeal(): number | undefined { return this.id_meal; }
  public get getName(): string { return this.name; }
  public get getDescription(): string { return this.description; }
  public get getImage(): string { return this.image_url; }
  public get getCookTime(): number { return this.cook_time; }
  public get getHpValue(): number { return this.hp_value; }
  public get getHungerValue(): number { return this.hunger_value; }
  public get getSanityValue(): number { return this.sanity_value; }
  public get getSpoilTime(): number { return this.spoil_time; }
  public get getPriority(): number { return this.priority; }
  public get getIdVersion(): number { return this.id_version_specific; }

  // Setters
  public set setIdMeal(id_meal: number | undefined) { this.id_meal = id_meal; }
  public set setName(name: string) { this.name = name; }
  public set setDescription(description: string) { this.description = description; }
  public set setImage(image_url: string) { this.image_url = image_url; }
  public set setCookTime(cook_time: number) { this.cook_time = cook_time; }
  public set setHpValue(hp_value: number) { this.hp_value = hp_value; }
  public set setHungerValue(hunger_value: number) { this.hunger_value = hunger_value; }
  public set setSanityValue(sanity_value: number) { this.sanity_value = sanity_value; }
  public set setSpoilTime(spoil_time: number) { this.spoil_time = spoil_time; }
  public set setPriority(priority: number) { this.priority = priority; }
  public set setIdVersion(id_version_specific: number) { this.id_version_specific = id_version_specific; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_meal = undefined,
      name = "",
      description = "",
      image_url = "",
      cook_time = 0,
      hp_value = 0,
      hunger_value = 0,
      sanity_value = 0,
      spoil_time = 0,
      priority = 0,
      id_version_specific = 0
    } = params

    this.id_meal = id_meal
    this.name = name
    this.description = description
    this.image_url = image_url
    this.cook_time = cook_time
    this.hp_value = hp_value
    this.hunger_value = hunger_value
    this.sanity_value = sanity_value
    this.spoil_time = spoil_time
    this.priority = priority
    this.id_version_specific = id_version_specific
  }
}
