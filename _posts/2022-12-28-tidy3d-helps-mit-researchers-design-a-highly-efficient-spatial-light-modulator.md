---
_schema: default
layout: post
title: MIT Spatial Light Modulator in Tidy3D | Flexcompute
post_title: Tidy3D helps MIT researchers design a highly efficient spatial light modulator
author: Tom Chen
date: 2022-12-28 17:36:45
categories:
  - News
tags: []
description: A breakthrough in spatial light modulation with Flexcompute’s Tidy3D solver.
post_image: /uploads/20221228-field-profiles.png
permalink: >-
  /blog/2022/12/28/tidy3d-helps-mit-researchers-design-a-highly-efficient-spatial-light-modulator/
redirect_from:
  - >-
    https://www.flexcompute.com/blog/2022/12/28/tidy3d-helps-mit-researchers-design-a-highly-efficient-spatial-light-modulator/
_inputs:
  layout:
    type: text
    label: LAYOUT
    hidden: true
  title:
    type: text
    label: PAGE TITLE
    comment: This title will be used as the page title and consumed by search engine
  post_title:
    type: text
    label: POST TITLE
    comment: >-
      This title will be displayed as blog post title and consumed by human
      readers. If it's not present or specified, then the page title will be
      used by default.
  author:
    type: text
    label: AUTHOR
  date:
    type: datetime
    label: DATE
    instance_value: NOW
  categories:
    type: multiselect
    label: CATEGORIES
    options:
      values: _select_data.posts_categories
  tags:
    type: array
    label: TAGS
  description:
    type: textarea
    label: DESCRIPTION
  post_image:
    type: image
    comment: This field is required
    label: POST IMAGE
  permalink:
    type: text
    comment: >-
      blog post url in kebab format, this field is optional, if not specified,
      the system will generate a link in the format of
      "/blog/yyyy/mm/dd/post-title/) implicitly
    label: PERMALINK
    empty_type:
    remove_empty_inputs: true
  redirect_from:
    type: array
    comment: Redirect from old URLs if you have any, this field is optional.
    label: REDIRECT FROM
---
In a recent breakthrough published in [Nature Photonics](https://www.nature.com/articles/s41566-022-01086-9#author-information), a high-efficiency, high-bandwidth spatial light modulator (SLM) has been developed. The work, led by Chris Panuski and prof. Dirk Englund at the Massachusetts Institute of Technology, demonstrates a proof-of-principle device based on an array of photonic crystal microcavities with all-optical control of the resonance frequencies of each individual cavity. A key innovation was the cavity design, which was optimized simultaneously for high spatial confinement, high quality factor and high directionality of the emission. Flexcompute’s [Tidy3D solver](https://www.flexcompute.com/tidy3d/solver/) was used to tune the cavities and [validate the optimized designs](https://docs.flexcompute.com/projects/tidy3d/en/latest/notebooks/OptimizedL3.html), and the simulation results showed excellent agreement with the experimental data. The researchers also made a breakthrough in the scalable fabrication and tuning of the entire array, which is a challenging task for very high-Q resonators, but is crucial to enable low-energy, high-speed modulation. SLMs are used in a variety of technologies, both mature and emerging, and the newly demonstrated device could find applications in displays, lithography, quantum and classical computing and communications, lidar, and optical neural networks, among others.

![Field profiles of the optimized photonic crystal resonator](/uploads/20221228-field-profiles.png "Fig 1. Field profiles of the optimized photonic crystal resonator, showing the strong near field confinement on the micrometer scale, and the strongly directional emission in the far field.")

<small><i>Fig 1. Field profiles of the optimized photonic crystal resonator, showing the strong near field confinement on the micrometer scale, and the strongly directional emission in the far field. </i></small>

Tidy3D simulation project and data can be accessed [here](https://docs.flexcompute.com/projects/tidy3d/en/latest/notebooks/OptimizedL3.html).
