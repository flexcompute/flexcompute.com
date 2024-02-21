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
category: Resonance Finder
date: '2023-12-20 19:58:28'
enabled: true
id: how-do-i-calculate-the-purcell-factor
title: How do I calculate the Purcell factor?
---

You can calculate the Purcell factor from the cavity quality factor and effective mode volume using [tidy3d.FieldMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FieldMonitor.html){: target="_blank" rel="noopener"}&nbsp;and the&nbsp;[tidy3d.plugins.resonance.ResonanceFinder](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.resonance.ResonanceFinder.html#tidy3d.plugins.resonance.ResonanceFinder.html){: target="_blank" rel="noopener"}&nbsp;plugin, as detailed in this [tutorial](https://www.flexcompute.com/tidy3d/examples/notebooks/CavityFOM/).

Alternatively, you can calculate the Purcell factor as the ratio between the dipole power emitted in the final device and in the bulk semiconductor using [tidy3d.FluxMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FluxMonitor.html). Refer to this [example](https://www.flexcompute.com/tidy3d/examples/notebooks/BullseyeCavityPSO/) for more details on this later approach.