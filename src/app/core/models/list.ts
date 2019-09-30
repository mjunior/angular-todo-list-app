export class List {
  id: number;
  itemId: number;
  name: string;

  // tslint:disable-next-line:ban-types
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
