import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Fieldmodule } from '../fieldmodule.model';
import { FieldserviceService } from '../fieldservice.service';

interface FieldFlatnode{
  expandable:boolean;
  valueid:number;
  level:number;
}

const DATA:Fieldmodule[]=[];
@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent {
  displayColumns :string[] =[ 'valueid','objName','account','createdOn','createdBy','currency']
   
  private transformer = (node:Fieldmodule, level: number)=> {
    return {
      expandable : !!node.children && node.children.length > 0,
      objName:node.objName,
      valueid:node.valueid,
      account:node.account,
      createdOn:node.createdOn,
      createdBy:node.createdBy,
      currency:node.currency,
      
      level:level
    };
  }
  treeControl = new FlatTreeControl<FieldFlatnode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level,
    node => node.expandable, node => node['children']);
   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(private ser:FieldserviceService) {
    this.dataSource.data = DATA;
    this.ser.getAllData().subscribe(DATA=>
      {
        this.dataSource.data = DATA;
        console.log(this.dataSource);
      })
   }
   hasChild =(_:number, node:FieldFlatnode)=> node.expandable;


}
