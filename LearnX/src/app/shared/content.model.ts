export class Content {
  public name: string;
  public description: string;
  public backgroundImagePath: string;
  public image: string;
  public url: string;

  constructor(name: string, description: string, backgroundImagePath: string
  , image: string, url: string) {
    this.name = name;
    this.description = description;
    this.backgroundImagePath = backgroundImagePath;
    this.image = image;
    this.url = url;
  }


}
