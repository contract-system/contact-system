<?php

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\user\ContractController;
use App\Models\Contract;
use App\Models\Subscription;
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
//ufjkb.


Route::post('login', [UserController::class, 'login']); // Login route


// Logout route requires authentication via Sanctum token
Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);

//<---------------------- contract routes ------------------------>
Route::get('getAllContracts', [ContractController::class, 'getAllContract'])->name("getAllContracts"); // Login route
Route::get('getOneContracts/{id}', [ContractController::class, 'getOneContract'])->name("getOneContracts"); // Login route
Route::post('storeContract', [ContractController::class, 'storeContract'])->name("storeContract");
Route::put('updateContract/{id}', [ContractController::class, 'updateContract'])->name("updateContract");
Route::delete('deleteContract/{id}', [ContractController::class, 'deleteContract'])->name("deleteContract");
Route::get('getUserContract/{id}', [ContractController::class, 'getUserContract'])->name("getUserContract"); // Login route

//<---------------------- contract routes ------------------------>
Route::get('getAllPackages', [SubscriptionController::class, 'getAllPackages'])->name("getAllPackages"); // Login route
Route::get('getAllSubs', [SubscriptionController::class, 'getAllSubs'])->name("getAllSubs"); // Login route
Route::get('getOneSub/{id}', [SubscriptionController::class, 'getOneSub'])->name("getOneSub"); // Login route
// Route::apiResource('subscriptions', SubscriptionController::class);

//Admin Routes
Route::get('All', [AdminController::class, 'getAllContracts']);
Route::get('Expired', [AdminController::class, 'getExpiredContracts']);
Route::get('Approved', [AdminController::class, 'getApprovedContracts']);
Route::get('Pending', [AdminController::class, 'getPendingContracts']);
Route::post('Status/{id}', [AdminController::class, 'changeContractStatus']);
Route::delete('Contract/{id}', [AdminController::class, 'deleteContract']);
Route::get('Subscriptions', [AdminController::class, 'getAllSubscriptions']);
Route::get('Users', [AdminController::class, 'getAllUsers']);
Route::post('Subscriptions', [AdminController::class, 'storeSubscription']);


require __DIR__ . '/admin.php';
require __DIR__ . '/user.php';
