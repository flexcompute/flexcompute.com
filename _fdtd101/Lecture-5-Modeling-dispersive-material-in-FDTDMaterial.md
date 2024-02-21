---
layout: learning-center/fdtd101
custom_font: font2
custom_css:
  - learning-center/fdtd101
  - learning-center/menu
  - learning-center/home

menu_config:
  collapsed: true
  selected: 'FDTD101'

author: 'Weiliang Jin, Zongfu Yu and Shanhui Fan'
date: 2022-04-13T03:41:06.000+00:00
title: "Dispersive Material in FDTD: Lecture 5 | Flexcompute"
description: 'Discover how to include material dispersion in FDTD simulations and its effects on light color.'
active: 'Lecture-05'

click_id_prefix: '__pg_fdtd101_lecture-05'
tags:
  - FDTD modeling 
  - dispersive material in FDTD
  - material dispersion
  - dispersion in FDTD simulations
  - complex-conjugate pole-residue method
  - complicated dispersion relations
  - inferred from tabulated data
  - simulating crystalline silicon slab
  - transmission
  - simulate crystalline slab
  - dispersion fitting tools

course_number: 5
course_title: "FDTD 101: Modeling dispersive material in FDTD"
lecture_title: 'Lecture 5: Modeling dispersive material in FDTD'
lecture_description: 'Material dispersion is a very common phenomenon in which the material responds differently to light of different color. In this lecture, we show how to include material dispersion in <a href="/tidy3d/learning-center/" id="__pg_fdtd101_lecture-05_fdtd-simulations" class="color-primary-hover">FDTD</a> simulations.' 
previous_link: '/fdtd101/Lecture-4-Prelude-to-Integrated-Photonics-Simulation-Mode-Injection/'
prev_lecture_title: 'Prelude to Integrated Photonics Simulation: Mode Injection'
prev_course_number: 4
next_course_number: 6
next_link: '/fdtd101/Lecture-6-Introduction-to-perfectly-matched-layer/'
next_lecture_title: 'Introduction to perfectly matched layer (PML)'
permalink: '/fdtd101/Lecture-5-Modeling-dispersive-material-in-FDTD/'
container:
  '- Show how to include simple analytical dispersion relations in FDTD, illustrated by an example of simulating surface plasmon polaritonic (SPP) resonance between gold and air interface.<br />
  - Introduction to a popular method for describing material dispersion in FDTD, known as the complex-conjugate pole-residue method.<br />
  - Show how to include more complicated dispersion relations that need to be inferred from tabulated data, illustrated by an example of simulating crystalline silicon slab transmission with the help of dispersion fitting tools.'

time_consuming: 14 mins
thumbnail: '/assets/images/fdtd101/Lecture5.png'

pdf_url: '/assets/lecture/pdf/20220829/FDTD_Tutorial_5.pptx.pdf'
transcript: 'FDTD_Tutorial_5'
download_pdf_title: 'Download FDTD Modeling Material Dispersion'
source_html_list: 
    - html: 'fdtd101/FDTD_Python_Tutorial_05_part1.html'
    - html: 'fdtd101/FDTD_Python_Tutorial_05_part2.html'

videoId: 725357301
download_links:
  - url: '/assets/lecture/ipynb/FDTD_Python_Tutorial_05_part1.ipynb'
    text: '1'
    click_id: '__pg_fdtd101_lecture-05_link_part1'
  - url: '/assets/lecture/ipynb/FDTD_Python_Tutorial_05_part2.ipynb'
    click_id: '__pg_fdtd101_lecture-05_link_part2'
    text: '2'
public_links:
  - url: 'https://tidy3d.simulation.cloud/workbench?taskId=808557bd-21b8-4901-8599-fe64c5feba65'
    click_id: '__pg_fdtd101_lecture-05_drude-metal_link_here'
    enable: true
    text: "Drude metal"
  - url: 'https://tidy3d.simulation.cloud/workbench?taskId=90bf3821-edbc-41c7-aa7a-2a32ee42d068'
    click_id: '__pg_fdtd101_lecture-05_dispersive-silicon-slab_link_here'
    enable: true
    text: "Dispersive silicon slab"

left_tidy3d_logo_alt: "Tidy3D EM simulation software FDTD 101 Tutorial 5 Modeling dispersive material in FDTD"
---
