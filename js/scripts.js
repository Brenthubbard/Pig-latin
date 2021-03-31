function pigLatin(text) {
  const cleanText = text.replace(/[^a-zA-Z]/g, "");
  const wordArray = cleanText.split(" ");
  return wordArray;
}
