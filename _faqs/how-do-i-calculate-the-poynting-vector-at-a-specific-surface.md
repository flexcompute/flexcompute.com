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
category: Monitors
date: '2023-12-19 17:29:25'
enabled: true
id: how-do-i-calculate-the-poynting-vector-at-a-specific-surface
title: How do I calculate the Poynting vector at a specific surface?
---

The Poynting vector quantifies the directional energy flux of an electromagnetic field, representing the rate of energy transfer per unit area per unit time, and thus characterizing the power flow within the field.

The Poynting vector at a specific plane can be calculated by first placing a FieldMonitor object at that plane to obtain the fields. Then the Poynting vector can be calculated as&nbsp;$\boldsymbol{S} = \boldsymbol{E} \times \boldsymbol{H}$

For example, the z-component of the Poynting vector is calculated from&nbsp;$E_x$,&nbsp;$E_y$,$H_x$, and&nbsp;$H_y$&nbsp;as&nbsp;$S_z = (E_x H_y^* - E_y H_x^*)$. For time-averaged Poynting vector, we need to multiply by a factor of 0.5.