---
_schema: default
layout: post
title: Hyperbolic Surface Polariton Model in Tidy3D | Flexcompute
post_title: Tidy3D Modeling of a Hyperbolic Surface Phonon Polariton Metamateiral
author: Tom Chen
date: 2023-08-02 13:00:00
categories:
  - Article
  - Case Study
tags:
  - Nanophotonics
  - Hyperbolic Metasurfaces
  - Tidy3D
  - FDTD
  - Simulation
  - Surface Phonon Polariton
  - Dr. Peining Li
  - Nano-engineering Techniques
  - Hexagonal Boron Nitride (hBN)
  - Optical Nano-imaging
  - Phonon Polariton Applications
  - Light-matter Interactions
description: >-
  Explore nanophotonics, hyperbolic metasurfaces and an interview on
  nano-engineering's future.
post_image: /uploads/phonon-polariton-tidy3d-results.png
permalink: /blog/2023/08/02/phonon-polariton-metamaterial/
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
Nanophotonics is an emerging field that involves the study and application of light-matter interactions at the nanoscale. In recent years, advances in nanofabrication techniques have enabled the development of optical devices and components that are much smaller than the wavelength of light. These nanostructured devices exhibit novel optical properties that are not observed in bulk materials, making them promising candidates for a wide range of photonic applications.

In a landmark study published in [Science](https://www.science.org/doi/10.1126/science.aaq1704), the lead author Dr. Peining Li from Dr. Rainer Hillenbrand’s [group](https://www.nanogune.eu/en/nanogune/people/rainer-hillenbrand) and colleagues report the fabrication and imaging of a mid-infrared hyperbolic metasurface based on hexagonal boron nitride (hBN). By nanostructuring a thin hBN layer into a subwavelength grating, the authors demonstrate strongly anisotropic propagation of phonon polaritons with concave, anomalous wavefronts. The results show that patterned van der Waals materials like hBN can serve as a versatile platform for hyperbolic nanophotonic devices and circuits.

<center><img width="606" alt="mid-infrared hyperbolic metasurface based on hexagonal boron nitride" src="/uploads/nanostructured-metamaterial.png" /></center>

<center> </center>

The proposed wavefront engineering for polariton waves is extremely interesting, so we replicated the simulations in the original paper and highlighted it as a [public example](https://www.flexcompute.com/tidy3d/examples/notebooks/NanostructuredBoronNitride/). The simulation result is highly consistent with the prediction and experimental observation.

<center><img width="606" alt="strongly anisotropic propagation of phonon polaritons with concave, anomalous wavefronts" src="/uploads/phonon-polariton-tidy3d-results.png" /></center>



In addition, Dr. Peining Li has kindly agreed to do an interview with us to shed more light on their research.

*What is surface phonon polariton and why does it have technological potential?*

Surface phonon polaritons are a type of quasiparticle formed by the coupling of photons and optical phonons in polar crystals. They possess strong electromagnetic-field confinement, ultraslow group velocities and long lifetimes. Thus, surface phonon polaritons bear potential for various applications, including hyperlensing, directional thermal energy transfer, vibrational molecular sensing and photodetection.

*How do you foresee the potential of the proposed nano-engineering techniques?*

Nowadays, researchers pursue on exploring peculiar scientific phenomena on the nanoscale or even smaller scale. Thus, processing and manufacturing of nanostructures are vitally important. Based on my past research experiences, we usually rely on electron beam lithography and focused ion beam lithography to fabricate structures at nanoscale. However, such nano-engineering techniques require expensive equipment, cumbersome multistep process and harsh experimental conditions. Luckily, some patterning techniques are committed to discover the potential of the proposed nanofabrication techniques. I believe that more approaches solving existing problems can be proposed in the future.

*How can fast numerical simulations accelerate research in this area?*

Fast numerical simulations are of great importance and convenience to researchers in our area. Before sample fabrications, we can foresee experimental results and accordingly design complex nanostructures by numerical simulations. In addition, simulations help us to verify and check the results after experiments. In my work titled “Infrared hyperbolic metasurface based on nanostructured van der Waals materials” in Science, numerical simulations are used multiple times. They effectively present exotic wavefronts of polaritons in such a complex hyperbolic metasurface, and offer researchers a deep insight into photonic phenomena. In a word, fast numerical simulations are a powerful tool to raise efficiency of scientific research.

*Can you share some of your upcoming work?*

Our group is working on spatial temporal nanoimaging on hyperbolic polaritons. We are going to publish an article titled “Ultrafast anisotropic dynamics of hyperbolic nanolight pulse propagation” in Science Advance. As known to all, Scattering-type scanning near-field optical microscopy (s-SNOM) provides high spatial resolution reaching down to ~10 nm in broad spectral ranges from visible to terahertz frequencies. Our technique combines time-domain interferometry and s-SNOM, providing unparalleled imaging resolution for measuring the anisotropic propagation of hyperbolic polariton pulses. A comprehensive strategy encompassing data acquisition, processing, and interpretation has been developed to address the challenges associated with the high-dimensional spacetime.

*Can you give some suggestions to students who want to work in this field?*

I suggest the students who want to work in this field to think more and learn more. Students need to think more before starting a project and doing every experiment. Repeatedly confirm the meaning and purpose of projects and experiments, and make sure you fully understand the aim of every step of experiments. Once deciding to start a project and experiment, try your best to do the tasks. Learn more and devote your time to finish the tasks, so you won’t regret later.



<center><img width="202" alt="Dr. Peining Li" src="/uploads/peining-li.jpg" /></center>

Dr. Peining Li received his PhD in Physics from RWTH Aachen University in 2016. After working as EU Marie Sklodowska-Curie fellow at nanoGUNE in Spain from 2016 to 2019. Subsequently, he started as a full professor at Huazhong University of Science and Technology. Dr. Li’s research focuses on optical nano-imaging of light-matter interaction at extreme scales and has published numerous articles in top scientific journals such as Science and Nature.
