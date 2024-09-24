<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = [
        'contract_name', 'signing_date', 'expiration_date', 'total_cost',
        'legal_officer_name', 'legal_officer_employee_number', 'status', 'user_id','sim_id'
    ];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
