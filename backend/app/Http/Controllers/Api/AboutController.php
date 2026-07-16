<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{
    // List all (or get first record)
    public function index(): JsonResponse
    {
        $about = About::all();

        // Add image_url to each item
        $about->transform(function ($item) {
            if ($item->image) {
                $item->image_url = asset('storage/' . $item->image);
            }
            return $item;
        });

        return response()->json(['data' => $about]);
    }

    // Create a new record
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'mission' => 'required|string',
            'vision' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048'
        ]);

        $about = new About();
        $this->handleImageUpload($request, $about);

        $about->title = $request->title;
        $about->body = $request->body;
        $about->mission = $request->mission;
        $about->vision = $request->vision;
        $about->save();

        return response()->json(['message' => 'Created successfully', 'data' => $about], 201);
    }

    // Show specific record
    public function show($id): JsonResponse
    {
        $about = About::findOrFail($id);
        if ($about->image) $about->image_url = asset('storage/' . $about->image);
        return response()->json(['data' => $about]);
    }

    // Update existing record
    public function update(Request $request, $id): JsonResponse
    {
        $about = About::findOrFail($id);

        $this->handleImageUpload($request, $about);

        $about->update($request->only(['title', 'body', 'mission', 'vision']));

        return response()->json(['message' => 'Updated successfully', 'data' => $about]);
    }

    // Delete record
    public function destroy($id): JsonResponse
    {
        $about = About::findOrFail($id);
        if ($about->image) Storage::delete('public/' . $about->image);
        $about->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }

    // Helper for image upload
    private function handleImageUpload(Request $request, About $about)
    {
        if ($request->hasFile('image')) {
            if ($about->image) Storage::delete('public/' . $about->image);
            $about->image = $request->file('image')->store('about', 'public');
        }
    }
}
