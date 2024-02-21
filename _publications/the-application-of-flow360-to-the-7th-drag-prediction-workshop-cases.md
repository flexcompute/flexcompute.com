---
_schema: default
layout: post
title: The Application of Flow360 to the 7th Drag Prediction Workshop Cases
author: Thomas Fitzgibbon, CJ Doolittle, Philippe Spalart, Qiqi Wang
date: 2023-06-12 19:40:00
type: CFD
description: >-
  Explore Flexcompute's innovative contribution to the 7th Drag Prediction
  Workshop, showcasing how our advanced Flow360 solver accurately predicts
  aircraft drag, pitching moment, and complex aerodynamic phenomena. Dive into
  the comparison of various RANS closures, and see how the SA-RC-QCR model
  outperforms in replicating experimental data trends.
backlink: >-
  https://simcloud-public-1.s3.amazonaws.com/publications/DPW7/The+Application+of+Flow360+to+the+7th+Drag+Prediction+Workshop+Cases.pdf
post_image: /uploads/7th-drag-prediction-workshop.png
_inputs:
  layout:
    type: text
    label: LAYOUT
    comment: Please keep this field untouched.
    hidden: true
  title:
    type: text
    label: TITLE
  author:
    type: text
    label: AUTHOR
  date:
    type: datetime
    label: DATE
    instance_value: NOW
  type:
    type: select
    label: PRODUCT
    comment: Either CFD or EM
    options:
      values:
        - EM
        - CFD
  description:
    type: textarea
    label: DESCRIPTION
  backlink:
    type: url
    label: PUBLICATION LINK
    comment: The Publication Link
  post_image:
    type: image
    comment: This field is required
    label: POST IMAGE
---
This paper presents the contribution of Flexcompute to the 7th Drag Prediction Workshop, with CFD simulations computed using the Flow360 solver.&nbsp; Three cases were performed, including a grid convergence study, an alpha sweep, and Reynolds number study.&nbsp; The analysis is focused on different RANS closures with comparative predictions performed using the SA, lSST, SA-QCR and SA-RC-QCR turbulence models.&nbsp; Particular attention is put on the ability of each model to accurately predict the aircraft drag and pitching moment as well as on the prediction of the wing-body juncture and shock-induced separations.&nbsp; Comparisons are made with available experimental data including integrated loads and surface pressure predictions.&nbsp; The SA-RC-QCR model was able to accurately predict the drag magnitude and pitching moment break trends and showed good correlation with experiments for surface pressures.