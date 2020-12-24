export default class User {

  // Properties
  id_user: number | undefined = undefined
  username: string = ""
  password: string = ""
  id_permission: number = 0

  // Getters
  public get getIdUser(): number | undefined { return this.id_user; }
  public get getUsername(): string { return this.username; }
  public get getPassword(): string { return this.password; }
  public get getIdPermission(): number { return this.id_permission; }

  // Setters
  public set setIdUser(id_user: number | undefined) { this.id_user = id_user; }
  public set setUsername(username: string) { this.username = username; }
  public set setPassword(password: string) { this.password = password; }
  public set setIdPermission(id_permission: number) { this.id_permission = id_permission; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_user = undefined,
      username = "",
      password = "",
      id_permission = 0
    } = params

    this.id_user = id_user
    this.username = username
    this.password = password
    this.id_permission = id_permission
  }
}