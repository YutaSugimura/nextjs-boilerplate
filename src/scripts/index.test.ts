/**
 * @jest-environment node
 */

import {
  eightNumber,
  evenAndOdd,
  fetchData,
  fetchData2,
  fetchData3,
  forEach,
  PointManagement,
  sum,
  throwError,
} from ".";

// https://jestjs.io/ja/docs/getting-started

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 3)).not.toBe(3);
});

test("numList width even or odd", () => {
  const numList = [0, 1, 2];

  expect(evenAndOdd(numList)).toEqual([
    { num: 0, isEven: true },
    { num: 1, isEven: false },
    { num: 2, isEven: true },
  ]);
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);

  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

test("adding floatin point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toEqual(0.3); error
  expect(value).toBeCloseTo(0.3);
});

// test('eightNumber', () => {
//   expect(eightNumber()).toMatch(/[0-9]{8}/);
// });

test("the shopping list has milk on it", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

test("throwError goes as expected", () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow(Error);
});

test("the data is peanut butter", (done) => {
  const callback = (str: string) => {
    try {
      expect(str).toBe("peanut butter");
      done();
    } catch (e) {
      done(e);
    }
  };

  fetchData(callback);
});

test("the data is peanut butter", () => {
  return fetchData2().then((str) => {
    expect(str).toBe("peanut butter");
  });
});

test("the data is reject error", () => {
  expect.assertions(1);
  return fetchData3().catch((str) => {
    expect(str).toBe("error");
  });
});

test("refactor fetchData2 test", () => {
  return expect(fetchData2()).resolves.toBe("peanut butter");
});

test("refactor fetchData3 test", () => {
  return expect(fetchData3()).rejects.toBe("error");
});

test("refactor fetchData2 rewhite test", async () => {
  const str = await fetchData2();
  expect(str).toBe("peanut butter");
});

test("refactor fetchData3 rewrite test", async () => {
  await expect(fetchData3()).rejects.toBe("error");
});

describe("PointManagement", () => {
  let pointManagement: PointManagement;

  beforeEach(() => {
    pointManagement = new PointManagement(100);
  });

  afterEach(() => {
    pointManagement.clear();
  });

  it("add 1", () => {
    expect(pointManagement.add(1)).toBe(101);
    expect(pointManagement.total).toBe(101);
  });

  it("sub 1", () => {
    expect(pointManagement.sub(1)).toBe(99);
    expect(pointManagement.total).toBe(99);
  });
});

describe("forEach", () => {
  let mockCallback: jest.Mock<any, any>;

  beforeEach(() => {
    mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);
  });

  test("call length", () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("first argument of the first call", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test("first argument of the second call", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
  test("return value of the first call", () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

describe("forEach", () => {
  let mockCallback: jest.Mock<any, any>;

  beforeEach(() => {
    // mockCallback = jest.fn().mockReturnValue(200);
    mockCallback = jest.fn().mockReturnValueOnce(200).mockReturnValueOnce(300);
    forEach([0, 1], mockCallback);
  });

  test("return value of the first call", () => {
    expect(mockCallback.mock.results[0].value).toBe(200);
  });

  test("return value of the second call", () => {
    expect(mockCallback.mock.results[1].value).toBe(300);
  });
});
