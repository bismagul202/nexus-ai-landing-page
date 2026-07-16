<?php

use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\FeaturesController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Api\StorageFileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\ContactMessageController;

Route::apiResource('heroes', HeroController::class);
Route::apiResource('about', AboutController::class);
Route::apiResource('services', ServicesController::class);
Route::apiResource('portfolios', PortfolioController::class);
Route::apiResource('features', FeaturesController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('team', TeamController::class);
Route::apiResource('faqs', FaqController::class);

Route::apiResource('contact-messages', ContactMessageController::class);
// File serving route
Route::get('/files/{path}', [StorageFileController::class, 'serve'])
    ->where('path', '.*');
