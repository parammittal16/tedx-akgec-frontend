import { TestBed, inject } from '@angular/core/testing';

import { Admin.Service.TsService } from './admin.service.ts.service';

describe('Admin.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Admin.Service.TsService]
    });
  });

  it('should be created', inject([Admin.Service.TsService], (service: Admin.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
