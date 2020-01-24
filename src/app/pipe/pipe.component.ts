import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  students:any[]=[
    {'name':'Tayyab',
    'gender':'male',
    'marks':20
      },
      {'name':'Nida',
      'gender':'female',
      'marks':15
        },
        {'name':'Waqar',
        'gender':'male',
        'marks':21
          },
  ]

}
