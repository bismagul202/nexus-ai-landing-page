<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::where('is_active', 1)
            ->latest()
            ->get()
            ->map(function ($testimonial) {
                $testimonial->client_avatar = $testimonial->client_avatar
                    ? asset('storage/' . $testimonial->client_avatar)
                    : null;
                return $testimonial;
            });

        return response()->json([
            'success' => true,
            'data' => $testimonials
        ]);
    }
}
