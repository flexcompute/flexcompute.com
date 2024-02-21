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
date: '2023-12-21 21:38:20'
enabled: true
id: how-to-install-jax
title: How to install jax?
---

<div>The&nbsp;<code>adjoint</code>&nbsp;plugin requires the <a target="_blank" rel="noopener" href="https://jax.readthedocs.io/en/latest/index.html">jax</a> module, which is&nbsp;<a href="https://github.com/hips/autograd">Autograd</a>&nbsp;and&nbsp;<a href="https://www.tensorflow.org/xla">XLA</a>, brought together for high-performance numerical computing. We recommend running&nbsp;<code>pip install "tidy3d[jax]"</code>&nbsp;to install <code>jax</code>.</div>