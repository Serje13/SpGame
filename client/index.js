import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";

// const EVENTS_TO_MODIFY = [
//   "touchstart",
//   "touchmove",
//   "touchend",
//   "touchcancel",
//   "wheel"
// ];

// const originalAddEventListener = document.addEventListener.bind();
// document.addEventListener = (type, listener, options, wantsUntrusted) => {
//   let modOptions = options;
//   if (EVENTS_TO_MODIFY.includes(type)) {
//     if (typeof options === "boolean") {
//       modOptions = {
//         capture: options,
//         passive: false
//       };
//     } else if (typeof options === "object") {
//       modOptions = {
//         passive: false,
//         ...options
//       };
//     }
//   }

//   return originalAddEventListener(type, listener, modOptions, wantsUntrusted);
// };

// const originalRemoveEventListener = document.removeEventListener.bind();
// document.removeEventListener = (type, listener, options) => {
//   let modOptions = options;
//   if (EVENTS_TO_MODIFY.includes(type)) {
//     if (typeof options === "boolean") {
//       modOptions = {
//         capture: options,
//         passive: false
//       };
//     } else if (typeof options === "object") {
//       modOptions = {
//         passive: false,
//         ...options
//       };
//     }
//   }
//   return originalRemoveEventListener(type, listener, modOptions);
// };

// window.addEventListener("touchstart", e => e.preventDefault(), {
//   passive: false
// });
// window.addEventListener("touchmove", e => e.preventDefault(), {
//   passive: false
// });
// window.addEventListener("touchend", e => e.preventDefault(), {
//   passive: false
// });
// window.addEventListener("touchcancel", e => e.preventDefault(), {
//   passive: false
// });
// window.addEventListener("wheel", e => e.preventDefault(), {
//   passive: false
// });
// document.addEventListener("onScroll", e => e.preventDefault(), {
//   passive: false
// });

// const EVENTS_TO_MODIFY = [
//   "touchstart",
//   "touchmove",
//   "touchend",
//   "touchcancel",
//   "wheel"
// ];

// const originalAddEventListener = document.addEventListener.bind();
// document.addEventListener = (type, listener, options, wantsUntrusted) => {
//   let modOptions = options;
//   if (EVENTS_TO_MODIFY.includes(type)) {
//     if (typeof options === "boolean") {
//       modOptions = {
//         capture: options,
//         passive: false
//       };
//     } else if (typeof options === "object") {
//       modOptions = {
//         ...options,
//         passive: false
//       };
//     }
//   }

//   return originalAddEventListener(type, listener, modOptions, wantsUntrusted);
// };

// const originalRemoveEventListener = document.removeEventListener.bind();
// document.removeEventListener = (type, listener, options) => {
//   let modOptions = options;
//   if (EVENTS_TO_MODIFY.includes(type)) {
//     if (typeof options === "boolean") {
//       modOptions = {
//         capture: options,
//         passive: false
//       };
//     } else if (typeof options === "object") {
//       modOptions = {
//         ...options,
//         passive: false
//       };
//     }
//   }
//   return originalRemoveEventListener(type, listener, modOptions);
// };

// const EVENTS_TO_MODIFY = [
//   "touchstart",
//   "touchmove",
//   "touchend",
//   "touchcancel",
//   "wheel"
// ];
// const checkType = (type, options) => {
//   if (!EVENTS_TO_MODIFY.includes(type)) return null;

//   const modOptions = {
//     boolean: {
//       capture: options,
//       passive: false
//     },
//     object: {
//       ...options,
//       passive: false
//     }
//   };

//   return modOptions[typeof options];
// };

// const addEventListener = document.addEventListener.bind();
// document.addEventListener = (type, listener, options, wantsUntrusted) =>
//   addEventListener(
//     type,
//     listener,
//     checkType(type, options) || options,
//     wantsUntrusted
//   );

// const removeEventListener = document.removeEventListener.bind();
// document.removeEventListener = (type, listener, options) =>
//   removeEventListener(type, listener, checkType(type, options) || options);

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept("../client/components/App", () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
