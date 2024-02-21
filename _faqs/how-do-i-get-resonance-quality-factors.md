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
date: '2023-12-20 18:51:02'
enabled: true
id: how-do-i-get-resonance-quality-factors
title: How do I get resonance quality factors?
---

To calculate low-quality factor resonances using Tidy3D you can build and run a simulation until the electromagnetic fields fully decay to negligible values within the simulation domain. Then, you can obtain the resonance quality factor from the spectral response obtained from frequency-domain monitors.

However, when looking for long-lived resonances, the total time to the fields fully decay within the simulation domain can be extremely long. In this situation, the&nbsp;[tidy3d.plugins.resonance.ResonanceFinder](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.resonance.ResonanceFinder.html#tidy3d.plugins.resonance.ResonanceFinder.html){: target="_blank" rel="noopener"}&nbsp;plugin allows one to find resonances and extract their information from time domain field monitors without the necessity of waiting for the fields to completely decay. The&nbsp;`ResonanceFinder`&nbsp;plugin needs&nbsp;[tidy3d.FieldTimeMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FieldTimeMonitor.html){: target="_blank" rel="noopener"}&nbsp;to record the field as a function of time.

See this [tutorial](https://www.flexcompute.com/tidy3d/examples/notebooks/ResonanceFinder/){: target="_blank" rel="noopener"} for more details on the `ResonanceFinder`&nbsp;plugin.