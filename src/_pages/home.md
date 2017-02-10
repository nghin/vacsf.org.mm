---
layout: archive
permalink: /
title: "VIETNAMESE ALLIANCE CHURCH<br /><span style='font-size: 0.7em; font-style: italic; margin-left: 30px;'>San Francisco, California</span>"
date: 2014-06-02T12:26:34-04:00
modified: 2016-02-26T10:36:43-05:00
excerpt: "A collection of articles addressing difficult and commonly misinterpreted Scriptural passages or concepts."
subtitle: "<em>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life (John 3:16)</em>."
image:
  feature: vacsf-home-banner-02.jpg
feature:
  visible: true
  headline: "Featured Articles"
  category: articles
---
The Bible is not written just for theologians, but for the world at the most `common denominator` so everyone can know the will of God.

<a href="{{ site.url }}/viet-studies/"><em>(Bấm vào <u>đây</u> để đọc tiếng Việt)</em></a>

<div class="notice--info" markdown="1">
There are, of course, many obscure passages requiring knowledge of some historical context, but `there are enough clear truths` to be understood and live by for a lifetime. I like to use the analogy of a plane which is defined by three points. Let's call this a plane of truth. There are many more than 3 points of truth to define God's plan of salvation. If we frequently check our understanding, or interpretation, against them, we can't go wrong. And it's all about Jesus.
</div>

{% include site-toc.html %}

{% for post in site.categories.articles %}
  {% if post.featured != true %}
  {% include archive__item.html %}
  {% endif %}
{% endfor %}
