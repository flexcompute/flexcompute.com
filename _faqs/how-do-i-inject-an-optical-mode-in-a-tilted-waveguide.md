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
category: Sources
date: '2023-12-08 14:55:25'
enabled: true
id: how-do-i-inject-an-optical-mode-in-an-angled-waveguide
title: How do I inject an optical mode in an angled waveguide?
---

To inject an optical mode in an angled waveguide you must set the `angle_theta` and `angle_phi` parameters of&nbsp;[tidy3d.ModeSpec](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.ModeSpec.html#tidy3d.ModeSpec){: target="_blank" rel="noopener"}. For example:

<div markdown class="code-snippet">{% highlight python %}

# Source bandwidth.
pulse = tidy3d.GaussianPulse(freq0=1.934e14, fwidth=6.245e12)

# Mode specification.
mode_spec = tidy3d.ModeSpec(target_neff=2.5, angle_theta=1.5, angle_phi=0)

# Source definition
source = tidy3d.ModeSource(
  center=(0, 0, -2),
  size=(0, 2, 1.5),
  source_time=pulse,
  direction='+',
  mode_spec=mode_spec,
  mode_index=0,
  name="mode_source",
)

{% endhighlight %}
{% include copy-button.html %}</div>

You can find a detailed example in this [notebook](https://www.flexcompute.com/tidy3d/examples/notebooks/ModesBentAngled/){: target="_blank" rel="noopener"}.