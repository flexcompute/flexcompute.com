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
date: '2023-12-18 22:53:35'
enabled: true
id: how-do-i-change-the-object-plotting-characteristics-facecolor-edgecolor-etc
title: How do I change the object plotting characteristics (facecolor, edgecolor,
  etc)?
---

<div>Plotting keyword arguments can be supplied to <code>plot()</code>, for example <code>obj.plot(x=0, edgecolor='blue', fill=False)</code>. These keyword arguments correspond to those fed to <a target="_blank" rel="noopener" href="https://tinyurl.com/2nf5c2fk">Matplotlib Patches</a>.</div>