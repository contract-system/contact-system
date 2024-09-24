<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\User\ContractController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    return response()->json(['message' => 'API is working!']);
});

Route::post('/register', [UserController::class, 'register']);



Route::post('login', [UserController::class, 'login']); // Login route



// just for test 
Route::prefix('contracts')->group(function () {
    Route::get('/', [ContractController::class, 'getAllContract']); // Fetch all contracts
    Route::get('/{contractId}', [ContractController::class, 'getOneContract']); // Fetch a single contract by ID
    Route::post('/', [ContractController::class, 'storeContract']); // Create a new contract
    Route::put('/{contractId}', [ContractController::class, 'updateContract']); // Update a contract
    Route::delete('/{contractId}', [ContractController::class, 'deleteContract']); // Delete a contract
});
