---
_schema: default
layout: post
title: Simulation Confirms Nobel-Winning Wave Theory | Flexcompute
post_title: Groundbreaking Simulation Confirms Half-Century-Old Nobel-Winning Wave Theory
author: Tom Chen
date: 2023-06-08 13:57:03
categories:
  - News
tags:
  - Anderson Localization
  - Wave Diffusion Theory
  - Computational Electromagnetics
  - Tidy3D
  - Zongfu Yu
  - Finite-Difference Time-Domain
  - Electromagnetic Physics
  - Data Centers Optics
  - Nanostructured Nanolenses
  - Chip-based Lidar
description: Simulating Anderson localization with Tidy3D, shedding light on wave theory.
post_image: /uploads/thumbnail2.png
permalink: /blog/2023/06/08/wave-theory-breakthrough/
redirect_from:
  - //blog/wave-theory-breakthrough
  - https://www.flexcompute.com/blog/wave-theory-breakthrough/
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
If you've ever tried to understand the mysteries of wave physics, you may have come across a seemingly elusive phenomenon known as Anderson localization. Proposed back in 1958 by physicist Phillip Anderson, this theory, which earned him a Nobel Prize in 1977, describes how waves behave when they encounter multiple obstacles in a disordered material. Yet despite its potential impact across fields, Anderson localization has largely remained a theoretical concept due to the complexities of confirming it experimentally and the high computational demands of simulating it.

But all of that is about to change, thanks to a team of researchers led by Professor Hui Cao of Yale University. In a landmark study recently published in the journal Nature Physics, Cao and her colleagues have managed to simulate Anderson localization using computational electromagnetics, proving Anderson's theory and providing a potential pathway to resolving other complex physics problems.

Anderson localization is fascinating because it predicts a counterintuitive behavior of waves. When a wave—be it electromagnetic, electron, seismic, or water wave—encounters an obstacle, we'd expect it to scatter and then continue beyond the obstacle. But Anderson localization suggests that if a wave encounters multiple obstacles, it doesn't just scatter—it bounces back and forth between the obstacles, becoming trapped, and thus, localized.

Scientists have long sought to validate this theory. Yet, the subtle signals produced in the experiments often get drowned out by statistical "noise," making proof elusive. Moreover, simulating Anderson localization computationally is a significant challenge, requiring a large computational domain, fine resolution to resolve wave physics, and thousands of ultra-fast simulations to probe different parameters and angles.

The breakthrough arrived when Cao utilized Tidy3D with her international team, including Prof. Alexey Yamilov at Missouri University of Science and Technology, Dr. Sergey Skipetrov from University of Grenoble Alpes in France).&nbsp; Tidy3D is a simulation tool developed by Flexcompute, which was co-founded by Dr. Zongfu Yu, who also a senior author, and uses an algorithm for modeling electromagnetic waves based on the Finite-Difference Time-Domain (FDTD) method, an effective tool for modeling nanoscale optical devices. When coupled with advanced computing chips available in the cloud (the same chips that power AI), this tool allowed the researchers to speed up their calculations dramatically and run the simulation thousands of times. Dr. Tyler Hughes and Dr. Momchil Minkov, also from Flexcompute, contributed to this work by enabling the researchers to perform massive scale simulations.

The result? They confirmed Anderson's theory over half a century after it was first proposed. The simulation also provided insights into why experimentalists have struggled with observing the effects of Anderson localization and proposed a non-intuitive experimental setup that could prove the theory in real-life settings.

<center><img width="404" alt="This figure illustrates the groundbreaking simulation of Anderson localization" src="/uploads/yu-nature-physics-thumbnail-06072023.png" /></center>

<center><i>This figure illustrates the groundbreaking simulation of Anderson localization. It showcases how a tightly focused pulse behaves differently in various environments, confirming the long-standing theory of Anderson localization. Notice how the lateral expansion of the beam in a diffusive slab arrests in a localized slab, a compelling representation of this Nobel-winning wave theory. </i></center>

<center> </center>

<center> </center>

The success of this project has far-reaching implications, as this type of computational resource could be applied to numerous other electromagnetic physics problems. "Those are just a few problems these computational methods can be used for," Yu says. "The discoveries enabled by ever more powerful computing never fail to surprise and excite us."

The contributions of this research extend beyond wave physics, potentially impacting fields like data center optimization and the development of nanostructured nanolenses for chip-based lidar, a remote sensing technology.

In this exciting era of computational progress, it's thrilling to witness how powerful computing is enabling us to dive into and unlock the secrets of complex physical phenomena. The successful simulation of Anderson localization stands as a testament to the possibilities that lie ahead.
