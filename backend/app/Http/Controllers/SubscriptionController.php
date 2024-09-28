<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class SubscriptionController extends Controller
{
    // get all subs type of packages
    public function getAllPackages()
    {
        try {
            // Eager load features for each subscription
            $subscriptions = Subscription::with('features')->where('type', '=', 'package')->get();

            // Transform the response to include only necessary data
            $formattedSubscriptions = $subscriptions->map(function ($subscription) {
                return [
                    'id' => $subscription->id,
                    'name' => $subscription->name,
                    'speed' => $subscription->speed,
                    'details' => $subscription->details,
                    'price' => (int)$subscription->price,
                    'internet' => $subscription->internet,
                    'TV' => $subscription->TV,
                    'phone' => $subscription->phone,
                    'features_count' => $subscription->features->count(),
                    'features' => $subscription->features->map(function ($feature) {
                        return [
                            'id' => $feature->id,
                            'feature_name' => $feature->feature_name,
                        ];
                    }),
                ];
            });

            return response()->json($formattedSubscriptions, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching subscriptions'], 500);
        }
    }
    // get all subs type of subscription
    public function getAllSubs()
    {
        try {
            // Eager load features for each subscription
            $subscriptions = Subscription::with('features')->where('type', '=', 'subscription')->get();

            // Transform the response to include only necessary data
            $formattedSubscriptions = $subscriptions->map(function ($subscription) {
                return [
                    'id' => $subscription->id,
                    'name' => $subscription->name,
                    'speed' => $subscription->speed,
                    'details' => $subscription->details,
                    'price' => (int)$subscription->price,
                    'internet' => $subscription->internet,
                    'TV' => $subscription->TV,
                    'phone' => $subscription->phone,
                    'features_count' => $subscription->features->count(),
                    'features' => $subscription->features->map(function ($feature) {
                        return [
                            'id' => $feature->id,
                            'feature_name' => $feature->feature_name,
                        ];
                    }),
                ];
            });

            return response()->json($formattedSubscriptions, 200);
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
            return response()->json([
                'error' => 'Failed to create subscription',
                'message' => $e->getMessage()
            ], 500);
        }
    }



    // Show a specific subscription
    public function getOneSub(string $id)
    {
        try {
            $subscription = Subscription::findOrFail($id);
            $subWithFeatures = Subscription::with('features')->first();
            return response()->json($subWithFeatures, 200);
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
