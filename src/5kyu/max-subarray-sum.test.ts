
import maxSubarray from "./max-subarray-sum";

test("Returns the maximum from an array of just positives", () => {
    expect(maxSubarray([1, 2, 5, 6])).toBe(14)
});

test("Returns maximum from an array with negatives and positives", () => {
    expect(maxSubarray([1, -5, 3, -1, 5, -1, -2, 3])).toBe(7);
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
});

test("Returns 0 for an empty array", () => {
    expect(maxSubarray([])).toBe(0)
});

test("Returns 0 for an array with only negatives", () => {
    expect(maxSubarray([-1, -5, -9, -8])).toBe(0)
})