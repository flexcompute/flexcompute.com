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
date: '2023-12-21 18:38:55'
enabled: true
id: what-is-adjoint-simulation
title: What is adjoint simulation?
---

<div>The&nbsp;<code>adjoint</code>&nbsp;plugin allows users to take derivatives of arbitrary functions involving Tidy3D simulations through the use of the "adjoint method". The advantage of the adjoint method is that the gradients can be computed using only&nbsp;<strong>two</strong>&nbsp;FDTD simulations, the <code>forward</code> and the <code>adjoint</code> one, independent of the number of parameters. This makes it possible to do gradient-based optimization or sensitivity analysis of devices with enormous numbers of parameters with minimal computational overhead.&nbsp;</div>

<div> </div>

<div>We highly recommend watching the <a href="https://www.flexcompute.com/tidy3d/learning-center/inverse-design/">Inverse Design</a> lectures if you are new to the adjoint method. You can also go through this <a href="https://www.flexcompute.com/tidy3d/examples/notebooks/AdjointPlugin1Intro/">tutorial</a> for an introduction to the basic concepts related to automatic differentiation and adjoint optimization.</div>