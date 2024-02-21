---
_schema: default
layout: post
title: Airplane CFD Speed Sweep in 15 Minutes | Flexcompute
post_title: How to Run a Speed Sweep of an Airplane with Flow360 in 15 Minutes
author: Qiqi Wang
date: 2021-10-08 14:00:00
categories:
  - Tutorial
tags:
  - Flow360
  - XFoil
  - ESP
  - airplane
  - CFD
  - RANS
  - Pointwise
  - CAD
  - Meshing
  - airfoil
  - fuselage
  - induced drag
  - tip vortex
  - downwash
  - lift
  - drag
  - wing
description: >-
  Learn to conduct a speed sweep analysis of an airplane using Flow360 in just
  15 minutes.
post_image: /assets/2021-10-06-speed-sweep/images/image12.png
permalink: /blog/2021/10/08/flow60-speed-sweep
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
In this article, we describe how to run a speed sweep of an airplane using Flow360. A speed sweep analyzes the performance of the airplane when flying at different airspeeds while carrying the same load. Such analysis is useful for determining the most fuel efficient cruise speed, the optimal climb speeds (Vx and Vy), as well as the range of the airplane.<span class="c0"> This can be done in Flow360 in 15 minutes.</span>



<span class="c0">We start with the model airplane created using Xfoil and Engineering Sketch Pad (ESP), Meshed using Pointwise. The generated mesh is uploaded to the Flow360 web interface.</span>

![](/assets/2021-10-06-speed-sweep/images/image8.png)

<span class="c0">In the web interface, we fork a previous case of this mesh by clicking the “fork” button next to the case. Forking a case runs a new simulation that starts from the final solution of a previous case. This functionality is useful for continuing a previous simulation that did not have sufficient steps to converge. It is also useful for starting a new simulation with a slightly different configuration than the previous one. Forking is also used for continuing unsteady simulations.</span>



<span class="c0">For the speed sweep, we need to change the speed and target lift coefficient for each simulation. The speed can be modified in the “freestream”: “Mach” section of the input json file. The target lift coefficient can be found in the “runControl”: “targetCL” portion of the json input file. For a complete reference of the inputs of Flow360, please refer to our API reference at https://docs.flexcompute.com/api.html</span>

![](/assets/2021-10-06-speed-sweep/images/image5.png)



<span class="c0">Here, we set the lowest speed at Mach 0.158 and a lift coefficient of 1.2. Note that we set “startAlphaControlPseudoStep” to 1000, which tells Flow360 to start seeking for the target lift coefficient after 1000 iterations.</span>



![](/assets/2021-10-06-speed-sweep/images/image11.png)

<span class="c0">Once the case is started, the residual starts to be updated in the web interface. We observe that the convergence happens in two phases. The first phase happens within the first 1000 iterations, before Flow360 starts seeking the target lift coefficient. The second phase starts at the 1000th iteration, during which the target lift is achieved. We see that in slightly more than 4000 iterations, the target lift coefficient is achieved exactly.</span>

![](/assets/2021-10-06-speed-sweep/images/image2.png)

<span class="c0">The aerodynamic moments are also updated during the simulation. Here, the x and z moments are almost exactly zero. The small values are due to the asymmetric mesh. The only significant moment is useful for determining the longitudinal stability of the airplane.</span>

![](/assets/2021-10-06-speed-sweep/images/image1.png)

<span class="c0">Also from the Flow360 web interface, you can examine minimum density, minimum pressure, as well as maximum velocity in the flow field, including their location. This is useful for identifying important flow features, as well as for troubleshooting diverging cases.</span>

![](/assets/2021-10-06-speed-sweep/images/image14.png)

<span class="c0">The speed sweep consists of a series of cases like this, at lift coefficients (CL) equal to 1.2, 1.0, 0.75, 0.5, 0.3, 0.2, and 0.1, respectively, each ensuring that the product of CL and the square of the Mach number is constant. Each of the seven cases, converging in about 4000 iterations on a mesh with 3 million nodes and 18 million cells, took about 2 minutes to complete. The entire speed sweep thus completed in slightly more than 15 minutes. After all the runs were completed, we obtain the following polar plot:</span>

![](/assets/2021-10-06-speed-sweep/images/image12.png)

<span class="c0">We observe that the drag coefficient increases roughly quadratically as the lift coefficient increases up to 0.75, and starts to increase significantly faster starting at a lift coefficient of 1.0. The lift to drag ratio, which determines fuel efficiency of the airplane, is also obtained. From this plot, we deduce an optimal cruising lift coefficient of 0.5, which produces the least drag for the weight of the airplane. Because drag is equal to the amount of energy required per flying distance, a lift coefficient of 0.5 means the optimal fuel economy.</span>



![](/assets/2021-10-06-speed-sweep/images/image3.png)



<span class="c0">The web interface of Flow360 also visualizes the surface flow path, colored by skin friction coefficient. Here shows the case for CL=0.1</span>

![](/assets/2021-10-06-speed-sweep/images/image10.png)



<span class="c0">CL=0.2:</span>



![](/assets/2021-10-06-speed-sweep/images/image13.png)



<span class="c0">CL=0.3:</span>

![](/assets/2021-10-06-speed-sweep/images/image7.png)



<span class="c0">CL=0.5:</span>

![](/assets/2021-10-06-speed-sweep/images/image9.png)



<span class="c0">CL=0.75:</span>

![](/assets/2021-10-06-speed-sweep/images/image9.png)



<span class="c0">CL=1.0:</span>

![](/assets/2021-10-06-speed-sweep/images/image4.png)



<span class="c0">CL=1.2:</span>

![](/assets/2021-10-06-speed-sweep/images/image6.png)

<span class="c0">From these surface plots, we can deduce the reason for the significant drag rise starting at CL=1.0. The wing starts to stall from the root, which is typical for unswept wings or forward swept wings without significant wash-in.</span>
