class SpeSkillTest {
  narcissisticNumber(input) {
    const digit = input.toString().length;
    const numbers = input.toString().split("");
    let sum = 0;
    numbers.forEach(number => {
      sum += Math.pow(number, digit)
    });
    return sum
  }

  parityOutlier(input) {
    if (input.length < 3) {
      return false
    }
    let odd = []
    let even = []
    input.forEach((number) => {
      if (number % 2 == 0) {
        even.push(number)
      } else {
        odd.push(number)
      }
    })
    if (odd.length == 1) {
      return odd[0]
    } else if (even.length == 1) {
      return even[0]
    } else {
      return false
    }
  }

  needleInAHaystack(arr, str) {
    let index = null
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == str) {
        index = i
        break
      }
    }
    return index
  }

  TheBlueOceanReverse(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
      let temp = false
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          temp = true
          break
        }
      }
      if (!temp) {
        result.push(arr1[i])
      }
    }
    return result
  }
}

describe("Unit Test", () => {
  it("Narcissistic Number", () => {
    let obj = new SpeSkillTest()
    expect(obj.narcissisticNumber(1634)).toEqual(1634);
    expect(obj.narcissisticNumber(153)).toEqual(153);
    expect(obj.narcissisticNumber(111)).not.toEqual(111);
  });

  it("Parity Outlier", () => {
    let obj = new SpeSkillTest()
    expect(obj.parityOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toEqual(11);
    expect(obj.parityOutlier([160, 3, 1719, 19, 11, 13, -21])).toEqual(160);
    expect(obj.parityOutlier([11, 13, 15, 19, 9, 13, -21])).toEqual(false);
  });

  it("Needle in a Haystack", () => {
    let obj = new SpeSkillTest()
    expect(obj.needleInAHaystack(["red", "blue", "yellow", "black", "grey"], "blue")).toEqual(1);
    expect(obj.needleInAHaystack(["red", "blue", "yellow", "black", "grey"], "green")).toEqual(null);
  });

  it("The Blue Ocean Reverse", () => {
    let obj = new SpeSkillTest()
    expect(obj.TheBlueOceanReverse([1, 2, 3, 4, 6, 10], [1])).toEqual([2, 3, 4, 6, 10]);
    expect(obj.TheBlueOceanReverse([1, 5, 5, 5, 5, 3], [5])).toEqual([1, 3]);
  });
});