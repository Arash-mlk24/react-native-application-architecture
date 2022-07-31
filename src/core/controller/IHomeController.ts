interface IHomeController {
  getName(id: number): Promise<string>
}

export default IHomeController;