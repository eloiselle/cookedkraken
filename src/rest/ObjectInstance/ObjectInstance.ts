export default class ObjectInstance {

  // Properties
  id_object_instance: number | undefined = undefined
  name: string = ""
  image_url: string = ""
  description: string = ""
  id_object_type: number = 0
  id_version_specific: number = 0

  //Getters
  public get getIdObjectInstance(): number | undefined { return this.id_object_instance; }
  public get getName(): string { return this.name }
  public get getImage(): string { return this.image_url }
  public get getDescription(): string { return this.description }
  public get getIdObjectType(): number { return this.id_object_type }
  public get getIdVersionSpecific(): number { return this.id_version_specific }


  //Setters
  public set setIdObjectInstance(id_object_instance: number | undefined) { this.id_object_instance = id_object_instance; }
  public set setname(name: string) { this.name = name; }
  public set setImage(image_url: string) { this.image_url = image_url; }
  public set setDescription(description: string) { this.description = description; }
  public set setIdObjectType(id_object_type: number) { this.id_object_type = id_object_type; }
  public set setIdVersionSpecific(id_version_specific: number) { this.id_version_specific = id_version_specific; }


  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_object_instance = undefined,
      name = "",
      image_url = "",
      description = "",
      id_object_type = 0,
      id_version_specific = 0
    } = params

    this.id_object_instance = id_object_instance
    this.name = name
    this.image_url = image_url
    this.description = description
    this.id_object_type = id_object_type
    this.id_version_specific = id_version_specific
  }
}