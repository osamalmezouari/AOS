export class CreateDemandeCreditDto {
  id: string;
  mantantCredit: number;
  description: string;
  effet: Date;
  observation?: string | null;
  personelId: string;
  sousActiviteId: string;
}
