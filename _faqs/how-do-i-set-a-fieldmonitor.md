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
date: '2023-12-19 15:00:41'
enabled: true
id: how-do-i-set-a-fieldmonitor
title: How do I set a FieldMonitor?
---

A FieldMonitor object records electromagnetic fields in the frequency domain. You can define a FieldMonitor object by

<div markdown class="code-snippet">{% highlight python %}

monitor = FieldMonitor(
    center=(1,2,3),
    size=(2,2,2),
    fields=['Hx'],
    freqs=[250e12, 300e12],
    name='steady_state_monitor',
colocate=True)

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.FieldMonitor.html).