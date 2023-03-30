import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import Users from '../database/models/Users';
import { ILoginUser } from '../interfaces/IUser';
import { createToken } from '../middlewares/auth';
import HttpException from '../exceptions/HttpException';

class UserService {
  private modelUser: ModelStatic<Users> = Users;

  public async login(user:ILoginUser): Promise<string | null> {
    const { password } = user;
    const result = await this.modelUser.findOne({ where: { email: user.email } });
    if (!result) throw new HttpException(401, 'Invalid email or password');

    const comparePassword = bcrypt.compareSync(password, result.password);
    if (!comparePassword) throw new HttpException(401, 'Invalid email or password');
    const { id, username, role, email } = result;
    const token = createToken({ id, username, role, email });
    return token;
  }
}

export default UserService;
