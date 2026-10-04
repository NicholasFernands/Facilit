import { Injectable } from '@nestjs/common';
import { Shop } from 'src/shop/entities/shop.entities';
import { ShopService } from 'src/shop/shop.service';
import { User } from 'src/user/entities/user.entities';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService,
    private readonly shopService: ShopService,
    private readonly jwtService: JwtService) {}

  async login(account) {

    const payload = { sub: account.id, name: account.name }

    return {

      token: this.jwtService.sign(payload)
    }

  }

  async validateUser(email: string, password: string) {
    let user: User

    try {
      user = await this.userService.getOne({email})
    } catch(err) {
      return null
    }

    const isPasswordsValid = await bcrypt.compareSync(password, user.password)

    if(!isPasswordsValid) return null

    return user
  }

  async validateShop(email: string, password: string) {
    let shop: Shop

    try {
      shop = await this.shopService.getOne({email})
    } catch(err) {
      return null
    }

    const isPasswordsValid = await bcrypt.compareSync(password, shop.password)

    if(!isPasswordsValid) return null

    return shop
  }
}
