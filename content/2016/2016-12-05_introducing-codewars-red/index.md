+++
title = "Introducing Codewars Red"
description = "Announcing premium subscription plan, Codewars Red!"

[taxonomies]
tags = ["product"]
+++

{{ figure(src="red-banner.png") }}

For years Codewars has been helping developers all around the world improve their craft. Regardless of your level of coding experience, Codewars has something to help you train on. As the site becomes more popular, we want to not only continue to serve the community but also continue to provide new and exciting features. **As part of this mission, we are introducing a new premium subscription plan —** [**Codewars Red**](https://www.codewars.com/subscription)**.**

While Codewars will always provide a free experience for everyone, Codewars Red will provide additional new features and benefits to code warriors who want to take their training to the next level. Here are some of our favorite new features available with a Red subscription:

## Enhanced Profile Stats

The Codewars user profile has been revamped with a new stats tab. Normal users will see their basic stats such as contributions and overall progress. Codewars Red members will have an enhanced stats page that takes things further. In addition to your normal stats, you will be able to see information on your training streaks, total up votes and detailed information about each language you have trained on.

{{ figure(src="streaks.png", alt="See your streaks and challenge yourself to train harder") }}

{{ figure(src="language-stats.png", alt="View detailed information about each language you have trained on") }}

{{ figure(src="solution-upvotes.png", alt="See your total solution up votes") }}

Enhanced profiles are visible for anyone to see and are a great way for you to show off your skills to employers and colleagues!

## Head-to-Head Comparison

Ever wished you could see how you solve problems compared to someone else? Now you can with our new head-to-head comparison feature. Codewars Red subscribers will be able to compare themselves to any other codewarrior. Simply go to their profile and click “Head-to-Head Compare”. After the system crunches your solutions for a brief moment you will be shown both of your solutions, side-by-side, for any kata that you have completed in the same language. This is an incredible way to pick up tricks from other developers.

{{ figure(src="head-to-head.png", alt="Compare yourself to any other codewarrior.") }}

## Improved Code Execution

We always aim to provide the best experience for all users. Our code execution service has received a number of stability improvements over recent months to help ensure that your code is executed as quickly and consistently as we can. With a Red membership, we are able to take things even further by dedicating more server resources that otherwise wouldn’t be economical.

### Isolated Execution Cluster

Codewars runs over 100k code requests a day, ranging anywhere from 150ms to over 12 seconds. Each time you run your code, you are giving a fresh container to work within, to ensure that you are working with a clean slate. To provide a more consistent result, we only run one request per CPU processor at a time to limit the amount of resource contention that your code competes with. This allows us to provide more consistent results in general, but on occasion a traffic spike will result in the service not being able to scale up quickly enough. This can result in slow and inconsistent responses.

To help offset these issues, Red members will have their code executed on a separate server cluster. This cluster will be less susceptible to traffic spikes which will provide more consistent execution results. Since the servers will be less stressed this will also provide additional consistency when timing how long your code takes to execute.

### Redundant Code Execution

Additionally, we will run your code twice, on two separate servers at the same time. This will further protect your request from timeout and server errors. It also helps to alleviate issues caused by “noisy neighbors”, which is a problem that comes up when running on a shared services platform (such as AWS). Finally, both requests will be timed and the fastest one will be returned, giving you a better idea as to how well your code is performs.

### Real-time Output Streaming

Some kata take a little time to startup and configure (such as our SQL kata), or take a more significant amount of time to run (such as kata that write a lot of text to STDOUT). While your code is being executed, you are normally forced to wait until the final result is delivered before you receive any feedback. Anyone who has struggled to solve a kata knows how impatient you can get when you are waiting to see your results. In times like these real-time output streaming will save you some stress. Now when your code runs, we will deliver the output in real-time over web sockets so that you get quicker feedback as to what is happening while your code runs.

## Additional Features

Here are some other benefits to signing up for a Red membership:

### Ad-Free Experience

We have made it a point to try to keep the ads on Codewars classy, relevant and unannoying. However sometimes you just want a pure experience without ads to get in your way. All Red members will have their ads turned off by default once you sign-up.

### Early Access to New Features

Codewars Red will help fund our ability to improve the site with new features. Your support will not go unrewarded, as we rollout new functionality we will often open those features up to Red members first, so that you can help us test and provide feedback before we roll things out to the whole community.

### Profile Badge

Supporting Codewars is a big deal for the longevity of the service, and you should be proud to be a Codewars Red member. We will show a badge next to your name on your profile so that other code warriors see that you have helped to support the service.

## Ready?

[Subscribe to Codewars Red today!](https://www.codewars.com/subscription)

## tl;dr

Codewars Red is available now and is a great way to show your support and get some new features at the same time. For the cost of [2 coffees a month](https://www.codewars.com/subscribe) you will have the best experience of a service that helps hundreds of thousands of developers across the world to become better developers.
