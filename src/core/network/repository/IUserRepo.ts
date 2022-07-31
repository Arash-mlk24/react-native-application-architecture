interface IUserRepo {
  getUserName(id: number): Promise<string>
}

export default IUserRepo;