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
category: Data Visualization and Postprocessing
date: '2023-12-18 22:57:51'
enabled: true
id: how-do-i-change-the-global-plot-characteristics-title-size-etc
title: How do I change the global plot characteristics (title, size, etc)?
---

<div><div><div>The plotting function return a matplotlib <code>Axes</code>, wihch can be manipulated, for example <code>ax = obj.plot(x=0); &nbsp;ax.set_title('my_title')</code>.</div></div></div>