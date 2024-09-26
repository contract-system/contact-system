<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('subscription_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subscription_id')->constrained('subscriptions')->onDelete('cascade');
            $table->string('feature_name'); // Name of the feature
            // $table->text('description')->nullable(); // Optional description of the feature
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('subscription_features');
    }
};
