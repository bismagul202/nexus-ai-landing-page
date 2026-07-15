<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\JsonResponse;

class AboutController extends Controller
{
    public function index(): JsonResponse
    {
        $about = About::first();

        if ($about && $about->image) {
            $about->image_url = asset('storage/' . $about->image);
        }

        return response()->json([
            'data' => $about
        ]);
    }
}
