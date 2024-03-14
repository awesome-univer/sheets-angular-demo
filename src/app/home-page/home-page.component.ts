import { Component, ViewChild } from '@angular/core';
import { DEFAULT_WORKBOOK_DATA } from '../data';
import { UniverSheets } from '../univer-sheets/univer-sheets.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePage {

  @ViewChild(UniverSheets) univerSheets: UniverSheets | undefined = undefined;

  data = JSON.parse(JSON.stringify(DEFAULT_WORKBOOK_DATA));

  changeData(){
    const univerAPI = this.univerSheets?.univerAPI;
    if(!univerAPI) return;

    const activeWorkbook = univerAPI.getActiveWorkbook();
    const activeSheet = activeWorkbook!.getActiveSheet();
    const range = activeSheet!.getRange(0, 0);

    range!.setValue(Math.random());
  }

  getData () {
    console.log(this.univerSheets?.getData());
  }

  reloadData(){
    // this.univerSheets.univerAPI.
    this.data = JSON.parse(JSON.stringify(DEFAULT_WORKBOOK_DATA));
  }
}
