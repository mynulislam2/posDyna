<?php

namespace App\Http\Controllers;

use App\Models\categories;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
   public function addcategory(Request $request){

    $request->validate([
        'category_name' => 'required',
        'product_name' => 'required',
        'category_code' => 'required',
        'product_img' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
    ]);

   $exists = categories::where('product_name',$request->product_name)->exists();
   if($exists){

    return  response()->json([

        'errorcode' => 0,
        'message' => "This Product Is Already Exists!",
        'data' => [],

       ]);


   }else{

    if($request->has('product_img')){
        $product_img = $request->product_img;
        $name = time().".".$product_img-> getClientOriginalExtension();
        $path = public_path('uploads');
        $product_img->move($path,$name);
    }

    $addCategory =  categories::create([
        'category_name' => $request->category_name,
        'product_name' => $request->product_name,
        'category_code' => $request->category_code,
        'user_id' =>  $request->user_id,
        'product_img'=> $name,
        'created_at' => Carbon::now(),
       ]);

    return  response()->json([

        'errorcode' => 1,
        'message' => "Category Added Successfully !",
        'data' => $addCategory

       ]);

   }

   }

   public function listcategory(){

      $listCategory = categories::all();

        // return $listCategory;

      return response()->json([
        'errorcode' => 1,
        'message' => "List of Categories",
        'data' => $listCategory,
      ]);


   }
}
