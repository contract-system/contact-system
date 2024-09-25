<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscriptions extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'speed', 'speed', 'price',];
        public function subscriptions()
        {
            return $this->belongsTo(Subscriptions::class);
        }

    }

