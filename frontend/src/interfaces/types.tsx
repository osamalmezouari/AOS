export interface ActivitieCardProps {
  imgurl: string;
  nomAr: string;
  nomFr: string;
  onClick(): void;
}

export interface SingleSousActivities {
  id: string;
  nomAr: string;
  nomFr: string;
  imgUrl: string;
  descriptionAr: string;
  descriptionFr: string;
  activiteId: string;
}

export interface SingleSousActivitiesWithpieces {
  id: number;
  nomFr: string;
  descriptionFr: string;
  imgUrl: string;
  pieces: { piece: { id: number; nomFr: string } }[];
}

export interface ActivitieWithSousActivities {
  id: string;
  nomAr: string;
  nomFr: string;
  SousActivities: SingleSousActivities[];
}
export interface NavbarPropsType {
  loginDisplay: boolean;
}
