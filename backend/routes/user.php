<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\ContractController;
use App\Http\Controllers\SubscriptionController;





// Just for testing 
Route::prefix('contracts')->group(function () {
    Route::get('/', [ContractController::class, 'getAllContract']); // Fetch all contracts
    Route::get('/{contractId}', [ContractController::class, 'getOneContract']); // Fetch a single contract by ID
    Route::post('/', [ContractController::class, 'storeContract']); // Create a new contract
    Route::put('/{contractId}', [ContractController::class, 'updateContract']); // Update a contract
    Route::delete('/{contractId}', [ContractController::class, 'deleteContract']); // Delete a contract 
});


Route::apiResource('subscriptions', SubscriptionController::class);
