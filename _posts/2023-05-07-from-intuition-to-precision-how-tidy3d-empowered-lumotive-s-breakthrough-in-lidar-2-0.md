---
_schema: default
layout: post
title: Tidy3D's Role in Lumotive's LiDAR 2.0 Breakthrough
post_title: >-
  From Intuition to Precision: How Tidy3D Empowered Lumotive's Breakthrough in
  LiDAR 2.0
author: Tom Chen
date: 2023-05-07 18:15:47
categories:
  - Case Study
  - Article
tags:
  - Lumotive
  - LiDAR technology
  - Optical semiconductors
  - Solid-state beam steering
  - Tidy3D simulation
  - R&D optimization
  - LiDAR 2.0
  - GPU FDTD
  - ASIC FDTD
  - Finite-difference time-domain
  - computational electrodynamics
  - Electromagnetic
  - EM simulation
  - EM Solver
  - Tidy3D
  - Photonics
  - Wireless design
description: >-
  Lumotive uses Tidy3D's simulation tool to optimize their LCM beam steering
  chips, significantly improving the efficiency and reliability of their 3D
  sensing systems. This resulted in significant cost and time savings, enabling
  Lumotive to achieve their goal of leading the industry towards LiDAR 2.0.
post_image: /uploads/lumotive-ll.jpg
permalink: /blog/2023/05/07/tidy3d-lumotive-lidar
redirect_from:
  - /tidy3d-lumotive-lidar
  - https://www.flexcompute.com/blog/tidy3d-lumotive-lidar
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
<center><img width="404" src="/uploads/lumotive-logo.png" alt="Lumotive, a Tidy3D customer"/></center>

Lumotive is a technology startup based in Redmond, Washington. It is a leading developer of optical semiconductors which are changing the rules for LiDAR across a wide range of 3D sensing applications. Their proprietary Light Control Metasurface (LCM™) solid-state beam steering chips are manufactured using proven and scalable CMOS semiconductor processes and eliminate the need for mechanical moving parts. This significantly reduces the complexity, cost, size, and power consumption of 3D sensing systems, while improving both performance and reliability.

Modeling the LCM chips is inherently challenging due to their large aperture and small subwavelength structures. Full-wave electromagnetic simulations are required to accurately capture their behavior.

<center><img width="606" title="Software-defined LCM(tm) technology for next-generation LiDAR systems from Lumotive" alt="Software-defined LCM(tm) technology for next-generation LiDAR systems from Lumotive" src="/uploads/2022-lumotive-hero-4.jpg" /></center>

<center><i>Software-defined LCM<sup>TM</sup> technology for next-generation LiDAR systems.&nbsp; Source: Lumotive</i></center>

In 2022, Dr. Laura Pulido-Mancera joined Lumotive's R&D team after the company had already delivered its first-generation beam steering chip prototype. Laura was tasked with designing the second-generation beam steering device to increase efficiency. With over 8 years of experience in modeling and designing metamaterial antennas, Laura identified several design parameters that might impact the device's performance. However, she soon realized that their existing simulation tool was insufficient to effectively search the entire parameter space.

A proper and systematic parameter sweep study would need to cover multiple design parameters concurrently to generate meaningful insights. This could easily result in hundreds to thousands of simulation runs, making it impossible to accomplish with the existing simulation tool within an acceptable time frame.

Specifically, Laura and the rest of the R&D team had an intuition that making certain geometric and material changes could significantly improve the efficiency of the device. However, they lacked the computing resources with existing simulation tools.

Fortunately, Laura discovered Tidy3D just in time. With Tidy3D's super-fast simulation speed, she was able to run full parameter sweep batches and validate the hypothesis that making the proposed changes could significantly improve device efficiency. Laura's simulation results were instrumental in enabling the team to make the critical in changing the manufacturing process. As predicted by Tidy3D's simulation results, this move increased the device efficiency substantially.

Guided by Laura's simulations, the R&D team gained confidence in their technical decisions, which helped them tune other geometric parameters. This ultimately will lead to the delivery of Lumotive's second-generation LCM chips, a significant milestone in the company's technological achievements.

<center><img width="606" title="Dr. Laura Pulido-Mancera analyzes the LCM wafer and compares it against predicted simulation results" alt="Dr. Laura Pulido-Mancera analyzes the LCM wafer and compares it against predicted simulation results" src="/uploads/lumotive-ll.jpg" /></center>

<center><i>Dr. Laura Pulido-Mancera (left) analyzes the LCM wafer and compares it against predicted simulation results.&nbsp; Source: Lumotive</i></center>

> “Tidy3D has been an amazing tool for Lumotive. Saving months of time in simulations is crucial for the decisions we are making as a company. We are using the results from Tidy3D for our next-generation metasurface!”
>
> — Dr. Laura Pulido-Mancera

One of Lumotive's strategic goals is to lead the industry toward "LiDAR 2.0": the next generation of LiDAR featuring modules built with solid-state components which can be integrated into any system as easily and pervasively as 2D cameras are today. This means that the platform needs to be flexible and adjustable to a wide range of sizes, prices, performances, and power requirements, from the high-performance, long-range solutions demanded by the automotive industry all the way down to the ultra-small form factor and low-cost solutions needed for smartphones. This poses extremely high requirements on the performance, uniformity, and reliability of Lumotive's core LCM chip.

Traditionally, sensitivity analysis and optimization of uniformity and reliability required fabricating batches of test wafers and conducting measurements. However, these experiments are expensive and time-consuming. In some cases, the team had to skip them and take the risk.

After Laura used Tidy3D to perform high-throughput sensitivity and corner analysis, she was able to optimize the design so that the manufacturing team didn't have to fabricate as many test wafers as before. This saved the company tens of thousands of dollars and months of development time. As a result, the LCM chips have higher efficiency, can reach further distances, and integrate better at the system level. Tidy3D allowed Lumotive to gain an advantageous position in the "LiDAR 2.0" race.

By converting qualitative "intuition" into quantitative "prediction" and extracting valuable insights from simulation data, Tidy3D empowers design engineers to confidently steer the direction of research and development.

Are you a design engineer like Laura who is trusted by your team with critical yet challenging design problems? Reach out to our expert team to see how Tidy3D can help you, too!

<center><a target="_blank" href="https://www.flexcompute.com/contact/">Contact our EM Simulation Experts</a></center>
