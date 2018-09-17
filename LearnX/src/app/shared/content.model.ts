export class Content {
  public name: string;
  public description: string;
  public backgroundImagePath: string;
  public image: string;

  constructor(name: string, description: string, backgroundImagePath: string
  , image: string) {
    this.name = name;
    this.description = description;
    this.backgroundImagePath = backgroundImagePath;
    this.image = image;
  }


}
