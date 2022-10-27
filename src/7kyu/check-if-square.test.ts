import isSquare from "./check-if-square";

test("Returns true for square numbers", () => {
    expect(isSquare(25)).toBe(true);
    expect(isSquare(16)).toBe(true);
    expect(isSquare(4000000)).toBe(true);
});

test("Returns false for non-squares", () => {
    expect(isSquare(3)).toBe(false);
    expect(isSquare(26)).toBe(false);
    expect(isSquare(999)).toBe(false);
});

test("Returns true for 0", () => {
    expect(isSquare(0)).toBe(true)
});

test("Returns false for negative numbers", () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare(-100000000000)).toBe(false)
})