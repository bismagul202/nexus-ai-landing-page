<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hero; 
use App\Http\Resources\HeroResource;

class HeroController extends Controller
{
    public function index()
    {
        $heroes = Hero::where('is_active', true)->get();
        return HeroResource::collection($heroes);
    }
}
