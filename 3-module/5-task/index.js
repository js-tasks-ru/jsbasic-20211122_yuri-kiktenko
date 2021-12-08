function getMinMax(str) {
  let arr = str.split(" ");
  let result = {
    min: 0,
    max: 0,
  };
  arr.forEach((item) => {
    if (!Number.isNaN(+item) && +item < result.min) {
      result.min = +item;
    }
    if (!Number.isNaN(+item) && +item > result.min) {
      result.max = +item;
    }
  });
  return result;
}
