---
_schema: default
layout: post
title: The Future of Coastal Travel with Flow360 | Flexcompute
post_title: Enabling the Future of Coastal Travel with Flow360
author: Jim Bungener
date: 2023-05-04 15:48:06
categories:
  - News
  - Case Study
tags:
  - Flow360
  - CFD
  - customer
  - Flow insights
  - Flow simulation technology
  - Leading CFD
  - Complex flow
  - what can be simulated
  - CFD modeling
  - Unprecedented speed
  - CFD
  - 'CFD Scalability '
  - Reynolds averaged navier stokes (RANS)
  - Multiple turbulence models
  - Laminar Turbulent transition model
  - Detached eddy simulation
  - Acoustics
  - Porous media model
description: >-
  Flow360 empowers REGENT engineers to simulate complex flows with unmatched
  speed and precision.
post_image: /uploads/20230308-viceroy.jpg
permalink: /blog/regent-enabling-coastal-travel-flow360
redirect_from:
  - /regent-enabling-coastal-travel-flow360
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
### The REGENT Seaglider

[REGENT’s](https://www.regentcraft.com/){: target="_blank"}“seaglider” is a fully electric vehicle that utilizes a blown wing and hydrofoils for takeoff from the water, instead of gas powered engines and a hull used by traditional seaplanes. Seagliders are a much more efficient alternative to traditional hopper flights and a much faster alternative to traditional ferry routes. Such an efficient commuter transport will be greatly beneficial for passengers traveling between coastal cities.

### Design with Detailed Flow Insights

While flying in ground effect, the seaglider’s aerodynamics are important for precise flight control capability, passenger comfort (acoustics, vibration) and safety. Addressing these design challenges requires leveraging a world class aerodynamics group using state-of-the-art simulation technologies. A revolutionary CFD solver like [Flow360](https://www.flexcompute.com/flow360/solver/){: target="_blank"} provides a distinct advantage for REGENT’s engineering staff, enabling them to analyze more complex flight conditions and flow physics in significantly less time.

> Our experience working with the Flow360 team has been collaborative and responsive to our fast design mentality at REGENT pushing the state of the art with speed and accuracy. Couldn't be happier with this new simulation technique.

**Bryan Baker**&nbsp;Chief Engineer Vehicle Physics

<center><img width="606" alt="REGENT is validating CFD methodologies with wind tunnel tests of a full-scale segment of their blown wing" src="/uploads/regent-example-image.jpg" /></center>

### Successful Prototypes from Digital Designs

Building on a successful design process, REGENT is continuing to emphasize both digital and physical testing for their first full scale human operated vehicle, Paladin. To ensure accuracy and build correlations involving digital simulation results, REGENT is validating CFD methodologies with wind tunnel tests of a full-scale segment of their blown wing. Instrumentation onboard the test article reads surface static pressures, motor torque and power, as well as all body forces and moments. By correlating the same geometry and operating conditions both in the wind tunnel and in CFD, REGENT can increase certainty in digital designs and achieve success with its first prototype builds.

**Simulation results with Flow360 are achieved in less than 6 hours. The model has more than 150M elements and is run with as little as 1° of rotation per time step for more than 25 revolutions.**

By leveraging Flow360’s unprecedented speed and accuracy, REGENT engineers are able to simulate complex flows with confidence and in record time. The resulting flow insights allow for confirming assumptions, preemptively addressing concerns, and preparing for successful test campaigns.
