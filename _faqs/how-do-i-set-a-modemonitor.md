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
date: '2023-12-19 17:02:53'
enabled: true
id: how-do-i-set-a-modemonitor
title: How do I set a ModeMonitor?
---

A ModeMonitor object records complex amplitudes from modal decomposition of fields on plane. The amplitudes are defined as&nbsp;`mode_solver_data.dot(recorded_field) / mode_solver_data.dot(mode_solver_data)`, where&nbsp;`recorded_field`&nbsp;is the field data recorded in the FDTD simulation at the monitor frequencies, and&nbsp;`mode_solver_data`&nbsp;is the mode data from the mode solver at the monitor plane. This gives the power amplitude of&nbsp;`recorded_field`&nbsp;carried by each mode. You can define a ModeMonitor object by

<div markdown class="code-snippet">{% highlight python %}

mode_spec = ModeSpec(num_modes=3)
monitor = ModeMonitor(
    center=(1,2,3),
    size=(2,2,0),
    freqs=[200e12, 210e12],
    mode_spec=mode_spec,
    name='mode_monitor')

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.ModeMonitor.html).