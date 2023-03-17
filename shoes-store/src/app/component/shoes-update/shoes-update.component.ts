import {Component, OnInit} from '@angular/core';
import {ShoesService} from '../../service/shoes.service';
import {ShoesTypeService} from '../../service/shoes-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Shoes} from '../../model/shoes';
import {FormControl, FormGroup} from '@angular/forms';
import {ShoesType} from '../../model/shoes-type';

@Component({
  selector: 'app-shoes-update',
  templateUrl: './shoes-update.component.html',
  styleUrls: ['./shoes-update.component.css']
})
export class ShoesUpdateComponent implements OnInit {

  // @ts-ignore
  shoesTypes: Shoes[] = this.getShoesType();

  shoesForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    brand: new FormControl(),
    shoesType: new FormControl(),
  });

  constructor(private shoesService: ShoesService,
              private shoesTypeService: ShoesTypeService,
              private  activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.shoesService.findById(id).subscribe(next => {
        this.shoesForm.patchValue(next);
      });
    });
  }

  getShoesType() {
    this.shoesTypeService.getAll().subscribe(next => {
      this.shoesTypes = next;
    });
  }

  update() {
    const shoes = this.shoesForm.value;
    this.shoesService.updateShoes(shoes.id, shoes).subscribe(next =>{
      alert('đã cập nhật thành công');
      this.shoesForm.reset();
      this.router.navigateByUrl('shoes');
    });
  }

  comparaFn(o1: ShoesType, o2: ShoesType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
