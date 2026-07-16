<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class FeaturesController extends Controller
{
    public function index(): JsonResponse
    {
        $features = Feature::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($feature) {
                if (isset($feature->icon)) {
                    $feature->icon_url = asset('storage/' . $feature->icon);
                }
                return $feature;
            });

        return response()->json(['success' => true, 'data' => $features]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:2048',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('features', 'public');
        }

        $feature = Feature::create($validated);
        return response()->json(['success' => true, 'data' => $feature], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $feature = Feature::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:2048',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('icon')) {
            if ($feature->icon) Storage::delete('public/' . $feature->icon);
            $feature->icon = $request->file('icon')->store('features', 'public');
        }

        $feature->update($request->except(['icon']));
        return response()->json(['success' => true, 'data' => $feature]);
    }

    public function destroy($id): JsonResponse
    {
        $feature = Feature::findOrFail($id);
        if ($feature->icon) Storage::delete('public/' . $feature->icon);
        $feature->delete();

        return response()->json(['success' => true, 'message' => 'Feature deleted']);
    }
}
