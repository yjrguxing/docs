---
head:
  - - link
    - rel: stylesheet
      href: ../../../public/openai/openai.css
outline: deep
aside: left
---

# 介绍

## 概述
OpenAI API 可以应用于几乎任何涉及自然语言、代码或图像的理解或生成任务.我们提供一系列不同强度的[模型](/zh/openai/documentation/models)，适用于不同的任务，以及[微调](/zh/openai/documentation/fine-tuning)自己的自定义模型的能力.这些模型可用于从内容生成到语义搜索和分类等各种任务.

## 关键概念
我们建议通过一个实践性、互动性的示例来完成我们的快速入门教程，熟悉关键概念.

<a href="/docs/zh/openai/documentation/quickstart" style="text-decoration: none">
    <div class="icon-item" style="display: flex">
        <div class="icon-item-icon purple-gradient-bg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path>
            </svg>
        </div>
        <div class="icon-item-right">
            <div class="icon-item-title body-large bold">快速入门教程</div>
            <div class="icon-item-desc body-small">通过构建一个快速样例应用程序来学习</div>
        </div>
    </div>
</a>

### 提示
[设计提示](/zh/openai/documentation/text-completion#prompt-design) 本质上是如何“编程”模型的，通常是通过提供一些指示或几个示例来实现.这与大多数其他 NLP 服务不同，这些服务设计用于单一任务，例如情感分类或命名实体识别.相反，补全和聊天补全端点可用于几乎任何任务，包括内容或代码生成、摘要、扩展、对话、创意写作、风格转移等.

### Tokens
我们的模型通过将文本分解为标记来理解和处理文本.标记可以是单词或字符块.例如，单词“hamburger”被分解为标记“ham”、“bur”和“ger”，而短且常见的单词“pear”是一个单独的标记.许多标记以空格开头，例如“hello”和“bye”.

在一个API请求中处理的tokens数量取决于您输入和输出的长度.粗略地说，1个token大约相当于4个字符或0.75个英文单词.需要注意的一个限制是您的文本提示和生成的完成文本加起来不能超过模型的最大上下文长度（对于大多数模型，这是2048个tokens，或者大约1500个单词）.请查看我们的[tokenizer工具](https://platform.openai.com/tokenizer)了解更多有关文本如何转换为令牌的信息.
### 模型
这个API由一系列具有不同功能和价格的模型驱动. GPT-4是我们最新和最强大的模型. GPT-3.5-Turbo是ChatGPT使用的模型，针对对话格式进行了优化.要了解更多关于这些模型以及我们提供的其他内容，请访问我们的[模型文档](/zh/openai/documentation/text-completion/models).

## 下一步操作
- 开始构建应用程序时，请遵守我们的[使用政策](https://openai.com/policies/usage-policies).
- 探索我们的[示例库](https://platform.openai.com/examples)以获取灵感.
- 参考我们的指南，开始构建应用程序.

### 指南
<a href="/docs/zh/openai/documentation/chat-completions">
    <div class="icon-item mt-6">
        <div class="icon-item-icon purple-gradient-bg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <div class="icon-item-right">
            <div class="icon-item-title body-large bold">聊天</div>
            <div class="icon-item-tag">Beta</div>
            <div class="icon-item-desc body-small">了解如何使用基于聊天的语言模型</div>
        </div>
    </div>
</a>
<a href="/docs/zh/openai/documentation/text-completion"><div class="icon-item mt-6"><div class="icon-item-icon green-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">文本自动补全</div><div class="icon-item-desc body-small">学习如何生成或编辑文本</div></div></div></a>
<a href="/docs/zh/openai/documentation/embeddings"><div class="icon-item mt-6"><div class="icon-item-icon orange-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">嵌入</div><div class="icon-item-desc body-small">学习如何搜索、分类和比较文本</div></div></div></a>
<a href="/docs/zh/openai/documentation/speech-to-text"><div class="icon-item mt-6"><div class="icon-item-icon red-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">语音转文本</div><div class="icon-item-tag">Beta</div><div class="icon-item-desc body-small">学习如何将音频转换为文本</div></div></div></a>
<a href="/docs/zh/openai/documentation/image-generation"><div class="icon-item mt-6"><div class="icon-item-icon purple-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">图像生成</div><div class="icon-item-tag icon-item-tag-gray">Beta</div><div class="icon-item-desc body-small">学习如何生成或编辑图像</div></div></div></a>
<a href="/docs/zh/openai/documentation/fine-tuning"><div class="icon-item mt-6"><div class="icon-item-icon green-gradient-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg></div><div class="icon-item-right"><div class="icon-item-title body-large bold">微调</div><div class="icon-item-desc body-small">学习如何为您的用例训练模型</div></div></div></a>