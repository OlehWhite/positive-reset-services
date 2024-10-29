export interface Website {
  id: string;
  keyName: string;
  title: string;
  headerImages: IHeaderImage[];
  schedule: ISchedule[];
  address: string;
  tel: string;
  googleMaps: string;
  links: ILink[];
  blogs: IBlog[];
  locations: ILocation[];
  email: string;
  ourPartners: IOurPartner[];
  providers: IProvider[];
  languages: string[];
  video: string;
  videoIcon: string;
}

export interface IOurPartner {
  link: string;
  title: string;
  image: string;
}

export interface IProvider {
  image: string;
  firstName: string;
  lastName: string;
  age: number;
  text: string;
  title: string;
  link: string;
  id: string;
}

export interface ILink {
  link: string;
  title: string;
}

export interface IHeaderImage {
  image: string;
  title: string;
  text: string;
}

export interface ISchedule {
  day: string;
  open: string;
  close: string;
}

export interface ILocation {
  image: string;
  link: string;
  address: string;
  email: string;
  title: string;
  tel: string;
  googleMap: string;
  id: string;
  open: boolean;
}

export interface IBlog {
  image: string;
  title: string;
  text: string[];
  date: string;
  id: string;
}
