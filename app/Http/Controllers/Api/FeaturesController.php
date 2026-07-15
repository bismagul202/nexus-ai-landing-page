<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\JsonResponse;

class FeaturesController extends Controller
{
    public function index(): JsonResponse
    {
        $features = Feature::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json([
            'data' => $features
        ]);
    }
}
