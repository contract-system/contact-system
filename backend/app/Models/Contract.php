<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = [
        'contract_name',
        'signing_date',
        'contract_expiration_date',
        'subscription_expiration_date',
        'total_cost',
        'admin_id',
        'user_id',
        'subscriptions_id',
        'status',
        'subscriptions',
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
    public function subscriptions()
    {
        return $this->belongsTo(Subscription::class);
    }
}
