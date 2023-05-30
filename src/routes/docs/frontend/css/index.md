---
title: CSS
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
