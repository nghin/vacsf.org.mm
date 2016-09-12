---
layout: archive
permalink: /styling-elements/
title: "Styling Elements"
categories: articles
excerpt: "Below is just about everything you'll need to style in the theme."
modified: 
tags: [sample]
comments: true
ads: true
---

Below is just about everything you'll need to style in the theme. Check [the source code](https://github.com/nghin/vacsf.org.mm) to see the many embedded elements within paragraphs.

# Heading 1: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

## Heading 2: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

### Heading 3: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

#### Heading 4: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

##### Heading 5: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

###### Heading 6: Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

### Body text

Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.

*This is emphasized*. Donec faucibus. Nunc iaculis suscipit dui. 53 = 125. Water is H<sub>2</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. The New York Times <cite>(That’s a citation)</cite>. <u>Underline</u>. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

HTML and <abbr title="cascading stylesheets">CSS<abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.

### Blockquotes

> Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.

> <cite>First Lastname, *The Greatest Article*</cite>

## List Types

### Ordered Lists

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

### Unordered Lists

* Item one
* Item two
* Item three

## Tables

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |

## Code Snippets

Syntax highlighting via Pygments

{% highlight css linenos=table %}
#container {
  float: left;  
  margin: 0 -240px 0 0;  
  width: 100%;
}
{% endhighlight %}

## Images

<figure>
  <img src="http://placehold.it/900x400.gif" alt="">
  <figcaption><strong>Example:</strong> One image.</figcaption>
</figure>

<figure class="half">
  <img src="http://placehold.it/900x400.gif" alt="">
  <img src="http://placehold.it/900x400.gif" alt="">
  <figcaption><strong>Example:</strong> Two images.</figcaption>
</figure>

<figure class="third">
  <img src="http://placehold.it/900x400.gif" alt="">
  <img src="http://placehold.it/900x400.gif" alt="">
  <img src="http://placehold.it/900x400.gif" alt="">
  <figcaption><strong>Example:</strong> Three images.</figcaption>
</figure>

## Buttons

Make any link standout more when applying the `.btn` class.

{% highlight html %}
<a href="#" class="btn">Default Button</a>
{% endhighlight %}

<a href="#" class="btn">.btn</a>
<a href="#" class="btn-inverse">.btn-inverse</a>
<a href="#" class="btn-info">.btn-info</a>
<a href="#" class="btn-warning">.btn-warning</a>
<a href="#" class="btn-danger">.btn-danger</a>
<a href="#" class="btn-success">.btn-success</a>

### Social Media Buttons

<a href="#" class="btn-social facebook"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
<a href="#" class="btn-social flickr"><i class="fa fa-flickr" aria-hidden="true"></i> Flickr</a>
<a href="#" class="btn-social foursquare"><i class="fa fa-foursquare" aria-hidden="true"></i> Foursquare</a>
<a href="#" class="btn-social google-plus"><i class="fa fa-google-plus" aria-hidden="true"></i> Google+</a>
<a href="#" class="btn-social instagram"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
<a href="#" class="btn-social linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
<a href="#" class="btn-social pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a>
<a href="#" class="btn-social rss"><i class="fa fa-rss" aria-hidden="true"></i> RSS</a>
<a href="#" class="btn-social tumblr"><i class="fa fa-tumblr" aria-hidden="true"></i> Tumblr</a>
<a href="#" class="btn-social twitter"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
<a href="#" class="btn-social vimeo"><i class="fa fa-vimeo-square" aria-hidden="true"></i> Vimeo</a>
<a href="#" class="btn-social youtube"><i class="fa fa-youtube" aria-hidden="true"></i> YouTube</a>

## Badges

1{: .badge} 2{: .badge .inverse} 3{: .badge .info} 4{: .badge .warning} 5{: .badge .danger} 6{: .badge .success}

## Notices

Set a block of text off from the rest.

<div class="notice" markdown="1">
#### Default Notice
[Maecenas ornare tortor](). Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div><!-- /.notice -->

<div class="notice--inverse" markdown="1">
#### Inverse Notice
`.notice--infor` Maecenas ornare tortor. Donec sed tellus [eget sapien fringilla]() nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div>

<div class="notice--info" markdown="1">
#### Info Notice
`.notice--info` [Maecenas ornare tortor](). Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div>

<div class="notice--warning" markdown="1">
#### Warning Notice
`.notice--warning` Maecenas ornare tortor. Donec sed [tellus eget]() sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div>

<div class="notice--danger" markdown="1">
#### Danger Notice
`.notice--danger` Maecenas ornare tortor.[ Donec sed tellus]() eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div>

<div class="notice--success" markdown="1">
#### Success Notice
`.notice--success` Maecenas ornare tortor. Donec sed tellus eget [sapien fringilla]() nonummy. Mauris a ante. Suspendisse quam sem, consequat at.
</div>

## Fieldsets and Form Elements

<fieldset>
  <form>
    <h2>Form Element</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>
    <label for="text_field">Text Field:</label>
    <input type="text" id="text_field" />
    <label for="text_area">Text Area:</label>
    <textarea id="text_area"></textarea>
    <p>
      <label for="select_element">Select Element:</label>
      <select name="select_element">
        <optgroup label="Option Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Option Group 2">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label for="radio_buttons">Radio Buttons:</label>
      <label><input type="radio" class="radio" name="radio_button" value="radio_1" />Radio 1</label>
      <label><input type="radio" class="radio" name="radio_button" value="radio_2" />Radio 2</label>
      <label><input type="radio" class="radio" name="radio_button" value="radio_3" />Radio 3</label>
    </p>
    <p>
      <label for="checkboxes">Checkboxes:</label>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_1" />Checkbox 1</label>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_2" />Checkbox 2</label>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_3" />Checkbox 3</label>
    </p>
    <p>
      <label for="password">Password:</label>
      <input type="password" class="password" name="password" />
    </p>
    <p>
      <label for="file">File Input:</label>
      <input type="file" class="file" name="file" />
    </p>
    <p>
      <input class="btn" type="submit" value="Submit" />
    </p>
  </form>
</fieldset>
