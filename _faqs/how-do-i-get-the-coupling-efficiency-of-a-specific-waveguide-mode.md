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
date: '2023-12-19 17:05:41'
enabled: true
id: how-do-i-get-the-coupling-efficiency-of-a-specific-waveguide-mode
title: How do I get the coupling efficiency of a specific waveguide mode?
---

The coupling efficiency of a specific waveguide mode can be calculated from the mode monitor data by first extracting the complex mode amplitude and then taking the square modulus.&nbsp;

<div markdown class="code-snippet">{% highlight python %}

# extract the complex mode amplitude from the mode monitor data
amp = sim_data["mode"].amps.sel(mode_index=0, direction="+")

# compute the coupling efficiency
T = np.abs(amp)**2

{% endhighlight %}
{% include copy-button.html %}
</div>

As an example, you can reference the waveguide Y junction [case study](https://www.flexcompute.com/tidy3d/examples/notebooks/YJunction/).