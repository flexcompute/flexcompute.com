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
category: Sources
date: '2023-12-08 11:40:56'
enabled: true
id: how-do-i-calculate-the-power-radiated-by-a-pointdipole-source
title: How do I calculate the power radiated by a PointDipole source?
---

The&nbsp;[tidy3d.PointDipole](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PointDipole.html){: target="_blank" rel="noopener"} source is normalized such that the power injected in a homogeneous material of refractive index&nbsp;$n$ at frequency $\omega = 2\pi f$&nbsp;is given by

$\frac{\omega^2}{12\pi}\frac{\mu_0 n}{c}$.​​​​​

To calculate the radiated power of a dipole in the presence of dispersive, lossy, or non-homogeneous materials, you can use a [tidy3d.FluxMonitor](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.FluxMonitor.html){: target="_blank" rel="noopener"} box. Refer to this [notebook](https://www.flexcompute.com/tidy3d/examples/notebooks/BullseyeCavityPSO/) for an example.