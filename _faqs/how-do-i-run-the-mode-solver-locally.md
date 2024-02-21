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
category: Mode Solver
date: '2023-12-18 17:27:21'
enabled: true
id: how-do-i-run-the-mode-solver-locally
title: How do I run the mode solver locally?
---

<div>You can run the local version of <a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.mode.ModeSolver.html#tidy3d.plugins.mode.ModeSolver">mode solver</a> through the&nbsp;<code>.solve()</code>&nbsp;method. For example:</div>

<div> </div>

<div markdown class="code-snippet">{% highlight python %}
from tidy3d.plugins.mode import ModeSolver

# Build the mode solver.
freq0 = tidy3d.C_0 / 1.55
mode_solver = ModeSolver(
  simulation=sim,
  plane=plane,
  mode_spec=mode_spec,
  freqs=[freq0],
)

# Run the local mode solver.
mode_data = mode_solver.solve()

{% endhighlight %}
{% include copy-button.html %}</div>

<div>This means that the solver will run on your own computer and will not require any credits. However, it's important to note that the local version will not include the group index calculation or subpixel-smoothing, even if these options are specified in the simulation. As a result, the local version's results will not perfectly match the server-side ones.&nbsp;<span>For more details on how to set up, run and visualize the solver results, please refer to this </span><a href="https://www.flexcompute.com/tidy3d/examples/notebooks/ModeSolver/">notebook</a><span>.</span></div>