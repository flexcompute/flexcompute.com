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
date: '2023-12-19 15:11:26'
enabled: true
id: how-do-i-set-a-fieldtimemonitor
title: How do I set a FieldTimeMonitor?
---

A FieldTimeMonitor object records electromagnetic fields in the time domain. You can define a FieldTimeMonitor object by

<div markdown class="code-snippet">{% highlight python %}

monitor = FieldTimeMonitor(
    center=(1,2,3),
    size=(2,2,2),
    fields=['Hx'],
    start=1e-13,
    stop=5e-13,
    interval=2,
    colocate=True,
    name='movie_monitor')

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.FieldTimeMonitor.html).