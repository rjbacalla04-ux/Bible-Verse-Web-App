import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ito ang bagong "utak" ng Selah kung saan nakatali ang mga trusted site links sa bawat bersikulo
const bibleData = [
  {
    id: "john-3-16",
    verse: "John 3:16",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    reflections: [
      { site: "Bible Gateway", text: "Exploring the linguistic roots of 'agape' love and how this verse redefined the ancient world's understanding of God's character.", url: "https://www.biblegateway.com/resources/commentary/John.3.16" },
      { site: "Desiring God", text: "John Piper reflects on the 'whosoever'—the boundless reach of God's grace and the simplicity of belief in the face of eternity.", url: "https://www.desiringgod.org/messages/god-so-loved-the-world" },
      { site: "The Gospel Coalition", text: "A theological deep-dive into the concept of 'perishing' and why the promise of 'everlasting life' remains the most hopeful phrase in literature.", url: "https://www.thegospelcoalition.org/essay/the-love-of-god/" }
    ]
  },
  {
    id: "psalm-23-1",
    verse: "Psalm 23:1",
    text: "The Lord is my shepherd; I shall not want.",
    reflections: [
      { site: "Bible Gateway", text: "Understanding the pastoral imagery of a shepherd and what it means to truly lack nothing under divine care.", url: "https://www.biblegateway.com/resources/commentary/Psalm.23.1" },
      { site: "Desiring God", text: "The sweetness of having God as your shepherd in times of deep anxiety and loneliness.", url: "https://www.desiringgod.org/articles/the-lord-is-my-shepherd" },
      { site: "The Gospel Coalition", text: "How the old testament shepherd imagery points directly to the ultimate care found in the New Testament.", url: "https://www.thegospelcoalition.org/article/jehovah-rohi/" }
    ]
  }
];

// Endpoint 1: Ibibigay nito lahat ng verses para sa Sample Buttons sa Homepage
app.get('/api/verses', (req, res) => {
  res.json(bibleData);
});

// Endpoint 2: Dito hihingi si React ng reflections para sa ISANG partikular na verse lang
app.get('/api/verses/:id', (req, res) => {
  const foundVerse = bibleData.find(v => v.id === req.params.id);
  if (foundVerse) {
    res.json(foundVerse);
  } else {
    res.status(404).json({ error: "Verse not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Selah Backend engine smoothly running on port ${PORT}`);
});