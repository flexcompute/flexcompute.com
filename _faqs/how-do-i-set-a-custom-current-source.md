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
category: Sources
date: '2023-12-11 16:01:43'
enabled: true
id: how-do-i-set-a-custom-current-source
title: How do I set a custom current source?
---

The [tidy3d.CustomCurrentSource](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.CustomCurrentSource.html){: target="_blank" rel="noopener"}&nbsp;source can be used to inject a raw electric and magnetic current distribution within the simulation. Its syntax is very similar to&nbsp;`CustomFieldSource`, except the source accepts a&nbsp;`current_dataset` instead of a&nbsp;`field_dataset`, and it can be volumetric or planar without requiring tangential components. This dataset still contains the `E{x,y,z}` and `H{x,y,z}` field components, which correspond to `J` and `M` components respectively.

See this notebook to an&nbsp;[example](https://www.flexcompute.com/tidy3d/examples/notebooks/CustomFieldSource/)&nbsp;on setting up a [tidy3d.CustomCurrentSource](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.CustomCurrentSource.html){: target="_blank" rel="noopener"}&nbsp;source.