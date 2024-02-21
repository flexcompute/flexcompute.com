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
category: Grid Specification
date: '2023-12-11 18:47:30'
enabled: true
id: how-can-i-create-a-uniform-grid
title: How can I create a uniform grid?
---

The most standard way to define a simulation is to use a constant grid size in each of the three directions. This can be achieved simply using&nbsp;`tidy3d.GridSpec.uniform(dl=...)`&nbsp;as shown below.

<div markdown class="code-snippet">{% highlight python %}

# Setting a uniform grid size of 0.02 microns.
sim_uniform = tidy3d.Simulation(
    size=(5, 5, 5),
    grid_spec=tidy3d.GridSpec.uniform(dl=0.02),
    medium=tidy3d.Medium(permittivity=4),
    structures=[structure],
    boundary_spec=tidy3d.BoundarySpec.all_sides(boundary=td.PML())
    run_time=1e-12,
)

{% endhighlight %}
{% include copy-button.html %}</div>