---
_schema: default
layout: post
title: Run CFD Using Flow360 Python API | Flexcompute
post_title: Run CFD Using Flow360 Python API
author: CJ Doolittle
date: 2022-04-14 03:25:48
categories:
  - Tutorial
tags:
  - API
  - Python
  - Wing
  - Airplane
  - Client
  - Web
  - CFD
  - Flow360
description: >-
  This tutorial will provide an overview of interfacing with the Flow360 client
  using the Python API
post_image: /uploads/tutorial-02.png
permalink: /blog/2022/04/14/run-cfd-using-flow360-python-api/
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
<div class="cms-embed" data-cms-embed="PGRpdiBzdHlsZT0icGFkZGluZzo1Ni4yNSUgMCAwIDA7Ij48aWZyYW1lIHNyYz0iaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzY5OTIzNzk0Mj9oPWEzZWU1NzNhNGEmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5IiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT0id2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IiB0aXRsZT0iMDMgVHV0b3JpYWw6IFJ1biBDRkQgVXNpbmcgRmxvdzM2MCBQeXRob24gQVBJIj48L2lmcmFtZT48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanMiPjwvc2NyaXB0Pg=="><div style="padding:56.25% 0 0 0;"><iframe src="https://player.vimeo.com/video/699237942?h=a3ee573a4a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style="width:100%; height:100%;" title="03 Tutorial: Run CFD Using Flow360 Python API"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div>



This tutorial will provide an overview of interfacing with the Flow360 client using the Python API

## Documentation

[1\.2. Run CFD using Python API: An example of ONERA M6 Wing](https://docs.flexcompute.com/projects/flow360/en/latest/quickStart/PythonAPI_ONERAM6/PythonAPI_ONERAM6.html)

## Downloads

[Mesh](https://simcloud-public-1.s3.amazonaws.com/om6/wing_tetra.1.lb8.ugrid)

[Flow360Mesh.json](https://simcloud-public-1.s3.amazonaws.com/om6/Flow360Mesh.json?content_disposition=attachment)

[Flow360Case.json](https://simcloud-public-1.s3.amazonaws.com/om6/Flow360.json?content_disposition=attachment)
