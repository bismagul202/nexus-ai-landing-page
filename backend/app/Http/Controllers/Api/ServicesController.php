<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class ServicesController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($service) {
                // Icon image ka URL generate kar rahe hain
                $service->icon_url = $service->icon ? asset('storage/' . $service->icon) : null;
                return $service;
            });

        return response()->json(['success' => true, 'data' => $services]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'required|image|mimes:jpeg,png,jpg,webp,svg|max:2048',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('icon')) {
            $validated['icon'] = $request->file('icon')->store('services', 'public');
        }

        $service = Service::create($validated);
        return response()->json(['success' => true, 'data' => $service], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $service = Service::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:2048',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('icon')) {
            if ($service->icon) Storage::delete('public/' . $service->icon);
            $service->icon = $request->file('icon')->store('services', 'public');
        }

        $service->update($request->except(['icon']));
        return response()->json(['success' => true, 'data' => $service]);
    }

    public function destroy($id): JsonResponse
    {
        $service = Service::findOrFail($id);
        if ($service->icon) Storage::delete('public/' . $service->icon);
        $service->delete();

        return response()->json(['success' => true, 'message' => 'Service deleted']);
    }
}
