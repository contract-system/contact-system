<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('usage_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sim_card_id')->constrained('sim_cards')->onDelete('cascade'); // Reference to SIM card
            $table->decimal('data_used', 10, 2); // Data used in GB
            $table->date('usage_date'); // Date of usage
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('usage_logs');
    }

};
