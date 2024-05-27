import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaClient) {}
  async validateUser(email: string, password: string): Promise<any> {
    const currentYear = new Date().getFullYear();
    const matchinguser = await this.prisma.personel.findUnique({
      where: { email, password },
    });
    if (matchinguser === null) {
      throw new HttpException(
        'Mot de passe ou email incorrect',
        HttpStatus.BAD_REQUEST,
      );
    }
    const Checkinscreption = await this.prisma.inscreption.findFirst({
      where: {
        personelId: matchinguser.id,
        status: false,
        annee: {
          not: currentYear,
        },
      },
    });
    if (Checkinscreption) {
      throw new HttpException(
        "Ton inscription n'a pas encore été validée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      ...matchinguser,
      status: HttpStatus.OK,
    };
  }
}
