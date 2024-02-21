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
date: '2023-12-15 21:48:06'
enabled: true
id: how-do-i-simulate-periodic-structures-in-tidy3d
title: How do I simulate periodic structures in Tidy3D?
---

<div><div>You can use the&nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.Periodic.html#tidy3d.Periodic">tidy3d.Periodic</a>&nbsp;or <a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.BlochBoundary.html#tidy3d.BlochBoundary">tidy3d.BlochBoundary</a>&nbsp;conditions to simulate periodic structures. These boundary conditions allow users to obtain the response of large periodic structures by simulating only a unit cell. The&nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.BlochBoundary.html#tidy3d.BlochBoundary">tidy3d.BlochBoundary</a> allows to simulate systems where light is injected at an angle. However, it is computationally more expensive, so use <a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.Periodic.html#tidy3d.Periodic">tidy3d.Periodic</a>&nbsp;boundary to normal incidence.</div><div> </div></div>

See this [notebook](https://www.flexcompute.com/tidy3d/examples/notebooks/BoundaryConditions/) for more details on setting up boundary conditions.