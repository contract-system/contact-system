<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'subscription_id',
        'feature_name',
        'description',
    ];

    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
