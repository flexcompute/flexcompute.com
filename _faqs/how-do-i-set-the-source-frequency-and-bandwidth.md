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
date: '2023-12-11 16:17:31'
enabled: true
id: how-do-i-set-the-source-frequency-and-bandwidth
title: How do I set the source frequency and bandwidth?
---

You can set the source frequency and bandwidth through the&nbsp;`source_time`&nbsp;parameter, which accepts a&nbsp;[tidy3d.GaussianPulse](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.GaussianPulse.html){: target="_blank" rel="noopener"}&nbsp;object. In the example below, we create a&nbsp;[tidy3d.PointDipole](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PointDipole.html){: target="_blank" rel="noopener"}&nbsp;source to radiate power at a center wavelength of 1.55 $\mu$m over a bandwidth of 100 nm.

<div markdown class="code-snippet">{% highlight python %}

# Simulation wavelength and bandwidth.
wl = 1.55
bw = 0.1
wl_max = wl + bw / 2
wl_min = wl - bw / 2
freq0 = tidy3d.C_0 / wl
fwidth = 0.5 * (tidy3d.C_0 / wl_min - tidy3d.C_0 / wl_max)

# Source bandwidth.
pulse = tidy3d.GaussianPulse(freq0=freq0, fwidth=fwidth)

# Source definition
pt_dipole = tidy3d.PointDipole(
  center=(1,2,3),
  source_time=pulse,
  polarization='Ex',
  interpolate=True,
  name="dipole",
)

{% endhighlight %}
{% include copy-button.html %}</div>