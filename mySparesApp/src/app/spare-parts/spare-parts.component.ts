import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.sass']
})
export class SparePartsComponent implements OnInit { 
	
  	spareParts: any = [];
  	tableData: any = [];
  	filter = new FormControl('');
  	tableHeaders = [{key: "carMake", value: "Car Make"}, {key: "carModel", value: "Car Model"}, 
  	{key: "carManufacturingYear", value: "Car Manufacturing Year"},{key: "carVariant", value: "Car Variant"},
  	{key: "partCategory", value: "Part Category"}, {key: "partSubCategory", value: "Part Sub Category"},
  	{key: "brand", value: "Brand"}, {key: "partPhotoLink", value: "Part Photo link"},
  	{key: "partName", value: "Part Name"},{key: "mrp", value: "MRP"},
  	{key: "discountPercent", value: "Discount%"},{key: "priceAfterDiscount", value: "Price After Discount"},
  	{key: "returnWarranty", value: "Return Warranty"},{key: "dispatchDays", value: "Dispatch Days"}]

  constructor(private httpClient: HttpClient) {

   }

  ngOnInit(): void {
  	this.httpClient.get("assets/mySparesSampleData.json").subscribe(response =>{
      this.spareParts = response['spares'];
      this.tableData = response['spares'];
    });
  }

  onChangeEvent(event: any) {
    // this.spareParts = this.search(this.filter.value, this.tableData);
     setTimeout(() => {
       this.spareParts = this.search(this.filter.value, this.tableData);
    }, 1000);
  }


  search = (text, parts) => {

  	 let results = [];
  	 let term = text.toLowerCase();
  	 for(let part of parts) {
  	 	for(let header of this.tableHeaders) {
  	 		if(part[header.key] && part[header.key].toString().toLowerCase().includes(text)) {
  	 			results.push(part);
  	 			break;
  	 		}
  	 	}
  	 }
  	 return results;
  }

  reset = () => {
  		this.filter.setValue("");
  }



}
