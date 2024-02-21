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
date: '2023-12-21 23:09:21'
enabled: true
id: how-do-i-include-fabrication-constraints-in-adjoint-level-set-optimization
title: How do I include fabrication constraints in adjoint level set optimization?
---

<div><p>To ensure reliable fabrication of a device, it is crucial to avoid using feature sizes below a certain feature size when performing inverse design. To achieve this in level set optimization, you can use penalty functions to apply a substantial penalty to the objective function if the curvature and gap size values fall below a minimum feature size. This&nbsp;<a href="https://www.flexcompute.com/tidy3d/examples/notebooks/AdjointPlugin10YBranchLevelSet/">example</a> shows how to calculate the minimum radius of curvature and the minimum gap size penalty functions using the level set surface as input.</p></div>

<div> </div>

<div> </div>