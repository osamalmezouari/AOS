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
        'Mot de passe ou email incorrect, ou bien vous n êtes pas encore inscrit',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (matchinguser.isAdmin) {
      return {
        ...matchinguser,
        status: HttpStatus.OK,
      };
    }
    const Checkinscreption = await this.prisma.inscreption.findMany({
      where: {
        personelId: matchinguser.id,
        status: false,
        annee: currentYear,
      },
    });
    if (Checkinscreption.length > 0) {
      throw new HttpException(
        "Ton inscription n'a pas encore été validée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }

    const Checkthisyearinscreption = await this.prisma.inscreption.findMany({
      where: {
        personelId: matchinguser.id,
        status: true,
        annee: currentYear,
      },
    });
    if (Checkthisyearinscreption.length > 0) {
      return {
        ...matchinguser,
        status: HttpStatus.OK,
      };
    }
  }
}
