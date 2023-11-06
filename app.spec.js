import { describe, expect, it } from "vitest";
import * as functions from "./app";

describe("At every function call, it must calculate the date of measurement", () => {
  const d = new Date();
  it("When the function called must return the current time", () => {
    const result = functions.dateOfMeasurement();
    expect(result).toEqual(d);
  });
});
