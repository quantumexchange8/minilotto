<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecordController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         // 'canLogin' => Route::has('login'),
//         // 'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/', [RecordController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [RecordController::class, 'index'])->name('dashboard');
    Route::get('/records/getAllRecords', [RecordController::class, 'getAllRecords'])->name('records.getAllRecords');
    Route::post('/records/createRecord', [RecordController::class, 'store'])->name('records.store');
    Route::put('/records/updateRecord/{id}', [RecordController::class, 'updateRecord'])->name('records.updateRecord');
    Route::delete('/records/deleteRecord/{id}', [RecordController::class, 'deleteRecord'])->name('records.deleteRecord');
});

require __DIR__.'/auth.php';
