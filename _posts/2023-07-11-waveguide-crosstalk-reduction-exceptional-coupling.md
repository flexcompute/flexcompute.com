---
_schema: default
layout: post
title: Waveguide Crosstalk Reduction Methods | Flexcompute
post_title: Tidy3D Modeling of Exceptional Coupling for Waveguide Crosstalk Reduction
author: Tom Chen
date: 2023-07-11 15:24:00
categories:
  - Article
  - Case Study
tags:
  - Waveguide Crosstalk Reduction
  - Anisotropic Metamaterial Cladding
  - Exceptional Coupling in Photonics
  - Modeling in Photonics
  - Tidy3D
  - Integrated Photonic Components
  - Reducing Crosstalk in Photonic Integrated Circuits
  - Subwavelength Gratings in Photonics
  - Scalable Photonic Integrated Circuits
  - Professor Sangsik Kim
  - Fast Numerical Simulations in Photonics
description: >-
  Explore waveguide crosstalk reduction through anisotropic metamaterial
  cladding with Tidy3D.
post_image: /uploads/anisotropic-metamaterial-cladding.png
permalink: /blog/2023/07/11/exceptional-coupling
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
Current technological trends emphasize the dense integration of photonic components on a chip. However, as the proximity between these components increases, the issue of crosstalk becomes more significant and detrimental. Therefore, photonic engineers need to apply other design ideas to actively minimize the crosstalk.

The [research group](https://kimgroup.kaist.ac.kr/) led by Professor Sangsik Kim utilized anisotropic metamaterial cladding to achieve a remarkable reduction of crosstalk by leveraging exceptional coupling. Their novel designs have led to subsequent publications in [Optica](https://opg.optica.org/optica/fulltext.cfm?uri=optica-7-8-881&amp;id=433875) and [Light: Science & Applications](https://www.nature.com/articles/s41377-023-01184-5).

<center><img width="606" alt="anisotropic metamaterial cladding achieves crosstalk reduction by leveraging exceptional coupling" src="/uploads/anisotropic-metamaterial-cladding-1.png" /></center>

<center> </center>

We replicated the simulations of the interesting results presented in the original paper and highlighted it as a [public example](https://www.flexcompute.com/tidy3d/examples/notebooks/ZeroCrossTalkTE/). The simulation contains long waveguides (&gt;100 µm) and fine details (the metamaterial cladding), which is challenging for conventional full-wave solvers. However, Tidy3D only took minutes to finish the job!

<center><img width="606" alt="Tidy3D results for simulating anisotropic metamaterial cladding" src="/uploads/tidy3d-results-1.png" /></center>

<center> </center>

In addition, Professor Kim has kindly agreed to do an interview with us to shed more light on his research. Below is the full interview, containing our questions and his responses.

*1\. What are anisotropic metamaterials and why are they useful in integrated photonics?*

Anisotropic metamaterials form a unique subset of metamaterials, which are artificially designed to exhibit exclusive characteristics not found in natural substances. Anisotropic metamaterials exhibit a strong anisotropy in their dielectric permittivity, leading to distinct *ε<sub>x</sub>*, *ε<sub>y</sub>*, and *ε<sub>z</sub>*. In integrated nanophotonics, such anisotropic metamaterials can be implemented using a grating pattern whose periodicity is much less than wavelength; thus, subwavelength gratings (SWGs) serve as the primary implementation of anisotropic metamaterials. By manipulating the direction, filling fraction, and tilt angle of the SWGs, one can modify the refractive indices of the homogenized effective medium, especially tailoring the anisotropic properties. This versatile capability to adjust the effective medium is crucial in shaping the optical mode size and phase, skin-depth of a guided mode, and dielectric perturbations, thereby essential for designing various photonic device components.

*2\. Why is crosstalk suppression important?*

Crosstalk pertains to an undesirable coupling among adjacent optical waveguides or devices, a common challenge in photonic integrated circuits (PICs). For example, suppose we place two conventional strip waveguides nearby. In that case, the optical power in one waveguide will transfer to the other (i.e., crosstalk) due to the evanescent field coupling. Consequently, one needs to separate two waveguides large enough to avoid the crosstalk, and this inherently restricts the integration density of the photonic chip, thereby limiting the scalability of PICs. Thus, crosstalk suppression is critical for achieving a more densely packed PIC, resulting in more scalable, cost-effective chips. Moreover, the degree of crosstalk is directly related to the background noise level in a PIC, which becomes increasingly significant in larger-scale PICs. Therefore, crosstalk suppression plays a pivotal role in PICs, particularly from the perspective of scalability.

*3\. What is exceptional coupling?*

Exceptional coupling refers to an extraordinary coupling phenomenon that effectively eliminates coupling, or in other words, achieves completely zero crosstalk even between closely spaced waveguides. This significant breakthrough leverages SWGs to engineer waveguide perturbations anisotropically. For example, in a conventional strip waveguide, the perturbation is isotropic, and the coupling follows the dominant electric field and is finite. But in the case of anisotropic metamaterials like SWGs, even the other field components contribute significantly to perturbation since the perturbation strength is weighted differently (Δ*ε<sub>x</sub>*≠Δ*ε<sub>y</sub>*≠Δ*ε<sub>z</sub>*), i.e., anisotropic perturbation. Exceptional coupling represents a unique point where the total coupling coefficient equals zero (\|κ\|=0), achievable exclusively via anisotropic perturbation with SWG, leading to zero crosstalk. This exceptional coupling was achieved in guided TE and leaky TM modes, as detailed in Optica 7, 881–887 (2020) and Light: Science & Applications 12, 135 (2023).

*4\. How can fast numerical simulations accelerate research in this area?*

Fast numerical simulations hold immense potential in propelling the general field of integrated photonics, including SWG anisotropic metamaterials. Faster simulations can expedite optimizing device designs and validate concepts at a larger scale, thereby significantly reducing the time and cost associated with experimental efforts. For example, while we knew about the existence of exceptional coupling in Optica 7, 881–887 (2020) via modal analysis, it took much time to verify and demonstrate it experimentally. Since our signals and phenomena occur at the noise level, we needed total device lengths larger than 100 μm, which would require a long time for full FDTD simulations. At this scale, running a few simulations to confirm the phenomena is feasible but not ideal for optimizing or more iterative works. Thus, we even did not attempt to run a full FDTD but directly worked on experimental demonstrations. We needed to run a couple of trials to demonstrate the results. However, utilizing fast simulation tools like Tidy3D could have accelerated this iterative and optimization process, reducing the time spent on the experiments.

*5\. Which part of the work gets you most excited?*

The most exciting part of our work is the new type of waveguide coupling with anisotropic media, which is realistic and provides more degrees of freedom for modal engineering. We are excited to add new mechanisms to dielectric perturbation and waveguide coupling, which are well-established and widely used fundamentals in photonics. Moreover, these phenomena are not just academically thrilling but also hold substantial practical value. Since SWGs can be realized through periodic patterns with low-loss dielectrics, this concept has significant potential to propel industrial advancement, not limited to academic innovation.

*6\. Can you share some of your upcoming work?*

Currently, our team is trying to apply SWG metamaterials to other component-level PIC devices to enhance their performances, including reducing noise levels and device sizes. Note that our findings on exceptional coupling were predominantly based on simple waveguide schemes and modes. We intend to extend these modal properties to other functional devices to decrease crosstalk and introduce larger birefringence. Our ultimate goal is to transform traditional PIC schemes into SWG-based PIC schemes, achieving larger scalability and reduced noise within the chip.

*7\. Can you give some suggestions to students who want to work in this field?*

I encourage students to expand their intellectual horizons and not limit themselves to a specific research boundary. Attend conferences, interact with peers, and learn from researchers in other fields. I like Steve Jobs' quote: "Creativity is connecting dots," and suggest students identify and collect their own dots of knowledge. Finally, have a strong faith that those dots will eventually be connected to innovate the future, which will be.

<center><img width="202" alt="Professor Sangsik Kim" src="/uploads/professor-sangsik-kim-1.png" /></center>

<center> </center>

Professor Sangsik Kim received his BS from Seoul National University in 2008 and PhD from Purdue University in 2015. After a postdoc experience at NIST, he started an Assistant Professor position at Texas Tech University and moved to an Associate Professor position at the Korea Advanced Institute of Science and Technology (KAIST) in 2022. Professor Kim’s research interest is developing novel integrated nanophotonic devices and their applications, seeking to bridge the gap between new science and future technologies.
