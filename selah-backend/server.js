import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// I-load ang mga variables mula sa .env file
dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// I-initialize ang Gemini client gamit ang ligtas na API Key mula sa .env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// MOCK DATA (Gagamitin pa rin natin para sa mabilisang load ng buttons sa Homepage)
const sampleVerses = [
  { id: "john-3-16", verse: "John 3:16" },
  { id: "psalm-23-1", verse: "Psalm 23:1" },
  { id: "romans-8-28", verse: "Romans 8:28" }
];

// Endpoint 1: Para sa homepage suggestion buttons
app.get('/api/verses', (req, res) => {
  res.json(sampleVerses);
});

// Endpoint 2: 🔥 THE AI ORCHESTRATION ENGINE (UPDATED PLATFORMS)
app.get('/api/verses/:id', async (req, res) => {
  const { id } = req.params;

  // I-convert ang id pabalik sa readable form (e.g., "exodus-20-8" -> "exodus 20 8")
  const rawVerseName = id.replace(/-/g, ' ');

  try {
    console.log(`🤖 Tinatawagan si Gemini para sa bersikulo: ${rawVerseName}...`);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Process the following Bible verse: "${rawVerseName}".
    
    Strictly follow these rules:
    1. Determine the official standard capitalization of the verse name (e.g., "Exodus 20:8").
    2. Provide a 1-sentence description text about the overall theme of the verse.
    3. Generate 9 distinct, high-quality theological reflections or study summaries as if they were written by these specific platforms:
       - BibleRef.com
       - BibleHub.com
       - Enduring Word
       - Ligonier.org
       - BibleProject.com
       - Crosswalk.com
       - GotQuestions.org
       - FaithfulGrace.com
       - Blue Letter Bible
       
    CRITICAL: Every text and reflection MUST be written in professional, comforting theological English. Do not use Tagalog.
    
    URL GENERATION RULES (Follow these exact schemas to avoid 404 errors):
    - For GotQuestions.org: To bypass their script block, you MUST use Google Search target routing format exactly like this: "https://www.google.com/search?q=site:gotquestions.org+[Book]+[Chapter]%3A[Verse]"
    - For BibleRef.com: Use standard format "https://www.bibleref.com/[Book]/[Chapter]/[Book]-[Chapter]-[Verse].html"
    - For BibleHub.com: Use standard format "https://biblehub.com/[book]/[chapter]-[verse].htm"
    - For Enduring Word: Use chapter format "https://enduringword.com/bible-commentary/[book]-[chapter]/"
    - For Ligonier.org: Use their search routing: "https://www.ligonier.org/search?q=[Book]+[Chapter]%3A[Verse]"
    - For BibleProject.com: Use library search query format: "https://bibleproject.com/search?q=[Book]" (Keep it focused on the book level)
    - For Crosswalk.com: Use their internal search routing: "https://www.crosswalk.com/search/?q=[Book]+[Chapter]%3A[Verse]"
    - For FaithfulGrace.com: Analyze the main theme of the searched verse. If the verse maps perfectly to one of their common topics (e.g., anxiety, grief, forgiveness, rest, grace, faith), output the URL as "https://faithfulgrace.com/devotionals/[matched-topic]". Otherwise, default strictly to: "https://faithfulgrace.com/devotionals"
    
    - For Blue Letter Bible: Use their strict study tool URL format: "https://www.blueletterbible.org/search/preSearch.cfm?Criteria=[Book]+[Chapter]%3A[Verse]" (e.g., for Exodus 20:8, the URL must be exactly: https://www.blueletterbible.org/search/preSearch.cfm?Criteria=Exodus+20%3A8)`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            verse: { type: "STRING" },
            text: { type: "STRING" },
            reflections: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  site: { type: "STRING" },
                  text: { type: "STRING" },
                  url: { type: "STRING" }
                },
                required: ["site", "text", "url"]
              }
            }
          },
          required: ["verse", "text", "reflections"]
        }
      }
    });

    const aiData = JSON.parse(response.text);
    res.json(aiData);

  } catch (error) {
    console.error("❌ API Error naengkuwentro ng server:", error);
    res.status(500).json({ error: "Hindi nagtagumpay ang AI sa pag-isip ng reflection. Subukan muli." });
  }
});



app.listen(PORT, () => {
  console.log(`🚀 Selah AI-Orchestrated Engine smoothly running on port ${PORT}`);
});