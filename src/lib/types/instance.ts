export default class Instance {
  name: string;
  url: string;
  description: string;
  image: string;
  display: boolean;
  verified: boolean;
  country: string;
  language: string;

  constructor(
    name: string,
    url: string,
    description: string,
    image: string,
    display: boolean,
    verified: boolean,
    country: string,
    language: string
  ) {
    this.name = name;
    this.url = url;
    this.description = description;
    this.image = image;
    this.display = display;
    this.verified = verified;
    this.country = country;
    this.language = language;
  }
}
