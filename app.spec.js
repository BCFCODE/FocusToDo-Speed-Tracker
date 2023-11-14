import { describe, expect, it } from "vitest";
import * as functions from "./app";

describe("Database", () => {
  const d = new Date();
  it("report11122023.save() >>> should save dateOfMeasurement to history", () => {
    const result = functions.history[2023][11][0].dateOfMeasurement;
    expect(result).toEqual(d);
  });
  it("should save report11122023.currentHpd() to history", () => {
    const expectedResult = [200, 0]
    const result = functions.history[2023][11][0].currentHpd;
    expect(result).toEqual(expectedResult);
  });
  it("should save report11122023.currentHph() to history", () => {
    const expectedResult = [8, 20]
    const result = functions.history[2023][11][0].currentHph;
    expect(result).toEqual(expectedResult);
  });
});

describe("Methods", () => {
  it("For durationToReach: 5 (days), report11122023.currentHpd() should return >>> [200, 0]", () => {
    const [durationToReach1000h, expectedResult] = [5, [200, 0]];
    const result = functions.report11122023.currentHpd(durationToReach1000h);
    expect(result).toEqual(expectedResult);
  });
  it("For durationToReach: 5 (days), report11122023.currentHph() should return >>> [8, 20]", () => {
    const [durationToReach1000h, expectedResult] = [5, [8, 20]];
    const result = functions.report11122023.currentHph(durationToReach1000h);
    expect(result).toEqual(expectedResult);
  });
});
