<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('sim_cards', function (Blueprint $table) {
            $table->id();
            $table->string('sim_number')->unique();
            $table->string('phone_number')->unique();
            $table->decimal('data_limit', 10, 2);
            $table->date('activation_date');
            $table->date('expiration_date');
            $table->enum('status', ['Active', 'Inactive', 'Expired'])->default('Active');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade'); // Assigned user
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sim_cards');
    }

};
