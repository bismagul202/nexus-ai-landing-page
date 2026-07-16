<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class FaqController extends Controller
{
    public function index(): JsonResponse
    {
        $faqs = Faq::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json(['success' => true, 'data' => $faqs]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $faq = Faq::create($validated);
        return response()->json(['success' => true, 'data' => $faq], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $faq = Faq::findOrFail($id);

        $request->validate([
            'question' => 'sometimes|string|max:255',
            'answer' => 'sometimes|string',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        $faq->update($request->all());
        return response()->json(['success' => true, 'data' => $faq]);
    }

    public function destroy($id): JsonResponse
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();

        return response()->json(['success' => true, 'message' => 'FAQ deleted']);
    }
}
