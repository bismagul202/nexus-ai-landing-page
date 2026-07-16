<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::where('is_active', 1)
            ->latest()
            ->get()
            ->map(function ($testimonial) {
                $testimonial->client_avatar = $testimonial->client_avatar
                    ? asset('api/files/' . $testimonial->client_avatar)
                    : null;
                return $testimonial;
            });

        return response()->json(['success' => true, 'data' => $testimonials]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_designation' => 'required|string|max:255',
            'client_company' => 'required|string|max:255',
            'client_avatar' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'review' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('client_avatar')) {

            $validated['client_avatar'] = $request->file('client_avatar')->store('testimonials', 'public');
        }

        $testimonial = Testimonial::create($validated);
        return response()->json(['success' => true, 'data' => $testimonial], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $testimonial = Testimonial::findOrFail($id);

        $request->validate([
            'client_name' => 'sometimes|string|max:255',
            'client_designation' => 'sometimes|string|max:255',
            'client_company' => 'sometimes|string|max:255',
            'client_avatar' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'review' => 'sometimes|string',
            'rating' => 'sometimes|integer|min:1|max:5',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('client_avatar')) {
            if ($testimonial->client_avatar) Storage::delete('public/' . $testimonial->client_avatar);
            $testimonial->client_avatar = $request->file('client_avatar')->store('testimonials', 'public');
        }

        $testimonial->update($request->except(['client_avatar']));
        return response()->json(['success' => true, 'data' => $testimonial]);
    }

    public function destroy($id): JsonResponse
    {
        $testimonial = Testimonial::findOrFail($id);
        if ($testimonial->client_avatar) Storage::delete('public/' . $testimonial->client_avatar);
        $testimonial->delete();

        return response()->json(['success' => true, 'message' => 'Testimonial deleted']);
    }
}
