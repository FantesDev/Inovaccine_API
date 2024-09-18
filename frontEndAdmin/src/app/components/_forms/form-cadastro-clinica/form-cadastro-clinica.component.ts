import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTextListComponent } from '../../input-text-list/input-text-list.component';
import { ClinicaService } from 'src/app/core/service/clinica.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTimeComponent } from '../../input-time/input-time.component';
import { MedicoService } from 'src/app/core/service/medico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-cadastro-clinica',
  templateUrl: './form-cadastro-clinica.component.html',
  standalone: true,
  styleUrls: ['./form-cadastro-clinica.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule, InputTextListComponent, InputTimeComponent, HttpClientModule],
  providers:[ClinicaService, MedicoService]
})
export class FormCadastroClinicaComponent  implements OnInit {
  form: FormGroup;
  dados: any;
  inputValue: string = '';
  showDropdown: boolean = false;
  medicoId!: number;

  inputsDataGeral = [
    {size: 12, name: "nome_cli", label: "Nome da Clínica", placeholder: "Insira o nome da clínica"},
    {size: 3, name: "cnpj", label: "CNPJ", placeholder: "00.000.000/0000-00"},
    {size: 3, name: "telefone", label: "Telefone", placeholder: "(00) 00000-0000"}
  ];

  inputsDataLogin = [
    {size: 6, name: "email", label: "E-mail", placeholder: "Insira o e-mail da clínica"},
    {size: 6, name: "senha", label: "Senha", placeholder: "Insira uma senha forte"}
  ];

  inputsDataEndereco = [
    {size: 3, name: "cep", label: "CEP", placeholder: "00000-000"},
    {size: 5, name: "logradouro", label: "Logradouro", placeholder: "ex: Rua..."},
    {size: 4, name: "bairro", label: "Bairro", placeholder: "ex: Vila..."},
    {size: 3, name: "cidade", label: "Cidade", placeholder: "ex: São..."},
    {size: 2, name: "uf", label: "UF", placeholder: "SP"},
    {size: 3, name: "numero", label: "Número", placeholder: "00000"},
    {size: 4, name: "complemento", label: "Complemento", placeholder: "ex: Casa, Ap..."}
  ];

  constructor(private formBuilder: FormBuilder, private clinica: ClinicaService, private dadosMedico: MedicoService) { 
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome_cli: [null],
      nome_medico: [null],
      email: [null],
      senha: [null],
      cnpj: [null],
      telefone: [null],
      hora_inicio: [null],
      hora_fim: [null],
      cep: [null],
      logradouro: [null],
      bairro: [null],
      cidade: [null],
      uf: [null],
      numero: [null],
      complemento: [null]
    });
  }

  onSubmit() {
    this.form.patchValue({
      nome_medico: this.medicoId
    });
    const clinica = this.form.value;
    console.log(clinica);
    this.clinica.cadastrarClinica(clinica);
    this.form.reset();
  }

  onSearch(value: string) {
    if(value.length > 0) {
      this.dadosMedico.pesquisarMedico(value).subscribe(
        (response) => {
          (response.length > 0) 
          ? this.dados = response 
          : this.dados = [{"nome": "Nenhum médico encontrado..."}];

          this.showDropdown = true;
        },
        (error) => {console.error("ERRO: ", error);}
      );
    } else {
      this.showDropdown = false;
    }
  }

  selectValue(medico: any) {
    if (medico.nome === 'Nenhum médico encontrado...') {
      return;
    }

    this.inputValue = medico.nome;
    this.medicoId = medico.codMedico;
    this.showDropdown = false;
  }
}
