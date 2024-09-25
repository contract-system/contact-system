<?php
namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class SubscriptionController extends Controller
{
    // Get all subscriptions
    public function index()
    {
        try {
            $subscriptions = Subscription::all();
            return response()->json($subscriptions, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching subscriptions'], 500);
        }
    }

    // Store a new subscription
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'speed' => 'required|string|max:255',
                'details' => 'nullable|string',  // جعل details اختياري
                'price' => 'required|numeric',
            ]);
    
           
            $subscription = Subscription::create($validatedData);
            return response()->json($subscription, 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            \Log::error('Error creating subscription: ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to create subscription',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    

    // Show a specific subscription
    public function show($id)
    {
        try {
            $subscription = Subscription::findOrFail($id);
            return response()->json($subscription, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Subscription not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching subscription'], 500);
        }
    }

    // Update a subscription
    public function update(Request $request, $id)
    {
        try {
            $subscription = Subscription::findOrFail($id);

            $validatedData = $request->validate([
                'name' => 'sometimes|required|string|max:255',
                'speed' => 'sometimes|required|string|max:255',
                'details' => 'sometimes|required|string',
                'price' => 'sometimes|required|numeric',
            ]);

            $subscription->update($validatedData);
            return response()->json($subscription, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Subscription not found'], 404);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update subscription'], 500);
        }
    }

    // Delete a subscription
    public function destroy($id)
    {
        try {
            $subscription = Subscription::findOrFail($id);
            $subscription->delete();
            return response()->json(['message' => 'Subscription deleted successfully'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Subscription not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete subscription'], 500);
        }
    }
}
