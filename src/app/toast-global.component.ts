import { Component, OnDestroy } from '@angular/core';
import { ApicService } from './apic.service';

import { ToastService } from './toast-service';

@Component({
  selector: 'ngbd-toast-global',
  templateUrl: './toast-global.component.html',
})
export class NgbdToastGlobal implements OnDestroy {
  constructor(
    public toastService: ToastService,
    private apiCService: ApicService
  ) {}

  // showStandard() {
  //   this.toastService.show('I am a standard toast');
  // }

  showSuccess() {
    // this.toastService.show('I am a success toastss', {
    //   classname: 'bg-success text-light',
    //   delay: 1500,
    // });
    this.apiCService.getUser().subscribe((response) => {
      if (response) {
        this.toastService.show('I am a success toastss', {
          classname: 'bg-success text-light',
          delay: 1500,
        });
      }
    });
  }

  // showDanger(dangerTpl) {
  //   this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  // }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
