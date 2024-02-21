---
layout: post
date: 2023-02-09T15:08:39.000+00:00
type: CFD
img_width: 
img_height: 
title: Fundamental Studies Towards Rotor Simulations and Design
author: Feilin Jia, Maks J Groom, Philippe Spalart and Qiqi Wang
description: ''
backlink: https://simcloud-public-1.s3.amazonaws.com/publications/Jia_et_al_2023_Fundamental_Studies_Towards_Rotor_Simulations_and_Design.pdf
post_image: "/uploads/20230216-pubs-thumbnail-fundamental-studies.png"
img_style: ''

---
We use numerical solutions to investigate the actuator-disc model in hover. Most solutions come from a conventional Navier-Stokes solver named Flow360, and a few from a Vortex-Ring Method. In Flow360 the source term for vorticity, namely the curl of the force field, is regularized and we have failed to obtain steady solutions with very tight regularizations; the vortex sheet becomes so thin that Kelvin-Helmholtz waves appear, which we consider physically correct. The findings agree with theory and earlier numerical work, and not with the textbook presentations or intuition, and that in three respects. First, even with a uniform pressure jump on a flat disc the velocity through the disc is far from uniform, and it is directed upwards near the rim. The cross-section of the vortex sheet begins as a 45◦ spiral and therefore it has an initial excursion over the disc, as opposed to a funnel starting downwards with low curvature. Second, again with uniform load, the entire flow field depends only on the rim of the disc, and not on the shape of the surface; only the pressure field reacts to a change in shape (the fluid is incompressible). This opens the door to drooped disc edges/blade tips in actual designs, which could control blade-vortex interaction and also have a "winglet effect" if the rotor diameter is constrained. Third, according to theory, uniform loading gives the lowest power consumption for a given thrust and diameter, in other words the best Figure of Merit, even though the velocity through the disc is so non-uniform; this is because the velocity far downstream is uniform, and that is what controls the power. It is important to invalidate misleading textbook assertions, because astute users will question the results of CFD when they disagree with these assertions. We however find out numerically and from both methods that some non-uniform distributions (higher towards the tip) give a Figure of Merit slightly superior to that from the uniform load; this needs to be explored.