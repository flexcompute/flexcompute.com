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
date: 2022-09-08T03:41:06.000+00:00
title: "Time Step & CFL in FDTD | Flexcompute"
description: "Deriving the CFL condition and its impact on FDTD algorithm time step size."
active: 'Lecture-07'

click_id_prefix: '__pg_fdtd101_lecture-07'
tags:
  - FDTD time step,
  - CFL condition in FDTD,
  - Courant Friendrichs Lewy FDTD,
  - FDTD algorithms
  - Spatial time step,
  - 2D Yee grids
  - 1D Yee grids,
  - numerical dependency FDTD,
  - FDTD courant number,
  - Temporal time step


course_number: 7
course_title: "FDTD 101: Time step size and CFL condition in FDTD"
lecture_title: 'Lecture 7: Time step size and CFL condition in FDTD'
lecture_description: 'The choice of time step size can have a strong impact on the behavior of <a href="/tidy3d/learning-center/" id="__pg_fdtd101_lecture-07_behavior-of-fdtd" class="color-primary-hover">FDTD</a> algorithms. In this lecture, we provide a simple and intuitive argument on deriving an important condition on choosing time step size, known as the Courant–Friedrichs–Lewy (CFL) condition.'
previous_link: '/fdtd101/Lecture-6-Introduction-to-perfectly-matched-layer/'
prev_lecture_title: 'Introduction to perfectly matched layer (PML)'
prev_course_number: 6
next_course_number: 8
next_lecture_title: 'Numerical dispersion in FDTD'
next_link: '/fdtd101/Lecture-8-Numerical-dispersion-in-FDTD/'
permalink: '/fdtd101/Lecture-7-Time-step-size-and-CFL-condition-in-FDTD/'
container:
  '- Graphically illustrate how information propagates over 1D and 2D Yee grids, which aids an easy derivation of the speed of numerical dependency and the CFL condition.<br />
  - Introduce Courant number, and explain that CFL condition imposes an upper bound of time step size decided by the smallest grid size in the computational domain.<br />
  - Show that computational cost increases rapidly with spatial resolution under two considerations: spatially more grid points, and temporally finer time step size required by CFL condition.'

time_consuming: 14 mins
thumbnail: '/assets/images/fdtd101/Lecture7.png'

pdf_url: '/assets/lecture/pdf/20220829/FDTD_Tutorial_7.pptx.pdf'
transcript: 'FDTD_Tutorial_7'
download_pdf_title: 'Download Time Step & CFL in FDTD'

videoId: 745557987

left_tidy3d_logo_alt: "Tidy3D EM simulation software FDTD 101 Tutorial 7 Time Step Size and CFL Condition"
---
