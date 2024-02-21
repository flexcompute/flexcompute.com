---
_schema: default
layout: post
title: Electra eSTOL Design & Flow360 | Flexcompute
post_title: 'Shorter is Better: How Electra Optimizes eSTOL  Aircraft Design with Rapid CFD'
author: CJ Doolittle
date: 2023-07-10 10:08:00
categories:
  - Article
  - News
  - Feature
tags:
  - eSTOL
  - Electra
  - CFD
  - Flow360
  - Aircraft Design
  - eSTOL
  - Urban Transportation
  - Aerodynamics
  - Startup
  - Innovation
  - Flow insights
  - Flow simulation technology
  - Complex flow
  - what can be simulated
  - CFD Scalability
  - Reynolds averaged navier stokes (RANS)
  - Multiple turbulence models
  - Laminar Turbulent transition model
  - Detached eddy simulation
  - Acoustics
  - Porous media model
description: Flow360’s design iteration speeds up Electra's aircraft design by 9 months.
post_image: /uploads/electra-aircraft-blog.jpg
permalink: /blog/2023/07/10/electra-rapid-design-flow360/
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
    comment: blog post url in kebab format (e.g. /this-is-a-sample-post/)
    label: PERMALINK
    empty_type:
    remove_empty_inputs: true
  redirect_from:
    type: array
    comment: Redirect from old URLs if you have any, this field is optional.
    label: REDIRECT FROM
---
<center><img width="606" alt="Electra's eSTOL aircraft" src="/uploads/electra-image-plane.jpg" /></center>

<center><i>Source: Electra Aero, Inc.</i></center>

For a long time, science fiction movies have imagined aircraft navigating through skyscrapers in a bustling modern city. However, the reality is that cities lack runways for aircraft, and helicopters are too loud and inefficient for mass-market transportation. This is where [Electra](https://www.electra.aero/){: target="_blank" rel="noopener"}’s electric Short Take-Off and Landing (eSTOL) aircraft comes in.

<center><img width="404" alt="Ground Roll (Takeoff Distance), in feet" src="/uploads/charts-flow360-electra-1.png" /></center>

By mounting an array of propellers along the aircraft’s wingspan, Electra can achieve short take-off from urban rooftops and parking garages. These propellers are uniquely designed and positioned to create high speed airflow blowing toward the wings, which can generate extra lift force to allow the airplane to take off in a short distance. For such an innovative design, there is a lack of empirical design rules for engineers to draw from. Engineers must rely on computational fluid dynamics (CFD) simulation to design.

The challenge is the enormous design space; the size, position, and number of propellers and wings, their interaction with control surfaces, etc. There are tens of configurations that all must be simulated in each of various operating scenarios, like take-off, landing, transition, loiter, and more. And each operating scenario must be mixed with environmental effects and different performance conditions, like how much weight the aircraft is carrying or whether urgency or efficiency is the priority. Electra was quickly facing thousands of simulations to inform its overall aircraft design. What’s even more challenging is that, as a startup, Electra needs to finalize a design within a very short period.

<center><img width="404" alt="Typical CFD Runtime, in minutes" src="/uploads/charts-flow360-electra-2.png" /></center>

Flow360 is fast, built from the ground up for emerging computing chips, such as GPUs. Simulations that once required 3 hours to run now only require 5 minutes with this solver. Flow360 is reliable, built specifically for high-end CFD applications in aerospace and automotive, nor does it sacrifice accuracy for speed. Running Flow360 is easy, with an option to run in the cloud. Without having to maintain any computing hardware, this solver saves the Electra team hundreds of thousands of dollars.

<center><img width="606" alt="Flow360’s customers gain detailed flow insights, not just pretty pictures" src="/uploads/electra-images.png" /></center>

<center><i>The blue ‘bubble’ on the flap shows a zone of poor quality airflow, which indicates the propeller rotor and pylon must be redesigned to eliminate this impact on the wing’s main function—generating lift. Examples like this show Flow360’s customers gaining detailed flow insights, not just pretty pictures.</i></center>

<br>Even though Electra has some of the world’s most renowned aerodynamicists with decades of experience working with nearly all CFD tools, they quickly recognized that none of existing CFD tools can deliver the speed, accuracy, and cost that are required to get the job. Not until they found Flow360.

Thanks to the fast design iteration enabled by Flow360, **Electra converged on an initial aircraft design <u>within three months</u>, which would have otherwise taken up to 12 months**. Saving 9 months as a result sped up Electra’s path to market, which is time worth at least tens of millions of dollars to a company that is addressing an emerging market worth hundreds of billions dollars.

<center><img width="404" alt="Electra saved 9 months in its path to market because of Flow360" src="/uploads/charts-flow360-electra-3.png" /></center>

You can read more about this partnership in a [paper](/blog/2022/10/07/exploring-the-fluid-dynamics-of-an-electric-short-takeoff-and-landing-estol-aircraft-part-1-of-3/) co-authored by Flexcompute and Electra. If you’d like to learn how Flow360 enables rapid iteration in aero design, reach out to us at *info@flexcompute.com* and follow us on [LinkedIn](https://www.linkedin.com/company/flexcompute-inc){: target="_blank" rel="noopener"}.
