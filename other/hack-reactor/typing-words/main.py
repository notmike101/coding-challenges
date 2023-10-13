# Typing Words Hack Reactor problem
# Mike Orozco (notmike101)
# 
# Given an array of strings words, return the words that can be typed using letters
# of the alphabet on only one row of American keyboard like the image below.
# 
# In the American keyboard:
#   * The first row consists of the characters "qwertyuiop"
#   * The second row consists of the characters "asdfghjkl"
#   * The third row consits of the characters "zxcvbnm"
# 
# Test cases:
#   * ["Hello", "Alaska", "Dad", "Peace"] -> ["Alaska", "Dad"]
#   * ["omk"] -> []
#   * ["asdf", "sfd"] -> ["asdf", "sfd"]

keyboardRowMap = {
  'q': 1,
  'w': 1,
  'e': 1,
  'r': 1,
  't': 1,
  'y': 1,
  'u': 1,
  'i': 1,
  'o': 1,
  'p': 1,
  'a': 2,
  's': 2,
  'd': 2,
  'f': 2,
  'g': 2,
  'h': 2,
  'j': 2,
  'k': 2,
  'l': 2,
  'z': 3,
  'x': 3,
  'c': 3,
  'v': 3,
  'b': 3,
  'n': 3,
  'm': 3,
}

def getKeyboardRowWords(words):
  output = []

  for word in words:
    splitWord = list(word.lower())
    firstCharKeyboardRow = keyboardRowMap[splitWord[0]]
    isWordCharsInSameRow = True

    splitWord.pop(0)

    for letter in splitWord:
      letterKeyboardRow = keyboardRowMap[letter]

      if firstCharKeyboardRow is not letterKeyboardRow:
        isWordCharsInSameRow = False
        break

    if isWordCharsInSameRow is True:
      output.append(word)

  return output

print(getKeyboardRowWords(['Hello', 'Alaska', 'Dad', 'Peace']))
