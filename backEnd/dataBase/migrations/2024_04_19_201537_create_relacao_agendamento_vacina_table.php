<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('relacao_agendamento_vacina', function (Blueprint $table) {
            $table->unsignedInteger('fk_paciente_codPaciente');
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->string('nome', 100)->nullable(false);

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_paciente_codPaciente')->references('codPaciente')->on('Paciente');

            $table->primary(['fk_paciente_codPaciente', 'fk_vacina_codVacina']);

            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_agendamento_vacina');
    }
};
