---
sidebar_position: 3
description: ''
---

# JavaScript

## Local Locale

You can get the current machine locale using `navigator.language`.
It's useful for `Intl` stuff.

---

## Default Values for Destructured Objects

You can destructure an object and give default values to each entry:

```javascript
const {name = 'Bijan', age = 20} = user;
```

---

## Data Attributes

You can access data attributes using `dataset`:

```javascript
element.dataset.state = 'collapsed';
```

---

## Bitwise OR

Bitwise OR is sometimes useful

```javascript
// prettier-ignore
{
    "23" | 0        === 23;
    "bijan" | 0     ===  0;
    
    3 | 0           ===  3;
    3.3 | 0         ===  3;
    3.8 | 0         ===  3;
    -3.3 | 0        === -3;
    -3.8 | 0        === -3;
    "3" | 0         ===  3;
    "3.8" | 0       ===  3;
    "-3.8" | 0      === -3;
    NaN | 0         ===  0;
    Infinity | 0    ===  0;
    -Infinity | 0   ===  0;
    null | 0        ===  0;
    (void 0) | 0    ===  0;
    [] | 0          ===  0;
    [3] | 0         ===  3;
    [-3.8] | 0      === -3;
    [" -3.8 "] | 0  === -3;
    [-3.8, 22] | 0  ===  0;
}
```

---

## Directly Access Element by Its ID

You can access an element that has an id directly on the `globalThis` object;
So you don't need to use `getElementById` method.

```html
<div id="box">This is a Box</div>
```

```javascript
box.style.backgroundColor = 'green';
```
