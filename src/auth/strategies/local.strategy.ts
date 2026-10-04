import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password)
    const shop = await this.authService.validateShop(email, password)

    if(!user) {
      if(!shop) {
       throw new HttpException(
         `E-mail ou senha Invalida`,
          HttpStatus.UNAUTHORIZED
       )
      }
      return shop
    }

    return user
  }

}
