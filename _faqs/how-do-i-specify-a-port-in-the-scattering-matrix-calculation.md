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
category: Scattering Matrix
date: '2023-12-20 18:27:43'
enabled: true
id: how-do-i-specify-a-port-in-the-scattering-matrix-calculation
title: How do I specify a Port in the scattering matrix calculation?
---

To compute scattering matrix parameters you need to create a base [tidy3d.Simulation](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.Simulation.html){: target="_blank" rel="noopener"}&nbsp;(without the modal sources or monitors used to compute S-parameters) and include&nbsp;[tidy3d.plugins.smatrix.Port](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.smatrix.Port.html){: target="_blank" rel="noopener"} objects. These ports will be converted into modal sources&nbsp; and monitors later, so they require both some mode specification and a definition of the direction that points into the system. You should also give them names to refer to later. For example:

<div markdown class="code-snippet">{% highlight python %}
from tidy3d.plugins.smatrix.smatrix import Port

num_modes = 1

# Port definition.
port_right_top = Port(
  center=[-5, 3, 0],
  size=[0, 4, 2],
  mode_spec=tidy3d.ModeSpec(num_modes=num_modes),
  direction="-",
  name="right_top",
)

{% endhighlight %}
{% include copy-button.html %}</div>