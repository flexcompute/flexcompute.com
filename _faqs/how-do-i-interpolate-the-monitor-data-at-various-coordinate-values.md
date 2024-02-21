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
date: '2023-12-19 14:53:37'
enabled: true
id: how-do-i-interpolate-the-monitor-data-at-various-coordinate-values
title: How do I interpolate the monitor data at various coordinate values?
---

The simulation data is stored as a&nbsp;[DataArray](https://xarray.pydata.org/en/stable/generated/xarray.DataArray.html)&nbsp;object using the&nbsp;[xarray](https://xarray.pydata.org/en/stable/)&nbsp;package. You can think of it as a dataset where data is stored as a large, multi-dimensional array (like a numpy array) and the coordinates along each of the dimensions are specified so it is easy to work with.

You can use the `interp()` method to interpolate data at certain coordinates. For example:

<div><div markdown class="code-snippet">{% highlight python %}

# Run the simulation and get the data.
sim_data = tidy3d.web.run(simulation, task_name="task", path="data/data.hdf5", verbose=True)

# Get all the data from a field monitor.
field_data = sim_data["field"]

# Interpolate field data at a specific frequency.
field_freq = field_data.interp(f=200e14)

# Interpolate field data at a specific position.
field_pos = field_data..interp(x=0, y=0, z=0)

{% endhighlight %}
{% include copy-button.html %}</div><p>You can find detailed information about simulation data visualization and postprocessing in this <a href="https://www.flexcompute.com/tidy3d/examples/notebooks/VizData/">tutorial</a>.</p></div>