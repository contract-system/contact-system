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
    public function getExpiredContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin'])->where('status', 'Expired')->get()]);
    }
    public function getPendingContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin'])->where('status', 'Pending')->get()]);
    }
    public function getApprovedContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin'])->where('status', 'Approved')->get()]);
    }
}
