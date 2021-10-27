export const sum = (a: number, b: number) => {
  return a + b;
};

export const evenAndOdd = (numList: number[]) => {
  return numList.map((num) => ({ num, isEven: !(num % 2) }));
};

export const eightNumber = () => {
  return `${Math.floor(Math.random() * Math.pow(10, 8))}`;
};

export const throwError = () => {
  throw new Error('you are using the wrong JDK');
};

export const fetchData = (callback: (str: string) => void) => {
  setTimeout(() => callback('peanut butter'), 500);
};

export const fetchData2 = () => {
  return Promise.resolve('peanut butter');
};

export const fetchData3 = () => {
  return Promise.reject('error');
};

export class PointManagement {
  static total: number = 0;
  private point: number = 0;

  constructor(point: number) {
    this.point = point;
    PointManagement.total += point;
  }

  get total() {
    return PointManagement.total;
  }

  add = (point: number) => {
    this.point += point;
    PointManagement.total += point;
    return this.point;
  };

  sub = (point: number) => {
    this.point -= point;
    PointManagement.total -= point;
    return this.point;
  };

  clear = () => {
    this.point = 0;
    PointManagement.total = 0;
  };
}

export const forEach = (items: number[], callback: (item: number) => number) => {
  return items.map((item) => {
    return callback(item);
  });
};

export const foo = 'foo';
export const bar = () => 'bar';
