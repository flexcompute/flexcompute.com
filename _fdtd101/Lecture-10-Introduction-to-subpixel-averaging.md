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
title: "Introduction to subpixel averaging: Lecture 10 | Flexcompute"
description: 'Understand subpixel averaging in the FDTD algorithm for capturing geometric nuances.'
active: 'Lecture-10'

click_id_prefix: '__pg_fdtd101_lecture-10'
tags:
- Subpixel averaging
- subpixel smoothing

course_number: 10
course_title: "FDTD 101: Introduction to subpixel averaging"
lecture_title: 'Lecture 10: Introduction to subpixel averaging'
lecture_description: "In this lecture, we discuss a powerful method known as subpixel averaging that enables the <a href='/tidy3d/learning-center/' id='__pg_fdtd101_lecture-10_fdtd' class='color-primary-hover'>FDTD</a> algorithm to capture geometric features below the discretization level. We discuss the basic ideas as well as	some subtleties associated with subpixel averaging."
container: "- Take the simulation of the slab transmission spectrum in 1D as an example, show the simplest scheme of subpixel averaging: spatial average of the dielectric function within each unit cell. The permittivity assignment over the Yee-grid will vary even for a small change of the slab thickness below the grid size.<br />
- Show the derivation of the subpixel averaging formula based on Ampere’s law for the tangential component of the electric field that is parallel to the interface."
  
previous_link: '/fdtd101/Lecture-9-Dielectric-constant-assignment-on-Yee-grids/'
prev_lecture_title: 'Dielectric constant assignment on Yee grids'
prev_course_number: 9


permalink: '/fdtd101/Lecture-10-Introduction-to-subpixel-averaging/'

time_consuming: 13 mins
thumbnail: '/assets/images/fdtd101/Lecture10.png'

pdf_url: '/assets/lecture/pdf/20220829/FDTD_Tutorial_10.pptx.pdf'
transcript: 'FDTD_Tutorial_10'
download_pdf_title: 'Download Introduction to subpixel averaging'

videoId: 779749707

left_tidy3d_logo_alt: "Tidy3D EM simulation software FDTD 101 Lecture 10: Introduction to subpixel averaging"
---
