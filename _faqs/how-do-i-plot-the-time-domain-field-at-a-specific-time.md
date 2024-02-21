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
category: Monitors
date: '2023-12-19 15:14:00'
enabled: true
id: how-do-i-plot-the-time-domain-field-at-a-specific-time
title: How do I plot the time-domain field at a specific time?
---

Once a simulation with a FieldTimeMonitor is complete, the time-domain field at a specific time instance can be plotted by selecting the specific time instance and using the plot method from the data array. One example is

<div markdown class="code-snippet">{% highlight python %}

sim_data['movie_monitor'].Hz.sel(t=1e-13, method='nearest').plot()

{% endhighlight %}
{% include copy-button.html %}
</div>

This line of code plots the z-component of the magnetic field at a time instance closest to 0.1 ps. Most likely we will need to use the nearst interpolation here since the exact time instance might not be included in the result due to the finite time stepping. However, the difference is usually not significant so it serves as a very good approximation.&nbsp;