import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  constructor() { }

emp:any[]=[
  {
    'Id':'001',
     'name':'Tayyab'
  },
  {
    'Id':'001',
     'name':'Tayyab1'
  },
  {
    'Id':'001',
     'name':'Tayyab2'
  },
  {
    'Id':'001',
     'name':'Tayyab3'
  },
  {
    'Id':'001',
     'name':'Tayyab4'
  },
  {
    'Id':'001',
     'name':'Tayyab5'
  }
]
  getEmpData(){
    return this.emp;
  }
  getMoreEmp(){
    return this.emp=[
      {
        'Id':'001',
         'name':'Tayyab'
      },
      {
        'Id':'001',
         'name':'Tayyab1'
      },
      {
        'Id':'001',
         'name':'Tayyab2'
      },
      {
        'Id':'001',
         'name':'Tayyab3'
      },
      {
        'Id':'001',
         'name':'Tayyab4'
      },
      {
        'Id':'001',
         'name':'Waqar'
      },
      {
        'Id':'001',
         'name':'Dawood'
      },
      {
        'Id':'001',
         'name':'Hassan'
      }
    ]
  }
}
