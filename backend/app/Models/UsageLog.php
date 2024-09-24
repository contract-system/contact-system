<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsageLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'sim_card_id', 'data_used', 'usage_date'
    ];

    // Each usage log belongs to a SIM card
    public function simCard()
    {
        return $this->belongsTo(SimCard::class);
    }
}
