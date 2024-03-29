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
category: Inverse Design
date: '2023-12-21 22:49:03'
enabled: true
id: how-do-i-include-fabrication-constraints-in-adjoint-shape-optimization
title: How do I include fabrication constraints in adjoint shape optimization?
---

<div><p>To ensure reliable fabrication of a device, it is crucial to avoid using feature sizes below a certain radius of curvature when performing inverse design. To achieve this, you can use a penalty function that estimates the radius of curvature around each boundary vertex and applies a substantial penalty to the objective function if the value falls below the minimum radius. The code <a href="https://www.flexcompute.com/tidy3d/examples/notebooks/AdjointPlugin5BoundaryGradients/">example</a> below demonstrates how to use the &nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.utils.penalty.RadiusPenalty.html">tidy3d.plugins.adjoint.utils.penalty.RadiusPenalty</a> function.</p><div markdown class="code-snippet">{% highlight python %}
from tidy3d.plugins.adjoint.utils.penalty import RadiusPenalty

penalty = RadiusPenalty(min_radius=.150, alpha=1.0, kappa=10.0)
vertices0 = jnp.array(make_taper(ys0).vertices)
penalty_value = penalty.evaluate(vertices0)

{% endhighlight %}
{% include copy-button.html %}</div><p> </p></div>

<div> </div>

<div> </div>