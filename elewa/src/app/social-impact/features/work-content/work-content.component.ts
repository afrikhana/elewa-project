import {  ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-content',
  template: `
        <div class="main-display">
      <div id="item1">
        <h1>{{peopleTrained}}+</h1>
        <p>People trained</p>
      </div>
      <div id="item2">
        <h1>{{careersLaunched}}k</h1>
        <p>careers launched</p>
      </div>
      <div id="item3">
        <h1>{{projectsFinished}}+</h1>
        <p>projects finished</p>
      </div>
      <div id="item4">
        <h1>{{investors}}</h1>
        <p>Investors</p>
      </div>
    </div>
          
  `,
  styleUrls: ['./work-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkContentComponent implements OnInit {
  peopleTrained: number = 0;
  careersLaunched: number = 0;
  projectsFinished: number = 0;
  investors: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const totalPeople = 733;
    const totalCareers = 733;
    const totalProjects = 200;
    const totalInvestors = 56;
    // how long will one wait for the count to stop
    const interval = 0.0006;
    const increment = 1;

    const updateNumbers = () => {
      // if statment to compare if the prev value is supposed to equal the original value
      if (this.peopleTrained < totalPeople) {
        this.peopleTrained += increment;
      }
      if (this.careersLaunched < totalCareers) {
        this.careersLaunched += increment;
      }
      if (this.projectsFinished < totalProjects) {
        this.projectsFinished += increment;
      }
      if (this.investors < totalInvestors) {
        this.investors += increment;
      }

      this.cdr.detectChanges(); // Trigger change detection

      if (
        this.peopleTrained < totalPeople ||
        this.careersLaunched < totalCareers ||
        this.projectsFinished < totalProjects ||
        this.investors < totalInvestors
      ) {
        setTimeout(() => {
          updateNumbers();
        }, interval);
      }
    };

    updateNumbers();
  }
}
