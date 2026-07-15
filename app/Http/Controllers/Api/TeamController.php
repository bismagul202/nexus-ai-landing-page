<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class TeamController extends Controller
{
    public function index()
    {
        $team = DB::table('team_members')
                  ->where('is_active', 1)
                  ->orderBy('sort_order', 'asc')
                  ->get();

        $team = $team->map(function ($member) {
            $member->image = url('storage/' . $member->image);
            return $member;
        });

        return response()->json([
            'success' => true,
            'data' => $team
        ]);
    }
}
