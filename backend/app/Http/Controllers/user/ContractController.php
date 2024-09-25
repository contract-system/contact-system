<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use Illuminate\Http\Request;

class ContractController extends Controller
{
    // Get all contracts for a user
    public function getAllContract()
    {
        $contracts = Contract::all();

        if ($contracts->isNotEmpty()) {
            return response()->json([
                "message" => "Contracts fetched successfully",
                "contracts" => $contracts,
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
            'subscriptions' => 'required|in:Pending,Approved,Expired',
            'user_id' => 'required|exists:users,id',
            'subscriptions_id' => 'required|exists:subscriptions,id',
        ]);

        // there is an error when updating the subscriptions
        //'subscriptions' => 'required|in:Pending,Approved,Expired',
        //http://127.0.0.1:8000/api/updateContract/1 --> this is the api
        // dd($contractData['subscriptions']);

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
}
