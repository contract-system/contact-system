<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SimCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'sim_number', 'phone_number', 'data_limit', 'activation_date', 'expiration_date', 'status', 'user_id'
    ];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

