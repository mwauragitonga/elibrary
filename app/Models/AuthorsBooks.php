<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthorsBooks extends Model
{
    use HasFactory;

    protected $table = 'authors_books';
    protected $fillable = ['authors_id', 'books_id'];

}
