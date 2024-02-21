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
date: '2023-12-20 19:27:35'
enabled: true
id: how-do-i-calculate-the-effective-mode-volume
title: How do I calculate the effective mode volume?
---

To calculate the effective mode volume, you should include a [tidy3d.FieldMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FieldMonitor.html){: target="_blank" rel="noopener"}&nbsp;to record the electromagnetic fields within a box enclosing the cavity resonance. After running the simulation, you can follow this [example](https://www.flexcompute.com/tidy3d/examples/notebooks/CavityFOM/) to obtain the effective mode volume.