+++
title = "Docker and Python 2.7 are now live!"
summary = """
We have launched our new Docker system along with support for Python as our first expansion language.
"""

[taxonomies]
tags = []
+++

Many of you may have noticed recently that in your account settings there was an option to opt-in to our new Docker-based system for evaluating code. We are happy to announce that the beta testing is done and we have fully rolled out our new Docker service!

This means a few things:

### Fully Sandboxed Execution Environments
We used to sandbox the code at the application level. This caused us to have to limit the language capabilities. Not anymore! You have full access to the language runtime. You can now require/import any of the default libraries and write to the file system. 

### Open Source
The system has been completely [open-sourced](http://github.com/codewars/codewars-runner). Now its possible for anyone to contribute to the project and add support for the languages that they love. Not only can new languages be added, but new testing frameworks as well.

------

# Python support is now in beta

Python has been chosen as our pilot expansion language and has just been released. We need your help to create compelling content to get the community started. As we create content and work out any kinks, we will then start to introduce additional languages. We have already received community contributions to add support for Java, Clojure, Haskell, C#, Erlang and Julia! 

### Added Python to existing kata

We recently rolled out the ability for users to contribute to other user's beta kata. You gain this ability once you reach 1500 honor. This is a great way to add Python to kata that are still in beta. For approved kata, we are working on system for submitting kata "translations" and plan to have that out in the up-coming weeks. 

### Special Thanks
We would like to give a special thanks to the following users for contributing their time to help vet and expand our Docker and language support:

- [xcthulhu](http://www.codewars.com/users/xcthulhu)  (Python, Java, Haskell, Clojure, Julia, Erlang)
- [ssineriz](http://www.codewars.com/users/ssineriz) (C#, Docker security)
- [edokan](http://www.codewars.com/users/edokan) (C#)
- [JoshBrodieNZ](http://www.codewars.com/users/JoshBrodieNZ) (Security Testing)

And finally but definitely not least a special thanks to our intern Andrew Zhao for his amazing work on the Docker project and implementing Python, Java and RSpec support. 
