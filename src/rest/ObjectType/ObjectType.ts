export default class ObjectType {

  // Properties
  id_object_type: number | undefined = undefined
  name: string = ""
  description: string = ""

  //Getters
  public get getIdObjectType(): number | undefined { return this.id_object_type; }
  public get getName(): string { return this.name }
  public get getDescription(): string { return this.description }

  //Setters
  public set setIdObjectType(id_object_type: number | undefined) { this.id_object_type = id_object_type; }
  public set setName(name: string) { this.name = name; }
  public set setDescription(description: string) { this.description = description; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_object_type = undefined,
      name = "",
      description = "",
    } = params

    this.id_object_type = id_object_type;
    this.name = name;
    this.description = description;
  }
}