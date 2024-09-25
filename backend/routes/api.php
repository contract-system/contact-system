<?php

use App\Http\Controllers\Api\UserController;


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




require __DIR__ . '/admin.php';
require __DIR__ . '/user.php';
