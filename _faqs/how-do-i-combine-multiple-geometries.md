---
category: Structures
date: '2023-12-06 22:35:41'
enabled: true
id: how-do-i-combine-multiple-geometries
title: How do I combine multiple geometries?
---

You can combine multiple geometries using the&nbsp;[tidy3d.ClipOperation](https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.ClipOperation.html){: target="_blank" rel="noopener"}&nbsp;object to perform *'union'*,&nbsp;*'intersection'*,&nbsp;*'difference'*, and *'symmetric\_difference'*&nbsp; operations. For example:

<div markdown class="code-snippet">{% highlight python %}

box = tidy3d.Box(center=(0,0,0), size=(1, 1, 2))
cyl = tidy3d.Cylinder(center=(1,0,0), radius=0.5, length=2, axis=2)

union = tidy3d.ClipOperation(
  operation='union', geometry_a=box, geometry_b=cyl
)

intersection = tidy3d.ClipOperation(
  operation='intersection', geometry_a=box, geometry_b=cyl
)

difference = tidy3d.ClipOperation(
  operation='difference', geometry_a=box, geometry_b=cyl
)

symmetric_difference = tidy3d.ClipOperation(
  operation='symmetric_difference', geometry_a=box, geometry_b=cyl
)

{% endhighlight %}
{% include copy-button.html %}</div>
