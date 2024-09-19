import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'teste',
  //   loadComponent: () => import('./pages/teste/teste.page').then( m => m.TestePage)
  // },
  {
    path: 'cadastro-medico',
    loadComponent: () => import('./pages/admin/cadastro-medico/cadastro-medico.page').then( m => m.CadastroMedicoPage)
  },
  {
    path: 'cadastro-clinica',
    loadComponent: () => import('./pages/admin/cadastro-clinica/cadastro-clinica.page').then( m => m.CadastroClinicaPage)
  },
  {
    path: 'listagem-clinicas',
    loadComponent: () => import('./pages/admin/listagem-clinicas/listagem-clinicas.page').then( m => m.ListagemClinicasPage)
  },
  {
    path: 'cadastro-funcionario',
    loadComponent: () => import('./pages/clinica/cadastro-funcionario/cadastro-funcionario.page').then( m => m.CadastroFuncionarioPage)
  },  {
    path: 'cadastro-vacina',
    loadComponent: () => import('./pages/clinica/cadastro-vacina/cadastro-vacina.page').then( m => m.CadastroVacinaPage)
  },
  {
    path: 'listagem-funcionarios',
    loadComponent: () => import('./pages/clinica/listagem-funcionarios/listagem-funcionarios.page').then( m => m.ListagemFuncionariosPage)
  },




];
