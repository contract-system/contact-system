<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Contract;
use App\Models\Subscription;
use Carbon\Carbon;
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
            'signing_date' => 'required',
            'contract_expiration_date' => 'required|date|after:signing_date',
            // 'subscription_expiration_date' => 'nullable|date|after:signing_date',
            'total_cost' => 'required|numeric|min:0',
            'admin_id' => 'nullable|numeric|exists:users,id',  // يمكن أن يكون null
            'status' => 'nullable|in:Pending,Approved,Expired',  // يمكن أن يكون null
            'user_id' => 'nullable|exists:users,id',  // تغيير إلى nullable
            'subscriptions_id' => 'nullable|exists:subscriptions,id',  // تغيير إلى nullable
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
            // 'subscription_expiration_date' => 'nullable|date|after:signing_date',
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
        $contracts = Contract::with(['subscriptions'])->where('user_id', $id)
            ->where('status', 'Approved')
            ->get();

        if ($contracts->isNotEmpty()) {
            foreach ($contracts as $contract) {
                $expirationDate = Carbon::parse($contract->contract_expiration_date);
                // Calculate remaining days
                $remainingDays = Carbon::now()->lt($expirationDate)
                    ? Carbon::now()->diffInMonths($expirationDate) + 1
                    : 0;

                $contract->remaining_days = $remainingDays;
            }
            return response()->json([
                "contracts" => $contracts
            ], 200);
        }

        return response()->json([
            "message" => "No approved contracts found!",
            "contracts" => [] // Return an empty array if no contracts are found
        ], 404); // Use 404 for not found
    }
}
