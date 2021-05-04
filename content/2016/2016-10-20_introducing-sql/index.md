---
description: Codewars now supports SQL!
taxonomies:
  tags:
  - changelog
  - runner
  - new-language
title: Introducing SQL Support (Beta)
---

We are happy to announce that SQL is now a supported language on the [Codewars](https://www.codewars.com?utm_campaign=introducing_sql&utm_medium=blog) platform. We currently support two different SQL environments: SQLite3 and Postgres, with MariaDB support coming later.

Unit testing isn’t usually done on pure SQL queries and there were not any SQL testing frameworks for us to use. Because of this, SQL required us to do something we have never done before — use one language to test another. Our solution: use Ruby, RSpec and the Sequel ORM as the testing platform. It works by having the solution be pure SQL, but that code gets executed in a Ruby/Rspec environment using [Sequel](https://github.com/jeremyevans/sequel) to work with the database. This allows a lot of flexibility. You can use Ruby to populate the database with any data that you want and set up various testing scenarios. You can run the query multiple times on different versions of a dataset.

We even support multiple statements within the SQL solution (don’t forget to use those semi-colons!). Our multi-statement support allows you to run schema and insert queries as well as multiple selects. If multiple result sets are detected we will return an array of datasets which can be printed and tested separately.

## **Why we picked Ruby**

Originally we were going to go with JavaScript/NodeJS and Mocha as our testing platform, since JavaScript is the most popular language on Codewars. However we wanted the framework to be as easy to use as possible, and with NodeJS everything would need to be wrapped up in callbacks or promises. The result would have been code far more complicated than we wanted. Ruby was a natural choice because it’s easy to learn and Rspec provides a natural DSL experience to writing tests. Sequel is also an incredibly easy toolkit to use. If you decide you want to setup some sophisticated tests and data, you can do it without much effort. We even auto require the [Faker](https://github.com/stympy/faker) gem so that you can easily generate data.

**Data Generation Example:**

```ruby
DB.create_table :items do  
  primary_key :id  
  String :name  
  Float :price  
end  
  
items = DB[:items] # Create a dataset  
  
# Populate the table with 5 rows  
_5.times do  
  items.insert(name: Faker::Name.name, price: Faker::Commerce.price)  
end
# run/print the results and get back a dataset  
results = run_sql
```

{{ figure(src="sql-results.png") }}

## **What if I don’t want to generate my own data?**

We’ve got you covered if generating data sounds like a lot of work. For our Postgres implementation, we have set up an alternative database that you can connect to. The sample database is a fictitious [DVD rental store](http://www.postgresqltutorial.com/postgresql-sample-database/). To automatically connect to this database, you can simply add the following comment to your setup code block.

```ruby
# @use-database dvdrental
```

## How do I get started?

Until recently, when you signed up we didn’t have SQL as an option for a language that you want to train on. In that case, if you visit the kata catalog you won’t see any SQL challenges by default. If you are interested in improving your SQL skills, make sure to update your language settings (top right menu under your profile) to include SQL. You can also go to the catalog and select “All” or “SQL” as your language choice.

Right now SQL is in beta and since it was just released, there won’t be much content yet. For all of our sensei out there, it’s time to author some killer SQL kata!
