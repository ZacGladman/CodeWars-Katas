import oddCount from "./odd-nums-below-n";

test("Returns count of odd numbers below an EVEN number n", () => {
    expect(oddCount(22)).toBe(11);
    expect(oddCount(4)).toBe(2);
});

test("Returns count of odd numbers below an ODD number n", () => {
    expect(oddCount(5)).toBe(2);
    expect(oddCount(23)).toBe(11)
})

test("Returns count of odd numbers below a BIG number n", () => {
    expect(oddCount(1000000000000)).toBe(500000000000)
})