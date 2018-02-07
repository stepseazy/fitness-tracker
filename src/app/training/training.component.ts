import { Component, OnInit, NgOnDestroy } from '@angular/core';
import {TrainingService} from './training.service';
import {Subscription} from 'rxjs/subscription';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit OnDestroy {
  ongoingTraining=false;
  exerciseSubscription:Subscription;
  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription=this.trainingService.exerciseChanged.subscribe(
      exercise=>{
        if (exercise){
          this.ongoingTraining=true;
        }else{
          this.ongoingTraining=false;
        }

      }
    );
  }
  ngOnDestroy() {
    this.exerciseSubscription=this.trainingService.exerciseChanged.unsubscribe();
  }
}
