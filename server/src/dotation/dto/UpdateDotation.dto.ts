import { SousActivite } from '../../sous-activite/Model/SousActivite.model';

export class UpdateDotationDto {
  id: string;
  dotation: number;
  descriptionAr: string;
  descriptionFr: string;
  SousActivities: SousActivite[];
}
