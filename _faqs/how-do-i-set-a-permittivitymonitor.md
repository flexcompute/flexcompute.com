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
date: '2023-12-19 17:11:46'
enabled: true
id: how-do-i-set-a-permittivitymonitor
title: How do I set a PermittivityMonitor?
---

records the diagonal components of the complex-valued relative permittivity tensor in the frequency domain. You can define a PermittivityMonitor object by

<div markdown class="code-snippet">{% highlight python %}

monitor = PermittivityMonitor(
    center=(1,2,3),
    size=(2,2,2),
    freqs=[250e12, 300e12],
    name='eps_monitor')

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the[API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.PermittivityMonitor.html).