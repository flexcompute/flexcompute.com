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
date: '2023-12-19 15:28:53'
enabled: true
id: how-do-i-create-a-flux-box
title: How do I create a flux box?
---

A flux box can be defined by creating a FluxMonitor object with a 3D geometry. The total power coming out of the box is returned by integrating the flux over all box surfaces (excpet the ones defined in&nbsp;`exclude_surfaces`).&nbsp;

For details, please refer to the [API reference](https://docs.flexcompute.com/projects/tidy3d/en/stable/_autosummary/tidy3d.FluxMonitor.html).