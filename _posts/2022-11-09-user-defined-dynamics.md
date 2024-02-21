---
_schema: default
layout: post
title: Coupling Dynamics with Flow Solution | Flexcompute
post_title: Coupling User Defined Dynamics with Flow Solution
author: Nasser Sabet
date: 2022-11-18 16:00:00
categories:
  - Feature
tags: []
description: Revolutionize CFD simulations with Flow360’s User Defined Dynamics feature.
post_image: /uploads/20221111-flow360-logo.png
permalink: /blog/2022/11/18/user-defined-dynamics/
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
(Approximate reading time: 5mins)

Imagine we would like to simulate the flow of air around the wing of an airplane in order to calculate forces such as drag and lift, which are necessary for design purposes. Typically, we would use CFD (computational fluid dynamics) which uses an imported mesh, along with other inputs such as freestream velocity and angle of attack to simulate the flow around the wing. Then, the results are postprocessed to calculate the forces of interest.

This is great, but what if we would like to know what angle of attack leads to a specific value of these forces. So, instead of providing the angle of attack and getting the forces, we would like to have the forces as inputs and the angle of attack as an output. Rather than running the simulation with various angles of attack until we get the target force values, can we instead run only one simulation for this purpose? The answer is "yes"!

This example is only one of the many scenarios that can be simulated using the <a href="https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#userdefineddynamics"> User Defined Dynamics (UDD)</a> feature in Flow360. As the name suggests, UDD enables the user to define customized dynamics for their CFD simulations. For the example mentioned above, the user can formulate control logic with the input being the force coefficients and the output being the angle of attack. The controller will be run in conjunction with the CFD solver, and the required value of angle of attack will be shown as output to the user. If you are interested to see how such a controller can be implemented in Flow360, check out this [link](https://docs.flexcompute.com/projects/flow360/en/latest/capabilities/userDefinedDynamics/userDefinedDynamics.html). Another example in the context of using controllers is determining the required angular velocity of a BET disk to reach a target value of torque or thrust.

The use of UDD is not limited to controllers only. Basically, any set of algebric/differential equations can be used to couple custom dynamics with the CFD solver. For example, when the interactions between the geometry and the surrounding flow field are important, aero-structure interations (ASI) must be considered in the simulation. To this end, the user can import the governing differential equations through the UDD feature and connect it with sliding interfaces.
