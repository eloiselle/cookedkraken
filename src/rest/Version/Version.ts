export default class Version {

  //Properties
  id_version_specific: number | undefined = undefined
  name: string = ""
  description: string = ""

  // Getters
  public get getIdVersionSpecific(): number | undefined { return this.id_version_specific; }
  public get getName(): string { return this.name; }
  public get getDescription(): string { return this.description; }

  // Setters
  public set setIdVersionSpecific(id_version_specific: number | undefined) { this.id_version_specific = id_version_specific; }
  public set setName(name: string) { this.name = name; }
  public set setDescription(description: string) { this.description = description; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_version_specific = undefined,
      name = "",
      description = ""
    } = params

    this.id_version_specific = id_version_specific
    this.name = name
    this.description = description
  }
}