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
date: '2023-12-15 21:35:25'
enabled: true
id: what-is-the-ideal-distance-between-the-geometry-and-absorbing-layers
title: What is the ideal distance between the geometry and absorbing layers?
---

In Tidy3D, a warning will appear if the distance between a structure and the absorbing layers is smaller than half of a wavelength to prevent evanescent fields from leaking into PML. In most cases, the evanescent field will naturally die off within half a wavelength, but in some instances, a larger distance may be required. It is important to keep in mind that PML only absorbs propagating fields. For evanescent fields, PML can act as an amplification medium and cause a simulation to diverge.