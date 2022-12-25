<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategories extends Model
{
    use HasFactory;

    protected $fillable =[
      'subcategory_name',
        'category_id',
        'product_name',
        'user_id',
        'subcategory_code',
        'subcategory_img'
    ];
}
