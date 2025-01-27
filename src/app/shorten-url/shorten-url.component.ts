import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenUrlService } from '../services/shorten-url-service';
import { IUrlResults } from '../url';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shorten-url',
  imports: [ReactiveFormsModule, NgxSkeletonLoaderModule],
  templateUrl: './shorten-url.component.html',
  styleUrl: './shorten-url.component.css'
})
  export class ShortenUrlComponent{

  datos: IUrlResults = {
    id: 0,
    longUrl: "",
    shortUrl: ""
  };

  isLoading = true;

  constructor(private shortenService: ShortenUrlService) {}

  formShorten = new FormControl("", Validators.required);
      
    shortenUrl(longUrl:any){
      this.shortenService.shortenUrl({longUrl})
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (data) => {
        this.datos = data;
        console.log(this.datos)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }  
}