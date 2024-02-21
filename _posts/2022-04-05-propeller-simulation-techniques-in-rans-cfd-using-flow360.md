---
_schema: default
layout: post
title: Propeller CFD in RANS & Flow360 | Flexcompute
post_title: Propeller Simulation Techniques in RANS CFD using Flow360
author: Jim Bungener
date: 2022-04-05 20:05:57
categories:
  - Article
tags:
  - propeller simulation
  - CFD
  - RANS
  - TARP
  - BET
  - AD
  - Blade element
  - Actuator Disk
  - Flow360
  - 'Propeller '
description: A guide to choosing the right propeller simulation technique with Flow360.
post_image: /uploads/20220405-prop.png
permalink: /blog/2022/04/05/propeller-simulation-techniques-in-rans-cfd-using-flow360/
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
Flow360 can simulate a propeller using four different techniques, each with its own drawbacks and advantages. The goal of this article is to provide an introduction to each technique and give you the information needed to decide which technique is most appropriate for your simulation needs.

<center><img title="Fig 1: XV-15 propeller in cruise mode" alt="XV-15 propeller in cruise mode" src="/uploads/20220405-prop.png" /></center>

<center><i>Fig 1: XV-15 propeller in cruise mode [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220405-prop.png "Fig 1: XV-15 propeller in cruise mode")--><!--Fig 1: XV-15 propeller in cruise mode \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

### Four Different Propeller Simulation Techniques

#### [1\. Actuator Disk (AD)](https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#actuatordisks-list)

The Actuator Disk technique is the easiest one to use in that all you need to give Flow360 is the thrust and torque distribution for your propeller. Flow360 takes that thrust and torque distribution and uses it to locally accelerate the flow. You can then see the downstream effects of the propeller’s thrust and how it affects the performance of whatever is downstream. The drawback is that AD can only be relied on if the flow is near perpendicular to the propeller disk. The AD technique assumes a uniform distribution of thrust along the azimuth. The thrust value and thrust distribution needs to come from another CFD simulation, momentum theory, experimental data or whatever other source you choose.

<center><img title="Fig 2: Q-criterion iso-surface in an Actuator Disk simulation" alt="Q-criterion iso-surface in an Actuator Disk simulation" src="/uploads/20220420-xv15_ad.png" /></center>

<center><i>Fig 2: Q-criterion iso-surface in an Actuator Disk simulation [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220420-xv15_ad.png "Fig 2: Q-criterion iso-surface in an Actuator Disk simulation")--><!--Fig 2: Q-criterion iso-surface in an Actuator Disk simulation \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

#### [2\. Steady-State Blade Element Theory (BET Disk)](https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#betdisks-list)

When doing a steady-state BET simulation you provide a set of 2D polars as well as some geometry information representing the performance and shape of the propeller's blades. That is, you provide a geometrical definition (chords and twists at many stations along the span of the blade) along with the 2D polars (lift and drag) at many slices along the span. The solver then uses that information to “build” a virtual blade in the flow. At each station the solver looks at the incoming flow, the defined geometry and its performance polar to calculate the forces that the blade would exert on the fluid and it applies those forces. The biggest advantage of BET over AD is that it is still accurate when the flow is not perpendicular to the propeller disk and it does not require you to know the thrust ahead of time like AD does.

Steady-state BET represents the propeller as a disk but it doesn’t mean that the thrust will be uniform along that disk. If the inflow is asymmetric then the BET effects will also be asymmetric. However, all time-dependent phenomena (e.g., tip vortices) will be averaged out.

To learn more about how and when to use the BET Disk model please visit this case study in our [Flow360 documentation page](https://docs.flexcompute.com/projects/flow360/en/latest/caseStudies/XV15BETDisk/XV15BETDisk.html).

<center><img title="Fig 3: Q-criterion iso-surface in a BET Disk simulation" alt="Q-criterion iso-surface in a BET Disk simulation" src="/uploads/20220420-bet_disk.png" /></center>

<center><i>Fig 3: Q-criterion iso-surface in a BET Disk simulation [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220420-bet_disk.png "Fig 3: Q-criterion iso-surface in a BET Disk simulation")--><!--Fig 3: Q-criterion iso-surface in a BET Disk simulation \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

#### [3\. Time-Accurate Blade Element Theory (BET Line)](https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#betdisks-list)

The inputs to a time-accurate BET Line simulation are mostly the same as the steady-state BET Disk above. What is different is that you will now have your virtual blades spinning around and you will capture all the time-dependent effects. This, however, comes at the cost of much larger run times because the solver needs to simulate a lot of steady-state subiterations in order to come up with a time-accurate simulation over a relevant time span. The user should have an understanding of what sort of time scales the solution needs in order to capture the details of the flow physics while doing a long enough simulation to capture downstream effects of the propeller’s wake.

<center><img title="Fig 4: Q-criterion iso-surface in a BET Line simulation" alt="Q-criterion iso-surface in a BET Line simulation" src="/uploads/20220513-bet_line.png" /></center>

<center><i>Fig 4: Q-criterion iso-surface in a BET Line simulation [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220513-bet_line.png "Fig 4: Q-criterion iso-surface in a BET Line simulation")--><!--Fig 4: Q-criterion iso-surface in a BET Line simulation \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

#### [4\. Time-Accurate Rotating Propeller (TARP)](https://docs.flexcompute.com/projects/flow360/en/latest/solverConfiguration/solverConfiguration.html#slidinginterfaces-list)

This is the most computationally expensive technique, but also the most accurate. Here, you mesh the actual propeller geometry with hub and everything else and spin the propeller within a hockey puck like sliding interface. You can model multiple propellers each within their own sliding interface. You can model a sliding interface within a sliding interface to model various things like a helicopter’s cyclical blade oscillations. You can even spin things like a whole airplane to simulate aircraft stalling spins or model dynamic flight derivatives on entire configurations.

All the important flow physics are accurately captured (with a sufficiently resolved mesh). Not only can you have great trust in the resulting forces and moments, but you can also see how the wake from the propeller moves downstream and affects the various wings/bodies/etc. that are behind the propeller.

<center><img title="Fig 5: Q-criterion iso-surface in a TARP simulation" alt="Q-criterion iso-surface in a TARP simulation" src="/uploads/20220405-tarp.png" /></center>

<center><i>Fig 5: Q-criterion iso-surface in a TARP simulation [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220405-tarp.png "Fig 5: Q-criterion iso-surface in a TARP simulation")--><!--Fig 5: Q-criterion iso-surface in a TARP simulation \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

### When to use which technique?

The choice of which technique to use depends on many factors:

* Do you have CAD for your propeller?
* Do you know the propeller’s 2D sectional lift and drag polars?
* Do you know the propeller’s performance (thrust/torque)?
* What is your flowfield like?
* Do you care about the forces and moments on the propeller, or the propeller’s effect on bodies downstream of it, or both?
* How much accuracy is required?
* How much effort/time do you want to spend simulating this case?
* …

If we go in order of simplicity:

* **Steady-state AD** is best suited when all you have is the expected/desired thrust and torque values. The propeller doesn’t have to exist yet, for example, all you may know is that you need a certain amount of thrust and you want to see how that thrust will affect the flow downstream. Then AD is your best option as long as the inflow is perpendicular to your propeller disk (i.e., the thrust distribution is constant around the azimuth of the disk). One thing to note here is that if you change any of the simulation parameters (RPM, inflow speed, etc.), then you will most likely need to adjust the amount of thrust and torque your virtual propeller provides and you will need to know this from some other source (experimental, lower order methods, etc.).

  Since it requires propeller performance ahead of time, the AD approach is only useful for scenarios when you want to learn how the propeller affects things downstream of it.

* **Steady-state BET Disk** is a very common option because most of the time you will know the 2D cross-section polars of your geometry. Once you have that information then you can simulate any scenario without having to change the propeller parameters. This makes running sweeps of any condition (alpha, air speed, RPM, etc.) very simple. You also don’t need to know the propeller’s performance ahead of time. With BET Disk you get both an idea of a propeller’s performance but also how it will affect things downstream of it. This is used a lot to test various propeller designs without having to CAD up each geometry variation which is very useful in the early design stages.
* **Time-accurate BET Line** is a lot more computer resource intensive then steady-state BET Disk, but it gives you a lot more information about how the blades behave in time. The most common scenario is if you know that you will have important time varying effects of vortices impinging on other bodies downstream, then you need time-accurate BET Line instead of steady-state BET Disk. Time-accurate BET Line gives you everything steady-state BET Disk does plus some information as to how things vary in time.
* **Time-accurate rotating propeller (TARP)** is your best choice if you have the CAD geometry and you need the highest accuracy possible. It is the most complex of all four techniques, but gives you the most accurate answers possible to all of your flow physics questions.

In any event, if you are still in doubt about which technique to use or have further questions. Please do not hesitate to reach out via [support@flexcompute.com](mailto:support@flexcompute.com) and we will get back to you very quickly.

<center><img title="Fig 6: XV-15 propeller in crossflow" alt="XV-15 propeller in crossflow" src="/uploads/20220406-crossflow.png" /></center>

<center><i>Fig 6: XV-15 propeller in crossflow. This type of simulation can only be done in BET Disk, BET Line or TARP [<a href="https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing">1</a>].</i></center>

<!--![](/uploads/20220406-crossflow.png "Fig 6: XV-15 propeller in crossflow")--><!--Fig 6: XV-15 propeller in crossflow. This type of simulation can only be done in BET Disk, BET Line or TARP \[[1](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)\].-->

### Summary Table

<style>
table, th, td {
border: 1px solid #666;
}
</style>

| Technique | Pros | Cons | When to Use | Run Times |
| --- | --- | --- | --- | --- |
| AD | Quick and simple | Only get information on objects downstream of propeller<br><br>Can Only simulate normal inflow conditions | When all you have is the propeller’s thrust and torque and your flow is normal to propeller disk | Very fast<br>1-10 (mins) |
| BET Disk | Quick and simple<br><br>Very wide range of uses | Requires accurate information about propeller’s 2D sectional performance | Most applications when you need quick turnaround with high precision and wide range of use cases | Fast<br>10-20 (mins) |
| BET Line | Same as BET disk but with additional time varying information | Same as BET Disk but with much longer run times | Same at BET Disk but time varying phenomena are captured | Longer<br>20-100 (mins) |
| TARP | Most accurate<br><br>Captures all relevant flow physics | Requires CAD geometry and high quality mesh<br><br>Very resource intensive | When nothing but the best will do | Longest<br>100-200 (mins) |

---

[\[1\]](#_ftnref1) Rotor5: Rotor analysis under 5 hours using ultra-fast and high-fidelity CFD simulation and automatic meshing<br>[Rotor Analysis in Under 5 Hours Using Ultra Fast and High FIdelity CFD Simulation and Automatic Meshing](https://docs.flexcompute.com/projects/flow360/en/latest/publications/papers/papers.html#rotor5-rotor-analysis-under-5-hours-using-ultra-fast-and-high-fidelity-cfd-simulation-and-automatic-meshing)
