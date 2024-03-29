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
category: Inverse Design
date: '2023-12-21 22:12:45'
enabled: true
id: how-do-i-set-an-adjoint-topology-optimization
title: How do I set an adjoint topology optimization?
---

<div><p>To create an adjoint topology (or density-based) optimization set up, you can control the permittivity values of a&nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.JaxCustomMedium.html">tidy3d.plugins.adjoint.JaxCustomMedium</a>&nbsp;based on the optimization design parameters. After that, you need to include it in a&nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.JaxStructure.html">tidy3d.plugins.adjoint.JaxStructure</a>. Be sure of adding the adjoint structures in the&nbsp;<code>.input_structures</code>&nbsp;parameter of the&nbsp;<a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.JaxSimulation.html#tidy3d.plugins.adjoint.JaxSimulation">tidy3d.plugins.adjoint.JaxSimulation</a>&nbsp;object. In addition, you must specify an adjoint compatible monitor in&nbsp;<code>.output_monitors</code>, that defines the set of monitors and corresponding data that the objective function will depend on.</p>​​​​<span>Once the adjoint simulation is defined, you must use the&nbsp;</span><a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.web.run.html">tidy3d.plugins.adjoint.web.run</a><span>&nbsp;method to send the simulation set up to our servers. After computing the forward and adjoint simulations, a&nbsp;</span><a target="_blank" rel="noopener" href="https://docs.flexcompute.com/projects/tidy3d/en/latest/_autosummary/tidy3d.plugins.adjoint.JaxSimulationData.html#tidy3d.plugins.adjoint.JaxSimulationData">tidy3d.plugins.adjoint.JaxSimulationData</a><span> is returned, so you can compute the objective function value.&nbsp;</span></div>

<div> </div>

<div>Lastly, use&nbsp;<code>jax.value_and_grad</code>&nbsp;to both compute the objective function and the gradient with respect to the design parameters. The objective function gradients can them feed a gradient-based optimization algorithm to drive the inverse design process.&nbsp;</div>

<div> </div>

<div>We highly recommend watching the <a href="https://www.flexcompute.com/tidy3d/learning-center/inverse-design/">Inverse Design</a> lectures if you are new to the adjoint method. You can also go through this <a href="https://www.flexcompute.com/tidy3d/examples/notebooks/AdjointPlugin6GratingCoupler/">tutorial</a> for an example on adjoint topology optimization.</div>

<div> </div>

<div> </div>