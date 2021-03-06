/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */function RGBColor(color_string) {
  this.ok = false;
  if (color_string.charAt(0) == "#") {
    color_string = color_string.substr(1, 6);
  }
  color_string = color_string.replace(/ /g, "");
  color_string = color_string.toLowerCase();
  var simple_colors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  for (var key in simple_colors) {
    if (color_string == key) {
      color_string = simple_colors[key];
    }
  }
  var color_defs = [ {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
    process: function(bits) {
      return [ parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]) ];
    }
  }, {
    re: /^(\w{2})(\w{2})(\w{2})$/,
    example: [ "#00ff00", "336699" ],
    process: function(bits) {
      return [ parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16) ];
    }
  }, {
    re: /^(\w{1})(\w{1})(\w{1})$/,
    example: [ "#fb0", "f0f" ],
    process: function(bits) {
      return [ parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16) ];
    }
  } ];
  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);
    if (bits) {
      channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];
      this.ok = true;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
  this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  };
  this.toHex = function() {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  };
  this.getHelpXML = function() {
    var examples = new Array;
    for (var i = 0; i < color_defs.length; i++) {
      var example = color_defs[i].example;
      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    }
    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }
    var xml = document.createElement("ul");
    xml.setAttribute("id", "rgbcolor-examples");
    for (var i = 0; i < examples.length; i++) {
      try {
        var list_item = document.createElement("li");
        var list_color = new RGBColor(examples[i]);
        var example_div = document.createElement("div");
        example_div.style.cssText = "margin: 3px; " + "border: 1px solid black; " + "background:" + list_color.toHex() + "; " + "color:" + list_color.toHex();
        example_div.appendChild(document.createTextNode("test"));
        var list_item_value = document.createTextNode(" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {}
    }
    return xml;
  };
}

var mul_table = [ 512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259 ];

var shg_table = [ 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

function stackBlurImage(imageID, canvasID, radius, blurAlphaChannel) {
  var img = document.getElementById(imageID);
  var w = img.naturalWidth;
  var h = img.naturalHeight;
  var canvas = document.getElementById(canvasID);
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);
  if (isNaN(radius) || radius < 1) return;
  if (blurAlphaChannel) stackBlurCanvasRGBA(canvasID, 0, 0, w, h, radius); else stackBlurCanvasRGB(canvasID, 0, 0, w, h, radius);
}

function stackBlurCanvasRGBA(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  var imageData;
  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {
        alert("Cannot access local image");
        throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {
    alert("Cannot access image");
    throw new Error("unable to access image data: " + e);
  }
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack;
  var stack = stackStart;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack;
    if (i == radiusPlus1) var stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];
  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa != 0) {
        pa = 255 / pa;
        pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      a_in_sum += stackIn.a = pixels[p + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    yp = width;
    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  context.putImageData(imageData, top_x, top_y);
}

function stackBlurCanvasRGB(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) return;
  radius |= 0;
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  var imageData;
  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {
        alert("Cannot access local image");
        throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {
    alert("Cannot access image");
    throw new Error("unable to access image data: " + e);
  }
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, r_out_sum, g_out_sum, b_out_sum, r_in_sum, g_in_sum, b_in_sum, pr, pg, pb, rbs;
  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack;
  var stack = stackStart;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack;
    if (i == radiusPlus1) var stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];
  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }
    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi] = r_sum * mul_sum >> shg_sum;
      pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
      pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }
    yp = width;
    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = r_sum * mul_sum >> shg_sum;
      pixels[p + 1] = g_sum * mul_sum >> shg_sum;
      pixels[p + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  context.putImageData(imageData, top_x, top_y);
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

(function() {
  this.canvg = function(target, s, opts) {
    if (target == null && s == null && opts == null) {
      var svgTags = document.getElementsByTagName("svg");
      for (var i = 0; i < svgTags.length; i++) {
        var svgTag = svgTags[i];
        var c = document.createElement("canvas");
        c.width = svgTag.clientWidth;
        c.height = svgTag.clientHeight;
        svgTag.parentNode.insertBefore(c, svgTag);
        svgTag.parentNode.removeChild(svgTag);
        var div = document.createElement("div");
        div.appendChild(svgTag);
        canvg(c, div.innerHTML);
      }
      return;
    }
    opts = opts || {};
    if (typeof target == "string") {
      target = document.getElementById(target);
    }
    if (target.svg != null) target.svg.stop();
    var svg = build();
    if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == "OBJECT")) target.svg = svg;
    svg.opts = opts;
    var ctx = target.getContext("2d");
    if (typeof s.documentElement != "undefined") {
      svg.loadXmlDoc(ctx, s);
    } else if (s.substr(0, 1) == "<") {
      svg.loadXml(ctx, s);
    } else {
      svg.load(ctx, s);
    }
  };
  function build() {
    var svg = {};
    svg.FRAMERATE = 30;
    svg.MAX_VIRTUAL_PIXELS = 3e4;
    svg.init = function(ctx) {
      var uniqueId = 0;
      svg.UniqueId = function() {
        uniqueId++;
        return "canvg" + uniqueId;
      };
      svg.Definitions = {};
      svg.Styles = {};
      svg.Animations = [];
      svg.Images = [];
      svg.ctx = ctx;
      svg.ViewPort = new function() {
        this.viewPorts = [];
        this.Clear = function() {
          this.viewPorts = [];
        };
        this.SetCurrent = function(width, height) {
          this.viewPorts.push({
            width: width,
            height: height
          });
        };
        this.RemoveCurrent = function() {
          this.viewPorts.pop();
        };
        this.Current = function() {
          return this.viewPorts[this.viewPorts.length - 1];
        };
        this.width = function() {
          return this.Current().width;
        };
        this.height = function() {
          return this.Current().height;
        };
        this.ComputeSize = function(d) {
          if (d != null && typeof d == "number") return d;
          if (d == "x") return this.width();
          if (d == "y") return this.height();
          return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
        };
      };
    };
    svg.init();
    svg.ImagesLoaded = function() {
      for (var i = 0; i < svg.Images.length; i++) {
        if (!svg.Images[i].loaded) return false;
      }
      return true;
    };
    svg.trim = function(s) {
      return s.replace(/^\s+|\s+$/g, "");
    };
    svg.compressSpaces = function(s) {
      return s.replace(/[\s\r\t\n]+/gm, " ");
    };
    svg.ajax = function(url) {
      var AJAX;
      if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest;
      } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
      }
      if (AJAX) {
        AJAX.open("GET", url, false);
        AJAX.send(null);
        return AJAX.responseText;
      }
      return null;
    };
    svg.parseXml = function(xml) {
      if (window.DOMParser) {
        var parser = new DOMParser;
        return parser.parseFromString(xml, "text/xml");
      } else {
        xml = xml.replace(/<!DOCTYPE svg[^>]*>/, "");
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xml);
        return xmlDoc;
      }
    };
    svg.Property = function(name, value) {
      this.name = name;
      this.value = value;
    };
    svg.Property.prototype.getValue = function() {
      return this.value;
    };
    svg.Property.prototype.hasValue = function() {
      return this.value != null && this.value !== "";
    };
    svg.Property.prototype.numValue = function() {
      if (!this.hasValue()) return 0;
      var n = parseFloat(this.value);
      if ((this.value + "").match(/%$/)) {
        n = n / 100;
      }
      return n;
    };
    svg.Property.prototype.valueOrDefault = function(def) {
      if (this.hasValue()) return this.value;
      return def;
    };
    svg.Property.prototype.numValueOrDefault = function(def) {
      if (this.hasValue()) return this.numValue();
      return def;
    };
    svg.Property.prototype.addOpacity = function(opacity) {
      var newValue = this.value;
      if (opacity != null && opacity != "" && typeof this.value == "string") {
        var color = new RGBColor(this.value);
        if (color.ok) {
          newValue = "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + opacity + ")";
        }
      }
      return new svg.Property(this.name, newValue);
    };
    svg.Property.prototype.getDefinition = function() {
      var name = this.value.match(/#([^\)'"]+)/);
      if (name) {
        name = name[1];
      }
      if (!name) {
        name = this.value;
      }
      return svg.Definitions[name];
    };
    svg.Property.prototype.isUrlDefinition = function() {
      return this.value.indexOf("url(") == 0;
    };
    svg.Property.prototype.getFillStyleDefinition = function(e, opacityProp) {
      var def = this.getDefinition();
      if (def != null && def.createGradient) {
        return def.createGradient(svg.ctx, e, opacityProp);
      }
      if (def != null && def.createPattern) {
        if (def.getHrefAttribute().hasValue()) {
          var pt = def.attribute("patternTransform");
          def = def.getHrefAttribute().getDefinition();
          if (pt.hasValue()) {
            def.attribute("patternTransform", true).value = pt.value;
          }
        }
        return def.createPattern(svg.ctx, e);
      }
      return null;
    };
    svg.Property.prototype.getDPI = function(viewPort) {
      return 96;
    };
    svg.Property.prototype.getEM = function(viewPort) {
      var em = 12;
      var fontSize = new svg.Property("fontSize", svg.Font.Parse(svg.ctx.font).fontSize);
      if (fontSize.hasValue()) em = fontSize.toPixels(viewPort);
      return em;
    };
    svg.Property.prototype.getUnits = function() {
      var s = this.value + "";
      return s.replace(/[0-9\.\-]/g, "");
    };
    svg.Property.prototype.toPixels = function(viewPort, processPercent) {
      if (!this.hasValue()) return 0;
      var s = this.value + "";
      if (s.match(/em$/)) return this.numValue() * this.getEM(viewPort);
      if (s.match(/ex$/)) return this.numValue() * this.getEM(viewPort) / 2;
      if (s.match(/px$/)) return this.numValue();
      if (s.match(/pt$/)) return this.numValue() * this.getDPI(viewPort) * (1 / 72);
      if (s.match(/pc$/)) return this.numValue() * 15;
      if (s.match(/cm$/)) return this.numValue() * this.getDPI(viewPort) / 2.54;
      if (s.match(/mm$/)) return this.numValue() * this.getDPI(viewPort) / 25.4;
      if (s.match(/in$/)) return this.numValue() * this.getDPI(viewPort);
      if (s.match(/%$/)) return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
      var n = this.numValue();
      if (processPercent && n < 1) return n * svg.ViewPort.ComputeSize(viewPort);
      return n;
    };
    svg.Property.prototype.toMilliseconds = function() {
      if (!this.hasValue()) return 0;
      var s = this.value + "";
      if (s.match(/s$/)) return this.numValue() * 1e3;
      if (s.match(/ms$/)) return this.numValue();
      return this.numValue();
    };
    svg.Property.prototype.toRadians = function() {
      if (!this.hasValue()) return 0;
      var s = this.value + "";
      if (s.match(/deg$/)) return this.numValue() * (Math.PI / 180);
      if (s.match(/grad$/)) return this.numValue() * (Math.PI / 200);
      if (s.match(/rad$/)) return this.numValue();
      return this.numValue() * (Math.PI / 180);
    };
    svg.Font = new function() {
      this.Styles = "normal|italic|oblique|inherit";
      this.Variants = "normal|small-caps|inherit";
      this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
      this.CreateFont = function(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        var f = inherit != null ? this.Parse(inherit) : this.CreateFont("", "", "", "", "", svg.ctx.font);
        return {
          fontFamily: fontFamily || f.fontFamily,
          fontSize: fontSize || f.fontSize,
          fontStyle: fontStyle || f.fontStyle,
          fontWeight: fontWeight || f.fontWeight,
          fontVariant: fontVariant || f.fontVariant,
          toString: function() {
            return [ this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily ].join(" ");
          }
        };
      };
      var that = this;
      this.Parse = function(s) {
        var f = {};
        var d = svg.trim(svg.compressSpaces(s || "")).split(" ");
        var set = {
          fontSize: false,
          fontStyle: false,
          fontWeight: false,
          fontVariant: false
        };
        var ff = "";
        for (var i = 0; i < d.length; i++) {
          if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") f.fontStyle = d[i];
            set.fontStyle = true;
          } else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") f.fontVariant = d[i];
            set.fontStyle = set.fontVariant = true;
          } else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") f.fontWeight = d[i];
            set.fontStyle = set.fontVariant = set.fontWeight = true;
          } else if (!set.fontSize) {
            if (d[i] != "inherit") f.fontSize = d[i].split("/")[0];
            set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true;
          } else {
            if (d[i] != "inherit") ff += d[i];
          }
        }
        if (ff != "") f.fontFamily = ff;
        return f;
      };
    };
    svg.ToNumberArray = function(s) {
      var a = svg.trim(svg.compressSpaces((s || "").replace(/,/g, " "))).split(" ");
      for (var i = 0; i < a.length; i++) {
        a[i] = parseFloat(a[i]);
      }
      return a;
    };
    svg.Point = function(x, y) {
      this.x = x;
      this.y = y;
    };
    svg.Point.prototype.angleTo = function(p) {
      return Math.atan2(p.y - this.y, p.x - this.x);
    };
    svg.Point.prototype.applyTransform = function(v) {
      var xp = this.x * v[0] + this.y * v[2] + v[4];
      var yp = this.x * v[1] + this.y * v[3] + v[5];
      this.x = xp;
      this.y = yp;
    };
    svg.CreatePoint = function(s) {
      var a = svg.ToNumberArray(s);
      return new svg.Point(a[0], a[1]);
    };
    svg.CreatePath = function(s) {
      var a = svg.ToNumberArray(s);
      var path = [];
      for (var i = 0; i < a.length; i += 2) {
        path.push(new svg.Point(a[i], a[i + 1]));
      }
      return path;
    };
    svg.BoundingBox = function(x1, y1, x2, y2) {
      this.x1 = Number.NaN;
      this.y1 = Number.NaN;
      this.x2 = Number.NaN;
      this.y2 = Number.NaN;
      this.x = function() {
        return this.x1;
      };
      this.y = function() {
        return this.y1;
      };
      this.width = function() {
        return this.x2 - this.x1;
      };
      this.height = function() {
        return this.y2 - this.y1;
      };
      this.addPoint = function(x, y) {
        if (x != null) {
          if (isNaN(this.x1) || isNaN(this.x2)) {
            this.x1 = x;
            this.x2 = x;
          }
          if (x < this.x1) this.x1 = x;
          if (x > this.x2) this.x2 = x;
        }
        if (y != null) {
          if (isNaN(this.y1) || isNaN(this.y2)) {
            this.y1 = y;
            this.y2 = y;
          }
          if (y < this.y1) this.y1 = y;
          if (y > this.y2) this.y2 = y;
        }
      };
      this.addX = function(x) {
        this.addPoint(x, null);
      };
      this.addY = function(y) {
        this.addPoint(null, y);
      };
      this.addBoundingBox = function(bb) {
        this.addPoint(bb.x1, bb.y1);
        this.addPoint(bb.x2, bb.y2);
      };
      this.addQuadraticCurve = function(p0x, p0y, p1x, p1y, p2x, p2y) {
        var cp1x = p0x + 2 / 3 * (p1x - p0x);
        var cp1y = p0y + 2 / 3 * (p1y - p0y);
        var cp2x = cp1x + 1 / 3 * (p2x - p0x);
        var cp2y = cp1y + 1 / 3 * (p2y - p0y);
        this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
      };
      this.addBezierCurve = function(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
        var p0 = [ p0x, p0y ], p1 = [ p1x, p1y ], p2 = [ p2x, p2y ], p3 = [ p3x, p3y ];
        this.addPoint(p0[0], p0[1]);
        this.addPoint(p3[0], p3[1]);
        for (i = 0; i <= 1; i++) {
          var f = function(t) {
            return Math.pow(1 - t, 3) * p0[i] + 3 * Math.pow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * Math.pow(t, 2) * p2[i] + Math.pow(t, 3) * p3[i];
          };
          var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
          var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
          var c = 3 * p1[i] - 3 * p0[i];
          if (a == 0) {
            if (b == 0) continue;
            var t = -c / b;
            if (0 < t && t < 1) {
              if (i == 0) this.addX(f(t));
              if (i == 1) this.addY(f(t));
            }
            continue;
          }
          var b2ac = Math.pow(b, 2) - 4 * c * a;
          if (b2ac < 0) continue;
          var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
          if (0 < t1 && t1 < 1) {
            if (i == 0) this.addX(f(t1));
            if (i == 1) this.addY(f(t1));
          }
          var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
          if (0 < t2 && t2 < 1) {
            if (i == 0) this.addX(f(t2));
            if (i == 1) this.addY(f(t2));
          }
        }
      };
      this.isPointInBox = function(x, y) {
        return this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2;
      };
      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    };
    svg.Transform = function(v) {
      var that = this;
      this.Type = {};
      this.Type.translate = function(s) {
        this.p = svg.CreatePoint(s);
        this.apply = function(ctx) {
          ctx.translate(this.p.x || 0, this.p.y || 0);
        };
        this.unapply = function(ctx) {
          ctx.translate(-1 * this.p.x || 0, -1 * this.p.y || 0);
        };
        this.applyToPoint = function(p) {
          p.applyTransform([ 1, 0, 0, 1, this.p.x || 0, this.p.y || 0 ]);
        };
      };
      this.Type.rotate = function(s) {
        var a = svg.ToNumberArray(s);
        this.angle = new svg.Property("angle", a[0]);
        this.cx = a[1] || 0;
        this.cy = a[2] || 0;
        this.apply = function(ctx) {
          ctx.translate(this.cx, this.cy);
          ctx.rotate(this.angle.toRadians());
          ctx.translate(-this.cx, -this.cy);
        };
        this.unapply = function(ctx) {
          ctx.translate(this.cx, this.cy);
          ctx.rotate(-1 * this.angle.toRadians());
          ctx.translate(-this.cx, -this.cy);
        };
        this.applyToPoint = function(p) {
          var a = this.angle.toRadians();
          p.applyTransform([ 1, 0, 0, 1, this.p.x || 0, this.p.y || 0 ]);
          p.applyTransform([ Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0 ]);
          p.applyTransform([ 1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0 ]);
        };
      };
      this.Type.scale = function(s) {
        this.p = svg.CreatePoint(s);
        this.apply = function(ctx) {
          ctx.scale(this.p.x || 1, this.p.y || this.p.x || 1);
        };
        this.unapply = function(ctx) {
          ctx.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1);
        };
        this.applyToPoint = function(p) {
          p.applyTransform([ this.p.x || 0, 0, 0, this.p.y || 0, 0, 0 ]);
        };
      };
      this.Type.matrix = function(s) {
        this.m = svg.ToNumberArray(s);
        this.apply = function(ctx) {
          ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        };
        this.applyToPoint = function(p) {
          p.applyTransform(this.m);
        };
      };
      this.Type.SkewBase = function(s) {
        this.base = that.Type.matrix;
        this.base(s);
        this.angle = new svg.Property("angle", s);
      };
      this.Type.SkewBase.prototype = new this.Type.matrix;
      this.Type.skewX = function(s) {
        this.base = that.Type.SkewBase;
        this.base(s);
        this.m = [ 1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0 ];
      };
      this.Type.skewX.prototype = new this.Type.SkewBase;
      this.Type.skewY = function(s) {
        this.base = that.Type.SkewBase;
        this.base(s);
        this.m = [ 1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0 ];
      };
      this.Type.skewY.prototype = new this.Type.SkewBase;
      this.transforms = [];
      this.apply = function(ctx) {
        for (var i = 0; i < this.transforms.length; i++) {
          this.transforms[i].apply(ctx);
        }
      };
      this.unapply = function(ctx) {
        for (var i = this.transforms.length - 1; i >= 0; i--) {
          this.transforms[i].unapply(ctx);
        }
      };
      this.applyToPoint = function(p) {
        for (var i = 0; i < this.transforms.length; i++) {
          this.transforms[i].applyToPoint(p);
        }
      };
      var data = svg.trim(svg.compressSpaces(v)).replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
      for (var i = 0; i < data.length; i++) {
        var type = svg.trim(data[i].split("(")[0]);
        var s = data[i].split("(")[1].replace(")", "");
        var transform = new this.Type[type](s);
        transform.type = type;
        this.transforms.push(transform);
      }
    };
    svg.AspectRatio = function(ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
      aspectRatio = svg.compressSpaces(aspectRatio);
      aspectRatio = aspectRatio.replace(/^defer\s/, "");
      var align = aspectRatio.split(" ")[0] || "xMidYMid";
      var meetOrSlice = aspectRatio.split(" ")[1] || "meet";
      var scaleX = width / desiredWidth;
      var scaleY = height / desiredHeight;
      var scaleMin = Math.min(scaleX, scaleY);
      var scaleMax = Math.max(scaleX, scaleY);
      if (meetOrSlice == "meet") {
        desiredWidth *= scaleMin;
        desiredHeight *= scaleMin;
      }
      if (meetOrSlice == "slice") {
        desiredWidth *= scaleMax;
        desiredHeight *= scaleMax;
      }
      refX = new svg.Property("refX", refX);
      refY = new svg.Property("refY", refY);
      if (refX.hasValue() && refY.hasValue()) {
        ctx.translate(-scaleMin * refX.toPixels("x"), -scaleMin * refY.toPixels("y"));
      } else {
        if (align.match(/^xMid/) && (meetOrSlice == "meet" && scaleMin == scaleY || meetOrSlice == "slice" && scaleMax == scaleY)) ctx.translate(width / 2 - desiredWidth / 2, 0);
        if (align.match(/YMid$/) && (meetOrSlice == "meet" && scaleMin == scaleX || meetOrSlice == "slice" && scaleMax == scaleX)) ctx.translate(0, height / 2 - desiredHeight / 2);
        if (align.match(/^xMax/) && (meetOrSlice == "meet" && scaleMin == scaleY || meetOrSlice == "slice" && scaleMax == scaleY)) ctx.translate(width - desiredWidth, 0);
        if (align.match(/YMax$/) && (meetOrSlice == "meet" && scaleMin == scaleX || meetOrSlice == "slice" && scaleMax == scaleX)) ctx.translate(0, height - desiredHeight);
      }
      if (align == "none") ctx.scale(scaleX, scaleY); else if (meetOrSlice == "meet") ctx.scale(scaleMin, scaleMin); else if (meetOrSlice == "slice") ctx.scale(scaleMax, scaleMax);
      ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
    };
    svg.Element = {};
    svg.EmptyProperty = new svg.Property("EMPTY", "");
    svg.Element.ElementBase = function(node) {
      this.attributes = {};
      this.styles = {};
      this.children = [];
      this.attribute = function(name, createIfNotExists) {
        var a = this.attributes[name];
        if (a != null) return a;
        if (createIfNotExists == true) {
          a = new svg.Property(name, "");
          this.attributes[name] = a;
        }
        return a || svg.EmptyProperty;
      };
      this.getHrefAttribute = function() {
        for (var a in this.attributes) {
          if (a.match(/:href$/)) {
            return this.attributes[a];
          }
        }
        return svg.EmptyProperty;
      };
      this.style = function(name, createIfNotExists) {
        var s = this.styles[name];
        if (s != null) return s;
        var a = this.attribute(name);
        if (a != null && a.hasValue()) {
          this.styles[name] = a;
          return a;
        }
        var p = this.parent;
        if (p != null) {
          var ps = p.style(name);
          if (ps != null && ps.hasValue()) {
            return ps;
          }
        }
        if (createIfNotExists == true) {
          s = new svg.Property(name, "");
          this.styles[name] = s;
        }
        return s || svg.EmptyProperty;
      };
      this.render = function(ctx) {
        if (this.style("display").value == "none") return;
        if (this.attribute("visibility").value == "hidden") return;
        ctx.save();
        if (this.attribute("mask").hasValue()) {
          var mask = this.attribute("mask").getDefinition();
          if (mask != null) mask.apply(ctx, this);
        } else if (this.style("filter").hasValue()) {
          var filter = this.style("filter").getDefinition();
          if (filter != null) filter.apply(ctx, this);
        } else {
          this.setContext(ctx);
          this.renderChildren(ctx);
          this.clearContext(ctx);
        }
        ctx.restore();
      };
      this.setContext = function(ctx) {};
      this.clearContext = function(ctx) {};
      this.renderChildren = function(ctx) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].render(ctx);
        }
      };
      this.addChild = function(childNode, create) {
        var child = childNode;
        if (create) child = svg.CreateElement(childNode);
        child.parent = this;
        this.children.push(child);
      };
      if (node != null && node.nodeType == 1) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var childNode = node.childNodes[i];
          if (childNode.nodeType == 1) this.addChild(childNode, true);
          if (this.captureTextNodes && childNode.nodeType == 3) {
            var text = childNode.nodeValue || childNode.text || "";
            if (svg.trim(svg.compressSpaces(text)) != "") {
              this.addChild(new svg.Element.tspan(childNode), false);
            }
          }
        }
        for (var i = 0; i < node.attributes.length; i++) {
          var attribute = node.attributes[i];
          this.attributes[attribute.nodeName] = new svg.Property(attribute.nodeName, attribute.nodeValue);
        }
        var styles = svg.Styles[node.nodeName];
        if (styles != null) {
          for (var name in styles) {
            this.styles[name] = styles[name];
          }
        }
        if (this.attribute("class").hasValue()) {
          var classes = svg.compressSpaces(this.attribute("class").value).split(" ");
          for (var j = 0; j < classes.length; j++) {
            styles = svg.Styles["." + classes[j]];
            if (styles != null) {
              for (var name in styles) {
                this.styles[name] = styles[name];
              }
            }
            styles = svg.Styles[node.nodeName + "." + classes[j]];
            if (styles != null) {
              for (var name in styles) {
                this.styles[name] = styles[name];
              }
            }
          }
        }
        if (this.attribute("id").hasValue()) {
          var styles = svg.Styles["#" + this.attribute("id").value];
          if (styles != null) {
            for (var name in styles) {
              this.styles[name] = styles[name];
            }
          }
        }
        if (this.attribute("style").hasValue()) {
          var styles = this.attribute("style").value.split(";");
          for (var i = 0; i < styles.length; i++) {
            if (svg.trim(styles[i]) != "") {
              var style = styles[i].split(":");
              var name = svg.trim(style[0]);
              var value = svg.trim(style[1]);
              this.styles[name] = new svg.Property(name, value);
            }
          }
        }
        if (this.attribute("id").hasValue()) {
          if (svg.Definitions[this.attribute("id").value] == null) {
            svg.Definitions[this.attribute("id").value] = this;
          }
        }
      }
    };
    svg.Element.RenderedElementBase = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.setContext = function(ctx) {
        if (this.style("fill").isUrlDefinition()) {
          var fs = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
          if (fs != null) ctx.fillStyle = fs;
        } else if (this.style("fill").hasValue()) {
          var fillStyle = this.style("fill");
          if (fillStyle.value == "currentColor") fillStyle.value = this.style("color").value;
          ctx.fillStyle = fillStyle.value == "none" ? "rgba(0,0,0,0)" : fillStyle.value;
        }
        if (this.style("fill-opacity").hasValue()) {
          var fillStyle = new svg.Property("fill", ctx.fillStyle);
          fillStyle = fillStyle.addOpacity(this.style("fill-opacity").value);
          ctx.fillStyle = fillStyle.value;
        }
        if (this.style("stroke").isUrlDefinition()) {
          var fs = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
          if (fs != null) ctx.strokeStyle = fs;
        } else if (this.style("stroke").hasValue()) {
          var strokeStyle = this.style("stroke");
          if (strokeStyle.value == "currentColor") strokeStyle.value = this.style("color").value;
          ctx.strokeStyle = strokeStyle.value == "none" ? "rgba(0,0,0,0)" : strokeStyle.value;
        }
        if (this.style("stroke-opacity").hasValue()) {
          var strokeStyle = new svg.Property("stroke", ctx.strokeStyle);
          strokeStyle = strokeStyle.addOpacity(this.style("stroke-opacity").value);
          ctx.strokeStyle = strokeStyle.value;
        }
        if (this.style("stroke-width").hasValue()) {
          var newLineWidth = this.style("stroke-width").toPixels();
          ctx.lineWidth = newLineWidth == 0 ? .001 : newLineWidth;
        }
        if (this.style("stroke-linecap").hasValue()) ctx.lineCap = this.style("stroke-linecap").value;
        if (this.style("stroke-linejoin").hasValue()) ctx.lineJoin = this.style("stroke-linejoin").value;
        if (this.style("stroke-miterlimit").hasValue()) ctx.miterLimit = this.style("stroke-miterlimit").value;
        if (this.style("stroke-dasharray").hasValue() && this.style("stroke-dasharray").value != "none") {
          var gaps = svg.ToNumberArray(this.style("stroke-dasharray").value);
          if (typeof ctx.setLineDash != "undefined") {
            ctx.setLineDash(gaps);
          } else if (typeof ctx.webkitLineDash != "undefined") {
            ctx.webkitLineDash = gaps;
          } else if (typeof ctx.mozDash != "undefined") {
            ctx.mozDash = gaps;
          }
          var offset = this.style("stroke-dashoffset").numValueOrDefault(1);
          if (typeof ctx.lineDashOffset != "undefined") {
            ctx.lineDashOffset = offset;
          } else if (typeof ctx.webkitLineDashOffset != "undefined") {
            ctx.webkitLineDashOffset = offset;
          } else if (typeof ctx.mozDashOffset != "undefined") {
            ctx.mozDashOffset = offset;
          }
        }
        if (typeof ctx.font != "undefined") {
          ctx.font = svg.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString();
        }
        if (this.attribute("transform").hasValue()) {
          var transform = new svg.Transform(this.attribute("transform").value);
          transform.apply(ctx);
        }
        if (this.style("clip-path").hasValue()) {
          var clip = this.style("clip-path").getDefinition();
          if (clip != null) clip.apply(ctx);
        }
        if (this.style("opacity").hasValue()) {
          ctx.globalAlpha = this.style("opacity").numValue();
        }
      };
    };
    svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase;
    svg.Element.PathElementBase = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.path = function(ctx) {
        if (ctx != null) ctx.beginPath();
        return new svg.BoundingBox;
      };
      this.renderChildren = function(ctx) {
        this.path(ctx);
        svg.Mouse.checkPath(this, ctx);
        if (ctx.fillStyle != "") {
          if (this.attribute("fill-rule").hasValue()) {
            ctx.fill(this.attribute("fill-rule").value);
          } else {
            ctx.fill();
          }
        }
        if (ctx.strokeStyle != "") ctx.stroke();
        var markers = this.getMarkers();
        if (markers != null) {
          if (this.style("marker-start").isUrlDefinition()) {
            var marker = this.style("marker-start").getDefinition();
            marker.render(ctx, markers[0][0], markers[0][1]);
          }
          if (this.style("marker-mid").isUrlDefinition()) {
            var marker = this.style("marker-mid").getDefinition();
            for (var i = 1; i < markers.length - 1; i++) {
              marker.render(ctx, markers[i][0], markers[i][1]);
            }
          }
          if (this.style("marker-end").isUrlDefinition()) {
            var marker = this.style("marker-end").getDefinition();
            marker.render(ctx, markers[markers.length - 1][0], markers[markers.length - 1][1]);
          }
        }
      };
      this.getBoundingBox = function() {
        return this.path();
      };
      this.getMarkers = function() {
        return null;
      };
    };
    svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase;
    svg.Element.svg = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseClearContext = this.clearContext;
      this.clearContext = function(ctx) {
        this.baseClearContext(ctx);
        svg.ViewPort.RemoveCurrent();
      };
      this.baseSetContext = this.setContext;
      this.setContext = function(ctx) {
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        this.baseSetContext(ctx);
        if (!this.attribute("x").hasValue()) this.attribute("x", true).value = 0;
        if (!this.attribute("y").hasValue()) this.attribute("y", true).value = 0;
        ctx.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
        var width = svg.ViewPort.width();
        var height = svg.ViewPort.height();
        if (!this.attribute("width").hasValue()) this.attribute("width", true).value = "100%";
        if (!this.attribute("height").hasValue()) this.attribute("height", true).value = "100%";
        if (typeof this.root == "undefined") {
          width = this.attribute("width").toPixels("x");
          height = this.attribute("height").toPixels("y");
          var x = 0;
          var y = 0;
          if (this.attribute("refX").hasValue() && this.attribute("refY").hasValue()) {
            x = -this.attribute("refX").toPixels("x");
            y = -this.attribute("refY").toPixels("y");
          }
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(width, y);
          ctx.lineTo(width, height);
          ctx.lineTo(x, height);
          ctx.closePath();
          ctx.clip();
        }
        svg.ViewPort.SetCurrent(width, height);
        if (this.attribute("viewBox").hasValue()) {
          var viewBox = svg.ToNumberArray(this.attribute("viewBox").value);
          var minX = viewBox[0];
          var minY = viewBox[1];
          width = viewBox[2];
          height = viewBox[3];
          svg.AspectRatio(ctx, this.attribute("preserveAspectRatio").value, svg.ViewPort.width(), width, svg.ViewPort.height(), height, minX, minY, this.attribute("refX").value, this.attribute("refY").value);
          svg.ViewPort.RemoveCurrent();
          svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
        }
      };
    };
    svg.Element.svg.prototype = new svg.Element.RenderedElementBase;
    svg.Element.rect = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.path = function(ctx) {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        var rx = this.attribute("rx").toPixels("x");
        var ry = this.attribute("ry").toPixels("y");
        if (this.attribute("rx").hasValue() && !this.attribute("ry").hasValue()) ry = rx;
        if (this.attribute("ry").hasValue() && !this.attribute("rx").hasValue()) rx = ry;
        rx = Math.min(rx, width / 2);
        ry = Math.min(ry, height / 2);
        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(x + rx, y);
          ctx.lineTo(x + width - rx, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
          ctx.lineTo(x + width, y + height - ry);
          ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
          ctx.lineTo(x + rx, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
          ctx.lineTo(x, y + ry);
          ctx.quadraticCurveTo(x, y, x + rx, y);
          ctx.closePath();
        }
        return new svg.BoundingBox(x, y, x + width, y + height);
      };
    };
    svg.Element.rect.prototype = new svg.Element.PathElementBase;
    svg.Element.circle = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.path = function(ctx) {
        var cx = this.attribute("cx").toPixels("x");
        var cy = this.attribute("cy").toPixels("y");
        var r = this.attribute("r").toPixels();
        if (ctx != null) {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
          ctx.closePath();
        }
        return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
      };
    };
    svg.Element.circle.prototype = new svg.Element.PathElementBase;
    svg.Element.ellipse = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.path = function(ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        var rx = this.attribute("rx").toPixels("x");
        var ry = this.attribute("ry").toPixels("y");
        var cx = this.attribute("cx").toPixels("x");
        var cy = this.attribute("cy").toPixels("y");
        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(cx, cy - ry);
          ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
          ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
          ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
          ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
          ctx.closePath();
        }
        return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
      };
    };
    svg.Element.ellipse.prototype = new svg.Element.PathElementBase;
    svg.Element.line = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.getPoints = function() {
        return [ new svg.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new svg.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y")) ];
      };
      this.path = function(ctx) {
        var points = this.getPoints();
        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          ctx.lineTo(points[1].x, points[1].y);
        }
        return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
      };
      this.getMarkers = function() {
        var points = this.getPoints();
        var a = points[0].angleTo(points[1]);
        return [ [ points[0], a ], [ points[1], a ] ];
      };
    };
    svg.Element.line.prototype = new svg.Element.PathElementBase;
    svg.Element.polyline = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.points = svg.CreatePath(this.attribute("points").value);
      this.path = function(ctx) {
        var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(this.points[0].x, this.points[0].y);
        }
        for (var i = 1; i < this.points.length; i++) {
          bb.addPoint(this.points[i].x, this.points[i].y);
          if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        return bb;
      };
      this.getMarkers = function() {
        var markers = [];
        for (var i = 0; i < this.points.length - 1; i++) {
          markers.push([ this.points[i], this.points[i].angleTo(this.points[i + 1]) ]);
        }
        markers.push([ this.points[this.points.length - 1], markers[markers.length - 1][1] ]);
        return markers;
      };
    };
    svg.Element.polyline.prototype = new svg.Element.PathElementBase;
    svg.Element.polygon = function(node) {
      this.base = svg.Element.polyline;
      this.base(node);
      this.basePath = this.path;
      this.path = function(ctx) {
        var bb = this.basePath(ctx);
        if (ctx != null) {
          ctx.lineTo(this.points[0].x, this.points[0].y);
          ctx.closePath();
        }
        return bb;
      };
    };
    svg.Element.polygon.prototype = new svg.Element.polyline;
    svg.Element.path = function(node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      var d = this.attribute("d").value;
      d = d.replace(/,/gm, " ");
      d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2");
      d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2");
      d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
      d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2");
      d = d.replace(/([0-9])([+\-])/gm, "$1 $2");
      d = d.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
      d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ");
      d = svg.compressSpaces(d);
      d = svg.trim(d);
      this.PathParser = new function(d) {
        this.tokens = d.split(" ");
        this.reset = function() {
          this.i = -1;
          this.command = "";
          this.previousCommand = "";
          this.start = new svg.Point(0, 0);
          this.control = new svg.Point(0, 0);
          this.current = new svg.Point(0, 0);
          this.points = [];
          this.angles = [];
        };
        this.isEnd = function() {
          return this.i >= this.tokens.length - 1;
        };
        this.isCommandOrEnd = function() {
          if (this.isEnd()) return true;
          return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
        };
        this.isRelativeCommand = function() {
          switch (this.command) {
           case "m":
           case "l":
           case "h":
           case "v":
           case "c":
           case "s":
           case "q":
           case "t":
           case "a":
           case "z":
            return true;
            break;
          }
          return false;
        };
        this.getToken = function() {
          this.i++;
          return this.tokens[this.i];
        };
        this.getScalar = function() {
          return parseFloat(this.getToken());
        };
        this.nextCommand = function() {
          this.previousCommand = this.command;
          this.command = this.getToken();
        };
        this.getPoint = function() {
          var p = new svg.Point(this.getScalar(), this.getScalar());
          return this.makeAbsolute(p);
        };
        this.getAsControlPoint = function() {
          var p = this.getPoint();
          this.control = p;
          return p;
        };
        this.getAsCurrentPoint = function() {
          var p = this.getPoint();
          this.current = p;
          return p;
        };
        this.getReflectedControlPoint = function() {
          if (this.previousCommand.toLowerCase() != "c" && this.previousCommand.toLowerCase() != "s" && this.previousCommand.toLowerCase() != "q" && this.previousCommand.toLowerCase() != "t") {
            return this.current;
          }
          var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
          return p;
        };
        this.makeAbsolute = function(p) {
          if (this.isRelativeCommand()) {
            p.x += this.current.x;
            p.y += this.current.y;
          }
          return p;
        };
        this.addMarker = function(p, from, priorTo) {
          if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
            this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
          }
          this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
        };
        this.addMarkerAngle = function(p, a) {
          this.points.push(p);
          this.angles.push(a);
        };
        this.getMarkerPoints = function() {
          return this.points;
        };
        this.getMarkerAngles = function() {
          for (var i = 0; i < this.angles.length; i++) {
            if (this.angles[i] == null) {
              for (var j = i + 1; j < this.angles.length; j++) {
                if (this.angles[j] != null) {
                  this.angles[i] = this.angles[j];
                  break;
                }
              }
            }
          }
          return this.angles;
        };
      }(d);
      this.path = function(ctx) {
        var pp = this.PathParser;
        pp.reset();
        var bb = new svg.BoundingBox;
        if (ctx != null) ctx.beginPath();
        while (!pp.isEnd()) {
          pp.nextCommand();
          switch (pp.command) {
           case "M":
           case "m":
            var p = pp.getAsCurrentPoint();
            pp.addMarker(p);
            bb.addPoint(p.x, p.y);
            if (ctx != null) ctx.moveTo(p.x, p.y);
            pp.start = pp.current;
            while (!pp.isCommandOrEnd()) {
              var p = pp.getAsCurrentPoint();
              pp.addMarker(p, pp.start);
              bb.addPoint(p.x, p.y);
              if (ctx != null) ctx.lineTo(p.x, p.y);
            }
            break;
           case "L":
           case "l":
            while (!pp.isCommandOrEnd()) {
              var c = pp.current;
              var p = pp.getAsCurrentPoint();
              pp.addMarker(p, c);
              bb.addPoint(p.x, p.y);
              if (ctx != null) ctx.lineTo(p.x, p.y);
            }
            break;
           case "H":
           case "h":
            while (!pp.isCommandOrEnd()) {
              var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
              pp.addMarker(newP, pp.current);
              pp.current = newP;
              bb.addPoint(pp.current.x, pp.current.y);
              if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
            }
            break;
           case "V":
           case "v":
            while (!pp.isCommandOrEnd()) {
              var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
              pp.addMarker(newP, pp.current);
              pp.current = newP;
              bb.addPoint(pp.current.x, pp.current.y);
              if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
            }
            break;
           case "C":
           case "c":
            while (!pp.isCommandOrEnd()) {
              var curr = pp.current;
              var p1 = pp.getPoint();
              var cntrl = pp.getAsControlPoint();
              var cp = pp.getAsCurrentPoint();
              pp.addMarker(cp, cntrl, p1);
              bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
              if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
           case "S":
           case "s":
            while (!pp.isCommandOrEnd()) {
              var curr = pp.current;
              var p1 = pp.getReflectedControlPoint();
              var cntrl = pp.getAsControlPoint();
              var cp = pp.getAsCurrentPoint();
              pp.addMarker(cp, cntrl, p1);
              bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
              if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
           case "Q":
           case "q":
            while (!pp.isCommandOrEnd()) {
              var curr = pp.current;
              var cntrl = pp.getAsControlPoint();
              var cp = pp.getAsCurrentPoint();
              pp.addMarker(cp, cntrl, cntrl);
              bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
              if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
           case "T":
           case "t":
            while (!pp.isCommandOrEnd()) {
              var curr = pp.current;
              var cntrl = pp.getReflectedControlPoint();
              pp.control = cntrl;
              var cp = pp.getAsCurrentPoint();
              pp.addMarker(cp, cntrl, cntrl);
              bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
              if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
            }
            break;
           case "A":
           case "a":
            while (!pp.isCommandOrEnd()) {
              var curr = pp.current;
              var rx = pp.getScalar();
              var ry = pp.getScalar();
              var xAxisRotation = pp.getScalar() * (Math.PI / 180);
              var largeArcFlag = pp.getScalar();
              var sweepFlag = pp.getScalar();
              var cp = pp.getAsCurrentPoint();
              var currp = new svg.Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2);
              var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
              if (l > 1) {
                rx *= Math.sqrt(l);
                ry *= Math.sqrt(l);
              }
              var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
              if (isNaN(s)) s = 0;
              var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
              var centp = new svg.Point((curr.x + cp.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
              var m = function(v) {
                return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
              };
              var r = function(u, v) {
                return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
              };
              var a = function(u, v) {
                return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
              };
              var a1 = a([ 1, 0 ], [ (currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry ]);
              var u = [ (currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry ];
              var v = [ (-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry ];
              var ad = a(u, v);
              if (r(u, v) <= -1) ad = Math.PI;
              if (r(u, v) >= 1) ad = 0;
              var dir = 1 - sweepFlag ? 1 : -1;
              var ah = a1 + dir * (ad / 2);
              var halfWay = new svg.Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
              pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
              pp.addMarkerAngle(cp, ah - dir * Math.PI);
              bb.addPoint(cp.x, cp.y);
              if (ctx != null) {
                var r = rx > ry ? rx : ry;
                var sx = rx > ry ? 1 : rx / ry;
                var sy = rx > ry ? ry / rx : 1;
                ctx.translate(centp.x, centp.y);
                ctx.rotate(xAxisRotation);
                ctx.scale(sx, sy);
                ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
                ctx.scale(1 / sx, 1 / sy);
                ctx.rotate(-xAxisRotation);
                ctx.translate(-centp.x, -centp.y);
              }
            }
            break;
           case "Z":
           case "z":
            if (ctx != null) ctx.closePath();
            pp.current = pp.start;
          }
        }
        return bb;
      };
      this.getMarkers = function() {
        var points = this.PathParser.getMarkerPoints();
        var angles = this.PathParser.getMarkerAngles();
        var markers = [];
        for (var i = 0; i < points.length; i++) {
          markers.push([ points[i], angles[i] ]);
        }
        return markers;
      };
    };
    svg.Element.path.prototype = new svg.Element.PathElementBase;
    svg.Element.pattern = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.createPattern = function(ctx, element) {
        var width = this.attribute("width").toPixels("x", true);
        var height = this.attribute("height").toPixels("y", true);
        var tempSvg = new svg.Element.svg;
        tempSvg.attributes["viewBox"] = new svg.Property("viewBox", this.attribute("viewBox").value);
        tempSvg.attributes["width"] = new svg.Property("width", width + "px");
        tempSvg.attributes["height"] = new svg.Property("height", height + "px");
        tempSvg.attributes["transform"] = new svg.Property("transform", this.attribute("patternTransform").value);
        tempSvg.children = this.children;
        var c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        var cctx = c.getContext("2d");
        if (this.attribute("x").hasValue() && this.attribute("y").hasValue()) {
          cctx.translate(this.attribute("x").toPixels("x", true), this.attribute("y").toPixels("y", true));
        }
        for (var x = -1; x <= 1; x++) {
          for (var y = -1; y <= 1; y++) {
            cctx.save();
            cctx.translate(x * c.width, y * c.height);
            tempSvg.render(cctx);
            cctx.restore();
          }
        }
        var pattern = ctx.createPattern(c, "repeat");
        return pattern;
      };
    };
    svg.Element.pattern.prototype = new svg.Element.ElementBase;
    svg.Element.marker = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.baseRender = this.render;
      this.render = function(ctx, point, angle) {
        ctx.translate(point.x, point.y);
        if (this.attribute("orient").valueOrDefault("auto") == "auto") ctx.rotate(angle);
        if (this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth") ctx.scale(ctx.lineWidth, ctx.lineWidth);
        ctx.save();
        var tempSvg = new svg.Element.svg;
        tempSvg.attributes["viewBox"] = new svg.Property("viewBox", this.attribute("viewBox").value);
        tempSvg.attributes["refX"] = new svg.Property("refX", this.attribute("refX").value);
        tempSvg.attributes["refY"] = new svg.Property("refY", this.attribute("refY").value);
        tempSvg.attributes["width"] = new svg.Property("width", this.attribute("markerWidth").value);
        tempSvg.attributes["height"] = new svg.Property("height", this.attribute("markerHeight").value);
        tempSvg.attributes["fill"] = new svg.Property("fill", this.attribute("fill").valueOrDefault("black"));
        tempSvg.attributes["stroke"] = new svg.Property("stroke", this.attribute("stroke").valueOrDefault("none"));
        tempSvg.children = this.children;
        tempSvg.render(ctx);
        ctx.restore();
        if (this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth") ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
        if (this.attribute("orient").valueOrDefault("auto") == "auto") ctx.rotate(-angle);
        ctx.translate(-point.x, -point.y);
      };
    };
    svg.Element.marker.prototype = new svg.Element.ElementBase;
    svg.Element.defs = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.render = function(ctx) {};
    };
    svg.Element.defs.prototype = new svg.Element.ElementBase;
    svg.Element.GradientBase = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.gradientUnits = this.attribute("gradientUnits").valueOrDefault("objectBoundingBox");
      this.stops = [];
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.type == "stop") this.stops.push(child);
      }
      this.getGradient = function() {};
      this.createGradient = function(ctx, element, parentOpacityProp) {
        var stopsContainer = this;
        if (this.getHrefAttribute().hasValue()) {
          stopsContainer = this.getHrefAttribute().getDefinition();
        }
        var addParentOpacity = function(color) {
          if (parentOpacityProp.hasValue()) {
            var p = new svg.Property("color", color);
            return p.addOpacity(parentOpacityProp.value).value;
          }
          return color;
        };
        var g = this.getGradient(ctx, element);
        if (g == null) return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
        for (var i = 0; i < stopsContainer.stops.length; i++) {
          g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
        }
        if (this.attribute("gradientTransform").hasValue()) {
          var rootView = svg.ViewPort.viewPorts[0];
          var rect = new svg.Element.rect;
          rect.attributes["x"] = new svg.Property("x", -svg.MAX_VIRTUAL_PIXELS / 3);
          rect.attributes["y"] = new svg.Property("y", -svg.MAX_VIRTUAL_PIXELS / 3);
          rect.attributes["width"] = new svg.Property("width", svg.MAX_VIRTUAL_PIXELS);
          rect.attributes["height"] = new svg.Property("height", svg.MAX_VIRTUAL_PIXELS);
          var group = new svg.Element.g;
          group.attributes["transform"] = new svg.Property("transform", this.attribute("gradientTransform").value);
          group.children = [ rect ];
          var tempSvg = new svg.Element.svg;
          tempSvg.attributes["x"] = new svg.Property("x", 0);
          tempSvg.attributes["y"] = new svg.Property("y", 0);
          tempSvg.attributes["width"] = new svg.Property("width", rootView.width);
          tempSvg.attributes["height"] = new svg.Property("height", rootView.height);
          tempSvg.children = [ group ];
          var c = document.createElement("canvas");
          c.width = rootView.width;
          c.height = rootView.height;
          var tempCtx = c.getContext("2d");
          tempCtx.fillStyle = g;
          tempSvg.render(tempCtx);
          return tempCtx.createPattern(c, "no-repeat");
        }
        return g;
      };
    };
    svg.Element.GradientBase.prototype = new svg.Element.ElementBase;
    svg.Element.linearGradient = function(node) {
      this.base = svg.Element.GradientBase;
      this.base(node);
      this.getGradient = function(ctx, element) {
        var bb = element.getBoundingBox();
        if (!this.attribute("x1").hasValue() && !this.attribute("y1").hasValue() && !this.attribute("x2").hasValue() && !this.attribute("y2").hasValue()) {
          this.attribute("x1", true).value = 0;
          this.attribute("y1", true).value = 0;
          this.attribute("x2", true).value = 1;
          this.attribute("y2", true).value = 0;
        }
        var x1 = this.gradientUnits == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x");
        var y1 = this.gradientUnits == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y");
        var x2 = this.gradientUnits == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x");
        var y2 = this.gradientUnits == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
        if (x1 == x2 && y1 == y2) return null;
        return ctx.createLinearGradient(x1, y1, x2, y2);
      };
    };
    svg.Element.linearGradient.prototype = new svg.Element.GradientBase;
    svg.Element.radialGradient = function(node) {
      this.base = svg.Element.GradientBase;
      this.base(node);
      this.getGradient = function(ctx, element) {
        var bb = element.getBoundingBox();
        if (!this.attribute("cx").hasValue()) this.attribute("cx", true).value = "50%";
        if (!this.attribute("cy").hasValue()) this.attribute("cy", true).value = "50%";
        if (!this.attribute("r").hasValue()) this.attribute("r", true).value = "50%";
        var cx = this.gradientUnits == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x");
        var cy = this.gradientUnits == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y");
        var fx = cx;
        var fy = cy;
        if (this.attribute("fx").hasValue()) {
          fx = this.gradientUnits == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x");
        }
        if (this.attribute("fy").hasValue()) {
          fy = this.gradientUnits == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y");
        }
        var r = this.gradientUnits == "objectBoundingBox" ? (bb.width() + bb.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
        return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
      };
    };
    svg.Element.radialGradient.prototype = new svg.Element.GradientBase;
    svg.Element.stop = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.offset = this.attribute("offset").numValue();
      if (this.offset < 0) this.offset = 0;
      if (this.offset > 1) this.offset = 1;
      var stopColor = this.style("stop-color");
      if (this.style("stop-opacity").hasValue()) stopColor = stopColor.addOpacity(this.style("stop-opacity").value);
      this.color = stopColor.value;
    };
    svg.Element.stop.prototype = new svg.Element.ElementBase;
    svg.Element.AnimateBase = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      svg.Animations.push(this);
      this.duration = 0;
      this.begin = this.attribute("begin").toMilliseconds();
      this.maxDuration = this.begin + this.attribute("dur").toMilliseconds();
      this.getProperty = function() {
        var attributeType = this.attribute("attributeType").value;
        var attributeName = this.attribute("attributeName").value;
        if (attributeType == "CSS") {
          return this.parent.style(attributeName, true);
        }
        return this.parent.attribute(attributeName, true);
      };
      this.initialValue = null;
      this.initialUnits = "";
      this.removed = false;
      this.calcValue = function() {
        return "";
      };
      this.update = function(delta) {
        if (this.initialValue == null) {
          this.initialValue = this.getProperty().value;
          this.initialUnits = this.getProperty().getUnits();
        }
        if (this.duration > this.maxDuration) {
          if (this.attribute("repeatCount").value == "indefinite" || this.attribute("repeatDur").value == "indefinite") {
            this.duration = 0;
          } else if (this.attribute("fill").valueOrDefault("remove") == "remove" && !this.removed) {
            this.removed = true;
            this.getProperty().value = this.initialValue;
            return true;
          } else {
            return false;
          }
        }
        this.duration = this.duration + delta;
        var updated = false;
        if (this.begin < this.duration) {
          var newValue = this.calcValue();
          if (this.attribute("type").hasValue()) {
            var type = this.attribute("type").value;
            newValue = type + "(" + newValue + ")";
          }
          this.getProperty().value = newValue;
          updated = true;
        }
        return updated;
      };
      this.from = this.attribute("from");
      this.to = this.attribute("to");
      this.values = this.attribute("values");
      if (this.values.hasValue()) this.values.value = this.values.value.split(";");
      this.progress = function() {
        var ret = {
          progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
        };
        if (this.values.hasValue()) {
          var p = ret.progress * (this.values.value.length - 1);
          var lb = Math.floor(p), ub = Math.ceil(p);
          ret.from = new svg.Property("from", parseFloat(this.values.value[lb]));
          ret.to = new svg.Property("to", parseFloat(this.values.value[ub]));
          ret.progress = (p - lb) / (ub - lb);
        } else {
          ret.from = this.from;
          ret.to = this.to;
        }
        return ret;
      };
    };
    svg.Element.AnimateBase.prototype = new svg.Element.ElementBase;
    svg.Element.animate = function(node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);
      this.calcValue = function() {
        var p = this.progress();
        var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress;
        return newValue + this.initialUnits;
      };
    };
    svg.Element.animate.prototype = new svg.Element.AnimateBase;
    svg.Element.animateColor = function(node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);
      this.calcValue = function() {
        var p = this.progress();
        var from = new RGBColor(p.from.value);
        var to = new RGBColor(p.to.value);
        if (from.ok && to.ok) {
          var r = from.r + (to.r - from.r) * p.progress;
          var g = from.g + (to.g - from.g) * p.progress;
          var b = from.b + (to.b - from.b) * p.progress;
          return "rgb(" + parseInt(r, 10) + "," + parseInt(g, 10) + "," + parseInt(b, 10) + ")";
        }
        return this.attribute("from").value;
      };
    };
    svg.Element.animateColor.prototype = new svg.Element.AnimateBase;
    svg.Element.animateTransform = function(node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);
      this.calcValue = function() {
        var p = this.progress();
        var from = svg.ToNumberArray(p.from.value);
        var to = svg.ToNumberArray(p.to.value);
        var newValue = "";
        for (var i = 0; i < from.length; i++) {
          newValue += from[i] + (to[i] - from[i]) * p.progress + " ";
        }
        return newValue;
      };
    };
    svg.Element.animateTransform.prototype = new svg.Element.animate;
    svg.Element.font = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.horizAdvX = this.attribute("horiz-adv-x").numValue();
      this.isRTL = false;
      this.isArabic = false;
      this.fontFace = null;
      this.missingGlyph = null;
      this.glyphs = [];
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.type == "font-face") {
          this.fontFace = child;
          if (child.style("font-family").hasValue()) {
            svg.Definitions[child.style("font-family").value] = this;
          }
        } else if (child.type == "missing-glyph") this.missingGlyph = child; else if (child.type == "glyph") {
          if (child.arabicForm != "") {
            this.isRTL = true;
            this.isArabic = true;
            if (typeof this.glyphs[child.unicode] == "undefined") this.glyphs[child.unicode] = [];
            this.glyphs[child.unicode][child.arabicForm] = child;
          } else {
            this.glyphs[child.unicode] = child;
          }
        }
      }
    };
    svg.Element.font.prototype = new svg.Element.ElementBase;
    svg.Element.fontface = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.ascent = this.attribute("ascent").value;
      this.descent = this.attribute("descent").value;
      this.unitsPerEm = this.attribute("units-per-em").numValue();
    };
    svg.Element.fontface.prototype = new svg.Element.ElementBase;
    svg.Element.missingglyph = function(node) {
      this.base = svg.Element.path;
      this.base(node);
      this.horizAdvX = 0;
    };
    svg.Element.missingglyph.prototype = new svg.Element.path;
    svg.Element.glyph = function(node) {
      this.base = svg.Element.path;
      this.base(node);
      this.horizAdvX = this.attribute("horiz-adv-x").numValue();
      this.unicode = this.attribute("unicode").value;
      this.arabicForm = this.attribute("arabic-form").value;
    };
    svg.Element.glyph.prototype = new svg.Element.path;
    svg.Element.text = function(node) {
      this.captureTextNodes = true;
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseSetContext = this.setContext;
      this.setContext = function(ctx) {
        this.baseSetContext(ctx);
        if (this.style("dominant-baseline").hasValue()) ctx.textBaseline = this.style("dominant-baseline").value;
        if (this.style("alignment-baseline").hasValue()) ctx.textBaseline = this.style("alignment-baseline").value;
      };
      this.getBoundingBox = function() {
        return new svg.BoundingBox(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"), 0, 0);
      };
      this.renderChildren = function(ctx) {
        this.x = this.attribute("x").toPixels("x");
        this.y = this.attribute("y").toPixels("y");
        this.x += this.getAnchorDelta(ctx, this, 0);
        for (var i = 0; i < this.children.length; i++) {
          this.renderChild(ctx, this, i);
        }
      };
      this.getAnchorDelta = function(ctx, parent, startI) {
        var textAnchor = this.style("text-anchor").valueOrDefault("start");
        if (textAnchor != "start") {
          var width = 0;
          for (var i = startI; i < parent.children.length; i++) {
            var child = parent.children[i];
            if (i > startI && child.attribute("x").hasValue()) break;
            width += child.measureTextRecursive(ctx);
          }
          return -1 * (textAnchor == "end" ? width : width / 2);
        }
        return 0;
      };
      this.renderChild = function(ctx, parent, i) {
        var child = parent.children[i];
        if (child.attribute("x").hasValue()) {
          child.x = child.attribute("x").toPixels("x") + this.getAnchorDelta(ctx, parent, i);
        } else {
          if (this.attribute("dx").hasValue()) this.x += this.attribute("dx").toPixels("x");
          if (child.attribute("dx").hasValue()) this.x += child.attribute("dx").toPixels("x");
          child.x = this.x;
        }
        this.x = child.x + child.measureText(ctx);
        if (child.attribute("y").hasValue()) {
          child.y = child.attribute("y").toPixels("y");
        } else {
          if (this.attribute("dy").hasValue()) this.y += this.attribute("dy").toPixels("y");
          if (child.attribute("dy").hasValue()) this.y += child.attribute("dy").toPixels("y");
          child.y = this.y;
        }
        this.y = child.y;
        child.render(ctx);
        for (var i = 0; i < child.children.length; i++) {
          this.renderChild(ctx, child, i);
        }
      };
    };
    svg.Element.text.prototype = new svg.Element.RenderedElementBase;
    svg.Element.TextElementBase = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.getGlyph = function(font, text, i) {
        var c = text[i];
        var glyph = null;
        if (font.isArabic) {
          var arabicForm = "isolated";
          if ((i == 0 || text[i - 1] == " ") && i < text.length - 2 && text[i + 1] != " ") arabicForm = "terminal";
          if (i > 0 && text[i - 1] != " " && i < text.length - 2 && text[i + 1] != " ") arabicForm = "medial";
          if (i > 0 && text[i - 1] != " " && (i == text.length - 1 || text[i + 1] == " ")) arabicForm = "initial";
          if (typeof font.glyphs[c] != "undefined") {
            glyph = font.glyphs[c][arabicForm];
            if (glyph == null && font.glyphs[c].type == "glyph") glyph = font.glyphs[c];
          }
        } else {
          glyph = font.glyphs[c];
        }
        if (glyph == null) glyph = font.missingGlyph;
        return glyph;
      };
      this.renderChildren = function(ctx) {
        var customFont = this.parent.style("font-family").getDefinition();
        if (customFont != null) {
          var fontSize = this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
          var fontStyle = this.parent.style("font-style").valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
          var text = this.getText();
          if (customFont.isRTL) text = text.split("").reverse().join("");
          var dx = svg.ToNumberArray(this.parent.attribute("dx").value);
          for (var i = 0; i < text.length; i++) {
            var glyph = this.getGlyph(customFont, text, i);
            var scale = fontSize / customFont.fontFace.unitsPerEm;
            ctx.translate(this.x, this.y);
            ctx.scale(scale, -scale);
            var lw = ctx.lineWidth;
            ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
            if (fontStyle == "italic") ctx.transform(1, 0, .4, 1, 0, 0);
            glyph.render(ctx);
            if (fontStyle == "italic") ctx.transform(1, 0, -.4, 1, 0, 0);
            ctx.lineWidth = lw;
            ctx.scale(1 / scale, -1 / scale);
            ctx.translate(-this.x, -this.y);
            this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;
            if (typeof dx[i] != "undefined" && !isNaN(dx[i])) {
              this.x += dx[i];
            }
          }
          return;
        }
        if (ctx.fillStyle != "") ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
        if (ctx.strokeStyle != "") ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
      };
      this.getText = function() {};
      this.measureTextRecursive = function(ctx) {
        var width = this.measureText(ctx);
        for (var i = 0; i < this.children.length; i++) {
          width += this.children[i].measureTextRecursive(ctx);
        }
        return width;
      };
      this.measureText = function(ctx) {
        var customFont = this.parent.style("font-family").getDefinition();
        if (customFont != null) {
          var fontSize = this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
          var measure = 0;
          var text = this.getText();
          if (customFont.isRTL) text = text.split("").reverse().join("");
          var dx = svg.ToNumberArray(this.parent.attribute("dx").value);
          for (var i = 0; i < text.length; i++) {
            var glyph = this.getGlyph(customFont, text, i);
            measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
            if (typeof dx[i] != "undefined" && !isNaN(dx[i])) {
              measure += dx[i];
            }
          }
          return measure;
        }
        var textToMeasure = svg.compressSpaces(this.getText());
        if (!ctx.measureText) return textToMeasure.length * 10;
        ctx.save();
        this.setContext(ctx);
        var width = ctx.measureText(textToMeasure).width;
        ctx.restore();
        return width;
      };
    };
    svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase;
    svg.Element.tspan = function(node) {
      this.captureTextNodes = true;
      this.base = svg.Element.TextElementBase;
      this.base(node);
      this.text = node.nodeValue || node.text || "";
      this.getText = function() {
        return this.text;
      };
    };
    svg.Element.tspan.prototype = new svg.Element.TextElementBase;
    svg.Element.tref = function(node) {
      this.base = svg.Element.TextElementBase;
      this.base(node);
      this.getText = function() {
        var element = this.getHrefAttribute().getDefinition();
        if (element != null) return element.children[0].getText();
      };
    };
    svg.Element.tref.prototype = new svg.Element.TextElementBase;
    svg.Element.a = function(node) {
      this.base = svg.Element.TextElementBase;
      this.base(node);
      this.hasText = true;
      for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType != 3) this.hasText = false;
      }
      this.text = this.hasText ? node.childNodes[0].nodeValue : "";
      this.getText = function() {
        return this.text;
      };
      this.baseRenderChildren = this.renderChildren;
      this.renderChildren = function(ctx) {
        if (this.hasText) {
          this.baseRenderChildren(ctx);
          var fontSize = new svg.Property("fontSize", svg.Font.Parse(svg.ctx.font).fontSize);
          svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels("y"), this.x + this.measureText(ctx), this.y));
        } else {
          var g = new svg.Element.g;
          g.children = this.children;
          g.parent = this;
          g.render(ctx);
        }
      };
      this.onclick = function() {
        window.open(this.getHrefAttribute().value);
      };
      this.onmousemove = function() {
        svg.ctx.canvas.style.cursor = "pointer";
      };
    };
    svg.Element.a.prototype = new svg.Element.TextElementBase;
    svg.Element.image = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      var href = this.getHrefAttribute().value;
      var isSvg = href.match(/\.svg$/);
      svg.Images.push(this);
      this.loaded = false;
      if (!isSvg) {
        this.img = document.createElement("img");
        var self = this;
        this.img.onload = function() {
          self.loaded = true;
        };
        this.img.onerror = function() {
          if (typeof console != "undefined") {
            console.log('ERROR: image "' + href + '" not found');
            self.loaded = true;
          }
        };
        this.img.src = href;
      } else {
        this.img = svg.ajax(href);
        this.loaded = true;
      }
      this.renderChildren = function(ctx) {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        if (width == 0 || height == 0) return;
        ctx.save();
        if (isSvg) {
          ctx.drawSvg(this.img, x, y, width, height);
        } else {
          ctx.translate(x, y);
          svg.AspectRatio(ctx, this.attribute("preserveAspectRatio").value, width, this.img.width, height, this.img.height, 0, 0);
          ctx.drawImage(this.img, 0, 0);
        }
        ctx.restore();
      };
      this.getBoundingBox = function() {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        return new svg.BoundingBox(x, y, x + width, y + height);
      };
    };
    svg.Element.image.prototype = new svg.Element.RenderedElementBase;
    svg.Element.g = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.getBoundingBox = function() {
        var bb = new svg.BoundingBox;
        for (var i = 0; i < this.children.length; i++) {
          bb.addBoundingBox(this.children[i].getBoundingBox());
        }
        return bb;
      };
    };
    svg.Element.g.prototype = new svg.Element.RenderedElementBase;
    svg.Element.symbol = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseSetContext = this.setContext;
      this.setContext = function(ctx) {
        this.baseSetContext(ctx);
        if (this.attribute("viewBox").hasValue()) {
          var viewBox = svg.ToNumberArray(this.attribute("viewBox").value);
          var minX = viewBox[0];
          var minY = viewBox[1];
          width = viewBox[2];
          height = viewBox[3];
          svg.AspectRatio(ctx, this.attribute("preserveAspectRatio").value, this.attribute("width").toPixels("x"), width, this.attribute("height").toPixels("y"), height, minX, minY);
          svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
        }
      };
    };
    svg.Element.symbol.prototype = new svg.Element.RenderedElementBase;
    svg.Element.style = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      var css = "";
      for (var i = 0; i < node.childNodes.length; i++) {
        css += node.childNodes[i].nodeValue;
      }
      css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "");
      css = svg.compressSpaces(css);
      var cssDefs = css.split("}");
      for (var i = 0; i < cssDefs.length; i++) {
        if (svg.trim(cssDefs[i]) != "") {
          var cssDef = cssDefs[i].split("{");
          var cssClasses = cssDef[0].split(",");
          var cssProps = cssDef[1].split(";");
          for (var j = 0; j < cssClasses.length; j++) {
            var cssClass = svg.trim(cssClasses[j]);
            if (cssClass != "") {
              var props = {};
              for (var k = 0; k < cssProps.length; k++) {
                var prop = cssProps[k].indexOf(":");
                var name = cssProps[k].substr(0, prop);
                var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
                if (name != null && value != null) {
                  props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
                }
              }
              svg.Styles[cssClass] = props;
              if (cssClass == "@font-face") {
                var fontFamily = props["font-family"].value.replace(/"/g, "");
                var srcs = props["src"].value.split(",");
                for (var s = 0; s < srcs.length; s++) {
                  if (srcs[s].indexOf('format("svg")') > 0) {
                    var urlStart = srcs[s].indexOf("url");
                    var urlEnd = srcs[s].indexOf(")", urlStart);
                    var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
                    var doc = svg.parseXml(svg.ajax(url));
                    var fonts = doc.getElementsByTagName("font");
                    for (var f = 0; f < fonts.length; f++) {
                      var font = svg.CreateElement(fonts[f]);
                      svg.Definitions[fontFamily] = font;
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    svg.Element.style.prototype = new svg.Element.ElementBase;
    svg.Element.use = function(node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseSetContext = this.setContext;
      this.setContext = function(ctx) {
        this.baseSetContext(ctx);
        if (this.attribute("x").hasValue()) ctx.translate(this.attribute("x").toPixels("x"), 0);
        if (this.attribute("y").hasValue()) ctx.translate(0, this.attribute("y").toPixels("y"));
      };
      this.getDefinition = function() {
        var element = this.getHrefAttribute().getDefinition();
        if (this.attribute("width").hasValue()) element.attribute("width", true).value = this.attribute("width").value;
        if (this.attribute("height").hasValue()) element.attribute("height", true).value = this.attribute("height").value;
        return element;
      };
      this.path = function(ctx) {
        var element = this.getDefinition();
        if (element != null) element.path(ctx);
      };
      this.getBoundingBox = function() {
        var element = this.getDefinition();
        if (element != null) return element.getBoundingBox();
      };
      this.renderChildren = function(ctx) {
        var element = this.getDefinition();
        if (element != null) {
          var oldParent = element.parent;
          element.parent = null;
          element.render(ctx);
          element.parent = oldParent;
        }
      };
    };
    svg.Element.use.prototype = new svg.Element.RenderedElementBase;
    svg.Element.mask = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.apply = function(ctx, element) {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        if (width == 0 && height == 0) {
          var bb = new svg.BoundingBox;
          for (var i = 0; i < this.children.length; i++) {
            bb.addBoundingBox(this.children[i].getBoundingBox());
          }
          var x = Math.floor(bb.x1);
          var y = Math.floor(bb.y1);
          var width = Math.floor(bb.width());
          var height = Math.floor(bb.height());
        }
        var mask = element.attribute("mask").value;
        element.attribute("mask").value = "";
        var cMask = document.createElement("canvas");
        cMask.width = x + width;
        cMask.height = y + height;
        var maskCtx = cMask.getContext("2d");
        this.renderChildren(maskCtx);
        var c = document.createElement("canvas");
        c.width = x + width;
        c.height = y + height;
        var tempCtx = c.getContext("2d");
        element.render(tempCtx);
        tempCtx.globalCompositeOperation = "destination-in";
        tempCtx.fillStyle = maskCtx.createPattern(cMask, "no-repeat");
        tempCtx.fillRect(0, 0, x + width, y + height);
        ctx.fillStyle = tempCtx.createPattern(c, "no-repeat");
        ctx.fillRect(0, 0, x + width, y + height);
        element.attribute("mask").value = mask;
      };
      this.render = function(ctx) {};
    };
    svg.Element.mask.prototype = new svg.Element.ElementBase;
    svg.Element.clipPath = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.apply = function(ctx) {
        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];
          if (typeof child.path != "undefined") {
            var transform = null;
            if (child.attribute("transform").hasValue()) {
              transform = new svg.Transform(child.attribute("transform").value);
              transform.apply(ctx);
            }
            child.path(ctx);
            ctx.clip();
            if (transform) {
              transform.unapply(ctx);
            }
          }
        }
      };
      this.render = function(ctx) {};
    };
    svg.Element.clipPath.prototype = new svg.Element.ElementBase;
    svg.Element.filter = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.apply = function(ctx, element) {
        var bb = element.getBoundingBox();
        var x = Math.floor(bb.x1);
        var y = Math.floor(bb.y1);
        var width = Math.floor(bb.width());
        var height = Math.floor(bb.height());
        var filter = element.style("filter").value;
        element.style("filter").value = "";
        var px = 0, py = 0;
        for (var i = 0; i < this.children.length; i++) {
          var efd = this.children[i].extraFilterDistance || 0;
          px = Math.max(px, efd);
          py = Math.max(py, efd);
        }
        var c = document.createElement("canvas");
        c.width = width + 2 * px;
        c.height = height + 2 * py;
        var tempCtx = c.getContext("2d");
        tempCtx.translate(-x + px, -y + py);
        element.render(tempCtx);
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].apply(tempCtx, 0, 0, width + 2 * px, height + 2 * py);
        }
        ctx.drawImage(c, 0, 0, width + 2 * px, height + 2 * py, x - px, y - py, width + 2 * px, height + 2 * py);
        element.style("filter", true).value = filter;
      };
      this.render = function(ctx) {};
    };
    svg.Element.filter.prototype = new svg.Element.ElementBase;
    svg.Element.feMorphology = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.apply = function(ctx, x, y, width, height) {};
    };
    svg.Element.feMorphology.prototype = new svg.Element.ElementBase;
    svg.Element.feColorMatrix = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      function imGet(img, x, y, width, height, rgba) {
        return img[y * width * 4 + x * 4 + rgba];
      }
      function imSet(img, x, y, width, height, rgba, val) {
        img[y * width * 4 + x * 4 + rgba] = val;
      }
      this.apply = function(ctx, x, y, width, height) {
        var srcData = ctx.getImageData(0, 0, width, height);
        for (var y = 0; y < height; y++) {
          for (var x = 0; x < width; x++) {
            var r = imGet(srcData.data, x, y, width, height, 0);
            var g = imGet(srcData.data, x, y, width, height, 1);
            var b = imGet(srcData.data, x, y, width, height, 2);
            var gray = (r + g + b) / 3;
            imSet(srcData.data, x, y, width, height, 0, gray);
            imSet(srcData.data, x, y, width, height, 1, gray);
            imSet(srcData.data, x, y, width, height, 2, gray);
          }
        }
        ctx.clearRect(0, 0, width, height);
        ctx.putImageData(srcData, 0, 0);
      };
    };
    svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase;
    svg.Element.feGaussianBlur = function(node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue());
      this.extraFilterDistance = this.blurRadius;
      this.apply = function(ctx, x, y, width, height) {
        if (typeof stackBlurCanvasRGBA == "undefined") {
          if (typeof console != "undefined") {
            console.log("ERROR: StackBlur.js must be included for blur to work");
          }
          return;
        }
        ctx.canvas.id = svg.UniqueId();
        ctx.canvas.style.display = "none";
        document.body.appendChild(ctx.canvas);
        stackBlurCanvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
        document.body.removeChild(ctx.canvas);
      };
    };
    svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase;
    svg.Element.title = function(node) {};
    svg.Element.title.prototype = new svg.Element.ElementBase;
    svg.Element.desc = function(node) {};
    svg.Element.desc.prototype = new svg.Element.ElementBase;
    svg.Element.MISSING = function(node) {
      if (typeof console != "undefined") {
        console.log("ERROR: Element '" + node.nodeName + "' not yet implemented.");
      }
    };
    svg.Element.MISSING.prototype = new svg.Element.ElementBase;
    svg.CreateElement = function(node) {
      var className = node.nodeName.replace(/^[^:]+:/, "");
      className = className.replace(/\-/g, "");
      var e = null;
      if (typeof svg.Element[className] != "undefined") {
        e = new svg.Element[className](node);
      } else {
        e = new svg.Element.MISSING(node);
      }
      e.type = node.nodeName;
      return e;
    };
    svg.load = function(ctx, url) {
      svg.loadXml(ctx, svg.ajax(url));
    };
    svg.loadXml = function(ctx, xml) {
      svg.loadXmlDoc(ctx, svg.parseXml(xml));
    };
    svg.loadXmlDoc = function(ctx, dom) {
      svg.init(ctx);
      var mapXY = function(p) {
        var e = ctx.canvas;
        while (e) {
          p.x -= e.offsetLeft;
          p.y -= e.offsetTop;
          e = e.offsetParent;
        }
        if (window.scrollX) p.x += window.scrollX;
        if (window.scrollY) p.y += window.scrollY;
        return p;
      };
      if (svg.opts["ignoreMouse"] != true) {
        ctx.canvas.onclick = function(e) {
          var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
          svg.Mouse.onclick(p.x, p.y);
        };
        ctx.canvas.onmousemove = function(e) {
          var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
          svg.Mouse.onmousemove(p.x, p.y);
        };
      }
      var e = svg.CreateElement(dom.documentElement);
      e.root = true;
      var isFirstRender = true;
      var draw = function() {
        svg.ViewPort.Clear();
        if (ctx.canvas.parentNode) svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);
        if (svg.opts["ignoreDimensions"] != true) {
          if (e.style("width").hasValue()) {
            ctx.canvas.width = e.style("width").toPixels("x");
            ctx.canvas.style.width = ctx.canvas.width + "px";
          }
          if (e.style("height").hasValue()) {
            ctx.canvas.height = e.style("height").toPixels("y");
            ctx.canvas.style.height = ctx.canvas.height + "px";
          }
        }
        var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
        var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;
        if (svg.opts["ignoreDimensions"] == true && e.style("width").hasValue() && e.style("height").hasValue()) {
          cWidth = e.style("width").toPixels("x");
          cHeight = e.style("height").toPixels("y");
        }
        svg.ViewPort.SetCurrent(cWidth, cHeight);
        if (svg.opts["offsetX"] != null) e.attribute("x", true).value = svg.opts["offsetX"];
        if (svg.opts["offsetY"] != null) e.attribute("y", true).value = svg.opts["offsetY"];
        if (svg.opts["scaleWidth"] != null && svg.opts["scaleHeight"] != null) {
          var xRatio = 1, yRatio = 1, viewBox = svg.ToNumberArray(e.attribute("viewBox").value);
          if (e.attribute("width").hasValue()) xRatio = e.attribute("width").toPixels("x") / svg.opts["scaleWidth"]; else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / svg.opts["scaleWidth"];
          if (e.attribute("height").hasValue()) yRatio = e.attribute("height").toPixels("y") / svg.opts["scaleHeight"]; else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / svg.opts["scaleHeight"];
          e.attribute("width", true).value = svg.opts["scaleWidth"];
          e.attribute("height", true).value = svg.opts["scaleHeight"];
          e.attribute("viewBox", true).value = "0 0 " + cWidth * xRatio + " " + cHeight * yRatio;
          e.attribute("preserveAspectRatio", true).value = "none";
        }
        if (svg.opts["ignoreClear"] != true) {
          ctx.clearRect(0, 0, cWidth, cHeight);
        }
        e.render(ctx);
        if (isFirstRender) {
          isFirstRender = false;
          if (typeof svg.opts["renderCallback"] == "function") svg.opts["renderCallback"](dom);
        }
      };
      var waitingForImages = true;
      if (svg.ImagesLoaded()) {
        waitingForImages = false;
        draw();
      }
      svg.intervalID = setInterval(function() {
        var needUpdate = false;
        if (waitingForImages && svg.ImagesLoaded()) {
          waitingForImages = false;
          needUpdate = true;
        }
        if (svg.opts["ignoreMouse"] != true) {
          needUpdate = needUpdate | svg.Mouse.hasEvents();
        }
        if (svg.opts["ignoreAnimation"] != true) {
          for (var i = 0; i < svg.Animations.length; i++) {
            needUpdate = needUpdate | svg.Animations[i].update(1e3 / svg.FRAMERATE);
          }
        }
        if (typeof svg.opts["forceRedraw"] == "function") {
          if (svg.opts["forceRedraw"]() == true) needUpdate = true;
        }
        if (needUpdate) {
          draw();
          svg.Mouse.runEvents();
        }
      }, 1e3 / svg.FRAMERATE);
    };
    svg.stop = function() {
      if (svg.intervalID) {
        clearInterval(svg.intervalID);
      }
    };
    svg.Mouse = new function() {
      this.events = [];
      this.hasEvents = function() {
        return this.events.length != 0;
      };
      this.onclick = function(x, y) {
        this.events.push({
          type: "onclick",
          x: x,
          y: y,
          run: function(e) {
            if (e.onclick) e.onclick();
          }
        });
      };
      this.onmousemove = function(x, y) {
        this.events.push({
          type: "onmousemove",
          x: x,
          y: y,
          run: function(e) {
            if (e.onmousemove) e.onmousemove();
          }
        });
      };
      this.eventElements = [];
      this.checkPath = function(element, ctx) {
        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];
          if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
        }
      };
      this.checkBoundingBox = function(element, bb) {
        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];
          if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
        }
      };
      this.runEvents = function() {
        svg.ctx.canvas.style.cursor = "";
        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];
          var element = this.eventElements[i];
          while (element) {
            e.run(element);
            element = element.parent;
          }
        }
        this.events = [];
        this.eventElements = [];
      };
    };
    return svg;
  }
})();

if (typeof CanvasRenderingContext2D != "undefined") {
  CanvasRenderingContext2D.prototype.drawSvg = function(s, dx, dy, dw, dh) {
    canvg(this.canvas, s, {
      ignoreMouse: true,
      ignoreAnimation: true,
      ignoreDimensions: true,
      ignoreClear: true,
      offsetX: dx,
      offsetY: dy,
      scaleWidth: dw,
      scaleHeight: dh
    });
  };
}

(function(window, document, undefined) {
  "use strict";
  var _html2canvas = {}, previousElement, computedCSS, html2canvas;
  function h2clog(a) {
    if (_html2canvas.logging && window.console && window.console.log) {
      window.console.log(a);
    }
  }
  _html2canvas.Util = {};
  _html2canvas.Util.trimText = function(isNative) {
    return function(input) {
      if (isNative) {
        return isNative.apply(input);
      } else {
        return ((input || "") + "").replace(/^\s+|\s+$/g, "");
      }
    };
  }(String.prototype.trim);
  _html2canvas.Util.parseBackgroundImage = function(value) {
    var whitespace = " \r\n\t", method, definition, prefix, prefix_i, block, results = [], c, mode = 0, numParen = 0, quote, args;
    var appendResult = function() {
      if (method) {
        if (definition.substr(0, 1) === '"') {
          definition = definition.substr(1, definition.length - 2);
        }
        if (definition) {
          args.push(definition);
        }
        if (method.substr(0, 1) === "-" && (prefix_i = method.indexOf("-", 1) + 1) > 0) {
          prefix = method.substr(0, prefix_i);
          method = method.substr(prefix_i);
        }
        results.push({
          prefix: prefix,
          method: method.toLowerCase(),
          value: block,
          args: args
        });
      }
      args = [];
      method = prefix = definition = block = "";
    };
    appendResult();
    for (var i = 0, ii = value.length; i < ii; i++) {
      c = value[i];
      if (mode === 0 && whitespace.indexOf(c) > -1) {
        continue;
      }
      switch (c) {
       case '"':
        if (!quote) {
          quote = c;
        } else if (quote === c) {
          quote = null;
        }
        break;
       case "(":
        if (quote) {
          break;
        } else if (mode === 0) {
          mode = 1;
          block += c;
          continue;
        } else {
          numParen++;
        }
        break;
       case ")":
        if (quote) {
          break;
        } else if (mode === 1) {
          if (numParen === 0) {
            mode = 0;
            block += c;
            appendResult();
            continue;
          } else {
            numParen--;
          }
        }
        break;
       case ",":
        if (quote) {
          break;
        } else if (mode === 0) {
          appendResult();
          continue;
        } else if (mode === 1) {
          if (numParen === 0 && !method.match(/^url$/i)) {
            args.push(definition);
            definition = "";
            block += c;
            continue;
          }
        }
        break;
      }
      block += c;
      if (mode === 0) {
        method += c;
      } else {
        definition += c;
      }
    }
    appendResult();
    return results;
  };
  _html2canvas.Util.Bounds = function getBounds(el) {
    var clientRect, bounds = {};
    if (el.getBoundingClientRect) {
      clientRect = el.getBoundingClientRect();
      bounds.top = clientRect.top;
      bounds.bottom = clientRect.bottom || clientRect.top + clientRect.height;
      bounds.left = clientRect.left;
      bounds.width = clientRect.width || clientRect.right - clientRect.left;
      bounds.height = clientRect.height || clientRect.bottom - clientRect.top;
      return bounds;
    }
  };
  _html2canvas.Util.getCSS = function(el, attribute, index) {
    var val, isBackgroundSizePosition = attribute.match(/^background(Size|Position)$/);
    function toPX(attribute, val) {
      var rsLeft = el.runtimeStyle && el.runtimeStyle[attribute], left, style = el.style;
      if (!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(val) && /^-?\d/.test(val)) {
        left = style.left;
        if (rsLeft) {
          el.runtimeStyle.left = el.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : val || 0;
        val = style.pixelLeft + "px";
        style.left = left;
        if (rsLeft) {
          el.runtimeStyle.left = rsLeft;
        }
      }
      if (!/^(thin|medium|thick)$/i.test(val)) {
        return Math.round(parseFloat(val)) + "px";
      }
      return val;
    }
    if (previousElement !== el) {
      computedCSS = document.defaultView.getComputedStyle(el, null);
    }
    val = computedCSS[attribute];
    if (isBackgroundSizePosition) {
      val = (val || "").split(",");
      val = val[index || 0] || val[0] || "auto";
      val = _html2canvas.Util.trimText(val).split(" ");
      if (attribute === "backgroundSize" && (!val[0] || val[0].match(/cover|contain|auto/))) {} else {
        val[0] = val[0].indexOf("%") === -1 ? toPX(attribute + "X", val[0]) : val[0];
        if (val[1] === undefined) {
          if (attribute === "backgroundSize") {
            val[1] = "auto";
            return val;
          } else {
            val[1] = val[0];
          }
        }
        val[1] = val[1].indexOf("%") === -1 ? toPX(attribute + "Y", val[1]) : val[1];
      }
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = val.split(" ");
      if (arr.length <= 1) {
        arr[1] = arr[0];
      }
      arr[0] = parseInt(arr[0], 10);
      arr[1] = parseInt(arr[1], 10);
      val = arr;
    }
    return val;
  };
  _html2canvas.Util.resizeBounds = function(current_width, current_height, target_width, target_height, stretch_mode) {
    var target_ratio = target_width / target_height, current_ratio = current_width / current_height, output_width, output_height;
    if (!stretch_mode || stretch_mode === "auto") {
      output_width = target_width;
      output_height = target_height;
    } else {
      if (target_ratio < current_ratio ^ stretch_mode === "contain") {
        output_height = target_height;
        output_width = target_height * current_ratio;
      } else {
        output_width = target_width;
        output_height = target_width / current_ratio;
      }
    }
    return {
      width: output_width,
      height: output_height
    };
  };
  function backgroundBoundsFactory(prop, el, bounds, image, imageIndex, backgroundSize) {
    var bgposition = _html2canvas.Util.getCSS(el, prop, imageIndex), topPos, left, percentage, val;
    if (bgposition.length === 1) {
      val = bgposition[0];
      bgposition = [];
      bgposition[0] = val;
      bgposition[1] = val;
    }
    if (bgposition[0].toString().indexOf("%") !== -1) {
      percentage = parseFloat(bgposition[0]) / 100;
      left = bounds.width * percentage;
      if (prop !== "backgroundSize") {
        left -= (backgroundSize || image).width * percentage;
      }
    } else {
      if (prop === "backgroundSize") {
        if (bgposition[0] === "auto") {
          left = image.width;
        } else {
          if (bgposition[0].match(/contain|cover/)) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }
      } else {
        left = parseInt(bgposition[0], 10);
      }
    }
    if (bgposition[1] === "auto") {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1) {
      percentage = parseFloat(bgposition[1]) / 100;
      topPos = bounds.height * percentage;
      if (prop !== "backgroundSize") {
        topPos -= (backgroundSize || image).height * percentage;
      }
    } else {
      topPos = parseInt(bgposition[1], 10);
    }
    return [ left, topPos ];
  }
  _html2canvas.Util.BackgroundPosition = function(el, bounds, image, imageIndex, backgroundSize) {
    var result = backgroundBoundsFactory("backgroundPosition", el, bounds, image, imageIndex, backgroundSize);
    return {
      left: result[0],
      top: result[1]
    };
  };
  _html2canvas.Util.BackgroundSize = function(el, bounds, image, imageIndex) {
    var result = backgroundBoundsFactory("backgroundSize", el, bounds, image, imageIndex);
    return {
      width: result[0],
      height: result[1]
    };
  };
  _html2canvas.Util.Extend = function(options, defaults) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key];
      }
    }
    return defaults;
  };
  _html2canvas.Util.Children = function(elem) {
    var children;
    try {
      children = elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME" ? elem.contentDocument || elem.contentWindow.document : function(array) {
        var ret = [];
        if (array !== null) {
          (function(first, second) {
            var i = first.length, j = 0;
            if (typeof second.length === "number") {
              for (var l = second.length; j < l; j++) {
                first[i++] = second[j];
              }
            } else {
              while (second[j] !== undefined) {
                first[i++] = second[j++];
              }
            }
            first.length = i;
            return first;
          })(ret, array);
        }
        return ret;
      }(elem.childNodes);
    } catch (ex) {
      h2clog("html2canvas.Util.Children failed with exception: " + ex.message);
      children = [];
    }
    return children;
  };
  _html2canvas.Util.Font = function() {
    var fontData = {};
    return function(font, fontSize, doc) {
      if (fontData[font + "-" + fontSize] !== undefined) {
        return fontData[font + "-" + fontSize];
      }
      var container = doc.createElement("div"), img = doc.createElement("img"), span = doc.createElement("span"), sampleText = "Hidden Text", baseline, middle, metricsObj;
      container.style.visibility = "hidden";
      container.style.fontFamily = font;
      container.style.fontSize = fontSize;
      container.style.margin = 0;
      container.style.padding = 0;
      doc.body.appendChild(container);
      img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
      img.width = 1;
      img.height = 1;
      img.style.margin = 0;
      img.style.padding = 0;
      img.style.verticalAlign = "baseline";
      span.style.fontFamily = font;
      span.style.fontSize = fontSize;
      span.style.margin = 0;
      span.style.padding = 0;
      span.appendChild(doc.createTextNode(sampleText));
      container.appendChild(span);
      container.appendChild(img);
      baseline = img.offsetTop - span.offsetTop + 1;
      container.removeChild(span);
      container.appendChild(doc.createTextNode(sampleText));
      container.style.lineHeight = "normal";
      img.style.verticalAlign = "super";
      middle = img.offsetTop - container.offsetTop + 1;
      metricsObj = {
        baseline: baseline,
        lineWidth: 1,
        middle: middle
      };
      fontData[font + "-" + fontSize] = metricsObj;
      doc.body.removeChild(container);
      return metricsObj;
    };
  }();
  (function() {
    _html2canvas.Generate = {};
    var reGradients = [ /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/ ];
    _html2canvas.Generate.parseGradient = function(css, bounds) {
      var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl, tr, br, bl;
      for (i = 0; i < len; i += 1) {
        m1 = css.match(reGradients[i]);
        if (m1) {
          break;
        }
      }
      if (m1) {
        switch (m1[1]) {
         case "-webkit-linear-gradient":
         case "-o-linear-gradient":
          gradient = {
            type: "linear",
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };
          m2 = m1[2].match(/\w+/g);
          if (m2) {
            m2Len = m2.length;
            for (i = 0; i < m2Len; i += 1) {
              switch (m2[i]) {
               case "top":
                gradient.y0 = 0;
                gradient.y1 = bounds.height;
                break;
               case "right":
                gradient.x0 = bounds.width;
                gradient.x1 = 0;
                break;
               case "bottom":
                gradient.y0 = bounds.height;
                gradient.y1 = 0;
                break;
               case "left":
                gradient.x0 = 0;
                gradient.x1 = bounds.width;
                break;
              }
            }
          }
          if (gradient.x0 === null && gradient.x1 === null) {
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if (gradient.y0 === null && gradient.y1 === null) {
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if (m2) {
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for (i = 0; i < m2Len; i += 1) {
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if (m3[2]) {
                stop = parseFloat(m3[2]);
                if (m3[3] === "%") {
                  stop /= 100;
                } else {
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
         case "-webkit-gradient":
          gradient = {
            type: m1[2] === "radial" ? "circle" : m1[2],
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if (m2) {
            gradient.x0 = m2[1] * bounds.width / 100;
            gradient.y0 = m2[2] * bounds.height / 100;
            gradient.x1 = m2[3] * bounds.width / 100;
            gradient.y1 = m2[4] * bounds.height / 100;
          }
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if (m2) {
            m2Len = m2.length;
            for (i = 0; i < m2Len; i += 1) {
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if (m3[1] === "from") {
                stop = 0;
              }
              if (m3[1] === "to") {
                stop = 1;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;
         case "-moz-linear-gradient":
          gradient = {
            type: "linear",
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if (m2) {
            gradient.x0 = m2[1] * bounds.width / 100;
            gradient.y0 = m2[2] * bounds.height / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if (m2) {
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for (i = 0; i < m2Len; i += 1) {
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if (m3[2]) {
                stop = parseFloat(m3[2]);
                if (m3[3]) {
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
         case "-webkit-radial-gradient":
         case "-moz-radial-gradient":
         case "-o-radial-gradient":
          gradient = {
            type: "circle",
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if (m2) {
            gradient.cx = m2[1] * bounds.width / 100;
            gradient.cy = m2[2] * bounds.height / 100;
          }
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if (m2 && m3) {
            switch (m3[0]) {
             case "farthest-corner":
             case "cover":
             case "":
              tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
              tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
              br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
              bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
              gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
              break;
             case "closest-corner":
              tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
              tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
              br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
              bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
              gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
              break;
             case "farthest-side":
              if (m2[0] === "circle") {
                gradient.rx = gradient.ry = Math.max(gradient.cx, gradient.cy, gradient.x1 - gradient.cx, gradient.y1 - gradient.cy);
              } else {
                gradient.type = m2[0];
                gradient.rx = Math.max(gradient.cx, gradient.x1 - gradient.cx);
                gradient.ry = Math.max(gradient.cy, gradient.y1 - gradient.cy);
              }
              break;
             case "closest-side":
             case "contain":
              if (m2[0] === "circle") {
                gradient.rx = gradient.ry = Math.min(gradient.cx, gradient.cy, gradient.x1 - gradient.cx, gradient.y1 - gradient.cy);
              } else {
                gradient.type = m2[0];
                gradient.rx = Math.min(gradient.cx, gradient.x1 - gradient.cx);
                gradient.ry = Math.min(gradient.cy, gradient.y1 - gradient.cy);
              }
              break;
            }
          }
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if (m2) {
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for (i = 0; i < m2Len; i += 1) {
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if (m3[2]) {
                stop = parseFloat(m3[2]);
                if (m3[3] === "%") {
                  stop /= 100;
                } else {
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
        }
      }
      return gradient;
    };
    _html2canvas.Generate.Gradient = function(src, bounds) {
      if (bounds.width === 0 || bounds.height === 0) {
        return;
      }
      var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), gradient, grad, i, len;
      canvas.width = bounds.width;
      canvas.height = bounds.height;
      gradient = _html2canvas.Generate.parseGradient(src, bounds);
      if (gradient) {
        if (gradient.type === "linear") {
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog([ "failed to add color stop: ", e, "; tried to add: ", gradient.colorStops[i], "; stop: ", i, "; in: ", src ]);
            }
          }
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
        } else if (gradient.type === "circle") {
          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog([ "failed to add color stop: ", e, "; tried to add: ", gradient.colorStops[i], "; stop: ", i, "; in: ", src ]);
            }
          }
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
        } else if (gradient.type === "ellipse") {
          var canvasRadial = document.createElement("canvas"), ctxRadial = canvasRadial.getContext("2d"), ri = Math.max(gradient.rx, gradient.ry), di = ri * 2, imgRadial;
          canvasRadial.width = canvasRadial.height = di;
          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog([ "failed to add color stop: ", e, "; tried to add: ", gradient.colorStops[i], "; stop: ", i, "; in: ", src ]);
            }
          }
          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);
          ctx.fillStyle = gradient.colorStops[i - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
        }
      }
      return canvas;
    };
    _html2canvas.Generate.ListAlpha = function(number) {
      var tmp = "", modulus;
      do {
        modulus = number % 26;
        tmp = String.fromCharCode(modulus + 64) + tmp;
        number = number / 26;
      } while (number * 26 > 26);
      return tmp;
    };
    _html2canvas.Generate.ListRoman = function(number) {
      var romanArray = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ], decimal = [ 1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ], roman = "", v, len = romanArray.length;
      if (number <= 0 || number >= 4e3) {
        return number;
      }
      for (v = 0; v < len; v += 1) {
        while (number >= decimal[v]) {
          number -= decimal[v];
          roman += romanArray[v];
        }
      }
      return roman;
    };
  })();
  function h2cRenderContext(width, height) {
    var storage = [];
    return {
      storage: storage,
      width: width,
      height: height,
      clip: function() {
        storage.push({
          type: "function",
          name: "clip",
          arguments: arguments
        });
      },
      translate: function() {
        storage.push({
          type: "function",
          name: "translate",
          arguments: arguments
        });
      },
      fill: function() {
        storage.push({
          type: "function",
          name: "fill",
          arguments: arguments
        });
      },
      save: function() {
        storage.push({
          type: "function",
          name: "save",
          arguments: arguments
        });
      },
      restore: function() {
        storage.push({
          type: "function",
          name: "restore",
          arguments: arguments
        });
      },
      fillRect: function() {
        storage.push({
          type: "function",
          name: "fillRect",
          arguments: arguments
        });
      },
      createPattern: function() {
        storage.push({
          type: "function",
          name: "createPattern",
          arguments: arguments
        });
      },
      drawShape: function() {
        var shape = [];
        storage.push({
          type: "function",
          name: "drawShape",
          arguments: shape
        });
        return {
          moveTo: function() {
            shape.push({
              name: "moveTo",
              arguments: arguments
            });
          },
          lineTo: function() {
            shape.push({
              name: "lineTo",
              arguments: arguments
            });
          },
          arcTo: function() {
            shape.push({
              name: "arcTo",
              arguments: arguments
            });
          },
          bezierCurveTo: function() {
            shape.push({
              name: "bezierCurveTo",
              arguments: arguments
            });
          },
          quadraticCurveTo: function() {
            shape.push({
              name: "quadraticCurveTo",
              arguments: arguments
            });
          }
        };
      },
      drawImage: function() {
        storage.push({
          type: "function",
          name: "drawImage",
          arguments: arguments
        });
      },
      fillText: function() {
        storage.push({
          type: "function",
          name: "fillText",
          arguments: arguments
        });
      },
      setVariable: function(variable, value) {
        storage.push({
          type: "variable",
          name: variable,
          arguments: value
        });
      }
    };
  }
  _html2canvas.Parse = function(images, options) {
    window.scroll(0, 0);
    var element = options.elements === undefined ? document.body : options.elements[0], numDraws = 0, doc = element.ownerDocument, support = _html2canvas.Util.Support(options, doc), ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"), body = doc.body, getCSS = _html2canvas.Util.getCSS, pseudoHide = "___html2canvas___pseudoelement", hidePseudoElements = doc.createElement("style");
    hidePseudoElements.innerHTML = "." + pseudoHide + '-before:before { content: "" !important; display: none !important; }' + "." + pseudoHide + '-after:after { content: "" !important; display: none !important; }';
    body.appendChild(hidePseudoElements);
    images = images || {};
    function documentWidth() {
      return Math.max(Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth), Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth), Math.max(doc.body.clientWidth, doc.documentElement.clientWidth));
    }
    function documentHeight() {
      return Math.max(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight), Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight), Math.max(doc.body.clientHeight, doc.documentElement.clientHeight));
    }
    function getCSSInt(element, attribute) {
      var val = parseInt(getCSS(element, attribute), 10);
      return isNaN(val) ? 0 : val;
    }
    function renderRect(ctx, x, y, w, h, bgcolor) {
      if (bgcolor !== "transparent") {
        ctx.setVariable("fillStyle", bgcolor);
        ctx.fillRect(x, y, w, h);
        numDraws += 1;
      }
    }
    function textTransform(text, transform) {
      switch (transform) {
       case "lowercase":
        return text.toLowerCase();
       case "capitalize":
        return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, function(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
        });
       case "uppercase":
        return text.toUpperCase();
       default:
        return text;
      }
    }
    function noLetterSpacing(letter_spacing) {
      return /^(normal|none|0px)$/.test(letter_spacing);
    }
    function drawText(currentText, x, y, ctx) {
      if (currentText !== null && _html2canvas.Util.trimText(currentText).length > 0) {
        ctx.fillText(currentText, x, y);
        numDraws += 1;
      }
    }
    function setTextVariables(ctx, el, text_decoration, color) {
      var align = false, bold = getCSS(el, "fontWeight"), family = getCSS(el, "fontFamily"), size = getCSS(el, "fontSize");
      switch (parseInt(bold, 10)) {
       case 401:
        bold = "bold";
        break;
       case 400:
        bold = "normal";
        break;
      }
      ctx.setVariable("fillStyle", color);
      ctx.setVariable("font", [ getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family ].join(" "));
      ctx.setVariable("textAlign", align ? "right" : "left");
      if (text_decoration !== "none") {
        return _html2canvas.Util.Font(family, size, doc);
      }
    }
    function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
      switch (text_decoration) {
       case "underline":
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
       case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
       case "line-through":
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
      }
    }
    function getTextBounds(state, text, textDecoration, isLast) {
      var bounds;
      if (support.rangeBounds) {
        if (textDecoration !== "none" || _html2canvas.Util.trimText(text).length !== 0) {
          bounds = textRangeBounds(text, state.node, state.textOffset);
        }
        state.textOffset += text.length;
      } else if (state.node && typeof state.node.nodeValue === "string") {
        var newTextNode = isLast ? state.node.splitText(text.length) : null;
        bounds = textWrapperBounds(state.node);
        state.node = newTextNode;
      }
      return bounds;
    }
    function textRangeBounds(text, textNode, textOffset) {
      var range = doc.createRange();
      range.setStart(textNode, textOffset);
      range.setEnd(textNode, textOffset + text.length);
      return range.getBoundingClientRect();
    }
    function textWrapperBounds(oldTextNode) {
      var parent = oldTextNode.parentNode, wrapElement = doc.createElement("wrapper"), backupText = oldTextNode.cloneNode(true);
      wrapElement.appendChild(oldTextNode.cloneNode(true));
      parent.replaceChild(wrapElement, oldTextNode);
      var bounds = _html2canvas.Util.Bounds(wrapElement);
      parent.replaceChild(backupText, wrapElement);
      return bounds;
    }
    function renderText(el, textNode, stack) {
      var ctx = stack.ctx, color = getCSS(el, "color"), textDecoration = getCSS(el, "textDecoration"), textAlign = getCSS(el, "textAlign"), metrics, textList, state = {
        node: textNode,
        textOffset: 0
      };
      if (_html2canvas.Util.trimText(textNode.nodeValue).length > 0) {
        textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
        textAlign = textAlign.replace([ "-webkit-auto" ], [ "auto" ]);
        textList = !options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing")) ? textNode.nodeValue.split(/(\b| )/) : textNode.nodeValue.split("");
        metrics = setTextVariables(ctx, el, textDecoration, color);
        if (options.chinese) {
          textList.forEach(function(word, index) {
            if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
              word = word.split("");
              word.unshift(index, 1);
              textList.splice.apply(textList, word);
            }
          });
        }
        textList.forEach(function(text, index) {
          var bounds = getTextBounds(state, text, textDecoration, index < textList.length - 1);
          if (bounds) {
            drawText(text, bounds.left, bounds.bottom, ctx);
            renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
          }
        });
      }
    }
    function listPosition(element, val) {
      var boundElement = doc.createElement("boundelement"), originalType, bounds;
      boundElement.style.display = "inline";
      originalType = element.style.listStyleType;
      element.style.listStyleType = "none";
      boundElement.appendChild(doc.createTextNode(val));
      element.insertBefore(boundElement, element.firstChild);
      bounds = _html2canvas.Util.Bounds(boundElement);
      element.removeChild(boundElement);
      element.style.listStyleType = originalType;
      return bounds;
    }
    function elementIndex(el) {
      var i = -1, count = 1, childs = el.parentNode.childNodes;
      if (el.parentNode) {
        while (childs[++i] !== el) {
          if (childs[i].nodeType === 1) {
            count++;
          }
        }
        return count;
      } else {
        return -1;
      }
    }
    function listItemText(element, type) {
      var currentIndex = elementIndex(element), text;
      switch (type) {
       case "decimal":
        text = currentIndex;
        break;
       case "decimal-leading-zero":
        text = currentIndex.toString().length === 1 ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
       case "upper-roman":
        text = _html2canvas.Generate.ListRoman(currentIndex);
        break;
       case "lower-roman":
        text = _html2canvas.Generate.ListRoman(currentIndex).toLowerCase();
        break;
       case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha(currentIndex).toLowerCase();
        break;
       case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha(currentIndex);
        break;
      }
      text += ". ";
      return text;
    }
    function renderListItem(element, stack, elBounds) {
      var x, text, ctx = stack.ctx, type = getCSS(element, "listStyleType"), listBounds;
      if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
        text = listItemText(element, type);
        listBounds = listPosition(element, text);
        setTextVariables(ctx, element, "none", getCSS(element, "color"));
        if (getCSS(element, "listStylePosition") === "inside") {
          ctx.setVariable("textAlign", "left");
          x = elBounds.left;
        } else {
          return;
        }
        drawText(text, x, listBounds.bottom, ctx);
      }
    }
    function loadImage(src) {
      var img = images[src];
      if (img && img.succeeded === true) {
        return img.img;
      } else {
        return false;
      }
    }
    function clipBounds(src, dst) {
      var x = Math.max(src.left, dst.left), y = Math.max(src.top, dst.top), x2 = Math.min(src.left + src.width, dst.left + dst.width), y2 = Math.min(src.top + src.height, dst.top + dst.height);
      return {
        left: x,
        top: y,
        width: x2 - x,
        height: y2 - y
      };
    }
    function setZ(zIndex, parentZ) {
      var newContext;
      if (!parentZ) {
        newContext = h2czContext(0);
        return newContext;
      }
      if (zIndex !== "auto") {
        newContext = h2czContext(zIndex);
        parentZ.children.push(newContext);
        return newContext;
      }
      return parentZ;
    }
    function renderImage(ctx, element, image, bounds, borders) {
      var paddingLeft = getCSSInt(element, "paddingLeft"), paddingTop = getCSSInt(element, "paddingTop"), paddingRight = getCSSInt(element, "paddingRight"), paddingBottom = getCSSInt(element, "paddingBottom");
      drawImage(ctx, image, 0, 0, image.width, image.height, bounds.left + paddingLeft + borders[3].width, bounds.top + paddingTop + borders[0].width, bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom));
    }
    function getBorderData(element) {
      return [ "Top", "Right", "Bottom", "Left" ].map(function(side) {
        return {
          width: getCSSInt(element, "border" + side + "Width"),
          color: getCSS(element, "border" + side + "Color")
        };
      });
    }
    function getBorderRadiusData(element) {
      return [ "TopLeft", "TopRight", "BottomRight", "BottomLeft" ].map(function(side) {
        return getCSS(element, "border" + side + "Radius");
      });
    }
    var getCurvePoints = function(kappa) {
      return function(x, y, r1, r2) {
        var ox = r1 * kappa, oy = r2 * kappa, xm = x + r1, ym = y + r2;
        return {
          topLeft: bezierCurve({
            x: x,
            y: ym
          }, {
            x: x,
            y: ym - oy
          }, {
            x: xm - ox,
            y: y
          }, {
            x: xm,
            y: y
          }),
          topRight: bezierCurve({
            x: x,
            y: y
          }, {
            x: x + ox,
            y: y
          }, {
            x: xm,
            y: ym - oy
          }, {
            x: xm,
            y: ym
          }),
          bottomRight: bezierCurve({
            x: xm,
            y: y
          }, {
            x: xm,
            y: y + oy
          }, {
            x: x + ox,
            y: ym
          }, {
            x: x,
            y: ym
          }),
          bottomLeft: bezierCurve({
            x: xm,
            y: ym
          }, {
            x: xm - ox,
            y: ym
          }, {
            x: x,
            y: y + oy
          }, {
            x: x,
            y: y
          })
        };
      };
    }(4 * ((Math.sqrt(2) - 1) / 3));
    function bezierCurve(start, startControl, endControl, end) {
      var lerp = function(a, b, t) {
        return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t
        };
      };
      return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
          var ab = lerp(start, startControl, t), bc = lerp(startControl, endControl, t), cd = lerp(endControl, end, t), abbc = lerp(ab, bc, t), bccd = lerp(bc, cd, t), dest = lerp(abbc, bccd, t);
          return [ bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end) ];
        },
        curveTo: function(borderArgs) {
          borderArgs.push([ "bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y ]);
        },
        curveToReversed: function(borderArgs) {
          borderArgs.push([ "bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y ]);
        }
      };
    }
    function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push([ "line", corner1[0].start.x, corner1[0].start.y ]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
      } else {
        borderArgs.push([ "line", x, y ]);
      }
      if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push([ "line", corner2[0].start.x, corner2[0].start.y ]);
      }
    }
    function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
      var borderArgs = [];
      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push([ "line", outer1[1].start.x, outer1[1].start.y ]);
        outer1[1].curveTo(borderArgs);
      } else {
        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1] ]);
      }
      if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push([ "line", outer2[0].start.x, outer2[0].start.y ]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push([ "line", inner2[0].end.x, inner2[0].end.y ]);
        inner2[0].curveToReversed(borderArgs);
      } else {
        borderArgs.push([ "line", borderData.c2[0], borderData.c2[1] ]);
        borderArgs.push([ "line", borderData.c3[0], borderData.c3[1] ]);
      }
      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push([ "line", inner1[1].end.x, inner1[1].end.y ]);
        inner1[1].curveToReversed(borderArgs);
      } else {
        borderArgs.push([ "line", borderData.c4[0], borderData.c4[1] ]);
      }
      return borderArgs;
    }
    function calculateCurvePoints(bounds, borderRadius, borders) {
      var x = bounds.left, y = bounds.top, width = bounds.width, height = bounds.height, tlh = borderRadius[0][0], tlv = borderRadius[0][1], trh = borderRadius[1][0], trv = borderRadius[1][1], brv = borderRadius[2][0], brh = borderRadius[2][1], blh = borderRadius[3][0], blv = borderRadius[3][1], topWidth = width - trh, rightHeight = height - brv, bottomWidth = width - brh, leftHeight = height - blv;
      return {
        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(.5),
        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(.5),
        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(.5),
        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, topWidth > width + borders[3].width ? 0 : trh - borders[3].width, trv - borders[0].width).topRight.subdivide(.5),
        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(.5),
        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width + borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width), Math.max(0, brv - borders[2].width)).bottomRight.subdivide(.5),
        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(.5),
        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), Math.max(0, blv - borders[2].width)).bottomLeft.subdivide(.5)
      };
    }
    function getBorderClip(element, borderPoints, borders, radius, bounds) {
      var backgroundClip = getCSS(element, "backgroundClip"), borderArgs = [];
      switch (backgroundClip) {
       case "content-box":
       case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;
       default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
      }
      return borderArgs;
    }
    function parseBorders(element, bounds, borders) {
      var x = bounds.left, y = bounds.top, width = bounds.width, height = bounds.height, borderSide, bx, by, bw, bh, borderArgs, borderRadius = getBorderRadiusData(element), borderPoints = calculateCurvePoints(bounds, borderRadius, borders), borderData = {
        clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
        borders: []
      };
      for (borderSide = 0; borderSide < 4; borderSide++) {
        if (borders[borderSide].width > 0) {
          bx = x;
          by = y;
          bw = width;
          bh = height - borders[2].width;
          switch (borderSide) {
           case 0:
            bh = borders[0].width;
            borderArgs = drawSide({
              c1: [ bx, by ],
              c2: [ bx + bw, by ],
              c3: [ bx + bw - borders[1].width, by + bh ],
              c4: [ bx + borders[3].width, by + bh ]
            }, borderRadius[0], borderRadius[1], borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
           case 1:
            bx = x + width - borders[1].width;
            bw = borders[1].width;
            borderArgs = drawSide({
              c1: [ bx + bw, by ],
              c2: [ bx + bw, by + bh + borders[2].width ],
              c3: [ bx, by + bh ],
              c4: [ bx, by + borders[0].width ]
            }, borderRadius[1], borderRadius[2], borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
           case 2:
            by = by + height - borders[2].width;
            bh = borders[2].width;
            borderArgs = drawSide({
              c1: [ bx + bw, by + bh ],
              c2: [ bx, by + bh ],
              c3: [ bx + borders[3].width, by ],
              c4: [ bx + bw - borders[2].width, by ]
            }, borderRadius[2], borderRadius[3], borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
           case 3:
            bw = borders[3].width;
            borderArgs = drawSide({
              c1: [ bx, by + bh + borders[2].width ],
              c2: [ bx, by ],
              c3: [ bx + bw, by + borders[0].width ],
              c4: [ bx + bw, by + bh ]
            }, borderRadius[3], borderRadius[0], borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
          }
          borderData.borders.push({
            args: borderArgs,
            color: borders[borderSide].color
          });
        }
      }
      return borderData;
    }
    function createShape(ctx, args) {
      var shape = ctx.drawShape();
      args.forEach(function(border, index) {
        shape[index === 0 ? "moveTo" : border[0] + "To"].apply(null, border.slice(1));
      });
      return shape;
    }
    function renderBorders(ctx, borderArgs, color) {
      if (color !== "transparent") {
        ctx.setVariable("fillStyle", color);
        createShape(ctx, borderArgs);
        ctx.fill();
        numDraws += 1;
      }
    }
    function renderFormValue(el, bounds, stack) {
      var valueWrap = doc.createElement("valuewrap"), cssPropertyArray = [ "lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth" ], textValue, textNode;
      cssPropertyArray.forEach(function(property) {
        try {
          valueWrap.style[property] = getCSS(el, property);
        } catch (e) {
          h2clog("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
        }
      });
      valueWrap.style.borderColor = "black";
      valueWrap.style.borderStyle = "solid";
      valueWrap.style.display = "block";
      valueWrap.style.position = "absolute";
      if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT") {
        valueWrap.style.lineHeight = getCSS(el, "height");
      }
      valueWrap.style.top = bounds.top + "px";
      valueWrap.style.left = bounds.left + "px";
      textValue = el.nodeName === "SELECT" ? (el.options[el.selectedIndex] || 0).text : el.value;
      if (!textValue) {
        textValue = el.placeholder;
      }
      textNode = doc.createTextNode(textValue);
      valueWrap.appendChild(textNode);
      body.appendChild(valueWrap);
      renderText(el, textNode, stack);
      body.removeChild(valueWrap);
    }
    function drawImage(ctx) {
      ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
      numDraws += 1;
    }
    function getPseudoElement(el, which) {
      var elStyle = window.getComputedStyle(el, which);
      if (!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content") {
        return;
      }
      var content = elStyle.content + "", first = content.substr(0, 1);
      if (first === content.substr(content.length - 1) && first.match(/'|"/)) {
        content = content.substr(1, content.length - 2);
      }
      var isImage = content.substr(0, 3) === "url", elps = document.createElement(isImage ? "img" : "span");
      elps.className = pseudoHide + "-before " + pseudoHide + "-after";
      Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
        try {
          elps.style[prop] = elStyle[prop];
        } catch (e) {
          h2clog([ "Tried to assign readonly property ", prop, "Error:", e ]);
        }
      });
      if (isImage) {
        elps.src = _html2canvas.Util.parseBackgroundImage(content)[0].args[0];
      } else {
        elps.innerHTML = content;
      }
      return elps;
    }
    function indexedProperty(property) {
      return isNaN(window.parseInt(property, 10));
    }
    function injectPseudoElements(el, stack) {
      var before = getPseudoElement(el, ":before"), after = getPseudoElement(el, ":after");
      if (!before && !after) {
        return;
      }
      if (before) {
        el.className += " " + pseudoHide + "-before";
        el.parentNode.insertBefore(before, el);
        parseElement(before, stack, true);
        el.parentNode.removeChild(before);
        el.className = el.className.replace(pseudoHide + "-before", "").trim();
      }
      if (after) {
        el.className += " " + pseudoHide + "-after";
        el.appendChild(after);
        parseElement(after, stack, true);
        el.removeChild(after);
        el.className = el.className.replace(pseudoHide + "-after", "").trim();
      }
    }
    function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
      var offsetX = Math.round(bounds.left + backgroundPosition.left), offsetY = Math.round(bounds.top + backgroundPosition.top);
      ctx.createPattern(image);
      ctx.translate(offsetX, offsetY);
      ctx.fill();
      ctx.translate(-offsetX, -offsetY);
    }
    function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
      var args = [];
      args.push([ "line", Math.round(left), Math.round(top) ]);
      args.push([ "line", Math.round(left + width), Math.round(top) ]);
      args.push([ "line", Math.round(left + width), Math.round(height + top) ]);
      args.push([ "line", Math.round(left), Math.round(height + top) ]);
      createShape(ctx, args);
      ctx.save();
      ctx.clip();
      renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
      ctx.restore();
    }
    function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
      renderRect(ctx, backgroundBounds.left, backgroundBounds.top, backgroundBounds.width, backgroundBounds.height, bgcolor);
    }
    function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
      var backgroundSize = _html2canvas.Util.BackgroundSize(el, bounds, image, imageIndex), backgroundPosition = _html2canvas.Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize), backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(function(value) {
        return value.trim();
      });
      image = resizeImage(image, backgroundSize);
      backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];
      switch (backgroundRepeat) {
       case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds, bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;
       case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds, bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;
       case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds, bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;
       default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
      }
    }
    function renderBackgroundImage(element, bounds, ctx) {
      var backgroundImage = getCSS(element, "backgroundImage"), backgroundImages = _html2canvas.Util.parseBackgroundImage(backgroundImage), image, imageIndex = backgroundImages.length;
      while (imageIndex--) {
        backgroundImage = backgroundImages[imageIndex];
        if (!backgroundImage.args || backgroundImage.args.length === 0) {
          continue;
        }
        var key = backgroundImage.method === "url" ? backgroundImage.args[0] : backgroundImage.value;
        image = loadImage(key);
        if (image) {
          renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
        } else {
          h2clog("html2canvas: Error loading background:", backgroundImage);
        }
      }
    }
    function resizeImage(image, bounds) {
      if (image.width === bounds.width && image.height === bounds.height) {
        return image;
      }
      var ctx, canvas = doc.createElement("canvas");
      canvas.width = bounds.width;
      canvas.height = bounds.height;
      ctx = canvas.getContext("2d");
      drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height);
      return canvas;
    }
    function setOpacity(ctx, element, parentStack) {
      var opacity = getCSS(element, "opacity") * (parentStack ? parentStack.opacity : 1);
      ctx.setVariable("globalAlpha", opacity);
      return opacity;
    }
    function createStack(element, parentStack, bounds) {
      var ctx = h2cRenderContext(!parentStack ? documentWidth() : bounds.width, !parentStack ? documentHeight() : bounds.height), stack = {
        ctx: ctx,
        zIndex: setZ(getCSS(element, "zIndex"), parentStack ? parentStack.zIndex : null),
        opacity: setOpacity(ctx, element, parentStack),
        cssPosition: getCSS(element, "position"),
        borders: getBorderData(element),
        clip: parentStack && parentStack.clip ? _html2canvas.Util.Extend({}, parentStack.clip) : null
      };
      if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false) {
        stack.clip = stack.clip ? clipBounds(stack.clip, bounds) : bounds;
      }
      stack.zIndex.children.push(stack);
      return stack;
    }
    function getBackgroundBounds(borders, bounds, clip) {
      var backgroundBounds = {
        left: bounds.left + borders[3].width,
        top: bounds.top + borders[0].width,
        width: bounds.width - (borders[1].width + borders[3].width),
        height: bounds.height - (borders[0].width + borders[2].width)
      };
      if (clip) {
        backgroundBounds = clipBounds(backgroundBounds, clip);
      }
      return backgroundBounds;
    }
    function renderElement(element, parentStack, pseudoElement) {
      var bounds = _html2canvas.Util.Bounds(element), image, bgcolor = ignoreElementsRegExp.test(element.nodeName) ? "#efefef" : getCSS(element, "backgroundColor"), stack = createStack(element, parentStack, bounds), borders = stack.borders, ctx = stack.ctx, backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip), borderData = parseBorders(element, bounds, borders);
      createShape(ctx, borderData.clip);
      ctx.save();
      ctx.clip();
      if (backgroundBounds.height > 0 && backgroundBounds.width > 0) {
        renderBackgroundColor(ctx, bounds, bgcolor);
        renderBackgroundImage(element, backgroundBounds, ctx);
      }
      ctx.restore();
      borderData.borders.forEach(function(border) {
        renderBorders(ctx, border.args, border.color);
      });
      if (!pseudoElement) {
        injectPseudoElements(element, stack);
      }
      switch (element.nodeName) {
       case "IMG":
        if (image = loadImage(element.getAttribute("src"))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          h2clog("html2canvas: Error loading <img>:" + element.getAttribute("src"));
        }
        break;
       case "INPUT":
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder).length > 0) {
          renderFormValue(element, bounds, stack);
        }
        break;
       case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0) {
          renderFormValue(element, bounds, stack);
        }
        break;
       case "SELECT":
        if ((element.options || element.placeholder || "").length > 0) {
          renderFormValue(element, bounds, stack);
        }
        break;
       case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
       case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
      }
      return stack;
    }
    function isElementVisible(element) {
      return getCSS(element, "display") !== "none" && getCSS(element, "visibility") !== "hidden" && !element.hasAttribute("data-html2canvas-ignore");
    }
    function parseElement(el, stack, pseudoElement) {
      if (isElementVisible(el)) {
        stack = renderElement(el, stack, pseudoElement) || stack;
        if (!ignoreElementsRegExp.test(el.nodeName)) {
          _html2canvas.Util.Children(el).forEach(function(node) {
            if (node.nodeType === 1) {
              parseElement(node, stack, pseudoElement);
            } else if (node.nodeType === 3) {
              renderText(el, node, stack);
            }
          });
        }
      }
    }
    function svgDOMRender(body, stack) {
      var img = new Image, docWidth = documentWidth(), docHeight = documentHeight(), html = "";
      function parseDOM(el) {
        var children = _html2canvas.Util.Children(el), len = children.length, attr, a, alen, elm, i;
        for (i = 0; i < len; i += 1) {
          elm = children[i];
          if (elm.nodeType === 3) {
            html += elm.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          } else if (elm.nodeType === 1) {
            if (!/^(script|meta|title)$/.test(elm.nodeName.toLowerCase())) {
              html += "<" + elm.nodeName.toLowerCase();
              if (elm.hasAttributes()) {
                attr = elm.attributes;
                alen = attr.length;
                for (a = 0; a < alen; a += 1) {
                  html += " " + attr[a].name + '="' + attr[a].value + '"';
                }
              }
              html += ">";
              parseDOM(elm);
              html += "</" + elm.nodeName.toLowerCase() + ">";
            }
          }
        }
      }
      parseDOM(body);
      img.src = [ "data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + docWidth + "' height='" + docHeight + "'>", "<foreignObject width='" + docWidth + "' height='" + docHeight + "'>", "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>", html.replace(/\#/g, "%23"), "</html>", "</foreignObject>", "</svg>" ].join("");
      img.onload = function() {
        stack.svgRender = img;
      };
    }
    function init() {
      var stack = renderElement(element, null);
      if (support.svgRendering) {
        svgDOMRender(document.documentElement, stack);
      }
      Array.prototype.slice.call(element.children, 0).forEach(function(childElement) {
        parseElement(childElement, stack);
      });
      stack.backgroundColor = getCSS(document.documentElement, "backgroundColor");
      body.removeChild(hidePseudoElements);
      return stack;
    }
    return init();
  };
  function h2czContext(zindex) {
    return {
      zindex: zindex,
      children: []
    };
  }
  _html2canvas.Preload = function(options) {
    var images = {
      numLoaded: 0,
      numFailed: 0,
      numTotal: 0,
      cleanupDone: false
    }, pageOrigin, methods, i, count = 0, element = options.elements[0] || document.body, doc = element.ownerDocument, domImages = doc.images, imgLen = domImages.length, link = doc.createElement("a"), supportCORS = function(img) {
      return img.crossOrigin !== undefined;
    }(new Image), timeoutTimer;
    link.href = window.location.href;
    pageOrigin = link.protocol + link.host;
    function isSameOrigin(url) {
      link.href = url;
      link.href = link.href;
      var origin = link.protocol + link.host;
      return origin === pageOrigin;
    }
    function start() {
      h2clog("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
      if (!images.firstRun && images.numLoaded >= images.numTotal) {
        h2clog("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");
        if (typeof options.complete === "function") {
          options.complete(images);
        }
      }
    }
    function proxyGetImage(url, img, imageObj) {
      var callback_name, scriptUrl = options.proxy, script;
      link.href = url;
      url = link.href;
      callback_name = "html2canvas_" + count++;
      imageObj.callbackname = callback_name;
      if (scriptUrl.indexOf("?") > -1) {
        scriptUrl += "&";
      } else {
        scriptUrl += "?";
      }
      scriptUrl += "url=" + encodeURIComponent(url) + "&callback=" + callback_name;
      script = doc.createElement("script");
      window[callback_name] = function(a) {
        if (a.substring(0, 6) === "error:") {
          imageObj.succeeded = false;
          images.numLoaded++;
          images.numFailed++;
          start();
        } else {
          setImageLoadHandlers(img, imageObj);
          img.src = a;
        }
        window[callback_name] = undefined;
        try {
          delete window[callback_name];
        } catch (ex) {}
        script.parentNode.removeChild(script);
        script = null;
        delete imageObj.script;
        delete imageObj.callbackname;
      };
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", scriptUrl);
      imageObj.script = script;
      window.document.body.appendChild(script);
    }
    function loadPseudoElement(element, type) {
      var style = window.getComputedStyle(element, type), content = style.content;
      if (content.substr(0, 3) === "url") {
        methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
      }
      loadBackgroundImages(style.backgroundImage, element);
    }
    function loadPseudoElementImages(element) {
      loadPseudoElement(element, ":before");
      loadPseudoElement(element, ":after");
    }
    function loadGradientImage(backgroundImage, bounds) {
      var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);
      if (img !== undefined) {
        images[backgroundImage] = {
          img: img,
          succeeded: true
        };
        images.numTotal++;
        images.numLoaded++;
        start();
      }
    }
    function invalidBackgrounds(background_image) {
      return background_image && background_image.method && background_image.args && background_image.args.length > 0;
    }
    function loadBackgroundImages(background_image, el) {
      var bounds;
      _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
        if (background_image.method === "url") {
          methods.loadImage(background_image.args[0]);
        } else if (background_image.method.match(/\-?gradient$/)) {
          if (bounds === undefined) {
            bounds = _html2canvas.Util.Bounds(el);
          }
          loadGradientImage(background_image.value, bounds);
        }
      });
    }
    function getImages(el) {
      var elNodeType = false;
      try {
        _html2canvas.Util.Children(el).forEach(function(img) {
          getImages(img);
        });
      } catch (e) {}
      try {
        elNodeType = el.nodeType;
      } catch (ex) {
        elNodeType = false;
        h2clog("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
      }
      if (elNodeType === 1 || elNodeType === undefined) {
        loadPseudoElementImages(el);
        try {
          loadBackgroundImages(_html2canvas.Util.getCSS(el, "backgroundImage"), el);
        } catch (e) {
          h2clog("html2canvas: failed to get background-image - Exception: " + e.message);
        }
        loadBackgroundImages(el);
      }
    }
    function setImageLoadHandlers(img, imageObj) {
      img.onload = function() {
        if (imageObj.timer !== undefined) {
          window.clearTimeout(imageObj.timer);
        }
        images.numLoaded++;
        imageObj.succeeded = true;
        img.onerror = img.onload = null;
        start();
      };
      img.onerror = function() {
        if (img.crossOrigin === "anonymous") {
          window.clearTimeout(imageObj.timer);
          if (options.proxy) {
            var src = img.src;
            img = new Image;
            imageObj.img = img;
            img.src = src;
            proxyGetImage(img.src, img, imageObj);
            return;
          }
        }
        images.numLoaded++;
        images.numFailed++;
        imageObj.succeeded = false;
        img.onerror = img.onload = null;
        start();
      };
    }
    methods = {
      loadImage: function(src) {
        var img, imageObj;
        if (src && images[src] === undefined) {
          img = new Image;
          if (src.match(/data:image\/.*;base64,/i)) {
            img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, "");
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
          } else if (isSameOrigin(src) || options.allowTaint === true) {
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
            img.src = src;
          } else if (supportCORS && !options.allowTaint && options.useCORS) {
            img.crossOrigin = "anonymous";
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
            img.src = src;
            img.customComplete = function() {
              if (!this.img.complete) {
                this.timer = window.setTimeout(this.img.customComplete, 100);
              } else {
                this.img.onerror();
              }
            }.bind(imageObj);
            img.customComplete();
          } else if (options.proxy) {
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            proxyGetImage(src, img, imageObj);
          }
        }
      },
      cleanupDOM: function(cause) {
        var img, src;
        if (!images.cleanupDone) {
          if (cause && typeof cause === "string") {
            h2clog("html2canvas: Cleanup because: " + cause);
          } else {
            h2clog("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
          }
          for (src in images) {
            if (images.hasOwnProperty(src)) {
              img = images[src];
              if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
                window[img.callbackname] = undefined;
                try {
                  delete window[img.callbackname];
                } catch (ex) {}
                if (img.script && img.script.parentNode) {
                  img.script.setAttribute("src", "about:blank");
                  img.script.parentNode.removeChild(img.script);
                }
                images.numLoaded++;
                images.numFailed++;
                h2clog("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
              }
            }
          }
          if (window.stop !== undefined) {
            window.stop();
          } else if (document.execCommand !== undefined) {
            document.execCommand("Stop", false);
          }
          if (document.close !== undefined) {
            document.close();
          }
          images.cleanupDone = true;
          if (!(cause && typeof cause === "string")) {
            start();
          }
        }
      },
      renderingDone: function() {
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
      }
    };
    if (options.timeout > 0) {
      timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
    }
    h2clog("html2canvas: Preload starts: finding background-images");
    images.firstRun = true;
    getImages(element);
    h2clog("html2canvas: Preload: Finding images");
    for (i = 0; i < imgLen; i += 1) {
      methods.loadImage(domImages[i].getAttribute("src"));
    }
    images.firstRun = false;
    h2clog("html2canvas: Preload: Done.");
    if (images.numTotal === images.numLoaded) {
      start();
    }
    return methods;
  };
  _html2canvas.Renderer = function(parseQueue, options) {
    function createRenderQueue(parseQueue) {
      var queue = [];
      var sortZ = function(zStack) {
        var subStacks = [], stackValues = [];
        zStack.children.forEach(function(stackChild) {
          if (stackChild.children && stackChild.children.length > 0) {
            subStacks.push(stackChild);
            stackValues.push(stackChild.zindex);
          } else {
            queue.push(stackChild);
          }
        });
        stackValues.sort(function(a, b) {
          return a - b;
        });
        stackValues.forEach(function(zValue) {
          var index;
          subStacks.some(function(stack, i) {
            index = i;
            return stack.zindex === zValue;
          });
          sortZ(subStacks.splice(index, 1)[0]);
        });
      };
      sortZ(parseQueue.zIndex);
      return queue;
    }
    function getRenderer(rendererName) {
      var renderer;
      if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
        renderer = _html2canvas.Renderer[rendererName](options);
      } else if (typeof rendererName === "function") {
        renderer = rendererName(options);
      } else {
        throw new Error("Unknown renderer");
      }
      if (typeof renderer !== "function") {
        throw new Error("Invalid renderer defined");
      }
      return renderer;
    }
    return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue), _html2canvas);
  };
  _html2canvas.Util.Support = function(options, doc) {
    function supportSVGRendering() {
      var img = new Image, canvas = doc.createElement("canvas"), ctx = canvas.getContext === undefined ? false : canvas.getContext("2d");
      if (ctx === false) {
        return false;
      }
      canvas.width = canvas.height = 10;
      img.src = [ "data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>" ].join("");
      try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
      } catch (e) {
        return false;
      }
      h2clog("html2canvas: Parse: SVG powered rendering available");
      return true;
    }
    function supportRangeBounds() {
      var r, testElement, rangeBounds, rangeHeight, support = false;
      if (doc.createRange) {
        r = doc.createRange();
        if (r.getBoundingClientRect) {
          testElement = doc.createElement("boundtest");
          testElement.style.height = "123px";
          testElement.style.display = "block";
          doc.body.appendChild(testElement);
          r.selectNode(testElement);
          rangeBounds = r.getBoundingClientRect();
          rangeHeight = rangeBounds.height;
          if (rangeHeight === 123) {
            support = true;
          }
          doc.body.removeChild(testElement);
        }
      }
      return support;
    }
    return {
      rangeBounds: supportRangeBounds(),
      svgRendering: options.svgRendering && supportSVGRendering()
    };
  };
  window.html2canvas = function(elements, opts) {
    elements = elements.length ? elements : [ elements ];
    var queue, canvas, options = {
      logging: false,
      elements: elements,
      background: "#fff",
      proxy: null,
      timeout: 0,
      useCORS: false,
      allowTaint: false,
      svgRendering: false,
      ignoreElements: "IFRAME|OBJECT|PARAM",
      useOverflow: true,
      letterRendering: false,
      chinese: false,
      width: null,
      height: null,
      taintTest: true,
      renderer: "Canvas"
    };
    options = _html2canvas.Util.Extend(opts, options);
    _html2canvas.logging = options.logging;
    options.complete = function(images) {
      if (typeof options.onpreloaded === "function") {
        if (options.onpreloaded(images) === false) {
          return;
        }
      }
      queue = _html2canvas.Parse(images, options);
      if (typeof options.onparsed === "function") {
        if (options.onparsed(queue) === false) {
          return;
        }
      }
      canvas = _html2canvas.Renderer(queue, options);
      if (typeof options.onrendered === "function") {
        options.onrendered(canvas);
      }
    };
    window.setTimeout(function() {
      _html2canvas.Preload(options);
    }, 0);
    return {
      render: function(queue, opts) {
        return _html2canvas.Renderer(queue, _html2canvas.Util.Extend(opts, options));
      },
      parse: function(images, opts) {
        return _html2canvas.Parse(images, _html2canvas.Util.Extend(opts, options));
      },
      preload: function(opts) {
        return _html2canvas.Preload(_html2canvas.Util.Extend(opts, options));
      },
      log: h2clog
    };
  };
  window.html2canvas.log = h2clog;
  window.html2canvas.Renderer = {
    Canvas: undefined
  };
  _html2canvas.Renderer.Canvas = function(options) {
    options = options || {};
    var doc = document, safeImages = [], testCanvas = document.createElement("canvas"), testctx = testCanvas.getContext("2d"), canvas = options.canvas || doc.createElement("canvas");
    function createShape(ctx, args) {
      ctx.beginPath();
      args.forEach(function(arg) {
        ctx[arg.name].apply(ctx, arg["arguments"]);
      });
      ctx.closePath();
    }
    function safeImage(item) {
      if (safeImages.indexOf(item["arguments"][0].src) === -1) {
        testctx.drawImage(item["arguments"][0], 0, 0);
        try {
          testctx.getImageData(0, 0, 1, 1);
        } catch (e) {
          testCanvas = doc.createElement("canvas");
          testctx = testCanvas.getContext("2d");
          return false;
        }
        safeImages.push(item["arguments"][0].src);
      }
      return true;
    }
    function isTransparent(backgroundColor) {
      return backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)";
    }
    function renderItem(ctx, item) {
      switch (item.type) {
       case "variable":
        ctx[item.name] = item["arguments"];
        break;
       case "function":
        if (item.name === "createPattern") {
          if (item["arguments"][0].width > 0 && item["arguments"][0].height > 0) {
            try {
              ctx.fillStyle = ctx.createPattern(item["arguments"][0], "repeat");
            } catch (e) {
              h2clog("html2canvas: Renderer: Error creating pattern", e.message);
            }
          }
        } else if (item.name === "drawShape") {
          createShape(ctx, item["arguments"]);
        } else if (item.name === "drawImage") {
          if (item["arguments"][8] > 0 && item["arguments"][7] > 0) {
            if (!options.taintTest || options.taintTest && safeImage(item)) {
              ctx.drawImage.apply(ctx, item["arguments"]);
            }
          }
        } else {
          ctx[item.name].apply(ctx, item["arguments"]);
        }
        break;
      }
    }
    return function(zStack, options, doc, queue, _html2canvas) {
      var ctx = canvas.getContext("2d"), storageContext, i, queueLen, newCanvas, bounds, fstyle;
      canvas.width = canvas.style.width = options.width || zStack.ctx.width;
      canvas.height = canvas.style.height = options.height || zStack.ctx.height;
      fstyle = ctx.fillStyle;
      ctx.fillStyle = isTransparent(zStack.backgroundColor) && options.background !== undefined ? options.background : zStack.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = fstyle;
      if (options.svgRendering && zStack.svgRender !== undefined) {
        ctx.drawImage(zStack.svgRender, 0, 0);
      } else {
        for (i = 0, queueLen = queue.length; i < queueLen; i += 1) {
          storageContext = queue.splice(0, 1)[0];
          storageContext.canvasPosition = storageContext.canvasPosition || {};
          ctx.textBaseline = "bottom";
          if (storageContext.clip) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
            ctx.clip();
          }
          if (storageContext.ctx.storage) {
            storageContext.ctx.storage.forEach(renderItem.bind(null, ctx));
          }
          if (storageContext.clip) {
            ctx.restore();
          }
        }
      }
      h2clog("html2canvas: Renderer: Canvas renderer done - returning canvas obj");
      queueLen = options.elements.length;
      if (queueLen === 1) {
        if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
          bounds = _html2canvas.Util.Bounds(options.elements[0]);
          newCanvas = doc.createElement("canvas");
          newCanvas.width = bounds.width;
          newCanvas.height = bounds.height;
          ctx = newCanvas.getContext("2d");
          ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
          canvas = null;
          return newCanvas;
        }
      }
      return canvas;
    };
  };
})(window, document);