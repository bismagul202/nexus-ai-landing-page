<?php

use App\Http\Controllers\Api\HeroController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\FeaturesController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\TeamController;

Route::get('/heroes', [HeroController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/portfolios', [PortfolioController::class, 'index']);
Route::get('/features', [FeaturesController::class, 'index']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/team', [TeamController::class, 'index']);
