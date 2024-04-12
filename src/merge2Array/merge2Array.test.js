const mergeArraysAndRemoveDuplicate = require("./merge2Array");

describe("mergeArraysAndRemoveDuplicate function", () => {
    test("merges two arrays with no duplicates", () => {
        expect(mergeArraysAndRemoveDuplicate([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test("merges two arrays and removes duplicates", () => {
        expect(mergeArraysAndRemoveDuplicate([1, 2, 3], [2, 3, 4])).toEqual([
            1, 2, 3, 4,
        ]);
    });

    test("merges arrays when one array is empty", () => {
        expect(mergeArraysAndRemoveDuplicate([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(mergeArraysAndRemoveDuplicate([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    test("merges two empty arrays", () => {
        expect(mergeArraysAndRemoveDuplicate([], [])).toEqual([]);
    });

    test("merges arrays with various data types", () => {
        expect(mergeArraysAndRemoveDuplicate(["a", 1], [2, "b", "a"])).toEqual([
            "a",
            1,
            2,
            "b",
        ]);
    });
});
