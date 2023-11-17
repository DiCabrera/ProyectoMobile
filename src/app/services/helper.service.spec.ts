import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { AlertController, AngularDelegate, LoadingController, ModalController, ToastController } from '@ionic/angular';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule
    ({
      providers: [ModalController, AlertController, LoadingController, ToastController, HelperService, AngularDelegate]
    });
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
