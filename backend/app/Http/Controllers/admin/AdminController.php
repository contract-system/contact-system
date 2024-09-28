<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getAllContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin', 'subscriptions'])->get()]);
    }
    public function getExpiredContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin', 'subscriptions'])->where('status', 'Expired')->get()]);
    }
    public function getPendingContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin', 'subscriptions'])->where('status', 'Pending')->get()]);
    }
    public function getApprovedContracts()
    {
        return response()->json(["contracts" => Contract::with(['user', 'admin', 'subscriptions'])->where('status', 'Approved')->get()]);
    }
    public function changeContractStatus(Request $request, string $id)
    {
        $contract = Contract::find($id);
        $contract->update(["status" => $request->status]);
        return response()->json(["message" => "Status Updated"]);
    }
    public function deleteContract(string $id)
    {
        $contract = Contract::find($id);
        $contract->delete();
        return response()->json(["message" => "Contract Deleted"]);
    }
    public function getAllSubscriptions()
    {
        return response()->json(["subscriptions" => Subscription::all()]);
    }
    public function getAllUsers()
    {
        return response()->json(["users" => User::all()]);
    }
    
}
