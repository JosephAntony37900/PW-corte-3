import { Component, OnInit } from '@angular/core';
import { locationService } from '../services/locations.service';
import { Vlocation } from '../interfaces/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','type', 'dimension', 'created'];
  dataSource: Vlocation[] = [];

  constructor(private locationService: locationService) {}

  ngOnInit(): void {
      this.locationService.getLocations().subscribe((data: any) => {
        this.dataSource = data.results;
      })
  }
   
}
