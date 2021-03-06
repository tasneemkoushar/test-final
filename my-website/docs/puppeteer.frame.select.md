<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [Frame](./puppeteer.frame.md) &gt; [select](./puppeteer.frame.select.md)

## Frame.select() method

Triggers a `change` and `input` event once all the provided options have been selected.

<b>Signature:</b>

```typescript
select(selector: string, ...values: string[]): Promise<string[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  selector | string | a selector to query the frame for |
|  values | string\[\] | an array of values to select. If the <code>&lt;select&gt;</code> has the <code>multiple</code> attribute, all values are considered, otherwise only the first one is taken into account. |

<b>Returns:</b>

Promise&lt;string\[\]&gt;

the list of values that were successfully selected.

## Remarks

If there's no `<select>` element matching `selector`, the method throws an error.

## Example


```js
frame.select('select#colors', 'blue'); // single selection
frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections

```

