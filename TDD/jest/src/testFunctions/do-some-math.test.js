import { sum, substract, multiply, divide } from "../myFunctions/do-some-math";

describe('Math functions test', () => {
  it('두가지 값을 더합니다.', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  })
  it('두가지 값을 뺍니다.', () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract(1, 3)).toBe(-2);
  })
  it('두가지 값을 곱니다.', () => {
    expect(multiply(1, 1)).toBe(1.000);
    expect(multiply(100, 3)).toBe(300.000);
  })
  it('두가지 값을 나눕니다.', () => {
    expect(divide(1, 1)).toBe(1);
    expect(() => divide()).toThrowError('0으로 나눌 수 없습니다.');
    expect(divide(-2, 0.1)).toBe(-20);
    
  })
})