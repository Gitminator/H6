export class Room {


  // public address!: string;
  // public price!: number;
  //
  // constructor(address: string, price: number){
  //   // console.log('construktortesting');
  //   this.address = address;
  //   // console.log(address);
  //
  //   this.price = price;
  // }

  private _address!: string;
  private _price!: number;
  private _testee: number = -3;

  constructor(address: string, price: number){
    // console.log('construktortesting');
    this._address = address;
    // console.log(address);

    this._price = price;
  }

  public getaddress(){
    return this._address;

  }
  public getprice(): number {
    return this._price;
  }
  // public setaddress(value: string) {
  //   this._address = value;
  // }
  // public setprice(value: number) {
  //   this._price = value;
  // }


  getRoom():string{
    return '&{this.Address}&{this.Price}'
  }
  toJSON() {
    return {getaddress: this._address,getprice: this._price};
  }

  public testing(){

  }
}
