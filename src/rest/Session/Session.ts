export default class Session {

  // Properties
  id_session: number | undefined = undefined
  token: string = ""
  expiration: number = 0
  ipv4: string = ""
  id_user: number = 0

  //Getters
  public get getIdSession(): number | undefined { return this.id_session; }
  public get getToken(): string { return this.token; }
  public get getExpiration(): number { return this.expiration }
  public get getIP(): string { return this.ipv4 }
  public get getIdUser(): number { return this.expiration }

  //Setters
  public set setIdSession(id_session: number | undefined) { this.id_session = id_session; }
  public set setToken(token: string) { this.token = token; }
  public set setExpiration(expiration: number) { this.expiration = expiration; }
  public set setIP(ip: string) { this.ipv4 = ip; }
  public set setIdUser(id_user: number) { this.id_user = id_user; }

  // Constructors
  constructor(params: any = {} as any) {

    const {
      id_session = undefined,
      token = "",
      expiration = 0,
      ipv4 = "",
      id_user = 0,
    } = params

    this.id_session = id_session
    this.token = token
    this.expiration = expiration
    this.ipv4 = ipv4
    this.id_user = id_user
  }
}