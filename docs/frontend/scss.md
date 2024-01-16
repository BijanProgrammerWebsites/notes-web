---
sidebar_position: 3
description: ''
---

# SCSS

## Responsive `font-size`

You can use this mixin to automatically calculate `clamp` values for a responsive `font-size`:

```scss
@use 'sass:math';

@mixin font-size-clamp($min-font-size, $max-font-size, $start-width: 360, $end-width: 1200) {
    $numerator: ($end-width * $min-font-size) - ($start-width * $max-font-size);
    $denominator: $end-width - $start-width;
    $base-px: math.div($numerator, $denominator);
    $base-rem: $base-px * 0.1rem;
    $vi: math.div($min-font-size - $base-px, $start-width) * 100vi;

    font-size: clamp($min-font-size * 0.1rem, $base-rem + $vi, $max-font-size * 0.1rem);
}
```

Then you can call it like this:

```scss
@use '/src/styles/utils';

h1 {
    @include utils.font-size-clamp(28, 72);
}
```
