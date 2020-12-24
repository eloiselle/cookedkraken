export default class Permission {

  // Properties
  id_permission: number | undefined = undefined
  name: string = ""
  description: string = ""


  //Getters
  public get getIdPermission(): number | undefined { return this.id_permission; }
  public get getName(): string { return this.name }
  public get getDescription(): string { return this.description }

  //Setters
  public set setIdPermission(id_permission: number | undefined) { this.id_permission = id_permission; }
  public set setName(name: string) { this.name = name; }
  public set setDescription(description: string) { this.description = description; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_permission = undefined,
      name = 0,
      description = "",
    } = params

    this.id_permission = id_permission
    this.name = name
    this.description = description
  }
}