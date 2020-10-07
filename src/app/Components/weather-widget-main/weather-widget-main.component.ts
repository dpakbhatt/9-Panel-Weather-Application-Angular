import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherAPIService } from "../weather-api.service";

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})

export class WeatherWidgetMainComponent implements OnInit {
  isCollapsed : boolean = false;
  enter: boolean = false;
  public error: string;
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public isDay: boolean;
  public interval;
  public value;

  constructor(private formBuilder: FormBuilder,private weatherapiService: WeatherAPIService) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  
  refresh(data){
    this.value = data;
    this.sendToAPI(this.value);
    this.interval = setInterval(() => {
      this.sendToAPI(this.value);
    }, 30000);
  }

  sendToAPI(formValues) {
    this.weatherapiService.getWeatherData(formValues.location)
    .subscribe(
      data => {
        this.setWeatherData(data);
        this.weatherData = data;
        console.log(this.weatherData);
        this.error = '';
      },
      error => {
        console.log(error);
        this.error = error;
      }
    )
  }

  form(){
    this.enter = !this.enter;
  }

  setWeatherData(data){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset*1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
  }
}