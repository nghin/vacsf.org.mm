---
layout: archive
permalink: /viet-studies/
title: "Các Ý Niệm Kinh Thánh Phổ Thông"
date: 2014-06-02T15:05:16-04:00
modified: 2016-01-04T16:38:17-05:00
excerpt: "Kinh Thánh không phải chỉ viết cho các thần học gia, nhưng cho mọi người ở một trình độ chung hầu cho ai cũng có thể biết được ý Ngài."
subtitle: "<em>Vì Ðức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.(John 3:16)</em>."
image:
  feature: vacsf-home-banner-02.jpg
feature:
  visible: true
  headline: "Các Ý Niệm Phổ Thông"
  category: viet-studies
---

{{ page.excerpt | markdownify }}

Dĩ nhiên có một số đoạn Kinh thánh khó hiểu đòi hỏi kiến thức về bối cảnh lịch sử và văn hóa, nhưng cũng có dủ những chân lý nền tảng rõ rệt dễ hiểu hầu người tín hữu có thể dựa vào đó mà sống suốt cuộc đời. Tôi thích dùng sự so sánh với một mặt phẳng được xác định bởi ba điểm. Hãy gọi đây là mặt phẳng chân lý. Trong Kinh Thánh chứa đựng rất nhiều hơn chỉ 3 điểm chân lý để xác định chương trình cứu rỗi của Đức Chúa Trời. Nếu chúng ta thường kiểm soát những nhận thức, hoặc phân tích, dùng các điểm đó thì chúng ta không thể nào hiểu sai lời viết trong Kinh Thánh. Và khi đó chúng ta thấy các điểm đều qui về một hướng: Chúa Giê-su.

{% include site-toc-viet.html %}

{% for post in site.categories.viet-studies %}
  {% if post.featured != true %}
  {% include archive__item.html %}
  {% endif %}
{% endfor %}
