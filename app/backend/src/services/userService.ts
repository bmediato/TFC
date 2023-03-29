import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import HttpException from '../exceptions/HttpException';
import Users from '../database/models/Users';
import { ILoginUser, IUser } from '../interfaces/IUser';

class UserService {
  private modelUser: ModelStatic<Users> = Users;

  public async login(user:ILoginUser): Promise<IUser | null> {
    const { email, password } = user;
    const result = await this.modelUser.findOne({ where: { email, password } });
    console.log(result);
    if (!result) throw new HttpException(404, 'user not found');

    const comparePassword = bcrypt.compareSync(password, result.password);
    if (!comparePassword) throw new HttpException(400, 'password invalid');
    return result;
  }
}

export default UserService;
