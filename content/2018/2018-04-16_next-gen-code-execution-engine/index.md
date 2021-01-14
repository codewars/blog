+++
title = "Next Gen Code Execution Engine is Live!"
description = "We are pleased to announce that we have recently replaced our code execution engine with our 3rd generation code runner engine."

[taxonomies]
tags = ["changelog", "runner", "new-language"]
+++

{{ figure(src="top.png") }}

We are pleased to announce that we have recently replaced our code execution engine with our 3rd generation code runner engine. The new engine has been completely redesigned from the ground up to perform better, have improved stability, and be more flexible in order to handle the constant changing set of languages and dependencies that are required to keep you on top of your game.

Along with this new release, we are also releasing a number of updates that come with the new engine.

### New Languages

{{ figure(src="new-languages.png", alt="PowerShell, Fortran, Julia, and NASM are now supported", themed=true) }}

We now support [**PowerShell**](https://en.wikipedia.org/wiki/PowerShell), [**Fortran**](https://en.wikipedia.org/wiki/Fortran), [**Julia**](https://en.wikipedia.org/wiki/Julia_(programming_language)) & [**NASM**](https://en.wikipedia.org/wiki/Netwide_Assembler)**!** These languages are in beta and as of press time don’t have any/many kata available yet. If you have experience working with any of these, the community could use your help translating existing content — which happens to be a pretty good way to earn some honor in the process.

### New Language Versions

Not only did we add completely new languages, but we also have added newer versions to many of the existing supported languages that we already support.

- Ruby MRI 2.5
- Haskell GHC 8.2
- Solidity 0.4.19
- Rust 1.25
- Swift 4
- Elixir 1.6.4
- Crystal 0.24

A note on newer versions with older kata. Any existing kata that are compatible as-is with the new versions have already been updated with these versions as their default.

### Enhancements

- Python: [Improved v2 framework](https://github.com/Codewars/codewars.com/wiki/Codewars-Python-Test-Framework-V2) — [Kumite example](https://www.codewars.com/kumite/5aaa2d33f51c8a313b00000e?sel=5aaafda16c51ee51b4000006)
- Python: Unicode output
- Python: No longer uses concatenation to combine preloaded with solution and fixture code. This means you will now **get error messages that actually make sense**!
- TypeScript: `/// <reference` is no longer required
- Infrastructure: more computing resources to everyone :)

### Bug Fixes

- Proper C++14 support
- `numpy` on Python 3.6

### Deprecations

- Node 0.10.33

## Background

We (and by we, we mean [kazk](https://www.codewars.com/users/kazk)) have been working on this update for some time now. It has been a huge undertaking.

The 1st Gen version of the runner was built close to 5 years ago. It didn’t involve Docker at all (Docker was in early beta), and was basically a sandbox around Node and Ruby that could be hacked. Eventually we came out with our 2nd Gen Code Runner, which utilized Docker and a CLI that was open-sourced. It got the job done, and thanks to many contributors, we were able to expand our language offerings. However performance was spotty and it was very hard to maintain. Many of the language versions on Codewars have been frozen from being upgraded due to the complexity of our Docker images. As we added languages, our servers were hitting their resource limits. Trying to manage what content utilized what version of libraries got out of hand.

Our new runner is built to last. Everything from the cloud provider, infrastructure, architecture and implementation have been redesigned. We will be able to support language updates faster, and eventually provide a greater selection of choices when building kata that depends on different libraries. We are excited for what the future has in store.

Codewars would like to thank not only kazk (who has officially joined the Codewars team!), but also [donaldsebleung](https://www.codewars.com/users/donaldsebleung) for contributing the Fortran implementation, [Bubbler](https://www.codewars.com/users/Bubbler) for contributing the new Python CW v2 framework, and [PowerSchill](https://github.com/PowerSchill) for his original contribution to the PowerShell implementation.

The new runner has already rolled out to Codewars, and will shortly be rolled out to [Qualified](https://qualified.io) customers. We are excited for what is in store with this new engine, we have only scratched the surface. Stay tuned for more exciting updates!

Read more about the recent additions on [GitHub](https://github.com/Codewars/codewars.com/issues/1336).

## One more thing… Duplicate Kata Warning

{{ figure(src="duplicate-warning.png", alt="Example warning based off of kata name") }}

Unrelated to the new code runner, we have another update to announce. Within the kata editor we now present a list of possible duplicate kata, based off of the name of the kata being edited. The kata shown may not actually be duplicates, but if any of them seem similar, kata authors (sensei) should check them out first to make sure they are creating something unique.
