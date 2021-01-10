+++
title = "New Language Updates! "
summary = """
We have released new language versions (Node 6 and Python 3). TypeScript and Elixir are now in beta (calling all Kata Authors/Translators!). 
"""

[taxonomies]
tags = ["changelog", "runner", "new-language"]
+++

### Language Versions

We have recently added the ability to support different language versions for each language. Moving forward this will help us keep kata compatible as versions change. It also allows us to support languages who have multiple popular versions still in active development (such as Python).

These changes have already been deployed to our Coderunner and Codewars servers. Currently you can select between Python 2/3 and Node 0.10.33/6.0. You can optionally compile your JS code with Babel JS. 

Soon we will be adding the ability to filter kata by language version. 

#### How version selection works

An interesting thing to be aware of if you are a kata author/translator. When authoring/translating, you select the version that the kata should default to for that language. However when you publish, we use your solution and test cases to check if the kata is completable in all versions for that language. Any versions that pass will automatically be enabled. 

So for example, if you want to create a kata that is solvable in both Python 2 and 3, just make sure to write your test cases and solution in a cross-version compatible way. 

### New Languages

We have two new languages which were recently deployed and are in beta. We would love help from the community to create content and test any integration issues that may still be lurking.

If you are itching to have your favorite language added to Codewars, make sure to check out the CLI project. As soon as support is fully added to that project we will make it available on Codewars. Check out the [Language Support Status section](https://github.com/Codewars/codewars-runner-cli#user-content-language-support-status) to see where your favorite language current stands in terms of being supported.

#### Elixir

Thanks to a community contribution from Sergii Bolki [@cris](http://www.codewars.com/users/cris) on [Codewars](http://www.codewars.com/users/cris) and [Github](https://github.com/cris), we now support Elixir. Testing is done using ExUnit. This is an interesting language which is picking up steam, particulary with Ruby developers who enjoy the Ruby-ish syntax.

#### TypeScript

TypeScript support was added by @[jhoffner](https://github.com/jhoffner). Testing is done using Mocha. TypeScript is starting to become more popular now that Angular 2 is out. 

### New Libraries Added

Along with all of these updates, we have also make a number of new libraries available for some languages. JavaScript & Ruby in particular now have a number of new packages/gems available, many centered around machine learning and data science. In addition to Python which already had scipy/numpy available, this should make for some new and interesting possibilities in the types of kata that can be created. 

Check out the following links for more info:

- [Node environment](https://github.com/Codewars/codewars-runner-cli/wiki/Node-Environment-(JS,-CoffeeScript,-TypeScript))
- [Ruby environment](https://github.com/Codewars/codewars-runner-cli/wiki/Ruby-Environment)

Speaking of Machine Learning and Python, we also added the [TensorFlow](https://www.tensorflow.org/) library to our Python environment. This is an amazing machine learning library created by Google and definitely worth checking out. We can't wait to see what kata codewarriors come up with that make use of this package
