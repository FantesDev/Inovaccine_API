<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    protected $table = "Clinica";

    protected $primaryKey = 'codClinica';

    protected $fillable = [
        'codClinica',
        'nome',
        'cnpj',
        'fk_clinica_codEndereco',
        'telefone',
        'fk_clinica_codLogin',
        'periodoFunc_inicio',
        'periodoFunc_fim',
        'fk_clinica_codMedico'
    ]; 

    public function endereco(){
        return $this->belongsTo(Endereco::class, 'fk_clinica_codEndereco');
    }
    public function medico(){
        return $this->belongsTo(Medico::class, 'fk_clinica_codMedico');
    }

    use HasFactory;
}
