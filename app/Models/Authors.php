<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Authors extends Model
{

    protected $guarded = ['id']; 
    protected $appends = ['path'];
    use HasFactory;

    
    public function book()
    {
        return $this->belongsToMany(Books::class);
    }
    public function getPathAttribute()
    {
        return asset("storage/images/". $this->image);
    }
}
