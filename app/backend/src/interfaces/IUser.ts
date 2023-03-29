export interface ILoginUser{
  email:string;
  password:string;

}

export interface IUser extends ILoginUser{
  id: number;
  username: string;
  role: string;
}

export interface IUserWithouPassword {
  id: number;
  username: string;
  role: string;
  email: string;
}
