---
_schema: default
layout: post
title: 'Philippe Spalart: Fluid Sciences Director | Flexcompute'
post_title: Philippe Spalart Named Director of Fluid Sciences at Flexcompute
author: Zongfu Yu
date: 2021-11-23 15:00:00
categories:
  - News
tags:
  - Spalart-Allmaras Model
  - Turbulence Model
  - Philippe Spalart
  - Hiring
description: >-
  We are thrilled to welcome renowned aerospace engineer Dr. Philippe Spalart as
  a Director of Fluid Sciences at Flexcompute.
post_image: /assets/2021-11-23-Welcome-Philippe-Spalart-Aboard/images/avatar.png
permalink: /blog/2021/11/23/Welcome-Philippe-Spalart-Aboard/
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
<center><img width="306" title="Philippe Spalart" alt="Philippe Spalart" src="/assets/2021-11-23-Welcome-Philippe-Spalart-Aboard/images/avatar.png" /></center>

We are thrilled to welcome renowned aerospace engineer Dr. Philippe Spalart as a Director of Fluid Sciences at Flexcompute. With his years of extensive experience, there is no one more qualified to head our fluid sciences.

Every engineer in aerospace in the last thirty years has heard Philippe’s name, largely thanks to his invention of the SA (Spalart-Allmaras) model in 1992, which has set a precedent across the aerospace community for advanced and accurate modeling with minimal complexity. Philippe’s contribution further extended much beyond aerospace engineering with the invention of Detached Eddy Simulation.

**Philippe, The Spalart-Allmaras Model, and Detached Eddy Simulation**

His love of engineering and aerospace started from a young age: he was interested in airplanes as a boy and later went on to finish his Bachelors in Engineering in France before emigrating to the United States with the intention of getting his Masters in Aerospace from Stanford. It wasn’t long before he was noticed and asked to complete his Ph.D. with the help of a scholarship from NASA. Needless to say, that was just the beginning of his career — both in aerospace engineering and in the United States.

“I came to the US for one year in 1978, and look what happened,” Philippe likes to say and looking back on his career, this decision moved Aerospace forward globally. He started at NASA with Direct Numerical Simulations, in which the turbulence is simulated without any empirical modeling before, in 1990, jumping all the way to the practice of modeling all the turbulence. His and his team’s work still encompasses the full spectrum, with aeroacoustics in addition.

His SA model was created to assist in the often frustrating process that comes with modeling the aerodynamics of the airflow around an airplane — a necessary part of designing every aircraft. The software and hardware available to us in the last decades had made predicting the performance of the airplane with the chaotic airflow traditionally difficult…to say the least. But what Philippe created was a model to heighten our understanding of this kind of turbulence flow, unusually with only one turbulence equation.

Everything we fly today, whether you take Boeing or Airbus, has probably been created to some extent with this very model.

Beyond the SA model, Philippe further increased the fidelity of turbulent flow simulation by hybridizing traditional turbulence modeling with Large Eddy Simulation, explicitly resolving those turbulent eddies not amenable to modeling. The resulting technique, namely Detached Eddy Simulation (DES) in 1997, is the most popular form of high-fidelity turbulent flow simulation used in various industries, including aerospace, automotive, and renewable energies. In 2017, Philippe was elected as a member of National Academy of Engineering for development and application of a broad array of computational techniques for the prediction of aerodynamic turbulence and noise.

Flexcompute’s partnership with Philippe has been a dream realized: his contribution will improve the accuracy within our newest endeavor to provide a timely and invaluable tool for the aerospace industry and beyond.

**The SA Model and DES Combined With Flow360**

Since their days studying at Stanford University, our founders yearned to see a more proficient method to achieve a faster resolution and to reduce the complexity of design. We’ve believed that more engineers and more aerospace companies should have access to use these models, like the SA model, in a timely manner, which is why we created Flow360, a flow solver built from scratch.

With Flow360, we’ve created a product that improves the computing speed by 100x. When designing an aircraft, usually it can take days or weeks to simulate the necessary conditions with any model. Using Flow360, any size or volume of cases can be completed in minutes or at most, within a few hours.

Philippe has said as much that this program was part of the draw to work with Flexcompute: “Flexcompute has the DES available, and makes simulations easier — recognizing the value of unsteady simulations — making it much faster and more financially feasible, and will predict the noise of this unsteady aircraft to help understand how loud the drone will be.”

“To paraphrase, running this unsteady simulation is necessary to understanding future safety problems,” one of our founders, Zongfu Yu says. “Running this unsteady simulation can be very expensive but Flexcompute provides the technology to simulate it much much faster at an affordable price, making it possible to study these facts with advanced modeling.”

With Flexcompute’s processing power, and Philippe’s proven history in modeling, these complex simulations and checks for safety via careful off-design simulations become a lot more accessible for other aerospace companies and even start-ups.

**Predicting The Future of CFD**

Philippe brings with him decades of first-hand experience to back him up on all things aerodynamics and beyond. His main concern, and ours, is accuracy.

“CFD is going to be a bigger and bigger part of engineering, for everything from modeling arteries to tornadoes, going through delivery drones like Amazon, cars, trucks, and wind turbines, planes, submarines… this direction is a lot better than it was 15, 10, or even 5 years ago… but it’s still not perfect,” Philippe emphasized.

In the industry, there are hundreds of startups emerging outside of Boeing, wanting to take drones to the next level to fly people and goods… creating larger versions of drones so they can carry more weight and be exceptionally safe. They desire a tight time to enter the market — they need to do it immediately and need a new set of tools to be the first ones to get there.

Philippe’s concern highlights our partnership’s focus: “CFD doesn’t ensure that physics will be correct. We don’t want things to just be faster, it needs to be accurate — if it's flawed, then machine learning isn't going to fix what you want it to fix. The 21st century will see more and more use of CFD, but we can't just push a button.” It is a responsibility of the CFD provider to correctly represent the uncertainty attached to every turbulent-CFD approach to every problem, assuming the customer welcomes this partnership..

One of Flexcompute’s co-founders, Qiqi Wang, an associate professor of aeronautics and astronautics at the Massachusetts Institute of Technology, agrees strongly on Philippe’s view. “Flexcompute will benefit not only from his world-renowned expertise on turbulence modeling,” he said, “but also from Philippe’s broad knowledge in fluid mechanics and extensive industrial experience. These will help us build technology to help our customers achieve a much faster turnaround in their engineering design with state-of-the-art accuracy.”

**Our Partnership**

Combined with our Flow360 software, Philippe's decades of experience with aerodynamics and simulations can elevate the internal expertise of all of our developers and customer-facing consultants. So his knowledge of physics with Flexcompute’s tech will help customers design their aircraft much more efficiently, and sometimes with lower risk.

Flexcompute is honored and proud to have someone of Philippe's experience and knowledge join our rapidly growing organization. We are very excited for the impact he will have both for our organization and especially for our customers.

We strongly believe Philippe will continue to showcase Flexcompute’s dedication to adding the highest level of expertise to our team which, when combined with our record-setting technology, will provide Flexcompute's customers with a level of value creation that no one else can deliver.
