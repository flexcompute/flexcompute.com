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
date: '2023-12-18 23:02:06'
enabled: true
id: how-do-i-access-the-data-of-a-specific-monitor
title: How do I access the data of a specific monitor?
---

You can access the data of a specific monitor by its name. For instance, supposing you have a field monitor and set its name to "field", after running the simulation you can refer to this name to get the monitor's data.&nbsp;

<div><div markdown class="code-snippet">{% highlight python %}

sim_data = tidy3d.web.run(simulation, task_name="task", path="data/data.hdf5", verbose=True)
field_data = sim_data["field"]

{% endhighlight %}
{% include copy-button.html %}</div><p> </p></div>