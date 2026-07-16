<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;

class TeamController extends Controller
{
    public function index(): JsonResponse
    {
        $team = TeamMember::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($member) {
                // Image URL manually format kar rahe hain
                $member->image_url = $member->image ? asset('storage/' . $member->image) : null;
                return $member;
            });

        return response()->json(['success' => true, 'data' => $team]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'linkedin_url' => 'nullable|url',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('team', 'public');
        }

        $member = TeamMember::create($validated);
        return response()->json(['success' => true, 'data' => $member], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $member = TeamMember::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'designation' => 'sometimes|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'linkedin_url' => 'nullable|url',
            'sort_order' => 'integer',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            if ($member->image) Storage::delete('public/' . $member->image);
            $member->image = $request->file('image')->store('team', 'public');
        }

        $member->update($request->except(['image']));
        return response()->json(['success' => true, 'data' => $member]);
    }

    public function destroy($id): JsonResponse
    {
        $member = TeamMember::findOrFail($id);
        if ($member->image) Storage::delete('public/' . $member->image);
        $member->delete();

        return response()->json(['success' => true, 'message' => 'Team member deleted']);
    }
}
