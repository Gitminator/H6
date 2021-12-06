export class Location {
  public Postalcode:number;
  public City:string;

  public getPostalcode():number{
    return this.Postalcode;
  }

  constructor(postalcode:number, city:string){
    console.log('construktortesting');
    this.Postalcode = postalcode;
    console.log(postalcode);
    this.City = city;
  }

}
