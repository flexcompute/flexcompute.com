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
category: Symmetry
date: '2023-12-15 16:25:04'
enabled: true
id: what-does-odd-i-e-pec-symmetry-mean
title: "What does \u201Codd, i.e. \u2018PEC\u2019 symmetry\u201D mean?"
---

PEC symmetry (odd) corresponds to zero normal electric field and zero tangential magnetic field at the symmetry plane.

![](/assets/tidy3d/faqs/pec-1.png){: width="223" height="485"}