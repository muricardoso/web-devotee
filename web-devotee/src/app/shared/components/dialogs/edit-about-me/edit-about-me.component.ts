import { takeUntil } from 'rxjs/operators';
import { nameValidatorSpecialCharacteres } from 'src/app/shared/validators/name/name-special-characteres.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { State } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { EnumUserType } from 'src/app/shared/enum/user-types/user-type.enum';
import { IAppState } from 'src/app/state-management/app.model';
import { nameValidatorFormatInvalid } from 'src/app/shared/validators/name/name-format-invalid.validator';
import { inputsSpecialPerson, searchSpecialPerson } from 'src/app/pages/continue-register/components/register-data/consts/inputs-special-person.const';
import { GetSelectsSpecialPersonService } from 'src/app/shared/functions/get-selects-special-person/get-selects-special-person.service';
import { Observable, ReplaySubject } from 'rxjs';
import { EnumControlsSpecialPerson } from 'src/app/pages/continue-register/components/register-data/enum/constrols-inputs-special-person.enum';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.scss']
})
export class EditAboutMeComponent implements OnInit {
  dataTexts;

  specialAccount = false;
  usageLaguage;

  laguagesApplication = EnumLanguages;
  formGroup: FormGroup;


  filteredCids: any[];
  filteredMedicalProcedures: any[];
  filteredDrugs: any[];
  filteredHosptals: any[];

  showWasBorn = false;

  destroy$ = new ReplaySubject(1);
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<EditAboutMeComponent>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private getSelectsSpecialPersonService: GetSelectsSpecialPersonService,
    private updateDataService: UpdateDataService,


  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.usageLaguage = this.translateService?.dataFormatation;

  }

  async ngOnInit() {
    this.initForm();
    if (this.state.getValue()?.userData?.data?.account_type == EnumUserType.SPECIAL) {
      this.specialAccount = true;
      this.addControlsTypeSpecial();
      await this.getDatasSelectTypeSpecial();
      this.valueChangesInputsSearchSelects();
    };
    this.setInitialValues()
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({
      profile_picture: this.formBuilder.array([]),
      name: [
        '',
        [
          nameValidatorSpecialCharacteres,
          nameValidatorFormatInvalid,
        ]
      ],
      email: [
        '',
        [
          Validators.email
        ]
      ],
      occupation: [
        ''
      ],
      gender: [
        '',
        [
        ]
      ],
      show_as_gender: [
        '',
        [
        ]
      ],
      sexual_orientation: [
        '',
        [
        ]
      ],
      about: [
        '',
        [
        ]
      ]

    })
  }
  addControlsTypeSpecial(): void {
    const controlsSpecial = [
      ...searchSpecialPerson,
      ...inputsSpecialPerson,
    ]
    controlsSpecial.forEach((value: string) => {
      this.formGroup
        .addControl(
          value,
          this.formBuilder.control('',));
    });
  }
  removeControlsIputSearchSpecialThings() {
    const controlsSpecial = [
      ...searchSpecialPerson,
      ...inputsSpecialPerson,
      'profile_picture'
    ];
    controlsSpecial.forEach((value: string) => {
      this.formGroup.removeControl(value);
    });
  }
 getDatasSelectTypeSpecial() {
  return new Promise(async (resolve, reject) => {
    this.getSelectsSpecialPersonService
      .getCids().then(res => {
        this.filteredCids = res.data;
        this.setCidsInitialValue();
      });
    this.getSelectsSpecialPersonService
      .getMedicalProcedures().then(res => {
        this.filteredMedicalProcedures = res.data;
        this.setMedicalProceduresInitialValues();
      });
    this.getSelectsSpecialPersonService
      .getDrugsMedicines().then(res => {
        this.filteredDrugs = res.data;
        this.setDrugsInitialValue();
      });
    this.getSelectsSpecialPersonService
      .getHosptalsLogged().then(res => {
        this.filteredHosptals = res.data;
        this.setHospitalsInitialValues();
      });
  })


  }
  valueChangesInputsSearchSelects() {
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_CID)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getCids(res)
          .then(selectData => {
            this.filteredCids = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_DRUGS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getDrugsMedicines(res)
          .then(selectData => {
            this.filteredDrugs = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MEDICAL_PROCEDURES)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getMedicalProcedures(res)
          .then(selectData => {
            this.filteredMedicalProcedures = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_HOSPTALS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getHosptals(res)
          .then(selectData => {
            this.filteredHosptals = selectData.data;
        })
      });
  }
  genderChanged(value) {
    if (value === 'trans') {
      this.showWasBorn = true;
      return this.showWasBorn;
    }
    this.formGroup.get('show_as_gender').setValue(value);
    this.showWasBorn = false;
    return this.showWasBorn;
  }
  setInitialValues() {
    const userData = this.state.getValue()?.userData?.data;
    this.formGroup.patchValue({
      ...userData,
    })
  }
  setMedicalProceduresInitialValues() {
    const userData = this.state.getValue()?.userData?.data;
    let medicalProcedure = []
    userData?.medical_procedures.forEach(element => {
      if(this.filteredMedicalProcedures.find(filteredMedicalProcedure => filteredMedicalProcedure.id != element.medical_procedures.id)) {
        this.filteredMedicalProcedures.push(element.medical_procedures);
      }
      medicalProcedure.push(element?.medical_procedures?.id);
    });
    this.formGroup.get('medical_procedures')
      .setValue(medicalProcedure);

    //cids

    //drugs

  }
  setCidsInitialValue() {
    const userData = this.state.getValue()?.userData?.data;
    let cids = []
    userData?.my_cids.forEach(element => {
      if(this.filteredCids.find(filteredCid => filteredCid.id != element.cid.id)) {
        this.filteredCids.push(element.cid);
      }
      cids.push(element?.cid.id);
    });

    this.formGroup.get('my_cids')
      .setValue(cids);

  }
  setDrugsInitialValue() {
    const userData = this.state.getValue()?.userData?.data;
    let drugs = []

    userData?.my_drugs.forEach(element => {
      if(this.filteredDrugs.find(filteredDrug => filteredDrug.id != element.drug.id)) {
        this.filteredDrugs.push(element.drug);
      }
      drugs.push(element?.drug.id);
    });
      this.formGroup.get('my_drugs')
        .setValue(drugs);

  }
  setHospitalsInitialValues() {
    const userData = this.state.getValue()?.userData?.data;

    let hospital = []
    userData?.my_hospitals.forEach(element => {
      if(this.filteredHosptals.find(filteredHospital => filteredHospital.id != element.hospital.id)) {
        this.filteredHosptals.push(element.hospital);
      }
      hospital.push(element?.hospital.id);
    });
    this.formGroup.get('my_hospitals')
        .setValue(hospital);

  }
  changeViewValueSexualOrientation(value) {
    return this.formGroup.get('sexual_orientation').value || value;
  }
  changeViewValueGender(value) {
    return this.formGroup.get('gender').value || value;
  }
  compareFunction(o1: any, o2: any) {
    return (o1.name == o2.name && o1.id == o2.id);
  }
  async saveDataEdited() {
    let updateData;
    let disabilitys;
    if(this.specialAccount) {
      disabilitys = {
        cid: this.addKeyInDisabilitys(this.formGroup.get('my_cids').value),
        medical_procedures: this.addKeyInDisabilitys(this.formGroup.get('medical_procedures').value),
        drugs: this.addKeyInDisabilitys(this.formGroup.get('my_drugs').value),
        hospitals: this.addKeyInDisabilitys(this.formGroup.get('my_hospitals').value),
      }
    }

    this.removeControlsIputSearchSpecialThings();
    updateData = {
      ...this.formGroup.value,
    }
    if (this.specialAccount) {
      updateData = {
        ...this.formGroup.value,
        disability: disabilitys
      }
    }
    await this.updateDataService.post(updateData, this.state.getValue()?.userData?.data.id).toPromise();
    setTimeout(() => {
      this.closeModal('saved');

    }, 500);
  }
  addKeyInDisabilitys(value) {
    let newArrayValue = [];
    value.forEach(element => {
      newArrayValue.push( {id: element})
    });
    return newArrayValue;
  }
  closeModal(action: string = 'close') {
    this.matDialogRef.close(action);
  }
}
