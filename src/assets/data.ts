const words = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua"
]
export let text = ""

for (let i = 0; i < words.length; i++) {
  const index = Math.floor(Math.random() * words.length)
  text += words[index] + " "
}

