import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../dictionary';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  vietnam;
  english;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryServiceService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
       this.vietnam = paramMap.get('vietnam');
       this.english = this.dictionaryServiceService.findByVietNam(this.vietnam);
    });
  }

}
