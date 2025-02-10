import OpenAI from "openai";
console.log(process.env.REACT_APP_OPENAI_API_KEY);

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})

export default openai;