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
category: Mediums
date: '2023-12-05 19:26:45'
enabled: true
id: how-do-i-create-a-dispersive-material-from-model-parameters
title: How do I create a dispersive material from model parameters?
---

To create a dispersive material from model parameters, you only need to instantiate the medium object and provide their parameters. For example `debye_medium = td.Debye(eps_inf=2.0, coeffs=[(1,2),(3,4)])`.

<div> </div>
