<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/add/category', function () {
    return Inertia::render('category/AddCategories');
})->name('addcategory');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function(){

});

// Route::controller(SubcategoryController::class)->group(function(){

//     Route::post('add/subcategory','addsubcategory')->name('add.subcategory');

// });
//;Route::post('/add/category', [CategoryController::class,'addcategory'])->name('add.category');

// Route::get('/category/list',[CategoryController::class,'listcategory'])->name('list.category');

require __DIR__.'/auth.php';
