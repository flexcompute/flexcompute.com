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
date: '2023-12-19 17:20:15'
enabled: true
id: how-do-i-set-a-diffractionmonitor
title: How do I set a DiffractionMonitor?
---

A DiffractionMonitor object uses a 2D Fourier transform to compute the diffraction amplitudes and efficiency for allowed diffraction orders. You can define a DiffractionMonitor object by

<div markdown class="code-snippet">{% highlight python %}

monitor = DiffractionMonitor(
    center=(1,2,3),
    size=(inf,inf,0),
    freqs=[250e12, 300e12],
    name='diffraction_monitor',
    normal_dir='+',
    )

{% endhighlight %}
{% include copy-button.html %}
</div>

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.DiffractionMonitor.html).