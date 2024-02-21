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
title: "Intro to Perfectly Matched Layer (PML) | Flexcompute"
description: "Delve into Perfectly Matched Layer's applications in truncating FDTD computational regions."
active: 'Lecture-06'

click_id_prefix: '__pg_fdtd101_lecture-06'
tags:
  - perfectly matched layer (PML)
  - compute unbounded truncate
  - Truncate computational domain
  - computational domain PML
  - Fourier analysis simulation
  - broad range requency PML
  - coordinate transformation PML
  - parasitic reflection intensity
  - compute parasitic reflection
  - Fabry-Parot cavity

course_number: 6
course_title: "FDTD 101: Introduction to perfectly matched layer (PML)"
lecture_title: 'Lecture 6: Introduction to perfectly matched layer (PML)'
lecture_description: 'Perfectly matched layer (PML) is commonly used to truncate unbounded computational region, since an ideal PML can completely absorb the incoming waves from all angles of the incidence without any reflection. In this lecture, we explain the basic idea behind PML, and show how to characterize the performance of PML.'
previous_link: '/fdtd101/Lecture-5-Modeling-dispersive-material-in-FDTD/'
prev_lecture_title: 'Modeling dispersive material in FDTD'
prev_course_number: 5
next_course_number: 7
next_lecture_title: 'Time step size and CFL condition in FDTD'
next_link: '/fdtd101/Lecture-7-Time-step-size-and-CFL-condition-in-FDTD/'
permalink: '/fdtd101/Lecture-6-Introduction-to-perfectly-matched-layer/'
container:
  '- Explain the concept of PML through coordinate transformation.<br />
  - Show that the performance of PML should be characterized by the amplitude rather than the intensity of parasitic reflection, and present a simple approach to compute parasitic reflection at many frequencies.<br />
  - Illustrate typical signature in the spectrum when the parasitic reflection at the boundary is significant.'

time_consuming: 17 mins
thumbnail: '/assets/images/fdtd101/Lecture6.png'

pdf_url: '/assets/lecture/pdf/20220829/FDTD_Tutorial_6.pptx.pdf'
transcript: 'FDTD_Tutorial_6'
download_pdf_title: 'Download Intro to PML'
source_html_list:
  - html: 'fdtd101/FDTD_Python_Tutorial_06.html'

videoId: 737764072
download_links:
  - url: '/assets/lecture/ipynb/FDTD_Python_Tutorial_06.ipynb'
    text: 'HERE'
    click_id: '__pg_fdtd101_lecture-06_link_here'
public_links:
  - url: 'https://tidy3d.simulation.cloud/workbench?taskId=f50cd701-0ff8-41cf-a4c6-9e8539dfad7c'
    click_id: '__pg_fdtd101_lecture-06_PML-reflection-measurement_link_here'
    enable: true
    text: "PML reflection measurement"
  - url: 'https://tidy3d.simulation.cloud/workbench?taskId=8d070ce0-b561-4042-a8ed-f98052b1b4d9'
    click_id: '__pg_fdtd101_lecture-06_FP-cavity-simulation-with-2-PML-layers_link_here'
    enable: true
    text: "FP cavity simulation with 2 PML layers"
  - url: 'https://tidy3d.simulation.cloud/workbench?taskId=0fb3e733-cce1-4923-bfb7-e0f774f37d11'
    click_id: '__pg_fdtd101_lecture-06_FP-cavity-simulation-with-default-PML-setup_link_here'
    enable: true
    text: "FP cavity simulation with default PML setup"


left_tidy3d_logo_alt: "Tidy3D EM simulation software FDTD 101 Tutorial 6 Perfectly Matched Layer PML"
---
