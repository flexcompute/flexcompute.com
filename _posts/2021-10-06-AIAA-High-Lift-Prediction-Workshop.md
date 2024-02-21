---
_schema: default
layout: post
title: AIAA HLPW-3 & HLPW-4 Workshop Preview | Flexcompute
post_title: >-
  AIAA High Lift Prediction Workshop - Look back at HLPW-3 and Look forward to
  HLPW-4
author: Qiqi Wang
date: 2021-10-06 19:00:00
categories:
  - Article
tags:
  - AIAA
  - HLPW-3
  - HLPW-4
  - SciTech
  - Lift
  - CFD
  - Flow360
  - turbulence modeling
  - high-lift flow fields
  - aerodynamic design
  - Nasa FUN3D
  - aviation design
  - Cloud based CFD
description: >-
  A look back at our record-breaking results from the AIAA High Lift Prediction
  Workshop 3.
post_image: /assets/2021-10-06-AIAA-High-Lift-Prediction-Workshop/images/image1.png
permalink: /blog/2021/10/06/AIAA-High-Lift-Prediction-Workshop/
redirect_from:
  -
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
I am sure like many of you who are actively involved in Aerospace/Aviation CFD we are eager for the [4th AIAA CFD High Lift Prediction Workshop (HLPW-4)](https://hiliftpw.larc.nasa.gov/index-workshop3.html) which is scheduled for January 7th in San Diego, CA. It has been over four years since the 3rd workshop (HLPW-3)! If you haven’t registered yet visit [SCI TECH’s registration page](https://www.aiaa.org/SciTech/program/scitech-course/HLPW-4-GMGW-3-WORKSHOPS) for more information. For those coming from colder climates it certainly doesn’t hurt that the upcoming workshop is scheduled to be held in sunny San Diego… in January.

There is much to be excited about for HLPW-4 but what we are most excited for is the opportunity to put Flow360 on display against the most commonly used CFD solvers in the world. For those unfamiliar, after years of hard work and starting at the very foundation of what is theoretically possible for CFD solve speed on non-CPU hardware we launched Flow360 out of beta earlier this year. Flow360 is a co-design and co-delivered, cloud-based next-generation CFD solver that was written from scratch to maximize CFD solve speed on non-CPU hardware, including GPUs, TPUs and ASICs. It was still in the early development phase during the HLPW-3. We are now ready to show the world what Flow360 can do.

While we are hard at work preparing our results for the 4th AIAA CFD High Lift Prediction Workshop (HLPW-4) we wanted to look back at the [3rd workshop (HLPW-3) results](https://hiliftpw.larc.nasa.gov/index-workshop3.html) and share with you all how Flow360 would have performed compared to the participants at the time. Benchmarking simulation in a true apples-to-apples fashion is always difficult and openly available models are often the most trustworthy. The HLPW-3 test case we executed was based on the high lift version of NASA’s Common Research Model. The stated goals of the HLPW-3 are below:

**Objectives**

* Assess the numerical prediction capability (meshing, numerics, turbulence modeling, high-performance computing requirements, etc.) of current-generation CFD technology/codes for swept, medium-to-high-aspect ratio wings for landing/take-off (high-lift) configurations.
* Develop practical modeling guidelines for CFD prediction of high-lift flow fields.
* Determine the elements of high-lift flow physics that are critical for modeling to enable the development of more accurate prediction methods and tools.
* Enhance CFD prediction capability for practical high-lift aerodynamic design and optimization.

Our results when compared to other CFD solvers amount to a game changer for the CFD industry. Flow360 was shown to be 73x faster (99 seconds compared to 7,227 seconds) than the fastest possible results of Fun3D which was run on 1024 CPU cores. For reference, this was the medium model which contained 27 million nodes and 46.8 million cells. It is also worth noting that many potential innovators do not have regular access to over 1000 CPUs for their CFD runs because, let’s face it, upfront cost and ongoing maintenance for on-premise clusters is extremely prohibitive for many companies and going to the Cloud DIY-style at this level of scale is nowhere near as easy as it should be. For these customers we can provide even more extreme speed increases. We have yet to see a steady-state run that we haven’t been able to solve in minutes, usually 10 or less, or an unsteady state run that we haven’t been able to solve in hours, usually 6 or less. Flow360 scales much more efficiently then CPU-based options and it automatically sizes the hardware configuration to the size of problem it is presented, hence the dashed line for Flow360 results instead of multiple data points in the comparison below.

<center><img alt="Flow360 was shown to be 73x faster than the fastest possible results of Fun3D" src="/assets/2021-10-06-AIAA-High-Lift-Prediction-Workshop/images/image1.png" /></center>

While solve time is incredibly important because it enables innovators to test and iterate more options within a given deadline, above all else accuracy is of course of paramount importance. Flow360 was also a clear winner in terms of accuracy. As you can see below, Flow360 not only aligned extremely well with Fun3D and other commonly used solvers, but the results also produced with Flow360 at the coarsest mesh (8.3M nodes and 18.9M cells) better aligned with results from the finest mesh (208M nodes and 385.6M cells) then any other code. This unrivaled level of accuracy also enables users to not only solve at least 73x faster in an apples-to-apples mesh size, but it also enables users to get a consistent level of accuracy from smaller models, shrinking necessary solve times even further.

<center><img alt="Flow360 aligned extremely well with Fun3D and other commonly used solvers" src="/assets/2021-10-06-AIAA-High-Lift-Prediction-Workshop/images/image2.png" /></center>

After achieving these results we knew Flow360 was ready to enable customers to dramatically drive down their design cycles times. Who should we first pursue with this record setting technology? Many companies could certainly benefit. We decided to target the eVTOL/eSTOL market where many pioneers are pushing the boundaries of what is possible with their innovative designs. We knew these companies would jump at the chance to adopt a tool that would enable them to reduce their time to market as it would provide out-sized returns in a hyper competitive space. One of our earliest adopters was [Electra.aero](https://www.electra.aero/), who is [well on the path to pushing what is possible for sustainable regional mobility of people and cargo with their blown lift eSTOL design](https://www.prnewswire.com/news-releases/development-of-green-self-charging-electric-plane-with-range-of-500-miles-gets-boost-as-bristow-group-joins-forces-with-electraaero-301363275.html). Based on the results from our early collaboration, Chris Courtin, Lead Engineer of Flight Physics stated:

> “Flow360 is a valuable tool for the Electra.aero team designing an electric short takeoff and landing (eSTOL) technology demonstrator aircraft. These aircraft depend on the strong interaction between the wings, flaps, and multiple propellers for high lift and flight control. Accurate simulation of many parameter combinations is required to develop insight about the physics of the problem, design the flight control system, and to evaluate the effectiveness of candidate design changes.
>
> **Flow360 provides an order of magnitude faster solution speeds and lower costs than our previous CFD solution, with no loss of accuracy. This enables an increased volume of simulation, which gives a deeper understanding of the aircraft across the design envelope. Critically, it allows us to react quickly to the results of these studies. Our time required to iterate design changes from multiple weeks to a few days with Flow360. This was a very significant time savings on a compressed project schedule.**
>
> With a small team, we also benefit from the easily scalable and turn-key nature of the Flow360 system. It gives access to state-of-the-art results, without the overhead of maintaining a large dedicated CFD group. The pace of the simulations can be easily scaled to match the current needs of the project.
>
> **This combination of rapid, high-quality results with a system that can flexibly adapt to project needs is what makes Flow360 such a compelling product.**”

Fast forward 9 months and we are quickly becoming the tool of choice for the leaders in the advanced air mobility space and count many, including a majority of the top 5, from the [AAM Reality index](https://aamrealityindex.com/) as customers.

We are eager to present our formal results for the upcoming HLPW-4 and expect Flow360’s results to again stand well above the field in terms of speed and accuracy.

[You can see more of Flow360’s results from the HLPW-3 on our documentation site.](https://docs.flexcompute.com/projects/flow360/en/latest/caseStudies/HLCRM/HLCRM.html)

We would like to hear from you! The speed increase and efficiencies gained with Flow360 effectively open up the range of aircraft design problems that can be tackled with CFD. If there are problems that you previously thought were too large and complex to solve in an acceptable timeframe or you would like to benchmark your current CFD solver/hardware setup against Flow360’s co-delivered, browser-based, cloud-delivered platform, or would simply like to learn more reach out to support @ flexcompute.com

Thank you for reading, we look forward to seeing you all in San Diego next January!
