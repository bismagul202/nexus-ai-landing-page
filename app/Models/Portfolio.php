<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
protected $fillable = [
        'client_name',
        'client_designation',
        'client_company',
        'client_avatar',
        'review',
        'rating',
        'is_active'
    ];

    }
