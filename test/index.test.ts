import { expect } from "chai";
import { Abc } from "../src/index";

describe("index", () => {
  it("foo test", () => {
    const abc: Abc = {
      a: "test",
      b: 321,
    };

    expect(abc.a).to.equal("test");
    expect(abc.b).to.equal(321);
  });
});
