import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppartmentService} from "../service/appartment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Residence} from "../models/residence";
import {Apartment} from "../models/apartment";

@Component({
  selector: 'app-updateappart',
  templateUrl: './updateappart.component.html',
  styleUrls: ['./updateappart.component.css']
})
export class UpdateappartComponent implements OnInit {
  id!: number
  formappart!:FormGroup
  listapart:Apartment[]=[]
  res:Residence={
      "id": 1,
      "name": "El fel",
      "address": "Borj Cedria",
      "image": "../../assets/images/residence1.jpg"

  }


  constructor(private act: ActivatedRoute, private apartmenservice: AppartmentService,private router: Router) {
  }

  update() {

    this.apartmenservice.updateappart(this.id, this.formappart.value).subscribe(
      () => {
        console.log('appartement modifié');
        this.router.navigate(['/appartment'])

      })

  }
  ngOnInit(): void {
  this.id=  this.act.snapshot.params['id']


    this.formappart=new FormGroup({
      appartNum: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      residence: new FormControl(this.res,Validators.required)
    })
    this.apartmenservice.getbyid(this.id).subscribe((data)=>{

      this.listapart=data
      this.formappart.patchValue(this.listapart as any)
    })

  }

}
