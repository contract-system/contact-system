<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'full_name', 'department', 'employee_number', 'email', 'password', 'role_id'
    ];

    // Each user belongs to one role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
