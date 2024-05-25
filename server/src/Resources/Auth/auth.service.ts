import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaClient) {}
  async validateUser(email: string, password: string): Promise<any> {
    const matchinguser = await this.prisma.personel.findUnique({
      where: { email, password },
    });
    if (matchinguser === null) {
      return HttpStatus.UNAUTHORIZED;
    }
    return {
      ...matchinguser,
      status: HttpStatus.OK,
    };
  }
}
