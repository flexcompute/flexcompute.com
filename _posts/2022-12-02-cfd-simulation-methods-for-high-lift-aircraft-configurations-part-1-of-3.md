---
_schema: default
layout: post
title: 'High-Lift CFD Methods: Part 1 | Flexcompute'
post_title: CFD Simulation Methods for High-Lift Aircraft Configurations (Part 1 of 3)
author: CJ Doolittle
date: 2022-12-02 19:03:57
categories:
  - Article
tags:
  - AIAA
  - HLPW
  - Stall
  - High Lift
  - Turbulence Modeling
  - Flow360
  - CFD
description: Explore the role of wing design and CFD in modern aircraft performance.
post_image: /uploads/20221203-view1q1.png
permalink: >-
  /blog/2022/12/02/cfd-simulation-methods-for-high-lift-aircraft-configurations-part-1-of-3/
redirect_from: []
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
*In this series we will highlight contributions to the* [*4<sup>th</sup> AIAA High Lift Prediction Workshop*](https://hiliftpw.larc.nasa.gov/) *using a variety of CFD simulation techniques. The full series consists of three parts: **Part I** provides essential background motivation for carrying out this study.* [***Part II***](https://www.flexcompute.com/blog/2022/12/09/cfd-simulation-methods-for-high-lift-aircraft-configurations-part-2-of-3/) *will detail our modeling strategy and discuss the computational fluid dynamics approach.* [***Part III***](https://www.flexcompute.com/blog/2022/12/16/cfd-simulation-methods-for-high-lift-aircraft-configurations-part-3-of-3/) *will showcase the results and how they are useful in enhancing our understanding of flow behavior in high-lift configurations.*

---

<center><h2>PART I – 4<sup>th</sup> AIAA High Lift Prediction Workshop</h2></center>

<center><small>(Approximate reading time: 10mins)</small></center>

### Wing Design

Airplanes come in all shapes and sizes, from tiny single seaters to gigantic ones like the Airbus A380 measuring up to 70 meters in length; they also fly at very different speeds. The many design elements are primarily driven by the operating conditions (e.g., maximum and minimum operating speeds and maximum load capacity) under which the aircraft will be flown.

It is not an exaggeration to say that a fixed-wing airplane is essentially a payload-carrying structure attached to its wings. The wings are a fundamental design element of an airplane and largely dictate which conditions the airplane can be operated at. As such, substantial effort is dedicated to the design of wings because of their critical importance to airplane performance.

Most importantly, the wings of an airplane provide lift which allows it to go airborne and fly. The lifting capabilities of a wing design depend on the angle at which incoming air flow “attacks” the wing (called angle-of-attack or simply ⍺) and the velocity at which it flows.

For a given “freestream” flow velocity, defined at a far away distance from the wing, the lifting capability of a wing – generally measured in terms of a lift coefficient CL – increases as ⍺ increases. However, this happens until ⍺ reaches a critical value, after which CL rapidly drops. For ⍺ larger than this critical value, the aircraft is said to be in a “stall” condition (see Figure 1). In such conditions, the aircraft rapidly loses lift and can become unstable, which is clearly a major safety hazard. For a much more detailed discussion of aerodynamic stall, please refer to our earlier [article](https://www.flexcompute.com/blog/2022/03/31/aerodynamic-stall/) on this issue.

![Coefficient of lift (CL) vs angle-of-attack (AoA) for a NACA 2412 airfoil](/uploads/20220402-fig1-cl-vs-aoa.png "Figure 1: Coefficient of lift &#40;CL&#41; vs angle-of-attack &#40;AoA&#41; for a NACA 2412 airfoil.")

<small><i>Figure 1: Coefficient of lift (CL) vs angle-of-attack (AoA) for a NACA 2412 airfoil. </i></small>

For anyone designing a fixed-wing aircraft, knowing how the CL of a potential wing design will behave at different ⍺, and, more crucially, when the wing might go into a stall regime, is a critical piece of information.

Experimental prototyping of every possible design iteration of a wing in a wind tunnel or elsewhere would be extremely laborious and carries a large financial cost. In these cases, we use the power of modern computers to simulate the relevant physics involved and narrow down to a few promising candidate designs which may then be tested experimentally. Therefore, the field of computational fluid dynamics (CFD) plays a fundamentally important role in modern aircraft design.

### The High Lift Prediction Workshops

Despite the major progress that has been made in CFD, we have not reached a stage where CFD can faithfully mimic the physics involved in all scenarios and all wing configurations. It is typical to employ context and condition dependent CFD models and approximations that work in some parameter regimes but fail in others.

In order to make measurable progress in this complex problem of predicting and modeling the lift of an aircraft wing, especially at the high-lift configurations which are needed during takeoff and landing, NASA and AIAA organize the High Lift Prediction Workshops (HLPW). The underlying goal is to assess the limits of CFD modeling techniques and approximations in order to develop best-practices and understand the flow physics critical to high-lift predictions. These limits are imposed by things like numerical errors, physical modeling errors, and resource constraints. Accurate CFD predictions will lead to reduced future program development costs and risks, as well as enable high-lift aerodynamic optimization, which is crucial for the development of new aircraft designs with superior performance.

During the 1<sup>st</sup> workshop of the series, the Trapezoidal Wing was investigated, with a major focus on predicting flap/slat support effects. The 2<sup>nd</sup> workshop focused on the DLR F11 passenger airplane model, with test cases examining the sensitivity to Reynolds number effects, transition, and slat geometric details. The 3<sup>rd</sup> workshop investigated the High Lift Common Research Model (HL-CRM) geometry as well as nacelle installation effects for the JAXA JSM model. During the first three editions of the HLPW, the majority of simulations were based on using the Reynolds-Averaged Navier-Stokes (RANS) equations with limited submissions involving fluid flow scale-resolving simulations, mainly due to the associated high computational costs of such models.

In this series of articles we will discuss Flexcompute’s contribution to the 4<sup>th</sup> AIAA High Lift Prediction Workshop ([HLPW-4](https://hiliftpw.larc.nasa.gov/)) and discuss the results obtained with Flow360. In particular, we will focus on establishing best-practices for high-lift RANS predictions near max CL. We will also detail comparisons of the best-practice RANS results with respect to scale-resolving Detached Eddy Simulations (DES).

This concludes PART I of the series. In [PART II](https://www.flexcompute.com/blog/2022/12/09/cfd-simulation-methods-for-high-lift-aircraft-configurations-part-2-of-3/), we will discuss some of the key details of our CFD modeling strategy and how Flow360 is used to carry out such simulations.

Before you leave, you may also be interested in checking out an [article](https://www.flexcompute.com/blog/2021/10/06/AIAA-High-Lift-Prediction-Workshop/) on the results obtained for HLPW-3 where Flow360 showed a speedup of 73x compared to other CFD solvers!

*If you’d like to learn more about CFD simulations, how to optimize them, or how to reduce your simulation time from weeks or days to hours or minutes, stop by our website at* [*Flexcompute.com*](https://www.flexcompute.com/) *or follow us on* [*LinkedIn*](https://www.linkedin.com/company/flexcompute-inc/)*.*

*For the expanded version of the paper this content is derived from, see* [*An Analysis of Modeling Sensitivity Effects for High Lift Predictions using the Flow360 CFD Solver*](https://www.flexcompute.com/flow360/publications/#an-analysis-of-modeling-sensitivity-effects-for-high-lift-predictions-using-the-flow360-cfd-solver)*.*
