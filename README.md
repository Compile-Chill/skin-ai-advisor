# Skin AI Advisor

Skin AI Advisor is a **NestJS** project that leverages **LangChain** to create specialized artificial intelligence agents. The system is designed to be highly configurable and is currently under active development.

By default, the project is focused on providing AI-powered skincare advice, serving as a backend for the Hara platform dedicated to offering expert guidance on skin care routines and concerns.

## Features

- Built with [NestJS](https://nestjs.com/) for robust, scalable backend architecture.
- Integrates [LangChain](https://js.langchain.com/) for advanced AI agent capabilities.
- Easily configurable via environment variables.
- Designed for extensibility to support multiple AI use cases.

## Status

> **Note:** This project is currently in development. Features and APIs may change.

## Configuration

The system is fully parameterizable through environment variables. The current set of environment variables includes:

| Variable      | Description                                                                 | Example Value         |
|---------------|-----------------------------------------------------------------------------|----------------------|
| `PORT`        | Port on which the application runs                                           | `3000`               |
| `LOG_LEVEL`   | Logging verbosity (numeric, see code for mapping)                            | `1`                  |
| `PROMPT`      | Default prompt for the AI agent                                              | `"You are an AI assistant..."` |
| `LLM_PROVIDER`| AI provider to use (`openai` or `gemini`)                                   | `openai`             |
| `LLM_KEY`     | API key for the selected LLM provider                                       | `your-openai-key`    |
| `LLM_MODEL`   | Model name for the LLM provider (optional, uses provider default if omitted) | `gpt-4o`             |
