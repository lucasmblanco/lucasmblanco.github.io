import type p5 from 'p5'

export default class Quadrant {
    private a: number;

    private b: number;
 
    private c: number;
 
    private d: number; 

    private canvas: p5;

    private distanceX: number;

    private distanceY: number;

    private aspectRatio: number;

    private pallete: string[];

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
    

    
    private groupDiagonalDesc() {
        const descA = () =>  {
            // this.canvas.stroke('#000000');
            this.canvas.blendMode('source-over')
        //    this.canvas.stroke(this.canvas.random(this.pallete));
            this.canvas.strokeWeight(3);
            this.canvas.strokeCap('butt')
            for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.a + i, this.b, this.c, this.d - i * this.aspectRatio);
        }
        }
        const descB = ()  => {
            // this.canvas.stroke('#000000');
           this.canvas.blendMode('source-over')
        //    this.canvas.stroke(this.canvas.random(this.pallete));
            this.canvas.strokeWeight(3);
            this.canvas.strokeCap('butt')
        for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.c - i, this.d, this.a, this.b + i * this.aspectRatio);
          }
        }

        const arr = [descA(), descB()]; 
        // // for (let i = arr.length - 1; i > 0; i--) {
        // //     const j = Math.floor(Math.random() * (i + 1));
        // //     [arr[i], arr[j]] = [arr[j], arr[i]];
        // //   }
        return arr; 
        
    }

    private groupDiagonalAsc() {
        const ascA = () => {
            // this.canvas.stroke('#000000');
           this.canvas.blendMode('source-over')
        //    this.canvas.stroke(this.canvas.random(this.pallete));
            this.canvas.strokeWeight(3);
            this.canvas.strokeCap('butt')
            for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
                this.canvas.line(this.a + i, this.d, this.c, this.b + i * this.aspectRatio);
            }
        }
        const ascB = () => {
            // this.canvas.stroke('#000000');
           this.canvas.blendMode('source-over')
        //    this.canvas.stroke(this.canvas.random(this.pallete));
            this.canvas.strokeWeight(3);
            this.canvas.strokeCap('butt')
            for (let i = 0; i < (this.c - this.a); i += this.distanceX) {
                this.canvas.line(this.c - i, this.b, this.a, this.d - i * this.aspectRatio);
            }
        }
        
        
        const arr = [ascA(), ascB()]; 
        // // for (let i = arr.length - 1; i > 0; i--) {
        // //     const j = Math.floor(Math.random() * (i + 1));
        // //     [arr[i], arr[j]] = [arr[j], arr[i]];
        // //   }
        return arr; 
   

    }
    
    private verticalLines() {
        // this.canvas.stroke('#000000');
       this.canvas.blendMode('source-over')
    //    this.canvas.stroke(this.canvas.random(this.pallete));
        this.canvas.strokeWeight(3);
        this.canvas.strokeCap('butt')
        for (let i = this.distanceX; i < (this.c - this.a); i += this.distanceX) {
            this.canvas.line(this.a + i, this.b, this.a + i, this.d);
        }
         
    }

    private horizontalLines() {
        // this.canvas.stroke('#000000');
       this.canvas.blendMode('source-over')
        // this.canvas.stroke(this.canvas.random(this.pallete));
        this.canvas.strokeWeight(3);
        this.canvas.strokeCap('butt')
        for (let i = this.distanceY; i < (this.d - this.b); i += this.distanceY ) {
               this.canvas.line(this.a, this.b + i, this.c, this.b + i);
        }
          
    }

    draw() { 
        const arr = [this.groupDiagonalDesc.bind(this), this.groupDiagonalAsc.bind(this), this.horizontalLines.bind(this),this.verticalLines.bind(this), ]
  
        for (let i = arr.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [arr[i], arr[j]] = [arr[j], arr[i]]; 
        } 
        arr.pop();
        arr.forEach(action => {
            this.canvas.stroke(this.canvas.random(this.pallete));
            action()
        })
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
    
//     groupVerticalLines() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i <= (this.c - this.a); i += this.distanceX) {
//             this.canvas.line(this.a + i, this.b, this.a + i, this.d);
//           }
         
//     }

//     groupHorizontalLines() {
//         this.canvas.stroke(this.canvas.random(this.pallete));
//         for (let i = 0; i < (this.a - this.c); i += this.distanceY) {
//             this.canvas.line(this.a, this.b + i, this.c, this.b + i);
//           }
          
//     }



// }