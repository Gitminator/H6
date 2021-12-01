export class Room {

  private _address!: string;
  private _price!: number;
  private _testee: number = -3;

  public getaddress(){
    // return this._address;
    console.log('testestst');
    return "Hejehej";
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

  constructor(address: string, price: number){
    // console.log('construktortesting');
    this._address = address;
    // console.log(address);

    this._price = price;
  }
  getRoom():string{
    return '&{this.Address}&{this.Price}'
  }
  toJSON() {
    return {getaddress: this._address,getprice: this._price};
  }

  public testing(){

  }
}
