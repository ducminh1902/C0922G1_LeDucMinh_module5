import {Component, OnInit} from '@angular/core';
import {ShoesService} from '../../service/shoes.service';
import {Router} from '@angular/router';
import {ShoesTypeService} from '../../service/shoes-type.service';
import {ShoesType} from '../../model/shoes-type';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shoes-create',
  templateUrl: './shoes-create.component.html',
  styleUrls: ['./shoes-create.component.css']
})
export class ShoesCreateComponent implements OnInit {

  shoesTypes: ShoesType[] = [];

  shoesForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    brand: new FormControl(),
    shoesType: new FormControl(),
  });

  constructor(private shoesService: ShoesService,
              private route: Router,
              private shoesTypeService: ShoesTypeService) {
  }

  ngOnInit(): void {
    this.shoesTypeService.getAll().subscribe(next => {
      this.shoesTypes = next;
    });
  }
  add() {
    const shoes = this.shoesForm.value;
    this.shoesService.addShoes(shoes).subscribe(next =>{
      alert('thêm mới thành công');
      this.shoesForm.reset();
      this.route.navigateByUrl('shoes');
    });
  }
}
