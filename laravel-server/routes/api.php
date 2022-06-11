<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\itemcontroller;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['middleware' => 'api'], function($router) {
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
        Route::post('/logout', [JWTController::class, 'logout']);
        Route::post('/refresh', [JWTController::class, 'refresh']);
        Route::post('/profile', [JWTController::class, 'profile']);
        
        Route::get('/all_items',[itemcontroller::class,'getAllItems']);
        Route::get('/all_category', [itemcontroller::class, 'getAllCategories']);

        Route::post('/add_item', [itemcontroller::class, 'addItem']);
        Route::post('/add_category', [itemcontroller::class, 'addCategory']);

        Route::post('/add_like',[itemcontroller::class, 'addLike']);
        Route::get('/get_likes/{id?}',[itemcontroller::class, 'getLike']);
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
});