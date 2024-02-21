---
layout: post
author: Tyler W. Hughes, Momchil Minkov, Victor Liu, Zongfu Yu, and Shanhui Fan
date: 2021-10-11 00:00:00
title: A perspective on the pathway toward full wave simulation of large area metalenses
type: EM
description:
post_image:
backlink: https://aip.scitation.org/doi/pdf/10.1063/5.0071245
journal_name: Appl. Phys. Lett. 119, 209902 
notebook_link: "/tidy3d/examples/notebooks/Metalens/"
---
Metalenses for optical beam manipulation have a significant impact in many exciting applications due their compact, planar geometry and ease of fabrication. However, the enormous physical size of metalenses relative to the optical wavelength provides a barrier to performing accurate simulations in a reasonable time frame. In principle, full-wave simulation techniques, such as the finite-difference time-domain (FDTD) method, are ideal for metalens modeling as they give an accurate picture of the device performance. However, when applied using traditional computing platforms, this approach is infeasible for large-diameter metalenses and requires hours and days to simulate even devices of modest size. To alleviate these issues, the standard approach has been to apply approximations, which typically employ simplified models of the metalens unit cells or ignore coupling between cells, leading to inaccurate predictions. In this Perspective, first, we summarize the current state of the art approaches in simulating large scale, three-dimensional metalenses. Then, we highlight that advances in computing hardware have now created a scenario where the full-wave simulation of large area metalenses is feasible within a reasonable time frame, providing significant opportunities to the field. As a demonstration, we show that a hardware-accelerated FDTD solver is capable of simulating a fully 3D, large area metalens of size 100λ × 100λ, including the focal length, in under 5 min. The application of hardware-accelerated, full-wave simulation tools to metalens simulation should have a significant impact in the metalens field and the greater photonics community.
The authors wish to acknowledge the help of Lei Zheng for technical assistance.
All authors have a financial interest in Flexcompute, Inc., which developed the Tidy3D solver used in this work.
