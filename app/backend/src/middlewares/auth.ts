import * as jwt from 'jsonwebtoken';
import { IUserWithouPassword } from '../interfaces/IUser';

class Auth {
  private secret = 'segredinho';

  public async createToken(data: IUserWithouPassword) {
    // estava dando erro sem o jwt.SignOptions, erro de sobrecarga

    const config: jwt.SignOptions = {
      expiresIn: '2h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data }, this.secret, config);
    return token;
  }

  public async verifyToken(token: string) {
    const verToken = jwt.verify(token, this.secret);
    return verToken;
  }
}

export default Auth;
