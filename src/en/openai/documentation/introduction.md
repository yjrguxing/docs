---

head:
  -  - link
     - rel: stylesheet
       href: ../../../public/openai/openai.css
outline: deep
aside: left
---
# Introduction

## Overview
The OpenAI API can be applied to virtually any task that involves understanding or generating natural language, code, or images. We offer a spectrum of [models](/en/openai/documentation/models) with different levels of power suitable for different tasks, as well as the ability to [fine-tune](/en/openai/documentation/fine-tuning) your own custom models. These models can be used for everything from content generation to semantic search and classification.

## Key concepts
We recommend completing our quickstart tutorial to get acquainted with key concepts through a hands-on, interactive example.

<a href="/docs/en/openai/documentation/quickstart" style="text-decoration: none">
    <div class="icon-item" style="display: flex">
        <div class="icon-item-icon purple-gradient-bg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path>
            </svg>
        </div>
        <div class="icon-item-right">
            <div class="icon-item-title body-large bold">Quickstart tutorial</div>
            <div class="icon-item-desc body-small">Learn by building a quick sample application</div>
        </div>
    </div>
</a>

### Prompts
[Designing your prompt](/en/openai/documentation/text-completion#prompt-design) is essentially how you "program" the model, usually by providing some instructions or a few examples. This is different from most other NLP services which are designed for a single task, such as sentiment classification or named entity recognition. Instead, the completions and chat completions endpoint can be used for virtually any task including content or code generation, summarization, expansion, conversation, creative writing, style transfer, and more.

### Tokens
Our models understand and process text by breaking it down into tokens. Tokens can be words or just chunks of characters. For example, the word "hamburger" gets broken up into the tokens "ham", "bur" and "ger", while a short and common word like "pear" is a single token. Many tokens start with a whitespace, for example " hello" and " bye".

The number of tokens processed in a given API request depends on the length of both your inputs and outputs. As a rough rule of thumb, 1 token is approximately 4 characters or 0.75 words for English text. One limitation to keep in mind is that your text prompt and generated completion combined must be no more than the model's maximum context length (for most models this is 2048 tokens, or about 1500 words). Check out our [tokenizer tool](https://platform.openai.com/tokenizer) to learn more about how text translates to tokens.
### Models
The API is powered by a set of models with different capabilities and price points. GPT-4 is our latest and most powerful model. GPT-3.5-Turbo is the model that powers ChatGPT and is optimized for conversational formats. To learn more about these models and what else we offer, visit our [models documentation](/en/openai/documentation/text-completion/models).

## Next steps
  - Keep our [usage policies](https://openai.com/policies/usage-policies) in mind as you start building your application.
  - Explore our [examples library](https://platform.openai.com/examples) for inspiration.
  - Jump into one of our guides to start building.

### Guides
<a href="/docs/en/openai/documentation/chat-completions">
    <div class="icon-item mt-6">
        <div class="icon-item-icon purple-gradient-bg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="icon-item-right">
            <div class="icon-item-title body-large bold">Chat</div>
            <div class="icon-item-tag">Beta</div>
            <div class="icon-item-desc body-small">Learn how to use chat-based language models</div>
        </div>
    </div>
</a>
<a href="/docs/en/openai/documentation/text-completion"><div class="icon-item mt-6"><div class="icon-item-icon green-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">Text completion</div><div class="icon-item-desc body-small">Learn how to generate or edit text</div></div></div></a>
<a href="/docs/en/openai/documentation/embeddings"><div class="icon-item mt-6"><div class="icon-item-icon orange-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">Embeddings</div><div class="icon-item-desc body-small">Learn how to search, classify, and compare text</div></div></div></a>
<a href="/docs/en/openai/documentation/speech-to-text"><div class="icon-item mt-6"><div class="icon-item-icon red-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">Speech to text</div><div class="icon-item-tag">Beta</div><div class="icon-item-desc body-small">Learn how to turn audio into text</div></div></div></a>
<a href="/docs/en/openai/documentation/image-generation"><div class="icon-item mt-6"><div class="icon-item-icon purple-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">Image generation</div><div class="icon-item-tag icon-item-tag-gray">Beta</div><div class="icon-item-desc body-small">Learn how to generate or edit images</div></div></div></a>
<a href="/docs/en/openai/documentation/fine-tuning"><div class="icon-item mt-6"><div class="icon-item-icon green-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">Fine-tuning</div><div class="icon-item-desc body-small">Learn how to train a model for your use case</div></div></div></a>