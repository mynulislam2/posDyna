<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SubcategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/add/category', [CategoryController::class,'addcategory'])->name('add.category');
Route::get('/category/list',[CategoryController::class,'listcategory'])->name('list.category');

Route::controller(SubcategoryController::class)->group(function(){

    Route::post('add/subcategory','addsubcategory')->name('add.subcategory');
    Route::get('list/subcategory','listsubcategory')->name('list.subcategory');

});

Route::controller(SalesController::class)->group(function(){
    Route::post('add/sale','store')->name('add.sale');
    Route::get('list/sale','show')->name('list.sale');
});

Route::controller(AuthController::class)->group(function(){
    Route::post('login','login');
    Route::post('register','register');
});
