import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BubllAngular';
  speed: number = 0;
  radius: number = 0;
  leftDeviation: number = 0;
  topLimit: number = 0;

  wrapper: HTMLElement;
  spawnNumber = 20;
  bubbles = [];  

      ngOnInit() {
        window.onload = () => {
        this.wrapper = document.getElementById('wrapper') as HTMLElement;        
          for (var i = 0; i < this.spawnNumber; i++) {
            //generating the random attributes of the bubbles
            this.attributeRandomizer();
            //creating and appending the bubbles
            //important:
            //set the radius and speed before creating the elements
            this.bubbles[i] = document.createElement('div');         
            this.bubbles[i].classList.add('bubble');
            this.wrapper.appendChild(this.bubbles[i]);
            //setting the randomized values for each bubble
            this.setBubbleRadius(this.bubbles[i], this.radius);
            this.setBubbleDeviation(this.bubbles[i], this.leftDeviation);
            //letting the bubbles flow up :)
            this.bubbleFlow(this.bubbles[i], this.speed, this.topLimit);
        }
      }
    }

      setBubbleRadius(bubble, size) {
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
      }

      setBubbleDeviation(bubble, deviation) {
          bubble.style.left = deviation + 'px';
      }

      attributeRandomizer() {
          this.speed = Math.floor(Math.random() * 10) + 1;
          this.radius = Math.floor(Math.random() * 25) + 3;
          this.leftDeviation = Math.floor(Math.random() * 400) + 20;
          this.topLimit = Math.floor(Math.random() * 350) + 200;
      }
   
      bubbleFlow(bubble, time, limit) {
        //setting up the start position of each bubble
        //beware though, the position is relative
        let startingPosition = 0;
        //getting the id of the interval
        let id = setInterval(flow, time, limit);
        //the function used inside the interval
        //managing the flow of the bubbles
        function flow() {
            if (startingPosition == limit) {
                //if the position is equal to the set limit
                //set it back to zero then increase it by one
                //apply it to the bubble
                startingPosition = 0;
                startingPosition++;
                bubble.style.bottom = 0 + startingPosition + 'px';
            } else {
                //if the position is not equal to the limit
                //increase the position
                //apply it to bubble
                startingPosition++;
                bubble.style.bottom = startingPosition + "px";
            }
        }
    }
}
