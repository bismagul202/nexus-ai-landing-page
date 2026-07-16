<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class StorageFileController extends Controller
{
    public function serve($path)
    {
        $safePath = str_replace('..', '', $path);

        $fullPath = storage_path("app/public/{$safePath}");

        if (!File::exists($fullPath)) {
            return response()->json(['error' => 'File not found'], 404);
        }

        // Get the MIME type
        $mimeType = File::mimeType($fullPath);

        return response()->file($fullPath, [
            'Content-Type' => $mimeType,
        ]);
    }
}
