<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index(): JsonResponse
    {
        $portfolios = Portfolio::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json(['success' => true, 'data' => $portfolios]);
    }

    public function store(Request $request): JsonResponse
{
    // 1. Validation
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'category' => 'required|string|max:100',
        'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        'project_url' => 'nullable|url',
        'sort_order' => 'integer',
        'is_active' => 'boolean'
    ]);

    // 2. File Upload
    if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('portfolios', 'public');
    }

    $portfolio = Portfolio::create($validated);

    return response()->json([
        'success' => true,
        'message' => 'Portfolio created successfully',
        'data' => $portfolio
    ], 201);
}

    public function show($id): JsonResponse
    {
        $portfolio = Portfolio::findOrFail($id);
        return response()->json(['success' => true, 'data' => $portfolio]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $portfolio = Portfolio::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'category' => 'sometimes|string|max:100',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'project_url' => 'nullable|url',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            if ($portfolio->image) Storage::delete('public/' . $portfolio->image);
            $portfolio->image = $request->file('image')->store('portfolios', 'public');
        }

        $portfolio->update($request->except(['image']));

        return response()->json(['success' => true, 'message' => 'Portfolio updated', 'data' => $portfolio]);
    }

    public function destroy($id): JsonResponse
    {
        $portfolio = Portfolio::findOrFail($id);
        if ($portfolio->image) Storage::delete('public/' . $portfolio->image);
        $portfolio->delete();

        return response()->json(['success' => true, 'message' => 'Portfolio deleted']);
    }
}
