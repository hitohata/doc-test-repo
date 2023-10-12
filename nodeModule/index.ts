export const sum = (a: number, b: number): number => {
    return a + b;
};


if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it("add", () => {
        expect(sum(1, 1)).toBe(2)
        expect(sum(1, 2)).toBe(3)
        expect(sum(2, 2)).toBe(4)
    })
}
