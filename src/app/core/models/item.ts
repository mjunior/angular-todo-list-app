export class Item {
  id: number;
  listId: number;
  name: string;
  done: boolean;

  // tslint:disable-next-line:ban-types
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
