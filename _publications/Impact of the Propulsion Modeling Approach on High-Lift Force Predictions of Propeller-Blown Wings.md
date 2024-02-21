---
layout: post
author: Cecile Casses, Chris Courtin, Mark Drela, Thomas Fitzgibbon, Runda Ji, Maciej Skarysz, Philippe Spalart and Qiqi Wang
date: 27 June 2022
img_width: 200
title: Impact of the Propulsion Modeling Approach on High-Lift Force Predictions of Propeller-Blown Wings

description:
post_image: "/assets/publication/Electra_FC.png"
type: CFD
# permalink: ""
backlink: "https://simcloud-public-1.s3.amazonaws.com/publications/Electra_Joint_Paper/Electra_FC_Impact_of_Propulsion_Modeling_Approach_on_High_Lift_Force_Prediction_of_Propeller_Blown_Wings.pdf"
---
Distributed electric propulsion presents new opportunities to design aircraft which take advantage of the deliberate close interaction between propellers, wings, and flaps. Significant forces and moments arise which would not be well-captured by modeling the systems in isolation. The ability to accurately predict these forces is important for a number of new vehicle designs, including electric short takeoff and landing (eSTOL) aircraft which use the interaction between the propellers and wing/flaps to generate very high wing lift coefficients, if normalized by the flight speed. The flow field at the propellers is strongly influenced by the presence of the wing, and vice versa. This paper presents CFD analyses relevant to an eSTOL wing in a high-lift configuration, comparing four different approaches to modeling the propellers - an actuator disk, a steady and an unsteady blade element model, and a blade-resolved unsteady simulation. This is done in the Flow360 Navier-Stokes solver developed by Flexcompute. We begin with an isolated rotor, continue with a model problem that comprises a single rotor with behind it a section of wing and flap, and conclude with a full 3D configuration. The actuator disk is advantageous from a computational time point of view, but introduces error into the solutions because it cannot adapt to strongly varying local inflow conditions. The time-resolved simulations are expected to give the most accurate solutions, but are computationally expensive. An adaptive blade-element model gives a good compromise between accuracy and performance.
