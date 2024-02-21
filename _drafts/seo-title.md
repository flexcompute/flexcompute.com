---
_schema: default
layout: post
title: Page title
post_title: POST title
author: Flexcompute
date: 2022-12-01 04:33:17
categories: []
tags: []
description: ''
post_image: ''
permalink:
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
    comment: blog post url in kebab format (e.g. /this-is-a-sample-post/)
    label: PERMALINK
    empty_type:
    remove_empty_inputs: true
---
test different titles

test new cms in prod 2023/04/03