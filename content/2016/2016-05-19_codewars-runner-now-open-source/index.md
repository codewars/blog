+++
title = "Codewars Runner now open-source!"
summary = "Open sourcing Codewars Runner CLI that powers running kata on Codewars."

[taxonomies]
tags = []
+++

## Open-Sourced Codewars Runner CLI

Every time you take a kata on Codewars, it is executed on our servers to give you a natural development experience with test results and console output. This is all thanks to the Codewars Runner CLI, which allows us to execute code in multiple languages and test it using their unique testing frameworks. 

We have now released the open-sourced  [Codewars Runner on Github] (https://github.com/Codewars/codewars-runner-cli) for the community to utilize and to expand upon! Now our codes is yours too. 

### Want more language support?

With the Codewars Runner open sourced, anyone can contribute additional languages to the tool, which will then be added onto Codewars. Most major languages can already be executed on the Runner, the majority of the effort is integrating the language's testing framework. 

You can help us support any language you want! Simply head to the [Github repo](https://github.com/Codewars/codewars-runner-cli), follow the [Instructions to add a new language](https://github.com/Codewars/codewars-runner-cli#how-to-add-a-new-language), and submit a pull request with the updates. 

Feel free to email us with any questions: info@codewars.com, just mention "OSS Language Support" in the subject line. 

### How it Works

When you submit a solution on Codewars, all of the different code blocks (solution, test fixture, preloaded code) get sent to our CodeRunner service. That service then passes that code into the CLI, which is executed within a Docker container for security purposes. The CLI takes care of combining/compiling and executing the code for the given language. For full details head over to the [Github repo](https://github.com/Codewars/codewars-runner-cli).
