<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Contract;

class AdminController extends Controller
{
    public function getAllContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin'])->get()]);
    }
}
