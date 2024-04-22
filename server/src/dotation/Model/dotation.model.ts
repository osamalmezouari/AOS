import { SousActivite } from '../../sous-activite/Model/SousActivite.model';

export class Dotation {
  id?: string;
  dotation?: number;
  descriptionAr?: string;
  descriptionFr?: string;
  SousActivities?: SousActivite[];
}
