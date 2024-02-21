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
date: '2023-12-15 16:26:26'
enabled: true
id: what-does-even-i-e-pmc-symmetry-mean
title: "What does \u201Ceven, i.e. \u2018PMC\u2019 symmetry\u201D mean?"
---

PMC symmetry (even) corresponds to zero tangential electric field and zero normal magnetic field at the symmetry plane.

![](/assets/tidy3d/faqs/pmc-1.png){: width="229" height="482"}