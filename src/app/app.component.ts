import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livro/livro.model';
import { LivroService } from '../livro/livro.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { livroActions } from '../livro/state/livro.action';
import { livrosSelector } from '../livro/state/livro.selectors';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'redux-ngrx na prática';

  livroService = inject(LivroService);
  store = inject(Store);

  livros$ = this.store.select(livrosSelector);
  livroInput = '';


  ngOnInit(): void {
    this.store.dispatch(livroActions.carregarLivros())
  }

  adicionarLivro() {
    this.store.dispatch(livroActions.adicionarLivros(
      {
        id: 10,
        nome: this.livroInput
      }
    ))
  }

  // ngOnInit(): void {
  //   this.livros = this.livroService.obterLivros();
  // }


}
