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
date: '2023-12-11 14:41:31'
enabled: true
id: how-do-i-model-an-optical-fiber-mode-source
title: How do I model an optical fiber mode source?
---

To simulate an optical fiber mode source, you can use the [tidy3d.ModeSource](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.ModeSource.html){: target="_blank" rel="noopener"}. This object allows you to solve for the optical modes of a fiber cross-section. You can then include this in your simulation by following the steps outlined in the [example](https://www.flexcompute.com/tidy3d/examples/notebooks/BilayerSiNEdgeCoupler/).

If you prefer, you can also use the [tidy3d.GaussianBeam](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.GaussianBeam.html){: target="_blank" rel="noopener"} source instead to approximate the optical mode of the fiber with a Gaussian distribution, as explained in more detail in another [example](https://www.flexcompute.com/tidy3d/examples/notebooks/EdgeCoupler/).