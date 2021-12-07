export class Location {
  public Postalcode:number;
  public City:string;

  public getPostalcode():number{
    return this.Postalcode;
  }

  constructor(postalcode:number, city:string){
    this.Postalcode = postalcode;
    this.City = city;
  }

}
