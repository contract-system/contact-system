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
            $table->bigInteger('admin_id')->unsigned()->nullable()->default(null);
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('subscriptions_id')->unsigned();
            $table->enum('status', ['Pending', 'Approved', 'Expired'])->default('Pending');
            $table->timestamps();
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('subscriptions_id')->references('id')->on('subscriptions')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('contracts');
    }
};
