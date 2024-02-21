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
date: '2023-12-11 15:03:33'
enabled: true
id: how-do-i-model-a-diverging-gaussian-beam
title: How do I model a diverging Gaussian beam?
---

To create a diverging Gaussian beam, include a&nbsp;[tidy3d.GaussianBeam](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.GaussianBeam.html){: target="_blank" rel="noopener"} source in the simulation, and set them&nbsp;`waist_distance`&nbsp;to positive values. This way, the beam waist will lie behind the source plane, as illustrated in the following example

<div markdown class="code-snippet">{% highlight python %}

# Source bandwidth.
pulse = tidy3d.GaussianPulse(freq0=200e12, fwidth=20e12)

# Source definition
gauss_source = tidy3d.GaussianBeam(
  center=(0, -5, 0),
  size=(0, 3, 3),
  source_time=pulse,
  direction='+',
  pol_angle=0,
  angle_theta=0,
  angle_phi=0,
  waist_radius=1.0,
  waist_distance=2.5,
  name="gauss_source",
)

{% endhighlight %}
{% include copy-button.html %}</div>

See this notebook to an&nbsp;[example](https://www.flexcompute.com/tidy3d/examples/notebooks/EdgeCoupler/)&nbsp;on setting up a [tidy3d.GaussianBeam](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.GaussianBeam.html){: target="_blank" rel="noopener"}&nbsp;source.