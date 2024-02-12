---
sidebar_position: 2
description: ''
---

# CSS

## The Power of Inheritance

You can inherit `gap` from parent instead of using custom properties or `parent, parent child` selector.

---

## The Correct Way to Use `clamp` for `font-size`

If you're using clamp for `font-size`, make sure to use it this way:

```
clamp(min, ${some number}vh + 1rem, max)
```

Because if user zooms in/out, it will allow browser to actually affect `font-size`.

---

## Logical Properties for Viewport Units

Instead of `vh`, use `dvb` (Dynamic Viewport Block).
Instead of `vw`, use `dvi` (Dynamic Viewport Inline).

---

## Naming Grid Lines

You can name grid lines like this:

```css
.chiz {
    grid-template-columns: [fullbleed-start] auto [main-start] min(90%, 60ch) [main-end] auto [fullbleed-end];
}
```

And simply use them like this:

```css
.alternative {
    grid-column: fullbleed;
}

.content {
    grid-column: main;
}
```

---

## Ignore Specific Children Height

If you have a parent element that has some children,
and you want to set its height based on some specific children and ignore others,
you can use this trick:

```html
<div class="parent">
    <div class="consider">...</div>
    <div class="ignore">...</div>
</div>
```

```css
.parent {
    display: grid;
}

.ignore {
    min-height: 100%;
    height: 0;
}
```

[Credit](https://twitter.com/njesenberger/status/1577061637584191489)
