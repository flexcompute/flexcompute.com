---
_schema: default
layout: post
title: Non-Hermitian Photonics in Tidy3D | Flexcompute
post_title: Tidy3D Modeling of a Non-Hermitian Photonic System
author: Tom Chen
date: 2023-06-08 12:21:44
categories:
  - Article
  - News
tags:
  - Non-Hermitian Photonics
  - Tidy3D
  - Exceptional Points in Photonic Systems
  - Surface Plasmon Polariton
  - Non-Hermitian Metagrating Structure
  - Yongmin Liu
  - Photonics Research
  - Study of Non-Hermitian Systems
  - Photonic Systems Simulations
  - Topological Photonics
  - Advanced Photonic Applications
description: >-
  Dive into Non-Hermitian Photonics and Tidy3D’s role in accelerating advanced
  photonic research.
post_image: /uploads/non-hermitian-photonics.png
permalink: /blog/non-hermitian-photonics
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
The field of non-Hermitian photonics has seen rapid growth in recent years, with new theoretical insights and experimental demonstrations being reported all the time. Recently, the [research group](https://web.northeastern.edu/liulab/#_ga=2.179821924.13341122.1685973397-2042140423.1685636451) led by Professor Yongmin Liu from Northeastern University demonstrated the precise subwavelength control of light by utilizing the exceptional point in a non-Hermitian system. This work achieved the unidirectional propagation of surface plasmon polariton (SPP) on gold film by engineering a non-Hermitian metagrating structure and has led to a publication in [Science Advances](https://www.science.org/doi/10.1126/sciadv.adf3510) recently.&nbsp;

<center><img width="404" alt="non-Hermitian photonics has seen new theoretical insights and experimental demonstrations all the time" src="/uploads/metagrating-structure-1.png" /></center>

We found the research to be extremely novel and interesting. Therefore, we replicated the simulations in the original paper and highlighted it as a [public example](https://www.flexcompute.com/tidy3d/examples/notebooks/NonHermitianMetagratings/). In the simulation, we controlled the geometry of the grating structure and achieved the tuning of SPP propagation direction switching, consistent with the observation reported in Professor Liu’s paper.&nbsp;

<center><img width="404" alt="Tidy3D simulated the geometry of the grating structure and achieved the tuning of SPP propagation direction switching" src="/uploads/tidy-non-hermitian-photonics-1.png" /></center>

In addition, Professor Liu and the lead author of the paper, Yihao Xu, have kindly agreed to do an interview with us to shed more light on their research. Below is the full interview, containing our questions and their responses.&nbsp;&nbsp;

**What is non-Hermitian photonics? Why is it interesting?**

Non-Hermitian systems are open systems capable of exchanging energy, matter, or information with their surroundings by controlling gain or loss materials. Initially introduced within the realm of quantum mechanics, non-Hermitian systems can exhibit a real spectrum under specific conditions, a concept previously unforeseen until the pioneering work by Bender and co-workers (Phys. Rev. Lett. 80, 5243 (1998)). The presence of exceptional points (EPs), which are singularities where the eigenvalues of a non-Hermitian system start the transition from real to complex values, is particularly intriguing in the system. Around these EPs, novel phenomena can arise, such as mode selection, enhanced sensitivity, and robust mode propagation. However, realizing non-Hermitian behaviors in quantum systems poses significant challenges. The equivalence between the Schrödinger equation and the paraxial equation of diffraction in optics has allowed researchers to use photonic systems as an alternative platform to study non-Hermitian physics. In turn, the rich physics of non-Hermitian systems has yielded new insights and discoveries within the field of photonics.

**What is an exceptional point?**

EPs represent unique instances in which the eigenvalues of a non-Hermitian system undergo a transition from real to complex values.&nbsp; Essentially, the non-Hermitian system involves a spatial gain/loss distribution, and allows coupling between regions with gain and loss.&nbsp; When the gain and loss rates are low, the energy exchange between different regions through coupling is easily compensated, resulting in eigenmodes that do not display a net gain or loss. In other words, the eigenvalue is a real number. However, as the level of gain or loss increases, the energy exchange through coupling becomes incomplete. Consequently, the eigenvalues of the system begin to exhibit a net gain or loss simultaneously. The determination of the exceptional point relies on the interplay between the strength of gain or loss and the coupling in the non-Hermitian system.

**Can you give some suggestions to students who want to work in this field?&nbsp;**

First of all, it is crucial to thoroughly study the basic concepts, such as the Hamiltonian matrix, non-Hermitian systems, and the representation of parity-time symmetry in quantum mechanics. It is equally important to delve into the fundamental principles that govern EPs and understand the behaviors of eigenvalues within these systems. Rather than solely focusing on the mathematical representation of non-Hermitian systems, students are recommended to grasp the underlying physics behind them.

Once a solid conceptual understanding is achieved, the next step is to engage in simulations of real-world systems. Theoretical studies often involve various approximations and assumptions, whereas conducting full-wave simulations allows for the inclusion of practical factors. By simulating real-world scenarios, students can gain practical insights and validate theoretical findings.

Finally, it is vital to follow the latest advancements in the field. This can be achieved by regularly reading scientific papers, actively participating in conferences, and engaging with esteemed researchers and experts in the field of non-Hermitian photonics. By doing so, students can remain informed about the current trends, emerging challenges, and potential opportunities in this rapidly evolving field.

**How can fast numerical simulations accelerate research in this area?**

In a theoretical study of a non-Hermitian system, we usually involves a lot of assumptions and approximations, like tight-binding and effective medium models. However, we need to consider all physical factors and constraints that may exist in experimental measurements, and quite often, we need to sweep the parameters for an optimal device design. In a brute-force search of the optimal design, the time cost is exponentially scaled with the number of parameters involved. Using an optimization algorithm can speed up this process but not by orders of magnitude. Therefore, a fast numerical simulation can greatly accelerate the research especially when parameter sweeping is required.

**Which part of the work gets you most excited?**

The most significant excitement of this work is the translation from theory to successful experimental demonstration. In collaboration with Prof. Jing Chen at Nankai University, we published the theoretical work in 2017 (Phys. Rev. Lett. 119, 077401 (2017)) that predicted the unidirectional, radiative-loss-free excitation of surface plasmon polaritons (SPPs) based on an ideal sinusoidal permittivity distribution. However, the original design was too ideal and impractical to realize experimentally. After a long time of investigation, we conceived the idea of using two discrete meta-gratings to form a pair that could manipulate the real and imaginary permittivity. In collaboration with Prof. Junsuk Rho’s group at Pohang University of Science and Technology, we finally fabricated the device and performed experimental measurements. To our delight, the experimental results show excellent agreement with our theoretical predictions and numerical simulations. Our work pushes non-Hermitian photonics to the nanoscale regime and paves the way toward high-performance plasmonic devices with superior controllability, performance, and robustness by using the topological effect associated with non-Hermitian systems.&nbsp;

**What are you working on? Can you share some upcoming work?**

Currently, we are investigating the intriguing interplay between topology features and non-Hermitian systems, which has gained significant attention in the community. In the Science Advances paper, we have reported the analysis of the topology properties surrounding the EPs. It is shown that opposite topological charges exist at the two EPs in the non-Hermitian system. This result is related to the enhanced robustness of the unidirectional excitation of SPPs observed in our system. Our ongoing efforts target a comprehensive understanding of the underlying connections between non-Hermitian systems and topological photonics. Furthermore, we are actively investigating methods to manipulate and control topology features in non-Hermitian systems. We hope to unveil new possibilities for harnessing their unique properties in advanced photonic applications.

![Dr. Yongmin Liu, Professor at Northeastern University](/uploads/yongmin-liu-1.png){: width="151" height="180"}

Dr. Yongmin Liu obtained his Ph.D. from the University of California, Berkeley in 2009. He joined the faculty of Northeastern University at Boston in fall 2012, and currently he is an associate professor in the Department of Mechanical & Industrial Engineering and the Department of Electrical & Computer Engineering. Dr. Liu’s research interests include nano optics, nanoscale materials and engineering, plasmonics, metamaterials, biophotonics, and nano optomechanics.
