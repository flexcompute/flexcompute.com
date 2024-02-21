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
date: '2023-12-21 23:19:25'
enabled: true
id: how-do-i-export-the-final-inverse-design-structure-to-gds
title: How do I export the final inverse design structure to GDS?
---

<div><p>After performing adjoint inverse designs using the <code>adjoint</code> plugin, you can export the final structure to <code>GDS</code> files using the function <code>.to_gds_file()</code>.</p><div markdown class="code-snippet">{% highlight python %}
from tidy3d.plugins.adjoint.utils.penalty import RadiusPenalty

# Convert the final adjoint simulation to a regular one.
sim_final = sim_adj.to_simulation()[0]

# Export the final simulation to GDS.
sim_final.to_gds_file(fname="inverse_design.gds", z=0, permittivity_threshold=6, frequency=200e14)

{% endhighlight %}
{% include copy-button.html %}</div><p> </p></div>

<div> </div>

<div> </div>