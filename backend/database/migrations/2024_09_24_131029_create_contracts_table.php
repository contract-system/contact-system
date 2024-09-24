<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('contracts', function (Blueprint $table) {
        $table->id();
        $table->string('contract_name');
        $table->date('signing_date');
        $table->date('expiration_date');
        $table->decimal('total_cost', 10, 2);
        $table->string('employee_name')->nullable();
        $table->string('employee_number')->nullable();
        $table->enum('status', ['Pending', 'Approved', 'Expired'])->default('Pending');
        $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
        $table->foreignId('sim_id')->constrained('sim_cards');
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('contracts');
}

};
