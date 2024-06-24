export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;  // Block-scoped variable
    const task2 = false;  // Block-scoped variable
    if (task && task2) {
      return [task, task2]
    }
  }

  return [task, task2];
}
