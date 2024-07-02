export default function cleanSet(set, startString) {
  let str = '';

  // Check if the startString is empty, if so, return an empty string
  if (startString === '') {
    return '';
  }

  for (const item of set) {
    if (set instanceof Set && typeof startString === 'string') {
      if (item && item.startsWith(startString)) {
        const strSlice = item.slice(startString.length);

        // Add a hyphen to the string if it's not the first item
        if (str !== '') {
          str += '-';
        }

        str += strSlice;
      }
    }
  }

  return str;
}
