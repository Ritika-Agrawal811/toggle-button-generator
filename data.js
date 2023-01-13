data = {
  "toggle-btn-1": {
    html: [
      "&lt;label class='toggle-btn-1'&gt;",
      "&lt;input type='checkbox' /&gt;",
      "&lt;span class='circle'&gt;&lt;/span&gt;",
      "&lt;/label&gt;",
    ],

    css: [
      "*,::before,::after{",
      "margin:0;",
      "padding:0;",
      "box-sizing:border-box;",
      "}",
      ".toggle-btn-1 {",
      "width: 150px;",
      "height: 50px;",
      "position: relative;",
      "display: inline-block;",
      "}",
      ".toggle-btn-1 input[type='checkbox'] {",
      "position: absolute;",
      "width: 100%;",
      "height: 100%;",
      "border-radius: 30px;",
      "box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.2),",
      " -10px -10px 20px 0 rgba(255, 255, 255, 0.5);",
      "appearance: none;",
      "cursor: pointer;",
      "transition: all 300ms ease-in-out;",
      "outline: none;",
      "}",
      ".toggle-btn-1 .circle {",
      "position: absolute;",
      "width: 45px;",
      "height: 45px;",
      "top: 50%;",
      "left: 5px;",
      "transform: translateY(-50%);",
      "border-radius: 50%;",
      "background-color: #fff;",
      "box-shadow: 1px 1px 10px 0 #5ab9ea inset,",
      "-5px -5px 20px 0 #5ab9ea inset;",
      "transition: all 450ms ease-in-out;",
      "pointer-events: none;",
      "}",
      ".toggle-btn-1 .circle::before {",
      "content: 'OFF';",
      "position: absolute;",
      "top: 50%;",
      "left: 50%;",
      "transform: translate(-50%, -50%);",
      "font-family: monospace;",
      "font-size: 1.15rem;",
      "}",
      ".toggle-btn-1 input[type='checkbox']:checked {",
      "box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),",
      "inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);",
      "}",
      ".toggle-btn-1 input[type='checkbox']:checked ~ .circle {",
      "box-shadow: 1px 1px 10px 0 #6bea5a inset, -5px -5px 20px 0 #6bea5a inset;",
      "background-color: #fff;",
      "left: 100px;",
      "transform: translateY(-50%) rotate(360deg);",
      "}",
      ".toggle-btn-1 input[type='checkbox']:checked ~ .circle::before {",
      "content: 'ON';",
      "}",
    ],
  },
  "toggle-btn-2": {
    html: [
      "&lt;label class='toggle-btn-2'&gt;",
      "&lt;input type='checkbox' /&gt;",
      "&lt;span class='circle'&gt;&lt;/span&gt;",
      "&lt;/label&gt;",
    ],

    css: [
      "*,::before,::after{",
      "margin:0;",
      "padding:0;",
      "box-sizing:border-box;",
      "}",
      ".toggle-btn-2 {",
      "width: 150px;",
      "height: 50px;",
      "position: relative;",
      "display: inline-block;",
      "}",
      ".toggle-btn-2 input[type='checkbox'] {",
      "position: absolute;",
      "width: 100%;",
      "height: 100%;",
      "border-radius: 30px;",
      "box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);",
      "appearance: none;",
      "cursor: pointer;",
      "transition: all 300ms ease-in-out;",
      "outline: none;",
      "background-color: #fff;",
      "}",
      ".toggle-btn-2 .circle {",
      "position: absolute;",
      "width: 35px;",
      "height: 35px;",
      "top: 50%;",
      "left: 10px;",
      "transform: translateY(-50%);",
      "border-radius: 50%;",
      "background-color: #000;",
      "transition: all 300ms ease-in-out;",
      "pointer-events: none;",
      "}",
      ".toggle-btn-2 .circle::before {",
      "content: '';",
      "width: 50%;",
      "height: 50%;",
      "background-color: #fff;",
      "position: absolute;",
      "top: 50%;",
      "left: 50%;",
      "transform: translate(-50%, -50%);",
      "border-radius: 50%;",
      "transition: all 300ms ease-in-out;",
      "transition-delay: 100ms;",
      "}",
      ".toggle-btn-2 input[type='checkbox']:checked {",
      "background-color: #000;",
      "}",
      ".toggle-btn-2 input[type='checkbox']:checked ~ .circle {",
      "background-color: #fff;",
      "left: 105px;",
      "}",
      ".toggle-btn-2 input[type='checkbox']:checked ~ .circle::before {",
      " width: 25%;",
      "border-radius: 10px;",
      "background-color: #000;",
      "}",
    ],
  },
  "toggle-btn-3": {
    html: [
      "&lt;label class='toggle-btn-3'&gt;",
      "&lt;input type='checkbox' /&gt;",
      "&lt;span class='toggle-text'&gt;&lt;/span&gt;",
      "&lt;/label&gt;",
    ],

    css: [
      "*,::before,::after{",
      "margin:0;",
      "padding:0;",
      "box-sizing:border-box;",
      "}",
      ".toggle-btn-3 {",
      "width: 160px;",
      "height: 45px;",
      "position: relative;",
      "display: inline-block;",
      "}",
      ".toggle-btn-3 input[type='checkbox'] {",
      "position: absolute;",
      "width: 100%;",
      "height: 100%;",
      "border-radius: 30px;",
      "box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);",
      "appearance: none;",
      "cursor: pointer;",
      "transition: all 300ms ease-in-out;",
      "outline: none;",
      "background-color: #fff;",
      "z-index: 1;",
      "overflow: hidden;",
      "}",
      ".toggle-btn-3 input[type='checkbox']::before {",
      "content: '';",
      "position: absolute;",
      "width: 0;",
      "height: 100%;",
      "border-radius: 30px;",
      "background-color: #733337;",
      "left: 0;",
      "top: 0;",
      "z-index: -1;",
      "transition: width 300ms ease-in-out;",
      "}",
      ".toggle-btn-3 .toggle-text {",
      "position: absolute;",
      "width: 40px;",
      "height: 20px;",
      "top: 50%;",
      "left: 10px;",
      "transform: translateY(-50%);",
      "background-color: transparent;",
      "transition: all 300ms ease-in-out;",
      "pointer-events: none;",
      "z-index: 1;",
      "}",
      ".toggle-btn-3 .toggle-text::before {",
      "content: 'OFF';",
      "position: absolute;",
      "width: 100%;",
      "height: 100%;",
      "color: #733337;",
      "text-align: center;",
      "font-weight: 700;",
      "font-size: 1.15rem;",
      "transition: all 300ms ease-in-out;",
      "transition-delay: 100ms;",
      "}",
      ".toggle-btn-3 input[type='checkbox']:checked::before {",
      "width: 100%;",
      "}",
      ".toggle-btn-3 input[type='checkbox']:checked ~ .toggle-text {",
      "left: 110px;",
      "}",
      ".toggle-btn-3 input[type='checkbox']:checked ~ .toggle-text::before {",
      "content: 'ON';",
      "color: #fff;",
      "}",
    ],
  },
};
