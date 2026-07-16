<?php

use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\FeaturesController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\TeamController;
use Illuminate\Support\Facades\Route;

Route::apiResource('heroes', HeroController::class);
Route::apiResource('about', AboutController::class);
Route::apiResource('services', ServicesController::class);
Route::apiResource('portfolios', PortfolioController::class);
Route::apiResource('features', FeaturesController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('team', TeamController::class);
