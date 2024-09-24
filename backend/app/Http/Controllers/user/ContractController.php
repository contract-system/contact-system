<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;

use App\Models\Contract;
use App\Models\User;
use Illuminate\Http\Request;

class ContractController extends Controller
{
    function getAllContract()
    {
        $id = "";
        $contracts = Contract::where('user_id', $id);
        if ($contracts)
            return  response()->json([
                "message" => "contracts fetched successfully",
                "contracts" => $contracts,
            ]);
        else
            return  response()->json([
                "Error" => "contracts not found",

            ]);
    }
    function getOneContract(string $contractId)
    {
        $userId = "";
        $contract = Contract::where('id', $contractId)->where('user_id', $userId);
        if ($contract)
            return  response()->json([
                "message" => "contracts fetched successfully!",
                "contract" => $contract,
            ]);
        else
            return  response()->json([
                "error" => "contracts not found",

            ]);
    }

    function storeContract(Request $request)
    {
        $contractData = $request->validate([
            'contract_name' => 'required|string|max:255',
            'signing_date' => 'required|date',
            'expiration_date' => 'required|date|after:signing_date',
            'total_cost' => 'required|numeric|min:0',
            'employee_name' => 'nullable|string|max:255',
            'employee_number' => 'nullable|string|max:255',
            'status' => 'required|in:Pending,Approved,Expired',
            'user_id' => 'required|exists:users,id', // Assuming it relates to the users table
            'sim_id' => 'required|exists:sims,id', // Assuming it relates to a sim card or related table
        ]);
        $newContract = Contract::create($contractData);
        if ($newContract) {
            return  response()->json([
                "message" => "Contract created successfully!",
            ]);
        } else {
            return  response()->json([
                "error" => "somthing wronge while creating contract please try again ",
            ]);
        }
    }
    function updateContract(Request $request, string $contractId)
    {
        $contractData = $request->validate([
            'contract_name' => 'required|string|max:255',
            'signing_date' => 'required|date',
            'expiration_date' => 'required|date|after:signing_date',
            'total_cost' => 'required|numeric|min:0',
            'employee_name' => 'nullable|string|max:255',
            'employee_number' => 'nullable|string|max:255',
            'status' => 'required|in:Pending,Approved,Expired',
            'user_id' => 'required|exists:users,id', // Assuming it relates to the users table
            'sim_id' => 'required|exists:sims,id', // Assuming it relates to a sim card or related table
        ]);
        $newContract = Contract::where("id", $contractId)->update($contractData);
        if ($newContract) {
            return  response()->json([
                "message" => "Contract created successfully!",
            ]);
        } else {
            return  response()->json([
                "error" => "somthing wrong while creating contract please try again ",
            ]);
        }
        function deleteContract(string $id)
        {
            $contract = Contract::findOrfail($id);
            if ($contract) {
                $contract->delete();
                return  response()->json([
                    "message" => "Contract Deleted successfully!",
                ]);
            } else {
                return  response()->json([
                    "error" => "Contract not found",
                ]);
            }
        }
    }
}
