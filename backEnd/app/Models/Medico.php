<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    protected $table = 'medico'; // Nome da tabela no banco de dados

    protected $primaryKey = 'codMedico';

    protected $fillable = ['codMedico', 'nome', 'cpf', 'crm', 'telefone', 'fk_medico_codLogin']; // Campos que podem ser atribuídos em massa

    public function usuario(){
        return $this->belongsTo(Usuario::class, 'fk_medico_codLogin');
    }
    
    use HasFactory;
}
