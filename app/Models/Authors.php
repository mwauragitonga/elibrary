<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Authors extends Model
{

    protected $guarded = ['id']; 

    use HasFactory;

    
    public function book()
    {
        return $this->belongsToMany(Books::class);
    }
}
