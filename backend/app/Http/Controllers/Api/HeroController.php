<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hero;
use App\Http\Resources\HeroResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HeroController extends Controller
{
    public function index()
    {
        return HeroResource::collection(Hero::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'subtitle' => 'required|string',
            'cta_text' => 'required|string',
            'cta_url' => 'required|string',
            'background_image' => 'required|image',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('background_image')) {
            $validated['background_image'] = $request->file('background_image')->store('heroes', 'public');
        }

        $hero = Hero::create($validated);
        return new HeroResource($hero);
    }

    public function show($id)
    {
        return new HeroResource(Hero::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $hero = Hero::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string',
            'subtitle' => 'sometimes|string',
            'cta_text' => 'sometimes|string',
            'cta_url' => 'sometimes|string',
            'background_image' => 'nullable|image',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('background_image')) {
            if ($hero->background_image) Storage::delete('public/' . $hero->background_image);
            $hero->background_image = $request->file('background_image')->store('heroes', 'public');
        }

        $hero->update($request->except(['background_image']));
        return new HeroResource($hero);
    }

    public function destroy($id)
    {
        $hero = Hero::findOrFail($id);
        if ($hero->background_image) Storage::delete('public/' . $hero->background_image);
        $hero->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
