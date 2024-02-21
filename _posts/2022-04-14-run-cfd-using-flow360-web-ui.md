---
_schema: default
layout: post
title: Run CFD Using Flow360 Web UI | Flexcompute
post_title: Run CFD Using Flow360 Web UI
author: CJ Doolittle
date: 2022-04-14 03:25:48
categories:
  - Tutorial
tags:
  - Wing
  - Airplane
  - Client
  - Web
  - CFD
  - Flow360
description: This tutorial will cover some of the basic features of the Flow360 web client
post_image: /uploads/tutorial-01.png
permalink: /blog/2022/04/14/run-cfd-using-flow360-web-ui/
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
<div class="cms-embed" data-cms-embed="PGRpdiBzdHlsZT0icGFkZGluZzo1Ni4yNSUgMCAwIDA7Ij48aWZyYW1lIHNyYz0iaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzY5NjgxNzI1Mz9oPWFlMzk5MjZiZjUmYW1wO2JhZGdlPTAmYW1wO2F1dG9wYXVzZT0wJmFtcDtwbGF5ZXJfaWQ9MCZhbXA7YXBwX2lkPTU4NDc5IiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT0id2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IiB0aXRsZT0iMDEgVHV0b3JpYWw6IFJ1biBDRkQgVXNpbmcgRmxvdzM2MCBXZWIgVUkiPjwvaWZyYW1lPjwvZGl2PjxzY3JpcHQgc3JjPSJodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qcyI+PC9zY3JpcHQ+"><div style="padding:56.25% 0 0 0;"><iframe src="https://player.vimeo.com/video/696817253?h=ae39926bf5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style="width:100%; height:100%;" title="01 Tutorial: Run CFD Using Flow360 Web UI"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div>



This tutorial will cover some of the basic features of the Flow360 web client

## Documentation

[1\.1. Run CFD using Web UI: An example of ONERA M6 Wing](https://docs.flexcompute.com/projects/flow360/en/latest/quickStart/WebUI_ONERAM6/WebUI_ONERAM6.html)

## Downloads

[Mesh](https://simcloud-public-1.s3.amazonaws.com/om6/wing_tetra.1.lb8.ugrid)

[Flow360Mesh.json](https://simcloud-public-1.s3.amazonaws.com/om6/Flow360Mesh.json?content_disposition=attachment)

[Flow360Case.json](https://simcloud-public-1.s3.amazonaws.com/om6/Flow360.json?content_disposition=attachment)
