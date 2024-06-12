const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
// genAI.getGenerativeModel({model: "gemini-1.5-flash"})
// const model = genAI.getGenerativeModel({model: "gemini-pro"})

// console.log(model);
const run = async () => {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const prompt = "tell me about indonseia"
    const result = model.generateContent(prompt)
    const response = (await result).response
    const text = response.text();
    console.log(text);

}

run();