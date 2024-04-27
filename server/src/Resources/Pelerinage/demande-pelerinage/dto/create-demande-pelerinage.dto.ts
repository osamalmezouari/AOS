export class CreateDemandePelerinageDto {
  id: string;
  annee: bigint;
  effet: Date;
  observation: string | null;
  personelId: string;
  sousActiviteId: string;
}
