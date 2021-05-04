---
description: Codewars has just released a new set of testing helpers to make writing
  and testing SQL kata even easier.
taxonomies:
  tags:
  - changelog
  - runner
  - language-update
  - authoring
title: 'SQL Updates: It’s even easier now to create SQL kata'
---

Codewars has just released a new set of testing helpers to make writing and testing SQL kata even easier. Before we get into how these helpers make it easy to author kata, lets check out some of the additional benefits they provide to those training on the kata.

## Expected Results

There is a new `compare_with` helper which takes in an example result set to compare the code warrior’s query against. This has a number of benefits, including presenting the code warrior with a 2nd table that shows the expected results output.

{{ figure(src="expected-results.png", alt="No need trying to guess what the results should look like, now you can see the expected output!") }}

## Charts

You may have also noticed in the above screenshot that there are 2 chart tabs. Another feature of the `compare_with` helper is that you can define charts to help visualize the data. Currently we support a `timeseries` chart type, and will be adding more later.

{{ figure(src="charts.png", alt="You can compare your results with the expected using chart visualizations") }}

## Using the compare_with helper

To use the compare_with helper, you simply add `compare_with expected` to your specs. Then, within your “preloaded” code, you add the expected query result like so:

```ruby
def expected  
  DB[%q(  
    REPLACE WITH YOUR SQL QUERY   
  )].to_a  
end
```

Not only will this print out both an ‘actual” and “expected” set of results, but this will also auto generate RSpec test specs for you based off of the data returned by the expected results. Here is an example of some specs that are auto-generated:

{{ figure(src="test-output.png", alt="Auto-generated specs. The very last spec shown here will compare the entire actual result set to the expected result set.") }}

While these generated specs are great, there are some other ways of extending the generated specs.

## describe block methods

You can tie into specific describe blocks to extend the specs that are shown. Here is an example of adding a spec to the “day column” describe block:

```ruby
compare_with expected do column(:day) do  
    it "should start at the begining of the day" do  
      expect(actual.first[:day]).to eq expected.first[:day].beginning_of_day  
    end  
  end  
end
```

There is also a `rows` method for tying into the rows block, and a `spec` block if you just want to add specs at the top describe of the generated tests.

## chart method

There is also a `chart` method which can be used to configure charts that will be rendered against the actual and expected results. The following shows how to configure the chart previously shown.

```ruby
compare_with expected do  
  draw_chart(  
    type: :timeseries,   
    group_by: :description,  
    x: :day,  
    y: :count  
  )  
end
```

That about sums it up for now. If you want to see these new updates in action, head over to Codewars and check out a [kata that already has it implemented.](https://www.codewars.com/kata/sql-basics-group-by-day/?utm_source=medium&utm_medium=blog&utm_campaign=sql_updates)
