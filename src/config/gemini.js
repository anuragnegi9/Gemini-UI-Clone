

import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from "node:fs";
// import mime from "mime-types";

const apiKey = "AIzaSyCH7McnKGZN79QS39_kmdoJUUFc2-NOU-w"
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: ["text"], // Corrected
};

async function run(prompt) {
  const chatSession = model.startChat({ generationConfig, history: [] });

  try {
    const result = await chatSession.sendMessage(prompt);

    if (!result.response || !result.response.candidates) {
      console.error("No response received from Gemini API.");
      return;

    }

    const candidates = result.response.candidates;
    for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
      for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
        const part = candidates[candidate_index].content.parts[part_index];
        if (part.inlineData) {
          try {
            const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
            fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
            console.log(`Output written to: ${filename}`);
          } catch (err) {
            console.error("Error writing file:", err);
          }
        }
      }
    }

    const resultData = candidates[0].content.parts.map(p => p.text || "").join("\n") // Fixed output logging

    console.log(
      candidates[0].content.parts.map(p => p.text || "").join("\n") // Fixed output logging
    );

    return resultData
  } catch (error) {
    console.error("Error in API call:", error);
  }
}

export default run;
