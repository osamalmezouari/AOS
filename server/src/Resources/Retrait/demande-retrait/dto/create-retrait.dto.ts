export class CreateRetraitDto {
  id: string;
  date: string;
  mantantRetraite: number;
  effet: Date;
  observation?: string | null;
  personelId: string;
  sousActiviteId: string;
}
