---
layout: lecture/cfd

custom_font: font2
author: 'Runda Ji and Qiqi Wang'
date: 2022-10-31T03:41:06.000+00:00
title: "Aircraft Mesh Prep for CFD: Lecture 3 | Flexcompute"
description: 'Dr. Qiqi Wang demonstrates how to generate the surface and volume meshes using the automated meshing workflow.'
active: 'Lecture-03'

click_id_prefix: '__pg_aircraft-cfd101_lecture-03'
tags:
- Surface Mesh
- Volume Mesh
- Anisotropic Refinement
- Volumetric Refinement Zone

course_number: 2
course_title: "Aircraft CFD 101: How to prepare surface and volume meshes for aircraft CFD simulation"
lecture_title: 'Lecture 3: How to prepare surface and volume meshes for aircraft CFD simulation'
lecture_description: 'In this video, we will demonstrate how to generate the surface and volume meshes using the automated meshing workflow. When creating the surface mesh, anisotropic cells will be generated near the leading edge and trailing edges which were labeled in ESP. Once the surface mesh is generated, we will further grow a volume mesh from the surface mesh. A mesh refinement box will be added to the volume mesh to better capture the nearfield flow field.'

permalink: '/aircraft-cfd101/Lecture-3-How-to-prepare-surface-and-volume-meshes-for-aircraft-CFD-simulation/'

previous_link: '/aircraft-cfd101/Lecture-2-How-to-construct-the-geometry-of-fuselage-for-aircraft-CFD-simulation/'
prev_lecture_title: 'How to construct the geometry of fuselage for aircraft CFD simulation'
prev_course_number: 2
next_link: '/aircraft-cfd101/Lecture-4-How-to-Run-a-CFD-Simulation-in-Flow360-and-Visualize-the-Results/'
next_lecture_title: 'How to Run a CFD Simulation in Flow360 and Visualize the Results'
next_course_number: 4

videoId: 769928177
download_links:
  - link: '/assets/cfd/json/surfaceMesh.json'
    click_id: '__pg_aircraft-cfd101_lecture-03_download_surfaceMesh.json_link'
    text: 'surfaceMesh.json'
  - link: '/assets/cfd/json/volumeMesh.json'
    click_id: '__pg_aircraft-cfd101_lecture-03_download_volumeMesh.json_link'
    text: 'volumeMesh.json'
    
references:
  - link: 'https://docs.flexcompute.com/projects/flow360/en/latest/preprocessing/automatedMeshing/automatedMeshing.html#json-surface-mesher'
    text: 'Extra info for surfaceMesh.json'
    click_id: '__pg_aircraft-cfd101_lecture-03_references_json-surface-mesher_link'
  - link: 'https://docs.flexcompute.com/projects/flow360/en/latest/preprocessing/automatedMeshing/automatedMeshing.html#json-volume-mesher'
    text: 'Extra info for volumeMesh.json'
    click_id: '__pg_aircraft-cfd101_lecture-03_references_json-volume-mesher_link'

left_cfd_logo_alt: "CFD simulation tool FDTD 101 Lecture 3: How to prepare surface and volume meshes for aircraft CFD simulation"
---
