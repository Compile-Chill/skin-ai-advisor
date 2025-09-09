import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatOpenAI } from '@langchain/openai';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LLMProviders } from './interfaces';

@Injectable()
export class LlmService {
  private readonly logger = new Logger(LlmService.name)
  private llm: ChatOpenAI | ChatGoogleGenerativeAI
  private readonly prompt: string
  
  constructor(private readonly config: ConfigService) {
    this.prompt = this.config.get<string>('appConfig.prompt')
    const provider = this.config.get<string>('appConfig.llmProvider') as LLMProviders
    this.llm = this.initialize(provider)
  }

  private initialize(provider: LLMProviders) {
    const apiKey = this.config.get<string>('appConfig.llmKey');
    if (!apiKey) {
      throw new Error(`Environment variable appConfig.llmKey is required.`);
    }
    const model = this.config.get<string>('appConfig.llmModel');

    switch (provider) {
      case 'gemini': {
        return new ChatGoogleGenerativeAI({ 
          apiKey,
          model: model ?? 'gemini-1.5-flash'
         });
      }
      case 'openai':
        return new ChatOpenAI({
          openAIApiKey: apiKey,
          model: model ?? 'gpt-4o',
        })
      default:
        throw new Error(`Unsupported LLM provider: ${provider}`);
    }
  }

  async generate(input: string): Promise<string> {
    try {
      const response = await this.llm.invoke(`${this.prompt}\n${input}`);
      this.logger.log(`Generating response for user message: ${input}`);
      return response.text ?? '';
    } catch (err) {
      this.logger.error(`Error generating response: ${err.message}`, err.stack);
      throw err;
    }
  }
}
