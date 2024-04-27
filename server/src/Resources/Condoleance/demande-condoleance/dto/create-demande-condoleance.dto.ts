export class CreateDemandeCondoleanceDto {
  id: string;
  mantantCondoleance: number;
  description: string;
  effet: Date;
  observation?: string | null;
  typeCondoleanceId: string;
  personelId: string;
  sousActiviteId: string;
}
