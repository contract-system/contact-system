<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContractController extends Controller
{
    // Get all contracts for a user
    public function getAllContract()
    {
        // $contracts = Contract::with('subscriptions')->get();
        $featuresOfSubscribtion = Subscription::with(['features', 'contract'])->get();
        if ($featuresOfSubscribtion->isNotEmpty()) {
            return response()->json([
                "message" => "Contracts fetched successfully",
                // "contracts" => $contracts,
                "features of subscribtion" => $featuresOfSubscribtion,
            ]);
        } else {
            return response()->json([
                "error" => "Contracts not found",
            ], 404);
        }
    }

    // Get one contract by ID
    public function getOneContract(string $contractId)
    {
        $contract = Contract::where('id', $contractId)
            ->first();

        if ($contract) {
            return response()->json([
                "message" => "Contract fetched successfully!",
                "contract" => $contract,

            ]);
        } else {
            return response()->json([
                "error" => "Contract not found",
            ], 404);
        }
    }

    // Store a new contract
    public function storeContract(Request $request)
    {

        $contractData = $request->validate([
            'contract_name' => 'required|string|max:255',
            'signing_date' => 'required|date',
            'contract_expiration_date' => 'required|date|after:signing_date',
            'subscription_expiration_date' => 'nullable|date|after:signing_date',
            'total_cost' => 'required|numeric|min:0',
            'admin_name' => 'nullable|string|max:255',
            'admin_id' => 'nullable|numeric',
            'status' => 'required|in:Pending,Approved,Expired',
            'user_id' => 'required|exists:users,id',
            'subscriptions_id' => 'required|exists:subscriptions,id',
        ]);

        $createContract = Contract::create($contractData);
        return response()->json([
            'message' => "Contract created successfully",
            'contract_name' => $createContract->contract_name,
            'signing_date' => $createContract->signing_date,
        ]);
    }


    // Update an existing contract
    public function updateContract(Request $request, string $contractId)
    {
        $contractData = $request->validate([
            'contract_name' => 'required|string|max:255',
            'signing_date' => 'required|date',
            'contract_expiration_date' => 'required|date|after:signing_date',
            'subscription_expiration_date' => 'nullable|date|after:signing_date',
            'total_cost' => 'required|numeric|min:0',
            'admin_name' => 'nullable|string|max:255',
            'admin_id' => 'nullable|numeric',
            'status' => 'required|in:Pending,Approved,Expired',
            'subscriptions' => 'required|in:Pending,Accept,Expired',
            'user_id' => 'required|exists:users,id',
            'subscriptions_id' => 'required|exists:subscriptions,id',
        ]);



        $contract = Contract::findOrFail($contractId);
        $contract->update($contractData);

        return response()->json([
            "message" => "Contract updated successfully!",
            "contract" => $contract
        ], 200);
    }


    // Delete a contract by ID
    public function deleteContract(string $id)
    {
        $contract = Contract::findOrFail($id);

        $contract->delete();

        return response()->json([
            "message" => "Contract deleted successfully!",
        ], 200);
    }

    // get contract  that user has

    public function getUserContract(string $id)
    {
        // $userID = Auth::user()->id; // change the id
        $contract = Contract::where('user_id', $id)
            ->get();
        if ($contract) {
            return response()->json([
                "contract" => $contract
            ], 200);
        } else {
            return response()->json([
                "message" => "Contract not found!",
                "contract" => $contract
            ], 200);
        }
    }
}
