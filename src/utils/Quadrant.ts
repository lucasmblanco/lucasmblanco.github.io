import p5 from 'p5'

export default class Quadrant {
    a: number;

    b: number;
 
    c: number;
 
    d: number; 

    canvas: p5;

    distanceX: number;

    distanceY: number;

    aspectRatio: number;

    pallete: p5;

    constructor(canvas: p5, a: number, b: number, c: number, d: number, distanceX: number, distanceY: number, aspectRatio: number, pallete: string[]) {
        this.canvas = canvas;
        this.distanceX = distanceX;
        this.distanceY = distanceY; 
        this.a = a;
        this.b = b; 
        this.c = c;
        this.d = d;
        this.aspectRatio = aspectRatio;
        this.pallete = pallete;
    }
    

    private drawDiagonalDesc() {
        const descA = () =>  {
            this.canvas.stroke(this.canvas.random(this.pallete));
            for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.a + i, this.b, this.c, this.d - i * this.aspectRatio);
        }
        }
        const descB = ()  => {
            this.canvas.stroke(this.canvas.random(this.pallete));
        for (let i = this.distanceX; i < (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.c - i, this.d, this.a, this.b + i * this.aspectRatio);
          }
        }

        const arr = [descA(), descB()]; 
        for (let i = arr.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
          } 
        return arr; 
    }

    private drawDiagonalAsc() {
        const ascA = () => {
            this.canvas.stroke(this.canvas.random(this.pallete));
            for (let i = 0; i < (this.c - this.c); i += this.distanceX) {
                this.canvas.line(this.a + i, this.d, this.c, this.b + i * this.aspectRatio);
            }
        }
        const ascB = () => {
            this.canvas.stroke(this.canvas.random(this.pallete));
            for (let i = this.distanceX; i < (this.c - this.a); i += this.distanceX) {
                this.canvas.line(this.c - i, this.b, this.a, this.d - i * this.aspectRatio);
            }
        }
        
        const arr = [ascA(), ascB()]; 
        for (let i = arr.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
          } 
        return arr; 

    }
    
    private drawVerticalLines() {
        this.canvas.stroke(this.canvas.random(this.pallete));
        for (let i = 0; i <= (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.a + i, this.b, this.a + i, this.d);
          }
         
    }

    private drawHorizontalLines() {
        this.canvas.stroke(this.canvas.random(this.pallete));
        for (let i = 0; i < (this.a - this.c); i += this.distanceY) {
            this.canvas.line(this.a, this.b + i, this.c, this.b + i);
          }
          
    }

    draw() { 
        const arr = [this.drawDiagonalDesc(), this.drawDiagonalAsc(), this.drawVerticalLines(), this.drawHorizontalLines()]
        for (let i = arr.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [arr[i], arr[j]] = [arr[j], arr[i]]; 
        } 
        arr.pop();
        return arr; 
      }; 

}

// export default class Quadrant {
//     a: number;

 
//     c: number;
 
//     d: number; 

//     canvas: any;

//     distanceX: number;

//     distanceY: number;

//     aspectRatio: number;

//     pallete: any;

//     constructor(canvas: any, a: number, b: number, c: number, d: number, distanceX: number, distanceY: number, aspectRatio: number, pallete: any) {
//         this.canvas = canvas;
//         this.distanceX = distanceX;
//         this.distanceY = distanceY; 
//         this.a = a;
//         this.b = b; 
//         this.c = c;
//         this.d = d;
//         this.aspectRatio = aspectRatio;
//         this.pallete = pallete;
//     }

//     diagDescA() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
//             this.canvas.line(this.a + i, this.b, this.c, this.d - i * this.aspectRatio);
//         }
//     }

//     diagDescB() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = this.distanceX; i < (this.c - this.a); i += this.distanceX) {
//             this.canvas.line(this.c - i, this.d, this.a, this.b + i * this.aspectRatio);
//         }
//     }

//     diagAscA() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i < (this.c - this.c); i += this.distanceX) {
//             this.canvas.line(this.a + i, this.d, this.c, this.b + i * this.aspectRatio);
//         }
//     }

//     diagAscB() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = this.distanceX; i < (this.c - this.a); i += this.distanceX) {
//             this.canvas.line(this.c - i, this.b, this.a, this.d - i * this.aspectRatio);
//           }
//     }
    
//     drawVerticalLines() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i <= (this.c - this.a); i += this.distanceX) {
//             this.canvas.line(this.a + i, this.b, this.a + i, this.d);
//           }
         
//     }

//     drawHorizontalLines() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i < (this.a - this.c); i += this.distanceY) {
//             this.canvas.line(this.a, this.b + i, this.c, this.b + i);
//           }
          
//     }



// }