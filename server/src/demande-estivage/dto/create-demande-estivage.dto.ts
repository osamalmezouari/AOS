export class CreateDemandeEstivageDto {
  id: string;
  date_entre: bigint | number;
  date_sortie: bigint | number;
  effet: Date | string;
  appartementId?: string | null;
  centreId: string;
  personelId: string;
  sousActiviteId: string;
}
