export class CreateZooDto {
  id: string;
  date: bigint;
  adulte: number;
  enfant: number;
  effet: Date;
  observation: string | null;
  personelId: string;
  sousActiviteId: string;
}
