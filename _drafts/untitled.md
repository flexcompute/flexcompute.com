---
layout: post
title: Aero-Structure Interaction with User-Defined Dynamics
author: Flexcompute
date: 2023-01-06 15:24:56 +0000
categories:
- Feature
tags: []
description: ''
post_image: ''
post_title: ''
permalink: "/blog/2023/1/6/aero-structure-interaction/"

---
***
(Approximate reading time: 5mins)
In the recent <a href="https://docs.flexcompute.com/projects/flow360/en/release-22.3.3.0-tag/releaseNotes/releaseNotes.html#release-22-3-3-0"> release-22.3.3.0</a> of Flow360 an aero-structure interaction (ASI) capability has been introduced, allowing users to simulate coupled interactions between the model geometry and the surrounding flow field. This feature is useful when the effect of aerodynamic loads are siginificant enough to alter the motion of the geometry or when the structural natural frequency is similar to the flow loading frequncy and resonance is expected. Example use cases include simulating flutter motion of a wing and dynamic adjustment of rotor blade pitch to achieve maximum lift force.

### **ASI Configuration**

The simualtion of ASI is enabled by connecting <a href="https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#slidinginterfaces-list"> sliding interfaces</a> with <a href="https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#userdefineddynamics"> user-defined dynamics (UDD)</a>. Now a sliding interface can be specified via the `isDynamic` flag in the `slidingInterfaces` section of the case JSON. This tells the solver that the rotation motion of this sliding interface is controlled by the UDD. The `userDefinedDynamics` section of the case JSON now allows for aerodynamic forces as input variables and the sliding interface rotation angle as output variables. Users are free to specify the relation between the aerodynamic forces and the rotation angle.

An example workflow for ASI simulations of an isolated plate is summarized below::

1. At the beginning of each physical timestep the aerodynamic moment (`rotMomentY`) on the rotating plate is obtained by the solver.
2. UDD calculates the rotational acceleration (`omegaDot`), rotational velocity (`omega`), and rotation angle (`theta`) as state variables following the `updateLaw` and then feeds them to the sliding interface.
3. The sliding interface is rotated to the updated angle.
4. The flow field is solver for at the next physical timestep.

### **ASI Results**

At certain incomming flow speeds an isolated plate will flutter as a result of the periodic aerodynamic loading. This is captured by ASI simulations and presented in the following figures:

<p align = "center">
<img title="Figure 1: Rotation angle time history of the plate." src="/uploads/20221109-flutter.png" style="width: 500px;">
</p>
<p align = "center">
<small><i>Figure 1: Rotation angle time history of the plate.</i></small>
</p>

<p align = "center"> <img title="Figure 2: Flutter motion of the plate under aerodynamic and structural forces." src="/uploads/20221109-platefluttermotion.gif" style="width: 600px;"> </p>
<p align = "center">
<small><i>Figure 2: Flutter motion of the plate under aerodynamic and structural forces.</i></small>
</p>

Further details can be found in the <a href="https://docs.flexcompute.com/projects/flow360/en/latest/capabilities/userDefinedDynamics/userDefinedDynamics.html#dynamic-grid-rotation-using-structural-aerodynamic-load"> Flow360 Documentation</a>.