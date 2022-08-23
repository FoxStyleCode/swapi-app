export interface CharacterInterface {
  name      : string;
  birth_year: string;
  eye_color : string;
  gender    : Gender;
  hair_color: string;
  height    : string;
  mass      : string;
  skin_color: string;
  homeworld : string;
  films     : string[];
  species   : string[];
  starships : string[];
  vehicles  : string[];
  url       : string;
  created   : Date;
  edited    : Date;
}

export interface data {
  count     : number;
  next      : string;
  previous  : string;
  results   : CharacterInterface[];
}

export enum Gender {
  Female = "female",
  Male   = "male",
  None   = "none",
}


  