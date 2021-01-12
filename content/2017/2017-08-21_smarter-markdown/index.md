+++
title = "New Languages, Smarter Markdown, and Translation Approvals"

[taxonomies]
tags = ["changelog", "runner", "new-language"]
+++

There have been a number of new additions on Codewars that we would like to announce…

## New Languages

We have launched a number of new languages to the platform recently, thanks to some great contributions from the community. These languages are in beta and are looking for translators. Kata authors, some of these are a great opportunity to play around with new kata ideas!

### R

[R](https://www.r-project.org/about.html) is a language and environment for statistical computing and graphics. Some users have already began to translate R for existing challenges. We also expect that a whole new category of challenges will begin to emerge that utilizes R for its statistic strengths.

### BF

BF (aka Brainf**k) is a language so complicated or unusual that it’s name is meant to indicate it exceeds the limits of one’s understanding. This esoteric language was created in 1993 by Urban Müller, and notable for its extreme minimalism.

We wouldn’t say it has much practical use in the real world, but it will certainly give you a challenge and test your limits of patience. For a while now code warriors have been creating BF inspired challenges via other languages. Now you can code BF directly into the editor since it is now a fully supported language. JavaScript is used as the testing language, making it very easy to write tests.

### Erlang

We’ve had Elixir on the site for a while now, we thought it was time to bring its bigger brother into the mix. [Erlang](https://www.erlang.org/) is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang’s runtime system has built-in support for concurrency, distribution and fault tolerance.

### Nim

Nim (formerly named Nimrod) is an imperative, multi-paradigm, compiled programming language designed and developed by Andreas Rumpf. It is designed to be “efficient, expressive, and elegant”, supporting metaprogramming, functional, message passing, procedural, and object-oriented programming styles by providing several features such as compile time code generation, algebraic data types, a foreign function interface (FFI) with C and compiling to JavaScript, C and C++.

> Special thanks to [kazk](https://www.codewars.com/users/kazk) (R, Nim, Erlang) and [donaldsebleung](https://www.codewars.com/users/donaldsebleung) (BF) for helping us support these new languages!

## New Language Versions

We now support Node 8 and TypeScript 2.4. In addition, TypeScript can be targeted towards either ES3 or ES6.

## If/If-Else Markdown Code Blocks

A recently added feature to our markdown is the ability to target specific languages when writing kata descriptions. Using this feature, you can write complete sections of markdown that only display **if** or **if-not** a specific language is active. You can even target multiple languages at the same time!

### Example:

````markdown
~~~if:javascript,ruby  
This content will only be shown if javascript or ruby are active.  
  
**Special Note**: Markdown is still available to be used within these "if" blocks  
~~~

~~~if-not:ruby  
This markdown will only be shown if ruby **is not** the active language.  

```javascript  
// still only shown if javascript is the active language, since it has multiple examples next to it  
```
```python  
# only shown if python is active  
```  
~~~
````

## Power Users Can Now Approve Translations!

Another recent change is that power users, specifically users who have more than 4000+ honor, now have the ability to approve other code warrior’s kata translations. They have this ability only if the kata author has been inactive for a while, or if the translation is over a week old. This allows kata authors an opportunity to approve or reject a translation before others do, but also will be a huge boost towards approving translations that would otherwise get stuck waiting for approval.
