---
layout: layout.njk
title: Foresite | Home
---
## Latest Predictions

{% for post in collections.post | reverse %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <p>Published on: {{ post.date.toDateString() }}</p>
  </article>
{% endfor %}
