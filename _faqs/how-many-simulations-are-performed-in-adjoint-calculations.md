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
date: '2023-12-21 21:14:12'
enabled: true
id: how-many-simulations-are-performed-in-adjoint-calculations
title: How many simulations are performed in adjoint calculations?
---

<div>Two simulations, the <code>forward</code> and the <code>adjoint</code> one, are performed when running inverse design optimizations using the&nbsp;<code>adjoint</code>&nbsp;plugin.&nbsp;</div>

<div> </div>

<div>We highly recommend watching the <a href="https://www.flexcompute.com/tidy3d/learning-center/inverse-design/">Inverse Design</a> lectures if you are new to the adjoint method. You can also go through this <a href="https://www.flexcompute.com/tidy3d/examples/notebooks/AdjointPlugin1Intro/">tutorial</a> for an introduction to the basic concepts related to automatic differentiation and adjoint optimization.</div>