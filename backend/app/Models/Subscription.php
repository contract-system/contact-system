<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'speed',
        'details',
        'price',
    ];

    public function features()
    {
        return $this->hasMany(SubscriptionFeature::class);
    }
    public function contract()
    {
        return $this->HasOne(contract::class, 'subscriptions_id');
    }
}
