export class Product {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public description: string,
    public collection: string,
    public price: number,
    public quantity: number,
    public fabrication: number,
    public country: string,
  ) {}
}

export class Features {
  constructor(
    public material: string,
    public model: string,
    public colour: string,
    public brand: string,
    public capacity: number,
    public height: number,
    public diameter: number,
    public series: string,
  ) {}
}
