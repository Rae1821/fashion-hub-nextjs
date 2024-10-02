// This is from the Nextjs docs

// import { openai } from "@ai-sdk/openai";
// import { StreamingTextResponse, streamText } from "ai";

// export async function POST(req: Request) {
//   const { messages } = await req.json();
//   const result = await streamText({
//     model: openai("gpt-4-turbo"),
//     messages,
//   });

//   return new StreamingTextResponse(result.toAIStream());
// }

// This is from my body shape calculator project
// server side

// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';

// //create an OpenAi Api client - edge friendly
// const openai = new OpenAI({
//     akiKey: process.env.OPENAI_API_KEY,
// });

// //IMPORTANT! set the runtime to edge
// export const runtime = 'edge';

// export async function POST(req) {
//     //extract the messages from the body of the request
//     const { messages } = await req.json();

//     //request the openai api for the response based on the prompt
//     const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         stream: true,
//         messages
//     });

//     //convert the response into a friendly text-stream
//     const stream = OpenAIStream(response);

//     //response with the stream
//     return new StreamingTextResponse(stream);
// };
