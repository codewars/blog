+++
title = "New Language and Updated Beta Process"
summary = "Codewars now supports Solidity, Scala, Groovy, and Kotlin!"

[taxonomies]
tags = ["changelog", "runner", "new-language"]
+++

## New Languages

For about a month now we have been running some new languages in beta that we want to officially announce.

### Solidity

For those interesting in cryptocurrencies (and you should be, it’s the future!) we have added [Solidity](https://solidity.readthedocs.io/en/develop/) to the platform. Solidity is a language used by Ethereum and other blockchains to develop smart contracts. If you don’t know what smart contracts are, check them out — we think they are pretty great.

There are already a few kata available, built just for Solidity, that will help you start to get your feet wet. Check these out:

- [Smart Contracts Introduction: Gift Coin](https://www.codewars.com/kata/smart-contracts-introduction-giftcoin)
- [Rock, Paper, Scissors, Smart Contract](https://www.codewars.com/kata/rock-paper-scissors-smart-contract)

**web3 Package**

Speaking of Ethereum/cryptocurrencies, we have also updated our Node images to contain related packages. [Here is a kata that demonstrates how to work with web3](https://www.codewars.com/kata/59b85549afcda2beb80000ab).

### Scala

[Scala](https://www.scala-lang.org/) is a JVM based language:

> Object-Oriented Meets Functional. Have the best of both worlds. Construct elegant class hierarchies for maximum code reuse and extensibility, implement their behavior using higher-order functions. Or anything in-between.

A few kata have already been translated into Scala. [Here is one to get you started](https://www.codewars.com/kata/are-they-the-same).

### Groovy

[Groovy](http://groovy-lang.org/) is a JVM based language:

> Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform aimed at improving developer productivity thanks to a concise, familiar and easy to learn syntax. It integrates smoothly with any Java program, and immediately delivers to your application powerful features, including scripting capabilities, Domain-Specific Language authoring, runtime and compile-time meta-programming and functional programming.

A number of kata have also been translated into Groovy. [Here is one of the easier ones](https://www.codewars.com/kata/selective-array-reversing).

### Kotlin

[Kotlin](https://kotlinlang.org/) is another JVM language. It is commonly used for Android development.

> A statically typed programming language for modern multi-platform applications.

There are already a Kotlin specific kata series out of beta to help get you started:

- [Tricky Kotlin #0: extension constructor](https://www.codewars.com/kata/tricky-kotlin-number-0-extension-constructor)
- [Tricky Kotlin #1: invoke a string](https://www.codewars.com/kata/tricky-kotlin-number-1-invoke-a-string)
- [Tricky Kotlin #2: three fundamental functions](https://www.codewars.com/kata/tricky-kotlin-number-2-three-fundamental-functions)
- [Tricky Kotlin #3: define a function](https://www.codewars.com/kata/tricky-kotlin-number-3-define-a-function)

**A note about performance:** All of the above languages are compiled and take a little time to run. Groovy will run the fastest, Scala the slowest. We have some infrastructure improvements in the works which will eventually speed things up.

## A Quick Beta Process Update

Beta kata testers can no longer vote on a kata unless they have completed it. If you could not complete a kata due to a problem, please log a comment with the issue label.

While we are on the subject. Logging issues on kata that have technical problems is the intended way of raising those issues. If you complete a kata, please vote on it based off of what you think its merit is, in terms of education or enjoyment. If you got value out of doing the kata, then say so — if you find the kata to have little to no value in completing, that’s the intended case to mark it as unsatisfactory.

## Wiki Docs

We replaced our in-site documentation with Github wiki docs a while back, but in case anyone missed it — [check them out here](https://github.com/Codewars/codewars.com/wiki).
