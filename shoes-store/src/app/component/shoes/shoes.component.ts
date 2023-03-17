import {Component, OnInit} from '@angular/core';
import {ShoesService} from '../../service/shoes.service';
import {Shoes} from '../../model/shoes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {


  shoes: Shoes[] = [];
  item: Shoes = {};
  page = 0;


  constructor(private shoesService: ShoesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.shoesService.getAll().subscribe(next => {
      this.shoes = next;
    });
  }

  delete(id: number) {
    this.shoesService.deleteShoes(this.item.id).subscribe(next => {
      alert('đã xóa thành công');
      this.ngOnInit();
      this.router.navigateByUrl('shoes');
    });
  }

  search(name: string) {
    this.shoesService.findByName(name).subscribe(next => {
      this.shoes = next;
    });
  }
}
