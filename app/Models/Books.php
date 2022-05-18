<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $guarded = ['id']; 

    use HasFactory;

    public function author()
    {
        return $this->belongsToMany(Authors::class);
    }
}
