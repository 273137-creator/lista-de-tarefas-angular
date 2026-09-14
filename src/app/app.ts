import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tarefa {
  texto: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  novaTarefa = '';
  filtro: 'todas' | 'pendentes' | 'concluidas' = 'todas';

  tarefas: Tarefa[] = [
    { texto: 'Estudar Angular', concluida: false },
    { texto: 'Terminar o currículo', concluida: true },
  ];

  adicionarTarefa(): void {
    const texto = this.novaTarefa.trim();
    if (!texto) return;
    this.tarefas.push({ texto, concluida: false });
    this.novaTarefa = '';
  }

  alternarConclusao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  removerTarefa(tarefa: Tarefa): void {
    this.tarefas = this.tarefas.filter(t => t !== tarefa);
  }

  get tarefasFiltradas(): Tarefa[] {
    if (this.filtro === 'pendentes') return this.tarefas.filter(t => !t.concluida);
    if (this.filtro === 'concluidas') return this.tarefas.filter(t => t.concluida);
    return this.tarefas;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}