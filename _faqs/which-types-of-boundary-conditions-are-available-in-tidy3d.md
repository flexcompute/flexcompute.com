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
id: which-types-of-boundary-conditions-are-available-in-tidy3d
title: Which types of boundary conditions are available in Tidy3D?
---

Tidy3D includes the following boundary condition types: [Periodic](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.Periodic.html#tidy3d.Periodic){: target="_blank" rel="noopener"}, [PECBoundary](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PECBoundary.html#tidy3d.PECBoundary){: target="_blank" rel="noopener"}, [PMCBoundary](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PMCBoundary.html#tidy3d.PMCBoundary){: target="_blank" rel="noopener"}, [BlochBoundary](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.BlochBoundary.html#tidy3d.BlochBoundary){: target="_blank" rel="noopener"}, [PML](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.PML.html#tidy3d.PML){: target="_blank" rel="noopener"}, [StablePML](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.StablePML.html#tidy3d.StablePML){: target="_blank" rel="noopener"}, and [Absorber](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.Absorber.html#tidy3d.Absorber){: target="_blank" rel="noopener"}.