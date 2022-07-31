import UserLoginDto from "@network/dto/UserLoginDto";

interface IAuthRepo {
  login(userLoginDto: UserLoginDto): Promise<string>
}

export default IAuthRepo;