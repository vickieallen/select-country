import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'select-county';

  countryFormControl = new FormControl();
  countryRequiredFormControl = new FormControl(null, [Validators.required]);
  countryFormGroup: FormGroup;

  defaultValue: Country = {
    name: 'Deutschland',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    numericCode: '276'
  };

  predefinedCountries: Country[] = [
    {
      name: 'Germany',
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      numericCode: '276'
    },
    {
      name: 'Greece',
      alpha2Code: 'GR',
      alpha3Code: 'GRC',
      numericCode: '300'
    },
    {
      name: 'France',
      alpha2Code: 'FR',
      alpha3Code: 'FRA',
      numericCode: '250'
    },
    {
      name: 'Belgium',
      alpha2Code: 'BE',
      alpha3Code: 'BEL',
      numericCode: '056'
    }
  ];

  constructor(
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private formBuilder: FormBuilder
  ) {
    angulartics2GoogleAnalytics.startTracking();
  }

  onCountrySelected($event: Country) {
    console.log($event);
  }

  ngOnInit(): void {
    this.countryFormGroup = this.formBuilder.group({
      country: [
        {
          value: {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276'
          },
          disabled: false
        }
      ]
    });

    this.countryFormGroup
      .get('country')
      .valueChanges.subscribe((country) =>
      console.log(
        'this.countryFormGroup.get(\'country\').valueChanges',
        country
      )
    );

    this.countryFormControl.valueChanges.subscribe((country) =>
      console.log('this.countryFormControl.valueChanges', country)
    );
  }
}
