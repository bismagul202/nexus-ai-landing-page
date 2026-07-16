<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class HandleCorsRequests
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Add CORS headers to all responses
        if ($response instanceof BinaryFileResponse) {
            $response->headers->set('Access-Control-Allow-Origin', '*');
            $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
            $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
            $response->headers->set('Access-Control-Max-Age', '3600');
        } else {
            $response->header('Access-Control-Allow-Origin', '*');
            $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
            $response->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
            $response->header('Access-Control-Max-Age', '3600');
        }

        // Handle preflight requests
        if ($request->getMethod() === 'OPTIONS') {
            if ($response instanceof BinaryFileResponse) {
                $response->setStatusCode(200);
            } else {
                $response->setStatusCode(200);
            }
        }

        return $response;
    }
}
