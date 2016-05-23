# universal.css

The only CSS you will ever need.

## Features:

* Self-documented classnames
* Zero dependencies
* Classnames are reusable across projects
* Removes the need for a CSS preprocessor
* Removes the need for a CSS bundler
* No more custom CSS required
* No need to switch between HTML and CSS file while developing
* HTTPS ready
* No more debate about rule naming (dash, double dash or underscore?). The [CSS spec](https://www.w3.org/Style/CSS/specs.en.html) is all we need!

## Usage

Insert this one line in your HTML source file:

```html
<link rel="stylesheet" src="https://cdn.rawgit.com/marmelab/universal.css/master/universal.css" />
```

Then you can change the CSS classes in your HTML to **universal CSS classes**:

Before:

```html
<!-- index.html -->
<div class="sidebar">
    <!-- sidebar content -->
</div>
```

``` css
/* main.css */
.sidebar {
    border-top: 1.04em dotted lightgrey;
    border-bottom: 12px solid cornflowerblue;
    border-top-right-radius: 1.60em;
    padding: 5px;
    margin-left: 10px;
    background-color: fuchsia;
}
```

After:

```html
<!-- index.html -->
<div class="
  border-top-width-1-dot-04em
  border-top-style-dotted
  border-top-color-lightgrey
  border-bottom-width-12px
  border-bottom-style-solid
  border-bottom-color-cornflowerblue
  border-top-right-radius-1-dot-60em
  padding-5px
  margin-left-10px
  background-color-fuchsia
">
    <!-- sidebar content -->
</div>
```

``` css
/* main.css */
/* Nothing! */
```

[Check out our demo](http://jsbin.com/mahimemiti/edit?html,output)

## FAQ

**Where is the documentation?**

You don't need documentation. Take any CSS rule you want to apply, replace `: ` by `-`, and dots by `-dot-`, and you get the name of the corresponding universal css classname. For instance,

    border-top-right-radius: 1.60em => .border-top-right-radius-1-dot-60em

**How can you know which classes I need?**

We use a smart CSS generator, based on statistical analysis of most used CSS rules, and coupled with a sophisticated prediction engine. Check out the [source code](https://github.com/marmelab/universal.css/blob/master/universalCssGenerator.js) for details.

**Do you provide a minified version?**

`universal.css` is already highly optimized, and wouldn't benefit much from minification. Check this extract of the source code for a glimpse of the `universal.css` file syntax.

```css
.color-black { color: black; }
.background-color-black { background-color: black; }
.border-color-black { border-color: black; }
.color-blanchedalmond { color: blanchedalmond; }
.background-color-blanchedalmond { background-color: blanchedalmond; }
.border-color-blanchedalmond { border-color: blanchedalmond; }
```

**But `universal.css` weights several MBs. How can I optimize the rendering time?**

You're covered! If you don't want your users to download a large CSS file, replace the `<link>` tag with a `<script>` tag:

```html
<script src="https://cdn.rawgit.com/marmelab/universal.css/master/universalCssGenerator.js" />
```

That's right! Our generator works both in the backend and in the frontend - it is truly universal. The JavaScript file is much lighter, and will load very quickly. Once loaded, it generates the universal.css styles directly in the browser.

**I need a class for Webdings Fonts.**

Universal.css is a community effort, currently at an early stage. We don't yet cover all CSS rules, but we welcome every Pull Request helping us to achieve feature completeness.

**How can I deal with responsive designs and break points?**

We're studying the question, please open an issue if you have a good idea about how to do it.

**Where did you get the inspiration from?**

Bootstrap V4 recently introduced [spacing utility classes](http://v4-alpha.getbootstrap.com/components/utilities/#spacing) like `m-t-1` (which translates to `margin-top: 1rem!important`), and we thought we'd expand this idea to more classes.

**Is this a joke?**

Of course it's a joke. Use [semantic CSS class names](http://maintainablecss.com/).

## License

Universal.css is provided free of charge, courtesy of [marmelab](http://marmelab.com), under the [WTFPL License](http://www.wtfpl.net/).
