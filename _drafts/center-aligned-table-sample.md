---
layout: post
title: example - center aligned table
author: Flexcompute
date: 2022-10-24 22:18:45 +0000
categories: []
tags: []
description: ''
post_image: ''

---
<style>
table, th, td {
  border: 1px solid black;
}
  
th, td {
  padding: .25em;  
}
  
th:nth-child(1) {
    text-align: left;
}
th:nth-child(2) {
    text-align: center;
}
th:nth-child(3) {
    text-align: center;
}
th:nth-child(4) {
    text-align: center;
}

td:nth-child(1){
    text-align: left;
}
td:nth-child(2){
    text-align: center;
}
td:nth-child(3){
    text-align: center;
}
td:nth-child(4){
    text-align: center;
}
</style>

<div style="padding-bottom: 20px; margin: 0 auto; width: 520px">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>AD, and, BET disk</th>
        <th>BET line</th>
        <th>Resolved Blades</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Isolated propeller</td>
        <td>1.0</td>
        <td>6-12</td>
        <td>40-60</td>
      </tr>
      <tr>
        <td>2D model problem</td>
        <td>3-4</td>
        <td>80 (*)</td>
        <td>280</td>
      </tr>
      <tr>
        <td>3D</td>
        <td>25.0</td>
        <td>320</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>