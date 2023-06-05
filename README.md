# Parsers
Providing utility functionalities for parsing different values

<br>

## Install

```bash
npm install @vieolo/parsers
```

<br>

## Usage
You can import the functions directly from the main directory
```JS
import { } from '@vieolo/parsers'
```

However, for a smaller build size, you can import them directly from the subdirectories
```JS
import {  } from '@vieolo/parsers/number_parsers';
import {  } from '@vieolo/parsers/time_parsers';
```

<br>

## Functions

### Number Parsers

##### `toFixed`
##### `toFixedFloat`
##### `parseInputFloatToSafeString`

<br>

### String Parsers

##### `addWhitespaceAtInterval`

<br>

### Time Parsers

##### `parseHourAndMinute`
##### `parseDecimalTime`
##### `parseFormattedTime`
##### `parseMinuteCount`
##### `parseTimeEntries`    

<br>

### XML Parsers

##### `objectToXML`
##### `formatXML`
