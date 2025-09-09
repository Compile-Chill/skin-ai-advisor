import { registerAs } from '@nestjs/config'

export default registerAs('appConfig', () => ({
  // Application General Settings

  appPort: parseInt(process.env.PORT || '3000', 10),
  logLevel: parseInt(process.env.LOG_LEVEL || '1', 10),
  prompt: process.env.PROMPT || 'You are an AI assistant. Reply briefly and concisely. Limit each response to 20 words max.',
  provider: process.env.LLM_PROVIDER || 'openai',
  llmKey: process.env.LLM_KEY || 'your-llm-key',
  llmModel: process.env.LLM_MODEL || 'your-llm-model',

}))