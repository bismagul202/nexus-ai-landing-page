<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\JsonResponse;

class ServicesController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::where('is_active', 1)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json([
            'data' => $services
        ]);
    }
}
