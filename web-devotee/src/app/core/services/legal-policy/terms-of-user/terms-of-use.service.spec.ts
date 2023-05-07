import { TestBed } from '@angular/core/testing';

import { TermsOfUseServiceEn, TermsOfUseServicePt } from './terms-of-use.service';

describe('TermsOfUseService', () => {
  let servicePt: TermsOfUseServicePt;
  let serviceEn: TermsOfUseServiceEn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicePt = TestBed.inject(TermsOfUseServicePt);
    serviceEn = TestBed.inject(TermsOfUseServiceEn);

  });

  it('should be created', () => {
    expect(servicePt).toBeTruthy();
    expect(serviceEn).toBeTruthy();

  });
});
