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
        $contract->update(["status" => $request->status, "admin_id" => $request->admin_id]);
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
    public function storeSubscription(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'speed' => 'required|string|max:255',
            'details' => 'required|string',
            'price' => 'required|numeric',
            'internet' => 'required|boolean',
            'TV' => 'required|boolean',
            'phone' => 'required|boolean',
            'type' => 'required|in:Subscription,Package',
        ]);

        $subscription = Subscription::create($validatedData);

        return response()->json([
            'message' => 'Subscription created successfully',
            'subscription' => $subscription
        ], 201);
    }
    
}
