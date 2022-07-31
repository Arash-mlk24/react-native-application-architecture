interface ILoginController {

  login(username: string, password: string): Promise<string>

}

export default ILoginController;