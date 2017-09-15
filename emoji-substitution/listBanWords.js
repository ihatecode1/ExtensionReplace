let dictionary = new Map();
dictionary.set('đại diện cơ quan công tố đã đề nghị', 16);
dictionary.set('số 10 đạt sức gió 150 km/h trước', 16);
dictionary.set('tên lửa', 10);

let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    return 1;
  }

  return 0;
});