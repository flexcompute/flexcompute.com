---
_inputs:
  category:
    options:
      preview:
        text:
        - key: category_name
      value_key: key
      values: data.faq_categories
    type: select
  date:
    instance_value: NOW
    label: DATE
    type: datetime
  enabled:
    hidden: true
    type: switch
  title:
    label: QUESTION TITLE
    type: text
_schema: default
category: Data Visualization and Postprocessing
date: '2023-12-19 13:12:20'
enabled: true
id: how-do-i-get-the-monitor-s-data-from-a-simulationdata-object
title: "How do I  get the monitor's data from a\_SimulationData\_object?"
---

To get the data of a particular monitor, you can use its name. For example, if you have a field monitor and have given it the name "field", you can refer to this name to retrieve the monitor's data after the simulation is run.

<div><div markdown class="code-snippet">{% highlight python %}

sim_data = tidy3d.web.run(simulation, task_name="task", path="data/data.hdf5", verbose=True)
field_data = sim_data["field"]

{% endhighlight %}
{% include copy-button.html %}</div><p> </p></div>