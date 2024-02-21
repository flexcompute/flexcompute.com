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
date: '2023-12-19 17:41:09'
enabled: true
id: how-do-i-integrate-the-poynting-vector-at-a-specific-surface
title: How do I integrate the Poynting vector at a specific surface?
---

Since the field data in Tidy3D are natively&nbsp;`xarray.DataArray`&nbsp;objects, the most convenient way to perform integration is by using the&nbsp;`integrate`&nbsp;method in&nbsp;`xarray`. For example, if we want to integrate the Poynting vector on a surface parallel to the xy plane, one needs to compute the z-component of the time-averaged Poynting vector&nbsp;$Sz$&nbsp;and then&nbsp;

<div markdown class="code-snippet">{% highlight python %}

flux = Sz.integrate(coord=["x", "y"])

{% endhighlight %}
{% include copy-button.html %}
</div>

This effectively achieves the same thing as putting a FluxMonitor object at the same plane and extracting the flux result from the monitor data.&nbsp;