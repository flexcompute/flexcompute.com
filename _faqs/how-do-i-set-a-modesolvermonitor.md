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
date: '2023-12-19 17:10:11'
enabled: true
id: how-do-i-set-a-modesolvermonitor
title: How do I set a ModeSolverMonitor?
---

A ModeSolverMonitor object stores the mode field profiles returned by the mode solver in the monitor plane. You can define a ModeSolverMonitor object by

<div markdown class="code-snippet">{% highlight python %}

mode_spec = ModeSpec(num_modes=3)
monitor = ModeSolverMonitor(
    center=(1,2,3),
    size=(2,2,0),
    freqs=[200e12, 210e12],
    mode_spec=mode_spec,
    name='mode_monitor')

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.ModeSolverMonitor.html).