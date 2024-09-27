<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\SubscriptionController;


// -----------------------------
// Profile routes  without middleware
Route::middleware('auth:sanctum')->group(function () {});
// Get all users
Route::get('/users', [UserController::class, 'index']);

// Get a single user by ID
Route::get('/users/{id}', [UserController::class, 'show']);

// Create a new user
Route::post('/users', [UserController::class, 'store']);

// Update an existing user
Route::put('/users/{id}', [UserController::class, 'update']);

// Delete a user
Route::delete('/users/{id}', [UserController::class, 'destroy']);




// -----------------------------------
// Just for testing
// Route::prefix('contracts')->group(function () {
//     Route::get('/', [ContractController::class, 'getAllContract']); // Fetch all contracts
//     Route::get('/{contractId}', [ContractController::class, 'getOneContract']); // Fetch a single contract by ID
//     Route::post('/', [ContractController::class, 'storeContract']); // Create a new contract
//     Route::put('/{contractId}', [ContractController::class, 'updateContract']); // Update a contract
//     Route::delete('/{contractId}', [ContractController::class, 'deleteContract']); // Delete a contract
// });


Route::apiResource('subscriptions', SubscriptionController::class);