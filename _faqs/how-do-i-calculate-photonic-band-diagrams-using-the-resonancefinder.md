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
date: '2023-12-20 19:13:49'
enabled: true
id: how-do-i-calculate-photonic-band-diagrams-using-the-resonancefinder
title: How do I calculate photonic band diagrams using the ResonanceFinder?
---

To calculate photonic band diagrams using Tidy3D you can excite the structure with several [tidy3d.PointDipole](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PointDipole.html){: target="_blank" rel="noopener"} sources, and measure the response with several [tidy3d.FieldTimeMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FieldTimeMonitor.html){: target="_blank" rel="noopener"} monitors. You should excite modes with a fixed Bloch wavevector by using [tidy3d.BlochBoundary](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.BlochBoundary.html){: target="_blank" rel="noopener"} boundary conditions. Then, use the [tidy3d.plugins.resonance.ResonanceFinder](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.resonance.ResonanceFinder.html#tidy3d.plugins.resonance.ResonanceFinder.html){: target="_blank" rel="noopener"} to find the resonant frequencies. By sweeping the Bloch wavevector, you can obtain the full band structure of a photonic crystal structure.

This [notebook](https://www.flexcompute.com/tidy3d/examples/notebooks/Bandstructure/) shows a complete example on calculating a band diagram of a photonic crystal slab.