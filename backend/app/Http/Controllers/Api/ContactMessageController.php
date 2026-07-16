<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContactMessageController extends Controller
{
    public function index(): JsonResponse
    {
        $messages = ContactMessage::latest()->get();
        return response()->json(['success' => true, 'data' => $messages]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $message = ContactMessage::create($validated);
        return response()->json(['success' => true, 'data' => $message], 201);
    }

    public function update(Request $request, $id)
{
    $message = ContactMessage::findOrFail($id);

    // Agar aap sirf 'is_read' status update karna chahti hain:
    $message->update($request->only(['is_read']));

    return response()->json([
        'success' => true,
        'message' => 'Message updated successfully',
        'data' => $message
    ]);
}

    public function destroy($id): JsonResponse
    {
        $message = ContactMessage::findOrFail($id);
        $message->delete();

        return response()->json(['success' => true, 'message' => 'Message deleted successfully']);
    }
}
