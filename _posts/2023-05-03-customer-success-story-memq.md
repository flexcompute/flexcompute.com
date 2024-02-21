---
_schema: default
layout: post
title: 'Quantum Photonic Design: memQ & Tidy3D Journey | Flexcompute'
post_title: 'Efficiency and Agility in Quantum Photonic Design: memQ''s Journey with Tidy3D'
author: Tom Chen
date: 2023-05-03 15:19:31
categories:
  - Article
  - News
tags:
  - GPU FDTD
  - Tidy3D
  - ASIC FDTD
  - Finite-difference time-domain
  - computational electrodynamics
  - Electromagnetic
  - EM simulation
  - EM Solver
  - Photonics
  - Wireless design
description: >-
  Lumotive enhances 3D sensing systems using Tidy3D, leading the way to LiDAR
  2.0.
post_image: /uploads/memq-image-2.png
permalink: /blog/2023/05/03/memQ-Journey-with-Tidy3D
redirect_from:
  - /memQ-Journey-with-Tidy3D
  - /memQ-Journey-with-tidy3d
  - https://www.flexcompute.com/blog/memQ-Journey-with-Tidy3D
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
    comment: blog post url in kebab format (e.g. /this-is-a-sample-post/)
    label: PERMALINK
    empty_type:
    remove_empty_inputs: true
  redirect_from:
    type: array
    comment: Redirect from old URLs if you have any, this field is optional.
    label: REDIRECT FROM
---
<center><img width="202" alt="Tidy3D's fast and web-based simulations helped memQ test out designs and get quick feedback on their design cycle" src="/uploads/memq.png" /></center>

Leading a project to optimize photonic device design, Dr. Sean Sullivan, CTO at memQ Inc., was hampered by slow photonic simulation solutions, which slowed the chip design, fabrication, and testing cycle time. As a startup developing new quantum photonic hardware for long-distance distributed quantum information, memQ was time and resource-limited and running simulations on their local machines was suboptimal. They were looking for a more efficient way of quickly tweaking and testing new designs.

After hearing positive feedback from colleagues, Sean implemented a new set of simulations and designs using [Tidy3D](https://www.flexcompute.com/tidy3d/solver/), an electromagnetic simulation software product by Flexcompute. Tidy3D's [fast and web-based simulations](https://www.flexcompute.com/fdtd-acceleration/) helped memQ test out designs and get quick feedback on their design cycle. They were also able to avoid investing in building their own computational infrastructure, such as managing their own cluster or building multiple workstations, or even having to install any software.

<center><img alt="Tidy3D simulation of a high-Q cavity mode from memQ" src="/uploads/memq-image-1.png" /></center>

<center><small><i>Tidy3D simulation of a high-Q cavity mode. Source: memQ</i></small></center>

Sean and his team find value especially in Tidy3D's adjoint optimization feature, which helps tackle one of the biggest challenges that quantum photonics is facing—reducing photon loss. They are excited that Tidy3D continues to add more [features](https://www.flexcompute.com/python-fdtd/) to this package, which can enable new paradigms for photonic device design.

Sean appreciated how the Tidy3D team responded to the needs of startup customers like memQ, which are racing to market with new solid-state hardware designs. He found it reassuring to work with a company that could implement features and changes quickly, something that might not be possible with a larger simulation provider.

Tidy3D’s cloud-based approach to software saves companies like memQ from having to own and operate computing hardware, all while spending 10-100x less time waiting for simulation results. Lower costs and quicker design insights are gamechangers for memQ, shifting their focus from administering complex legacy simulation tools toward enabling our quantum future.
