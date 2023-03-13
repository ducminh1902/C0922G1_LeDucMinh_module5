import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: Dictionary[];

  constructor(private dictionaryServiceService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.words = this.dictionaryServiceService.findAll();
  }

}
