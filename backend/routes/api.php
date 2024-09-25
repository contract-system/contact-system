<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\user\ContractController;
use App\Models\Contract;
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


// Logout route requires authentication via Sanctum token
Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);

//<---------------------- contract routes ------------------------>
Route::get('getAllContracts', [ContractController::class, 'getAllContract'])->name("getAllContracts"); // Login route
Route::get('getOneContracts/{id}', [ContractController::class, 'getOneContract'])->name("getOneContracts"); // Login route
Route::post('storeContract', [ContractController::class, 'storeContract'])->name("storeContract");
Route::put('updateContract/{id}', [ContractController::class, 'updateContract'])->name("updateContract");
Route::delete('deleteContract/{id}', [ContractController::class, 'deleteContract'])->name("deleteContract");


require __DIR__ . '/admin.php';
require __DIR__ . '/user.php';
