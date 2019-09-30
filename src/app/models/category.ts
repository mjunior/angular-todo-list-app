export class Category {
  id: number;
  title: string;
  complete = false;

  // tslint:disable-next-line:ban-types
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
