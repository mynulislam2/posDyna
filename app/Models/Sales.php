<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'referenceNo',
        'biller',
        'customer',
        'orderTax',
        'discountType',
        'orderDiscount',
        'shippingCharge',
        'shippingAddress',
        'document',
        'saleStatus',
        'paymentStatus',
        'saleNote'
    ];
}
