<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSalesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [

            // 'referenceNo' =>['required'],
            // 'biller'=>['required'],
            // 'customer'=>['required'],
            // 'orderTax'=>['required'],
            // 'discountType'=>['required'],
            // 'orderDiscount'=>['required'],
            // 'shippingCharge'=>['required'],
            // 'shippingAddress'=>['required'],
            // 'document'=>['nullable','image','file','mimes:jpg,png,pdf,jpeg,gif,svg','max:2048'],
            // 'saleStatus'=>['required'],
            // 'paymentStatus'=>['required'],

        ];
    }
}
