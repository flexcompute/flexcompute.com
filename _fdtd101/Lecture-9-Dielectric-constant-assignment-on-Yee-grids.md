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
title: "Dielectric Assignment on Yee Grids: Lecture 9 | Flexcompute"
description: "In this lecture, we delve into errors arising from the dielectric constant's imperfect representation on Yee grids in photonic simulations."
active: 'Lecture-09'

click_id_prefix: '__pg_fdtd101_lecture-09'
tags:
- Yee grid
- dielectric constant assignment 
- numerical error
- counting the grids

course_number: 9
course_title: "FDTD 101: Dielectric constant assignment on Yee grids"
lecture_title: 'Lecture 9: Dielectric constant assignment on Yee grids'
lecture_description: "In this lecture, we discuss another important source of error that arises from the imperfect description of the dielectric constant distribution of a photonic device on discrete Yee grids. We highlight some subtleties in the dielectric constant assignment on the grids that can lead to significant error. This motivates us to consider more advanced <a href='/tidy3d/learning-center/' id='__pg_fdtd101_lecture-09_more-advanced-fdtd' class='color-primary-hover'>FDTD</a> techniques such as subpixel averaging and nonuniform grid sizes."
container: "- Explain Yee grid in 1D, and show how the dielectric constant is assigned to each grid.<br />
- Take the simulation of the slab transmission spectrum as an example, we show how to count the number of grids assigned to the slab. Then we show that with a basic FDTD algorithm, the slab thickness in the simulation can deviate a lot from the actual slab thickness, resulting in a significant shift of the transmission peak frequency. <br /> "
  
previous_link: '/fdtd101/Lecture-8-Numerical-dispersion-in-FDTD/'
prev_lecture_title: 'Numerical dispersion in FDTD'
prev_course_number: 8
next_course_number: 10
next_lecture_title: 'Introduction to subpixel averaging'
next_link: '/fdtd101/Lecture-10-Introduction-to-subpixel-averaging/'

permalink: '/fdtd101/Lecture-9-Dielectric-constant-assignment-on-Yee-grids/'

time_consuming: 13 mins
thumbnail: '/assets/images/fdtd101/Lecture9.png'

pdf_url: '/assets/lecture/pdf/20220829/FDTD_Tutorial_9.pptx.pdf'
transcript: 'FDTD_Tutorial_9'
download_pdf_title: 'Download Dielectric constant assignment on Yee grids'

videoId: 769559198

left_tidy3d_logo_alt: "Tidy3D EM simulation software FDTD 101 Lecture 9: Dielectric constant assignment on Yee grids"
---
