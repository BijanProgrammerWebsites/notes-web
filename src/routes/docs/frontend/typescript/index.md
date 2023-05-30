---
title: TypeScript
---

# TypeScript

## Non-null Assertion Operator

You can tell TypeScript that you operand is not null or undefined using _Non-null Assertion Operator_:

```typescript
const box = document.querySelector('#box')!;
box.style.backgroundColor = 'green';
```

---

## Options Parameter with Default Values

You can declare options parameter for your function in
[several ways](https://www.delftstack.com/howto/typescript/typescript-default-parameter/).
For example:

```typescript
interface ImageResizerOptions {
    width: number;
    height: number;
    lossless: boolean;
}

class ImageResizer {
    private options!: ImageResizerOptions;

    public constructor({width = 1920, height = 1080, lossless = false}: Partial<ImageResizerOptions>) {
        this.options = {width, height, lossless};
    }
}

const resizer = new ImageResizer({lossless: true});
```
