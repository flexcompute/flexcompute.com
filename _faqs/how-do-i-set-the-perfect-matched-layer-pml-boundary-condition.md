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
category: Boundary Conditions
date: '2023-10-24 14:48:15'
enabled: true
id: how-do-i-set-the-perfect-matched-layer-pml-boundary-condition
title: How do I set the perfect matched layer (PML) boundary condition?
---

You should use&nbsp;[tidy3d.PML](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PML.html#tidy3d.PML){: target="_blank" rel="noopener"} boundary condition to enclose the simulation domain with layers of a special lossy material designed to absorb incoming waves from all angles with minimal reflection. Tidy3D uses PML boundary conditions by default, but you can also set the boundaries explicitly using the&nbsp;`all_sides()`&nbsp;method. For example:

<div markdown class="code-snippet">{% highlight python %}

# Define PML boundary conditions in all sides.
bspec = tidy3d.BoundarySpec.all_sides(boundary=tidy3d.PML())

# Alternatively, you can apply the boundary at specific directions.
# bspec = tidy3d.BoundarySpec.pml(x=True, y=True)

# Build the simulation.
sim = tidy3d.Simulation(
    center=(0, 0, 0),
    size=(10, 4, 4),
    boundary_spec=bspec,
    grid_spec=tidy3d.GridSpec.auto(min_steps_per_wvl=20, wavelength=1.55),
    structures=[waveguide],
    sources=[mode_source],
    monitors=[mode_monitor],
    run_time=1e-12,
)

{% endhighlight %}
{% include copy-button.html %}</div>

See this [notebook](https://www.flexcompute.com/tidy3d/examples/notebooks/BoundaryConditions/) for more details on setting up boundary conditions.