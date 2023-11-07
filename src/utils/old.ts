   // function incrementOne(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));

      //   for (let i = 0; i < middleX; i += step) {
      //     p5.line(x1 + i, y1, x2, y2 - i * aspectRatio);
      //   }
      // }

      // function incrementBoth(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));

      //   for (let i = 0; i < middleX; i += step) {
      //     p5.line(x1 + i, y1, x2, y2 + i * aspectRatio);
      //   }
      // }

      // function decrementBoth(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));
      //   for (let i = step; i < middleX; i += step) {
      //     p5.line(x1 - i, y1, x2, y2 - i * aspectRatio);
      //   }
      // }

      // function decrementOne(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));
      //   for (let i = step; i < middleX; i += step) {
      //     p5.line(x1 - i, y1, x2, y2 + i * aspectRatio);
      //   }
      // }

      // function verticalLines(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));
      //   for (let i = 0; i <= middleX; i += step) {
      //     p5.line(x1 + i, y1, x2 + i, y2);
      //   }
      // }

      // function horizontalLines(
      //   x1: number,
      //   y1: number,
      //   x2: number,
      //   y2: number,
      //   step: number,
      // ) {
      //   p5.stroke(p5.random(pallete));
      //   for (let i = 0; i < middleY; i += step) {
      //     p5.line(x1, y1 + i, x2, y2 + i);
      //   }
// }
      
// ---- CUADRANTE 1 ----

      // incrementOne(0, 0, middleX, middleY, distanceX); // --> 0 0 middleX middleY distanceX
      // incrementBoth(0, middleY, middleX, 0, distanceX); // --> x1 y2 x2 y1
      // decrementBoth(middleX, 0, 0, middleY, distanceX); // --> x2 y1 x1 y2
      // decrementOne(middleX, middleY, 0, 0, distanceX); // --> x2 y2 x1 y1
      // verticalLines(0, 0, 0, middleY, distanceX); // --> x1 y1 x1 y2
      // horizontalLines(0, 0, middleX, 0, distanceY); // --> x1 y1 x2 y1

      // // ---- CUADRANTE 2 ----

      // incrementOne(middleX, 0, p5.width, middleY, distanceX); // --> middleX 0 p5.width, middleY distanceX
      // incrementBoth(middleX, middleY, p5.width, 0, distanceX);
      // decrementBoth(p5.width, 0, middleX, middleY, distanceX);
      // decrementOne(p5.width, middleY, middleX, 0, distanceX);
      // horizontalLines(middleX, 0, p5.width, 0, distanceY);
      // verticalLines(middleX, 0, middleX, middleY, distanceX);

      // // ---- CUADRANTE 3 ----

      // incrementOne(0, middleY, middleX, p5.height, distanceX); // --> 0 middleY middleX p5.height distanceX
      // incrementBoth(0, p5.height, middleX, middleY, distanceX);
      // decrementBoth(middleX, middleY, 0, p5.height, distanceX);
      // decrementOne(middleX, p5.height, 0, middleY, distanceX);
      // horizontalLines(0, middleY, middleX, middleY, distanceY);
      // verticalLines(0, middleY, 0, p5.height, distanceX);

      // // ---- CUADRANTE 4 ----

      // incrementOne(middleX, middleY, p5.width, p5.height, distanceX); // ---> middleX middleY p5.width p5.height distance X
      // incrementBoth(middleX, p5.height, p5.width, middleY, distanceX);
      // decrementBoth(p5.width, middleY, middleX, p5.height, distanceX);
      // decrementOne(p5.width, p5.height, middleX, middleY, distanceX);
      // verticalLines(middleX, middleY, middleX, p5.height, distanceX);
      // horizontalLines(middleX, middleY, p5.width, middleY, distanceY);