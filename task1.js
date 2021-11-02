function minCoins(num) {
  const notes = [1000, 500, 200, 100, 50];
  const notesCount = [];

  let remaining = num;
  for (const note of notes) {
    if (num >= note) {
      notesCount.push(Math.trunc(remaining / note));
      remaining = remaining % note;
    } else {
      notesCount.push(0);
    }
  }

  if (remaining != 0) {
      return -1;
  }

  return notesCount.reduce((prev, curr) => prev + curr);
}

console.log(minCoins(1000));